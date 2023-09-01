import { DataSource } from "typeorm";


// Create Postgres database connection
const postgresConnection = new DataSource({
  type: "postgres",
  host: "localhost",
  database: "mydb2",
  port: 5432,
  username: "hassan",
  password: "fast",
  schema: "public",
});


export default postgresConnection;