import * as express from "express";
import postgraphileConnection from "./postgresql/index";
import * as cors from "cors";
import postgresqlConnection from "./postgresql/home";

import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(postgraphileConnection);
app.use(postgresqlConnection);

app.listen(port, () => {
  console.log("Server running on ", port);
});
