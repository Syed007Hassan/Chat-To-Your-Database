import { SQL_PREFIX, SQL_SUFFIX } from "@/lib/prompt";
import { OpenAI } from "langchain";
import { SqlToolkit, createSqlAgent } from "langchain/agents";
import { SqlDatabase } from "langchain/sql_db";
import type { NextApiRequest, NextApiResponse } from "next";
import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";

configDotenv();

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setPreviewData({});

  const datasource = new DataSource({
    type: "sqlite",
    database: "./data/northwind.db",
  });

  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });

  const key = "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";

  const toolkit = new SqlToolkit(db);
  const model = new OpenAI({
    temperature: 0,
  });

  const executor = createSqlAgent(model, toolkit, {
    topK: 10,
    prefix: SQL_PREFIX,
    suffix: SQL_SUFFIX,
  });

  const { query: prompt } = req.body;

  console.log("Prompt : " + prompt);

  let response = {
    prompt: prompt,
    sqlQuery: "",
    result: [],
    error: "",
  };

  try {
    const result = await executor.call({ input: prompt });

    result.intermediateSteps.forEach((step: any) => {
      if (step.action.tool === "query-sql") {
        response.prompt = prompt;
        response.sqlQuery = step.action.toolInput;
        response.result = JSON.parse(step.observation);
      }
    });

    console.log(
      `Intermediate steps ${JSON.stringify(result.intermediateSteps, null, 2)}`
    );
    await datasource.destroy();
  } catch (e: any) {
    response.error = "Server error. Try again with a different prompt.";
    return res.json(response);
  }

  return res.status(200).json(response);
};

export default handler;
