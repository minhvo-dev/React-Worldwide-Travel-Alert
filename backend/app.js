const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const path = require("path");

const { port, graphqlRoute } = require("./config");
const { schema } = require("./graphql/schema");
const { resolvers } = require("./graphql/resolvers");

const app = express();

// cors
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (_req, res) => {
  // needed for refresh
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// graphql middleware
app.use(graphqlRoute, graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Server running at 'http://localhost:${port}${graphqlRoute}' - ${process.env.NODE_ENV}`);
});