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
    element: <ProductCard productCode={42404} />,
  },
])

function Routers() {
  return <RouterProvider router={router} />
}

export default Routers
