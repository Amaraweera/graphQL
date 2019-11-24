import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID
    name: String
  }

  type Company {
    id: ID
    name: String
  }

  type Query {
    hello: String!
    user(name: String): [User!]
    company: [Company!]
  }

  type Mutation {
    createUser(name: String!): User!
  }
`;
