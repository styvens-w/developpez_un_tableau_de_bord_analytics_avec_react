import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserChoice from "./pages/UserChoice";
import App from "./pages/App";
import Error from "./pages/Error";

/**
 *
 * @type {Router}
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserChoice />,
    errorElement: <Error />,
  },
  {
    path: "/user/:userId",
    element: <App />,
  },
  {
    path: "/:errorCode",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
