const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Query { hey: String! }
`;