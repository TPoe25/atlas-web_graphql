// app.js is the server that initializes the express application

const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const app = express();

// Import the GraphQL schema and resolvers
const schema = require('./schema/schema');
app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
