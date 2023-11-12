<center>

# NextJs-Langchain-Agents-SQL

</center>

![image](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/b787a3a7-32d0-4c3c-9068-f648d65a1d4f)

## Table Of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Examples](#examples)
    - [Sample database SQLite](#sample-database-sqlite)
    - [Sample database PostgreSQL](#sample-database-postgresql)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Add Env file](#add-env-file)
    - [Installing the app](#installing-the-app)
    - [Running the app](#running-the-app)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Introduction

Natural language querying allows users to interact with databases more intuitively and efficiently. By leveraging the power of LangChain, SQL Agents, and OpenAI’s Large Language Models (LLMs) like ChatGPT, we have created an application that enables users to query databases using NLP. All it needs a SQL-based schema, and it can perform any read and write action to that schema.

This is an experimental app to test the abilities of LLMs to query SQL databases using [SQL Agents](https://github.com/Syed007Hassan/Langchain) provided by Langchain.
To use it, you should have an OPENAI_API_KEY.

## Features
- Auto-generate SQL queries from the natural language descriptions
- Translate SQL queries from one dialect to another
- Optimize SQL queries to make them run faster
- Analyze SQL queries to identify potential problems
- Optimize the SQL queries that are used to fetch data from the SQL database
- Analyze the SQL queries that are used in your NextJS application to identify potential problems
- Displays all the data in the form of a table after executing the query on a schema
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

### Add Env file 

In nest_api folder, add a **.env** file.

```bash!
DB_NAME=
DB_HOST=localhost
DB_PORT=5432
DB_USER=
DB_PASSWORD=
DB_SCHEMA=
OPENAI_API_KEY=sk-xxxx
MONGODB_URI=
```
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
/nest_api
npm run start:dev
/client
npm run dev
```

## Contribution Guidelines

Contributions to this project are highly encouraged and appreciated. To help us maintain a high level of quality, please follow these contribution guidelines:

- Fork the repository to your GitHub account.
- Make changes and improvements in your forked repository.
- Test your changes thoroughly.
- Create a well-explained pull request detailing the changes you made and the problems they solve.
- Ensure your pull requests comply with the coding standards and styles followed in the project.
- Be responsive to feedback and iterate on your contributions, if necessary.
- Upon review, your pull request will go through a validation process by the project maintainers. Once approved, your changes will be merged into the main branch, and you will become a contributor to the NextJs Langchain Agents SQL project. We appreciate your efforts in making this project better and more valuable.

Please follow the contribution guidelines outlined in the [Contributing.md](CONTRIBUTING.md) file in this repository, to make sure that your contributions align with the project standards.

## License
This project is licensed under the [MIT License](./LICENSE).



