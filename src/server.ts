import * as express from "express";
import postgraphileConnection from "./postgresql/index";
import * as cors from "cors";
import postgresqlConnection from "./postgresql/home";

import * as dotenv from "dotenv";
import { getSchema } from "./postgresql/graphile-build";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

try {
  app.use(postgraphileConnection);
} catch (er) {
  console.log("error while graphile connection", er);
}

app.use(getSchema);
app.use(postgresqlConnection);

app.listen(port, () => {
  console.log("Server running on ", port);
});
