import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Cat {
        id : ID
        name : String
    }

    type Company {
        id : ID
        name : String
    }

    type Query {
        hello : String!,
        cat(name:String) : [Cat!],
        company : [Company!]
    }
    
    type Mutation {
        createCat(name: String!): Cat!
    }    
`
    ;
