import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql/index.js";
import chairsRoute from "./chairs-route/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await server.start();

const app = express();
const port = 8002;

app.use(cors());
app.use(
  express.json({
    limit: "50mb",
  })
);
server.applyMiddleware({ app });
app.get("/", function (req, res) {
  res.json("Message Ok");
});
app.use("/chairs", chairsRoute);
app.use(function (err, req, res, next) {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({
    message: err.message,
  });
  return;
});
app.listen({ port }, () => {
  console.log("Server running on ".concat(port), server.graphqlPath);
});
