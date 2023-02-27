import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clen4dp1f02so01rq5xkj5zck/master",
  cache: new InMemoryCache(),
})
