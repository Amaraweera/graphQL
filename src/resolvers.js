import { User } from "./models/users";
import { Company } from "./models/companies";

export const resolvers = {
  Query: {
    hello: () => "Hello",
    user: async (_, { name }) => {
      console.log("Where clause :", name);
      return await User.find({ name: name });
    },
    company: async (_, { name }) => {
      console.log("Where clause :", name);
      return await Company.find({ name: name });
    }
  },
  Mutation: {
    createUser: async (_, { name }) => {
      const newUser = new User({ name });
      await newUser.save();
      console.log(newUser);
      return newUser;
    }
  }
};
