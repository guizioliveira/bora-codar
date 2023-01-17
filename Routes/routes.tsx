import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../src/App"
import Player from "../src/components/Player"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/player",
    element: <Player />,
  },
])

function Routers() {
  return <RouterProvider router={router} />
}

export default Routers
