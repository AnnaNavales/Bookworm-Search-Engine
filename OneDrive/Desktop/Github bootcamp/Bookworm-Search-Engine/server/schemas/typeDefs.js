const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    saveBooks: [Book]
    
  }

  type Book {
    authors:[string]
    description: String
    bookId: String
    image: String
    link: Int
    title: [String]
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: String!): User
    removeBook(bookId: String!): User
 
  }
`;

module.exports = typeDefs;
