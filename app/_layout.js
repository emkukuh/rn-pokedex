import { Stack } from "expo-router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

const Layout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerTitle: "" }} />
    </ApolloProvider>
  );
};

export default Layout;
