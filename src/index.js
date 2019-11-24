console.log("Hi");
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/wellness", {
    useNewUrlParser: true
  }); // Local mongo db
  // await mongoose.connect('mongodb+srv://shehan90:900970She@cluster0-zeeze.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }); // Mongo Atlas

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
