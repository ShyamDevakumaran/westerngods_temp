import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, Sidebar, WhatsAppTop } from "../components/Component";
import ImageSlider from "../components/Slider/ImageSlider";
import Menubar from "../components/Menubar/Menubar";

const PublicLayout = () => {
  return (
    <div className="PublicLayout">
      <ImageSlider />
      <Navbar />
      <Outlet />
      <Menubar/>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default PublicLayout;
