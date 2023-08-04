const { gql } = require('apollo-server-express');

// Define the GET_ME query
const GET_ME = gql`
  query ME {
    me {
      _id: ID
      username: String
      email: String
    }
  }
`;

module.exports = { GET_ME };
