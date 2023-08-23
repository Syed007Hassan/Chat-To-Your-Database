import { DataSourceOptions } from "typeorm";
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const postgresConnectionOptions = {
  type: "postgres",
  host: "localhost",
  database: "mydb2",
  port: 5432,
  username: "hassan",
  password: "fast",
  schema: "public",
} 


//    


export default postgresConnectionOptions;