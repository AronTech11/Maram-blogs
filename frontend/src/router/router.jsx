import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Blogs from "../pages/blogs/Blogs";
import About from "../pages/miniPage/About";
import PrivacyPolicy from "../pages/miniPage/PrivacyPolicy";
import ContactUs from "../pages/miniPage/ContactUs";
import SingleBlog from "../pages/blogs/singleBlog/SingleBlog";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import ForgotPassword from "../pages/user/ForgotPassword";
import ResetPassword from "../pages/user/ResetPassword";
import PrivateRoute from "./PrivateRoute";
import AdminLayout from "../pages/admin/AdminLayout";
import AddPost from "../pages/admin/post/AddPost";
import ManagePost from "../pages/admin/post/ManagePosts";
import ManageUser from "../pages/admin/user/ManageUser";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import UpdatePosts from "../pages/admin/post/UpdatePosts";
import ErrorPage from "../components/ErrorPage";
import Education from "../pages/AboutMaram/Education";
import News from "../pages/AboutMaram/News";
import MKS from "../pages/AboutMaram/MKS";
import MaramUnion from "../pages/AboutMaram/MaramUnion";
import Festival from "../pages/AboutMaram/Festival";
import Village from "../pages/AboutMaram/Village";
import Culture from "../pages/AboutMaram/Culture";
import FolkSongs from "../pages/AboutMaram/FolkSongs";
import Stories from "../pages/AboutMaram/Stories";
import Humour from "../pages/AboutMaram/Humour";
import MonthsWeekdays from "../pages/AboutMaram/MonthsWeekdays";
import Publications from "../pages/AboutMaram/Publications";
import SenapatiPage from "../pages/AboutMaram/Senapati";
import TouristSpots from "../pages/AboutMaram/TouristSpots";
import YoungAchievers from "../pages/AboutMaram/YoungAchievers";
import BattleOfMaram from "../pages/AboutMaram/BattleOfMaram";
import Essays from "../pages/AboutMaram/Essays";
import CareerGuidance from "../pages/Resources/CareerCounselling";
import Scholarship from "../pages/Resources/Scolarship";
import Disclaimer from "../pages/miniPage/Disclaimer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/about-maram/education",
        element: <Education />,
      },
      {
        path: "/about-maram/news",
        element: <News />,
      },
      {
        path: "/about-maram/mks",
        element: <MKS />,
      },
      {
        path: "/about-maram/maram-union",
        element: <MaramUnion />,
      },
      {
        path: "/about-maram/festival",
        element: <Festival />,
      },
      {
        path: "/about-maram/village",
        element: <Village />,
      },
      {
        path: "/about-maram/culture",
        element: <Culture />,
      },
      {
        path: "/about-maram/folk-songs",
        element: <FolkSongs />,
      },
      {
        path: "/about-maram/stories",
        element: <Stories />,
      },
      {
        path: "/about-maram/humour",
        element: <Humour />,
      },
      {
        path: "/about-maram/months-weekdays",
        element: <MonthsWeekdays />,
      },
      {
        path: "/about-maram/publications",
        element: <Publications />,
      },
      {
        path: "/about-maram/senapati",
        element: <SenapatiPage />,
      },
      {
        path: "/about-maram/tourist-spots",
        element: <TouristSpots />,
      },
      {
        path: "/about-maram/young-achievers",
        element: <YoungAchievers />,
      },
      {
        path: "/about-maram/battle-of-maram",
        element: <BattleOfMaram />,
      },
      {
        path: "/about-maram/essays",
        element: <Essays />,
      },
      {
        path: "/resources/career-guidance",
        element: <CareerGuidance />,
      },
      {
        path: "/resources/scholarship",
        element: <Scholarship />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      // login & registration
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password/:token",
        element: <ResetPassword />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        ), // Use AdminLayout for admin routes
        children: [
          // Define admin routes here
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "add-new-post",
            element: <AddPost />,
          },
          {
            path: "manage-items",
            element: <ManagePost />,
          },
          {
            path: "update-items/:id",
            element: <UpdatePosts />,
          },
          {
            path: "users",
            element: <ManageUser />,
          },
        ],
      },
    ],
  },
]);

export default router;
