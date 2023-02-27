import React from "react"
import { ApolloProvider } from "@apollo/client"
import { client } from "@services"
import Routers from "../routes/routes"

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Routers />
    </ApolloProvider>
  )
}
