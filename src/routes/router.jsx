import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Register from "../components/Authenticated/Register";
import Login from "../components/Authenticated/Login";
import Home from "../components/Home/Home";
import Recipes from "../components/Recipes'/Recipes";
import FileNotFound from "../components/shared/FileNotFound";
import PrivateRouter from "../components/Authenticated/PrivateRoute";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <FileNotFound></FileNotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://server-side-md-tahazzat.vercel.app/chefs"),
      },
      {
        path: "chefs/:id",
        element: (
          <PrivateRouter>
            <Recipes></Recipes>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-md-tahazzat.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
