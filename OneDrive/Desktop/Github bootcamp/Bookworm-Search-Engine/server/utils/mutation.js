import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOKS = gql`
  mutation saveBooks($bookData: BookInput!) {
    addBook(bookData: $bookData) {
    _id
    username
    email
    saveBooks
    bookId
    authors
    image
    description
    title
    link
      }
    }
  }
`;

export const REMOVE_BOOKS = gql`
  mutation removeBooks($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      saveBooks
      bookId
      authors
      image
      description
      title
      link
    
      }
    }
  }
`;