const { gql } = require('apollo-server-express');

// Define the LOGIN_USER mutation
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        // Add any other fields you want to retrieve for the authenticated user
      }
    }
  }
`;

// Define the ADD_USER mutation
const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        // Add any other fields you want to retrieve for the new user
      }
    }
  }
`;

// Define the SAVE_BOOK mutation
const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        // Add any fields you want to retrieve for the saved book
      }
    }
  }
`;

// Define the REMOVE_BOOK mutation
const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        // Add any fields you want to retrieve after removing the book
      }
    }
  }
`;

module.exports = { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK };
