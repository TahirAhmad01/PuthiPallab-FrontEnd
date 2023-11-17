import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "boxicons";
import { RouterProvider } from "react-router-dom";
import routes from "./utils/routes";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
