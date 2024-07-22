import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GridBackground from "./components/ui/GridBackground.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4006/graphql", // the url of our graphql server
  cache: new InMemoryCache(), // apollo client use this cache, to cache query results after fetching them
  credentials: "include", // this tells a pollo client to send cookies along with every request to the server
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GridBackground>
        {/* with client={client} we are able to use this client in our entire app*/}
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </GridBackground>
    </BrowserRouter>
  </React.StrictMode>
);
