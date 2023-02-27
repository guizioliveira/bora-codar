import { HashRouter, Routes, Route } from "react-router-dom"
import ChallengesList from "@components/ChallengesList"
import {
  Buttons,
  Player,
  ProductCard,
  Chat,
  Calculator,
  BoardingPass,
  Dashboard,
} from "@projects"

function RouterApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ChallengesList />} />
        <Route path="music-player" element={<Player />} />
        <Route
          path="product-card"
          element={<ProductCard productCode={42404} />}
        />
        <Route path="design-system-buttons" element={<Buttons />} />
        <Route path="chat" element={<Chat />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="boarding-pass" element={<BoardingPass />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  )
}

export default RouterApp
