import React from "react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
