import React from "react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Contenido from "./components/Contenido.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
			{children}
    </div>
  );
};

export default Layout;
