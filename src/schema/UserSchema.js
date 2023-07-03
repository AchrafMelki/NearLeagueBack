const { buildSchema } = require('graphql');
const { userResolver } = require('../resolvers/UserResolver');

// Définir votre schéma GraphQL
const userSchema = buildSchema(`
  type User {
    id: ID
    username: String
    email: String
    password: String
    role: String
    jwtToken: String
  }

  input SignUpInput {
    username: String
    email: String
    password: String
    role: String
  }
 
  input SignInInput {
  email: String
  password: String
}
 
  type Query {
    dummy: Boolean
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    signIn(input: SignInInput!): User
  }
`);

// Créer une instance du résolveur de l'utilisateur
const resolver = {
    ...userResolver,
    dummy: () => true,
    signIn: userResolver.signIn,
};

module.exports = {
    userSchema,
    resolver,
};
