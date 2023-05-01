import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Register from "../components/Authenticated/Register";
import Login from "../components/Authenticated/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>From error elements</div>,
    children: [
      {
        path: "/",
        element: <div>inside default home</div>,
      },
      {
        path: "data",
        element: <div>from data </div>,
        loader: () => fetch(""),
      },
      {
        path: "data/:id",
        element: <div>From single data element</div>,
        loader: () => fetch(""),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <div>File not fount</div>,
      },
    ],
  },
]);

export default router;
