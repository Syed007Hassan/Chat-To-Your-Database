import { OpenAI } from "langchain/llms/openai";
import { SqlDatabase } from "langchain/sql_db";
import { createSqlAgent, SqlToolkit } from "langchain/agents/toolkits/sql";
import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
import { SQL_PREFIX, SQL_SUFFIX } from "./prompt-design.js";


export const run = async () => {

  configDotenv();

  const datasource = new DataSource({
    type: "sqlite",
    database: "./data/northwind.db",
  });

  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });


  const toolkit = new SqlToolkit(db);
  const model = new OpenAI({
    temperature: 0,
  });

  const executor = createSqlAgent(model, toolkit, {
    topK: 10,
    prefix: SQL_PREFIX,
    suffix: SQL_SUFFIX,
  });

  const prompt = "Employees who were hired after 2005?";

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
  } catch (e) {
    console.log(e + " " + "my error message");
    response.error = "Server error. Try again with a different prompt.";

  }

  await datasource.destroy();

};



run();