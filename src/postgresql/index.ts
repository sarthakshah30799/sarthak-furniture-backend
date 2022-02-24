import { postgraphile } from "postgraphile";

export default postgraphile(
  {
    database: "sarthak_furniture",
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 8000,
  },
  "public",
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  }
);
