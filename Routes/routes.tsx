import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../src/App"
import { ButtonStylePage, Player, ProductCard } from "../src/components"

const router = createBrowserRouter([
  {
    path: "/bora-codar",
    element: <App />,
  },
  {
    path: "/bora-codar/player",
    element: <Player />,
  },
  {
    path: "/bora-codar/product-card",
    element: <ProductCard productCode={42404} />,
  },
  {
    path: "/bora-codar/buttons",
    element: <ButtonStylePage />,
  },
])

function Routers() {
  return <RouterProvider router={router} />
}

export default Routers
