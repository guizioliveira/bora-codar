import React from "react"
import ReactDOM from "react-dom/client"
import Routers from "../routes/routes"
import { Header } from "@components/Header"

import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Routers />
  </React.StrictMode>
)
