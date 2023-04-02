import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloProvider } from "@apollo/client"
import { client } from "@services"
import Routers from "../routes"

import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routers />
    </ApolloProvider>
  </React.StrictMode>
)
