const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {connectDB} = require('./database');
const jwtSecret = process.env.JWT_SECRET;
const { userSchema,resolver } = require('./schema/UserSchema');
const { generateJWT } = require('./auth');


const pool = connectDB();
// Configurez votre serveur Express.js avec GraphQL
const app = express();

app.use('/graphql', graphqlHTTP({
    schema: userSchema,
    rootValue: resolver, // Utilisez vos résolveurs GraphQL ici
    graphiql: true, // Activez GraphiQL pour tester vos requêtes GraphQL
}));

// Lancez votre serveur Express.js
const port = 3000;
app.listen(port, () => {
    console.log(`Serveur GraphQL lancé sur le port ${port}`);
});
