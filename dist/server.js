"use strict";

var express = require("express");

var cors = require("cors");

var _require = require("apollo-server-express"),
    ApolloServer = _require.ApolloServer;

var _require2 = require("./graphql"),
    typeDefs = _require2.typeDefs,
    resolvers = _require2.resolvers;

var chairsRoute = require("./chairs-route");

var app = express();
var port = 8002; // app.use(require("connect").bodyParser());

app.use(cors());
app.use(express.json({
  limit: "50mb"
}));
var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
app.get("/", function (req, res) {
  res.json("Message Ok");
});
app.use("/chairs", chairsRoute);
app.use(function (err, req, res, next) {
  var statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({
    message: err.message
  });
  return;
});
app.listen(port, function () {
  console.log("Server running on ".concat(port));
});