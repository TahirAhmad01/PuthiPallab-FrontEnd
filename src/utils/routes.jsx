import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import LibrarianLogin from "../pages/librarian/Login";
import LibrarianDashboard from "./../pages/librarian/Dashboard";
import StudentLogin from "./../pages/member/Login";
import StudentDashboard from "../pages/member/Dashboard";
import MemberRegister from "../pages/member/Register";
import Profile from "../pages/member/Profile";
import BooksLog from "../pages/member/BooksLog";
import Reviews from './../pages/member/Reviews';
import LibProfile from "../pages/librarian/Profile"
import Overview from "../pages/librarian/Overview";
import ManageBooks from "../pages/librarian/ManageBooks";
import IssueBook from "../pages/librarian/IssueBook";
import ReturnBook from "../pages/librarian/ReturnBook";
import ViewRecords from "../pages/librarian/ViewRecords";
import ViewIssuedBooks from "../pages/librarian/ViewIssuedBooks";
import ViewWaitList from "../pages/librarian/ViewWaitlist";
import ManageCategories from "../pages/librarian/ManageCategories";

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
      {
        path: "/member/profile",
        element: <Profile />,
      },
      {
        path: "/member/booksLog",
        element: <BooksLog />,
      },
      {
        path: "/member/reviews",
        element: <Reviews />,
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
      {
        path: "/librarian/profile",
        element: <LibProfile />,
      },
      {
        path: "/librarian/overview",
        element: <Overview />,
      },
      {
        path: "/librarian/manageBooks",
        element: <ManageBooks />,
      },
      {
        path: "/librarian/issueBook",
        element: <IssueBook />,
      },
      {
        path: "/librarian/returnBook",
        element: <ReturnBook />,
      },
      {
        path: "/librarian/viewRecords",
        element: <ViewRecords />,
      },
      {
        path: "/librarian/viewIssuedBooks",
        element: <ViewIssuedBooks />,
      },
      {
        path: "/librarian/viewWaitList",
        element: <ViewWaitList />,
      },
      {
        path: "/librarian/manageCategories",
        element: <ManageCategories />,
      },
    ],
  },
]);

export default routes;
