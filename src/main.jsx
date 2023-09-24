import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Components/Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Alldonation from "./Components/Alldonation";
import Statistics from "./Components/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "/all",
        element: <Alldonation></Alldonation>,
      },
      {
        path: "/stat",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
