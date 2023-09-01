import { DataSource } from "typeorm";


// Create Sqlite database connection
const sqliteConnection = new DataSource({
  type: "sqlite",
  database: "./data/northwind.db",
 
});


export default sqliteConnection;