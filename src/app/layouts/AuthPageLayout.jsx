import { Outlet } from "react-router-dom";
import Navbar from "@/shared/navbar/Navbar";

const AuthPageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AuthPageLayout;