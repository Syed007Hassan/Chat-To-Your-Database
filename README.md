<center>

# NextJs-Langchain-Agents-SQL

</center>

![image](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/3047eb24-4050-42d6-8e9f-749801711a94)


## Table Of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Examples](#examples)
    - [Sample database SQLite](#sample-database-sqlite)
    - [Sample database PostgreSQL](#sample-database-postgresql)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
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
  * **Frontend**: NextJS/TailwindCSS/Flowbite 
  * **Backend**: ExpressJS/NestJS
  * **Databases**: Sqlite/PostgreSQL/MongoDB
  * **LLM**: Langchain SQL Agent with Open AI LLM

## Getting Started

### Add Env file 

After cloning the repo, change the directory to nest_api, and add a **.env** file.

```bash!
OPENAI_API_KEY=sk-xxx
# Docker environment variables
DB_TYPE=postgres
PG_HOST=postgres
PG_USER=postgres
PG_PASSWORD=postgres
PG_DB=postgres
PG_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=postgres
PGADMIN_DEFAULT_EMAIL=admin@pgadmin.com
PGADMIN_DEFAULT_PASSWORD=admin
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=pass12345
MONGO_URL=mongodb://root:pass12345@mongodb:27017/chatwithdb?authSource=admin
PORT=5000
```
### Running the APP using Docker Compose with your own Database (PostgreSQL)

- Build the image using
  **```  docker-compose build --no-cache  ```**
- Run Container with the build image
  **``` docker-compose up ```**

     ![image](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/42c9a960-d5df-4de1-b159-fa0dbcdf8c96)
  
- Open PgAdmin to upload your Database (I will use ***.tar** file to upload the whole database, you could use any method, and just remember to name the database as mentioned in **.env**. In my case it is **postgres**)
- On **``` localhost:5050 ```**, login to PgAdmin
 
     ![image](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/b0cfb4ca-51f2-4293-b50d-ec60f9bfd4ec)

- Create a server group
  
     ![image](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/29cadd3e-d232-479f-aa81-646b4a996bb9)
 
- Then register server
  
     ![image](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/e501184d-3599-444a-996d-e929ca7146c6)

     ![image](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/d5cb009a-bded-4f20-b88d-5c5831a6ad79)

- Now restore the database to upload the file
  
    ![image](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/da7d64fa-f71b-4ad9-85dd-4c5c72a60406)

    ![image](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/520d9769-3de6-419f-ae00-d29701be42ab)

- After restoring, all the tables will be shown

- Run the frontend after changing the directory to the client and then using **``` npm run dev ```**, available at **``` localhost:3000 ```**
- Register and then Sign-in, the application will be redirected towards  **```/chat```** URL
- According to your schema write any prompt to generate an SQL query and the results database contains
  
    ![chatpath](https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL/assets/104893311/7583e9a1-4558-4020-8c96-e5e36b1e1e42)

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



