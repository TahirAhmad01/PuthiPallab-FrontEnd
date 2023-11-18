import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import LibrarianLogin from "../pages/librarian/Login";
import LibrarianDashboard from "./../pages/librarian/Dashboard";
import StudentLogin from "./../pages/member/Login";
import StudentDashboard from "../pages/member/Dashboard";
import MemberRegister from "../pages/member/Register";

const routes = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <App />,
      },

      // students dashboard routes
      {
        path: "/member/login",
        element: <StudentLogin />,
      },
      {
        path: "/member/register",
        element: <MemberRegister />,
      },
      {
        path: "/member/dashboard",
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
