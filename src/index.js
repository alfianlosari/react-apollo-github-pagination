import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "Bearer <Access Token>"
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
