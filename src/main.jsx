import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "boxicons";
import { RouterProvider } from "react-router-dom";
import routes from "./utils/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
