# Table Of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Examples](#examples)
    - [Sample database SQLite](#sample-database-sqlite)
    - [Sample database PostgreSQL](#sample-database-postgresql)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Installing the app](#installing-the-app)
    - [Running the app](#running-the-app)

- [Follow Up](#follow-up)

# Introduction

Natural language querying allows users to interact with databases more intuitively and efficiently. By leveraging the power of LangChain, SQL Agents, and OpenAI’s Large Language Models (LLMs) like ChatGPT, we have created an application that enables users to query databases using NLP. All it needs a SQL based schema, and it can perform any read and write action to that schema.

This is an experimental app to test the abilities of LLMs to query SQL databases using [SQL Agents](https://github.com/Syed007Hassan/Langchain) provided by Langchain.
To use it, you should add your OPENAI_API_KEY to the .env file in api folder.

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
## Features
- Auto-generate SQL queries from the natural language descriptions
- Translate SQL queries from one dialect to another
- Optimize SQL queries to make them run faster
- Analyze SQL queries to identify potential problems
- Optimize the SQL queries that are used to fetch data from the SQL database
- Analyze the SQL queries that are used in your NextJS application to identify potential problems
- Displays all the data in the form of table after executing the query on schema
- Stores the history prompts and the queries generated in No-SQL

## Examples 

### Sample database SQLite
![Sample northwind database](https://user-images.githubusercontent.com/1945179/233065892-25edda54-01a2-467d-8a72-b96a30c71a5a.png)

#### See it in action

https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/2616a2b5-0512-47f0-8271-014a6d243213

### Sample database PostgreSQL
![DVDRental](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/ec2eda87-8f98-42da-9b2e-db2ed1998d29)

#### See it in action

![pg res](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/4c8c94a2-5025-425b-ba5c-19b6036af534)

## Tech Stack
  * **Frontend**: NextJS 
  * **Backend**: ExpressJS/NestJS
  * **Databases**: Sqlite/PostgreSQL/MongoDB
  * **LLM**: Langchain SQL Agent with Open AI LLM

## Getting Started

### Installing the APP

```bash!
cd nest_api
npm install
```

```bash
cd client
npm install
```

### Running the APP

```bash
/api
nodemon or npm run start
/client
npm run dev
```

## Follow Up
**Currently I have set SQLite and PostgreSQL connections only, but using TypeORM you can set any Database. To further extend this project, fork this repo and make PRs.**



