import React, { Children } from "react";
import Home from "./components/Home/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import Seafood from "./components/Seafood/Seafood";
import AllProduct from "./components/AllProduct/AllProduct";
import Layout from "./components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Fruits",
          element: <Fruits />,
        },
        {
          path: "/Dairy",
          element: <Dairy />,
        },
        {
          path: "/SeaFood",
          element: <Seafood />,
        },
        {
          path: "/AllProduct",
          element: <AllProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
