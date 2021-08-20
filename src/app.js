const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const logger = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = require("./db");
const models = require("./models");
const schema = require("./graphql");

const app = express();
connectDB().then();

app.use(compression());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(logger("dev"));

const apolloServer = new ApolloServer({
  schema,
  context: { models },
});

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app });
});

module.exports = { app, apolloServer };
