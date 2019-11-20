import { Cat } from './models/cat';
import { Company } from './models/companies';

export const resolvers = {
    Query: {
        hello: () => "Hello",
        cat: async (_, { name }) => {
            console.log('Where clause :', name);
            return await Cat.find({ name: name });
        },
        company: async (_, { name }) => {
            console.log('Where clause :', name);
            return await Company.find({ name: name });
        }
    },
    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new Cat({ name });
            await kitty.save();
            console.log(kitty);
            return kitty;
        }
    }
}