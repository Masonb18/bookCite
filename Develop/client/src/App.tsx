import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

// Create the Apollo Client
const client = new ApolloClient({
  uri: 'localhost:3001', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Wrap your app with the ApolloProvider and provide the Apollo Client
    <ApolloProvider client={client}>
      <>
        <Navbar />
        <Outlet />
      </>
    </ApolloProvider>
  );
}

export default App;
