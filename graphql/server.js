const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolver');
const typeDefs = require('./schema');
const server = new ApolloServer({ typeDefs, resolvers });
const sequelize = require('../config/db');

/**
 * Get connexion to the database
 */
sequelize.sync()
    .then(() => {
        console.log('synchronized database');
    })
    .catch(err => {
        console.error('Database synchronization error :', err);
    });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
