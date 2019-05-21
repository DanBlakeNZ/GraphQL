const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

// Any request that comes in looking for the route '/graphql', we want the GraphQL library to handle it.
app.use(
  "/graphql",
  expressGraphQL({
    // GraphQL options object.
    graphiql: true,
    schema //schema: schema
  })
);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
