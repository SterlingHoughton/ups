const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Query {
    mails: [Mail]
    mail(subject: String!, receiver: String!): Mail
  }

  type Mutation {
    mail(subject: String!, receiver: String!, content: String!): Mail
  }

  type Mail {
    subject: String
    receiver: String
    content: String
    _id: String
  }
`;