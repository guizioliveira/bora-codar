import { HashRouter, Routes, Route } from "react-router-dom"
import App from "../src/App"
import { Buttons, Player, ProductCard } from "@projects"

function RouterApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/player" element={<Player />} />
        <Route
          path="/product-card"
          element={<ProductCard productCode={42404} />}
        />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </HashRouter>
  )
}

export default RouterApp
