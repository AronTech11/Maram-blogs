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
import CareerGuidance from "../pages/Resources/CareerCounselling";
import Scholarship from "../pages/Resources/Scolarship";

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
        path: "dashboard",
        element: <PrivateRoute><AdminLayout /></PrivateRoute>, // Use AdminLayout for admin routes
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
