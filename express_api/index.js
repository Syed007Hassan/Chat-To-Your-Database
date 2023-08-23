import express from "express";
import cors from "cors";
import { OpenAI } from "langchain/llms/openai";
import { SqlDatabase } from "langchain/sql_db";
import { createSqlAgent, SqlToolkit } from "langchain/agents/toolkits/sql";
import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";

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
const datasource = new DataSource({
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
  appDataSource: datasource,
});
const toolkit = new SqlToolkit(db);

// Create OpenAI model
const model = new OpenAI({
  temperature: 0,
});
const executor = createSqlAgent(model, toolkit);

// Route handler
app.get("/api/query", async (req, res) => {
  const prompt = req.query.prompt;

  console.log("prompt: " + prompt);

  let response = {
    prompt: prompt,
    sqlQuery: "",
    result: [],
    error: "",
  };

  try {
    const result = await executor.call({ input: prompt });

    result.intermediateSteps.forEach((step) => {
      if (step.action.tool === "query-sql") {
        response.prompt = prompt;
        response.sqlQuery = step.action.toolInput;
        response.result = JSON.parse(step.observation);
      }
    });

    console.log(
      `Intermediate steps ${JSON.stringify(result.intermediateSteps, null, 2)}`
    );

    res.json(response);
  } catch (e) {
    console.log(e + " " + "my error message");
    response.error = "Server error. Try again with a different prompt.";

    res.status(500).json(response);
  }

  await datasource.destroy();
});

// Start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});