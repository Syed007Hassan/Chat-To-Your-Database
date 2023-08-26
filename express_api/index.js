import express from "express";
import cors from "cors";
import { OpenAI } from "langchain/llms/openai";
import { SqlDatabase } from "langchain/sql_db";
import { createSqlAgent, SqlToolkit } from "langchain/agents/toolkits/sql";
import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
import { SQL_PREFIX, SQL_SUFFIX } from "./prompt-design.js";


// Load configuration
try {
  configDotenv();
} catch (e) {
  console.error("Error loading configuration:", e);
  process.exit(1);
}

// Create server
const app = express();
app.use(cors());

// Create database connection
const dataSource = new DataSource({
  // type: "sqlite",
  // database: "./data/northwind.db",
  type: "postgres",
  host: "localhost",
  database: "mydb2",
  port: 5432,
  username: "hassan",
  password: "fast",
  schema: "public",
});

const db = await SqlDatabase.fromDataSourceParams({
  appDataSource: dataSource,
});
const toolkit = new SqlToolkit(db);

// Create OpenAI model
const model = new OpenAI({
  temperature: 0,
});
const executor = createSqlAgent(model, toolkit,{
  topK: 10,
  prefix: SQL_PREFIX,
  suffix: SQL_SUFFIX,
});

// Route handler
app.get("/api/query", async (req, res) => {
  const prompt = req.query.prompt;

  console.log("prompt: " + prompt);

  // console.log(db)

  let response = {
    prompt: prompt,
    sqlQuery: "",
    result: [],
    error: "",
  };

  try {
    const result = await executor.call({ input: prompt });
    

    // const result = {
    //   "output": "[{\"id\":1,\"name\":\"test\",\"email\":\"test@gmail.com\"},{\"id\":3,\"name\":\"test\",\"email\":\"test2@gmail.com\"},{\"id\":4,\"name\":\"hassan\",\"email\":\"hassan@gmail.com\"}]",
    //   "intermediateSteps": [
    //     {
    //       "action": {
    //         "tool": "list-tables-sql",
    //         "toolInput": "",
    //         "log": "Action: list-tables-sql\nAction Input: \"\""
    //       },
    //       "observation": "comment, topic, user"
    //     },
    //     {
    //       "action": {
    //         "tool": "info-sql",
    //         "toolInput": "user",
    //         "log": " I should look at the schema of the user table to see what columns I can query.\nAction: info-sql\nAction Input: \"user\""   
    //       },
    //       "observation": "CREATE TABLE \"public\".\"user\" (\nid integer NOT NULL, name character varying NOT NULL, email character varying NOT NULL, password character varying NOT NULL, avatar character varying ) \nSELECT * FROM \"public\".\"user\" LIMIT 3;\n id name email password avatar\n 1 test test@gmail.com $2b$10$eobufm5KzyADtsAFQs1ybuAOD4Pi.Z7OtJyFIfWt21U.6mQoHmR/m null\n 3 test test2@gmail.com $2b$10$g2EDEdR71HLBtof/AAswRO479Lv.pIsZK0ChhHD2sfljyAd0rHbaC null\n 4 hassan hassan@gmail.com $2b$10$2QK3spYLlUr2goCN0nLs9.cIP//6KeSf7ptkjLDj3A14HxB3UBsTG null\n"
    //     },
    //     {
    //       "action": {
    //         "tool": "query-sql",
    //         "toolInput": "SELECT id, name, email FROM user LIMIT 10;",
    //         "log": " I should query the user table for all users.\nAction: query-sql\nAction Input: SELECT id, name, email FROM user LIMIT 10;"  
    //       },
    //       "observation": "QueryFailedError: column \"id\" does not exist"
    //     },
    //     {
    //       "action": {
    //         "tool": "query-sql",
    //         "toolInput": "SELECT \"id\", \"name\", \"email\" FROM \"user\" LIMIT 10;",
    //         "log": " I should use the table name in quotes.\nAction: query-sql\nAction Input: SELECT \"id\", \"name\", \"email\" FROM \"user\" LIMIT 10;"
    //       },
    //       "observation": "[{\"id\":1,\"name\":\"test\",\"email\":\"test@gmail.com\"},{\"id\":3,\"name\":\"test\",\"email\":\"test2@gmail.com\"},{\"id\":4,\"name\":\"hassan\",\"email\":\"hassan@gmail.com\"}]"
    //     }
    //   ]
    // }


    console.log(`Result: ${JSON.stringify(result, null, 2)}`);

    // result.intermediateSteps.forEach((step) => {
    //   if (step.action.tool === "query-sql") {
    //     response.prompt = prompt;
    //     response.sqlQuery = step.action.toolInput;
    //     response.result = JSON.parse(step.observation);
    //   }
    // });

    // console.log(
    //   `Intermediate steps ${JSON.stringify(result.intermediateSteps, null, 2)}`
    // );

    res.json(response);
  } catch (e) {
    console.log(e + " " + "my error message");
    response.error = "Server error. Try again with a different prompt.";

    res.status(500).json(response);
  }

  // await datasource.destroy();
});

// Start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});