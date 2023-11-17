import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import LibrarianLogin from "../pages/librarian/Login";
import LibrarianDashboard from "./../pages/librarian/Dashboard";
import StudentLogin from "./../pages/student/Login";
import StudentDashboard from "../pages/student/Dashboard";

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
        element: <StudentLogin />,
      },
      {
        path: "/student/dashboard",
        element: <StudentDashboard />,
      },

      // librarian dashboard routes
      {
        path: "/librarian/login",
        element: <LibrarianLogin />,
      },
      {
        path: "/librarian/dashboard",
        element: <LibrarianDashboard />,
      },
    ],
  },
]);

export default routes;
