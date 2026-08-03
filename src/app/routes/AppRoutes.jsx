import { useRoutes } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

import AuthPageLayout from "@/app/layouts/AuthPageLayout";
import MainLayout from "@/app/layouts/MainLayout";

import Home from "@/app/pages/Home";
import About from "@/app/pages/About";
import Contact from "@/app/pages/Contact";
import Login from "@/app/pages/Login";
import Register from "@/app/pages/Register";
import Portfolio from "@/app/pages/Portfolio";
import HowItWorks from "@/app/pages/HowItWorks";
import OurServices from "@/app/pages/OurServices";
import Pricing from "@/app/pages/Pricing";
import Blogs from "@/app/pages/Blogs";
import BlogDetails from "@/app/pages/BlogDetails";
import ServiceDetails from "@/app/pages/ServiceDetails";
import Privacy from "@/app/pages/Privacy";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      element: <AuthPageLayout />,
      children: [
        { path: ROUTES.LOGIN, element: <Login /> },
        { path: ROUTES.REGISTER, element: <Register /> },
      ],
    },
    {
      path: ROUTES.HOME,
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "how-it-works", element: <HowItWorks /> },
        { path: "our-services", element: <OurServices /> },
        { path: "pricing", element: <Pricing /> },
        { path: "blog", element: <Blogs /> },
        { path: "blog/:blogId", element: <BlogDetails /> },
        { path: "services/:serviceId", element: <ServiceDetails /> },
        { path: "privacy-policy", element: <Privacy /> },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;