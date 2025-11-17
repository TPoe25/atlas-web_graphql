// app.js is the server that initializes the express application

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
// Connect to MongoDB
const app = express();

const mongoURI = "mongodb+srv://TaylorPoeDB:VSBnnLX3SMqVHlJN@cluster0.4jsj5ye.mongodb.net/";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

// GraphQl endpoint
app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
