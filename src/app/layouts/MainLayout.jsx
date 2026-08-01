import { Outlet } from "react-router-dom";
import Navbar from "@/shared/navbar/Navbar";
import Footer from "@/shared/footer/Footer";
import CtaBanner from "@/shared/cta-banner/CtaBanner";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <CtaBanner />
      <Footer />
    </>
  );
};

export default MainLayout;