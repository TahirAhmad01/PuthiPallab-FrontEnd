import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/student/Login";
import Dashboard from "../pages/student/dashboard";

const routes = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <App />,
      },

      // students dashboard routes
      {
        path: "/student/login",
        element: <Login />,
      },
      {
        path: "/student/dashboard",
        element: <Dashboard />,
      },

      // librarian dashboard routes
      {
        path: "/librarian/login",
        element: <Login />,
      },
      {
        path: "/librarian/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
