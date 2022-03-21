const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type User {
    id: ID
    name: String
    age: Int
    address: Address
}

type Address {
    street: String
    city: String
}

type Query {
    user: User
}
`;

const resolvers = {
    Query: {
        user() {
            return {
                id: 1,
                name: 'nafisa',
                age: 17,
                address: {
                    street: 'Kuningan',
                    city: 'Jakarta'
                }
            }
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });