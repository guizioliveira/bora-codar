import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../src/App"
import { Player, ProductCard } from "../src/components"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/player",
    element: <Player />,
  },
  {
    path: "/productcard",
    element: <ProductCard />,
  },
])

function Routers() {
  return <RouterProvider router={router} />
}

export default Routers
