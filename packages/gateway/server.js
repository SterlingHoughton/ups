const express = require('express');
const { ApolloServer} = require('apollo-server-express');

const { typeDefs } = require('./data/schema');
const { resolvers } = require('./data/resolvers');
const { port } = require('./config');

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app
  .use(express.json())
  .listen(port, () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`));