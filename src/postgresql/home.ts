import * as pg from "pg";

const postgresqlConnection = () => {
  const client = new pg.Client({
    host: "localhost",
    port: 8000,
    user: "postgres",
    password: "root",
    database: "sarthak_furniture",
  });

  client
    .connect()
    .then((result) => console.log("postgresql connection successfully", result))
    .catch((err) => console.log("Error while connecting postgresql", err));
};

export default postgresqlConnection;
