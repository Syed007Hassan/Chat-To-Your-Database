import express from "express";
import cors from "cors";
import { OpenAI } from "langchain/llms/openai";
import { SqlDatabase } from "langchain/sql_db";
import { createSqlAgent, SqlToolkit } from "langchain/agents/toolkits/sql";
import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
import { SQL_PREFIX, SQL_SUFFIX } from "./prompt-design.js";
import sqliteConnection from "./config/sqliteConnection.js";
import postgresConnection from "./config/postgresConnection.js";


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

// Can Provide any dataSource here
const dataSource = sqliteConnection;


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
    // const result = await executor.call({ input: prompt });
    
    //FOR TESTING PURPOSES ONLY

    const result = {
      "output": "The countries with customers in the database are Germany, Mexico, UK, Sweden, France, Spain, Canada, Argentina, Switzerland, and Brazil.",
      "intermediateSteps": [
        {
          "action": {
            "tool": "list-tables-sql",
            "toolInput": "",
            "log": "Action: list-tables-sql\nAction Input: \"\""
          },
          "observation": "Categories, CustomerCustomerDemo, CustomerDemographics, Customers, EmployeeTerritories, Order Details, Orders, Products, Regions, Shippers, Suppliers, Territories, Employees"
        },
        {
          "action": {
            "tool": "info-sql",
            "toolInput": "Customers",
            "log": " I should look at the Customers table to see what columns I can query.\nAction: info-sql\nAction Input: \"Customers\""
          },
          "observation": "CREATE TABLE Customers (\nCustomerID TEXT , CompanyName TEXT , ContactName TEXT , ContactTitle TEXT , Address TEXT , City TEXT , Region TEXT , PostalCode TEXT , Country TEXT , Phone TEXT , Fax TEXT ) \nSELECT * FROM \"Customers\" LIMIT 3;\n CustomerID CompanyName ContactName ContactTitle Address City Region PostalCode Country Phone Fax\n ALFKI Alfreds Futterkiste Maria Anders Sales Representative Obere Str. 57 Berlin Western Europe 12209 Germany 030-0074321 030-0076545\n ANATR Ana Trujillo Emparedados y helados Ana Trujillo Owner Avda. de la Constitución 2222 México D.F. Central America 05021 Mexico (5) 555-4729 (5) 555-3745\n ANTON Antonio Moreno Taquería Antonio Moreno Owner Mataderos  2312 México D.F. Central America 05023 Mexico (5) 555-3932 null\n"
        },
        {
          "action": {
            "tool": "query-sql",
            "toolInput": "SELECT DISTINCT Country FROM Customers LIMIT 10;",
            "log": " I should query the Customers table for customers with respect to distinct country.\nAction: query-sql\nAction Input: SELECT DISTINCT Country FROM Customers LIMIT 10;"
          },
          "observation": "[{\"Country\":\"Germany\"},{\"Country\":\"Mexico\"},{\"Country\":\"UK\"},{\"Country\":\"Sweden\"},{\"Country\":\"France\"},{\"Country\":\"Spain\"},{\"Country\":\"Canada\"},{\"Country\":\"Argentina\"},{\"Country\":\"Switzerland\"},{\"Country\":\"Brazil\"}]"
        }
      ]
    }


    result.intermediateSteps.forEach((step) => {
      if (step.action.tool === "query-sql") {
        response.prompt = prompt;
        response.sqlQuery = step.action.toolInput;
        response.sqlQuery = response.sqlQuery.replace(/\\/g, '').replace(/"/g, '');
        try {
          const observation = JSON.parse(step.observation);
          if (Array.isArray(observation) && observation.every(obj => typeof obj === 'object')) {
            response.result = observation;
          }
        } catch (error) {
          // console.log(error);
        }
      }
    });


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
  console.log(db)
});