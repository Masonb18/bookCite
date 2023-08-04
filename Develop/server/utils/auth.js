const jwt = require('jsonwebtoken');
const { ApolloServer } = require('apollo-server');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Apollo Server middleware for authentication
  authMiddleware: async ({ req }) => {
    // allows token to be sent via headers
    const token = req.headers.authorization || '';

    if (!token) {
      throw new ApolloServer.AuthenticationError('You have no token!');
    }

    try {
      // verify token and get user data out of it
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      return { user: data };
    } catch (error) {
      throw new ApolloServer.AuthenticationError('Invalid token!');
    }
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
