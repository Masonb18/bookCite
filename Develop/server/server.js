const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./middlewares/authMiddleware'); // Assuming you have your updated authMiddleware in the "middlewares" folder
const typeDefs = require('./graphql/schema'); // Import your GraphQL schema
const resolvers = require('./graphql/resolvers'); // Import your GraphQL resolvers

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Apply authMiddleware to Apollo Server context
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Integrate Apollo Server with Express as middleware
server.applyMiddleware({ app });

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
