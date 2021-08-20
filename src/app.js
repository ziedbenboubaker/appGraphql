const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const logger = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
const schema = require("./graphql");
const { RestApi } = require("./graphql/datasources");

const app = express();

app.use(compression());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(logger("dev"));

const apolloServer = new ApolloServer({
  schema,
  dataSources: () => ({
    restApi: new RestApi(),
  }),
});

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app });
});

module.exports = { app, apolloServer };
