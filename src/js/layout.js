import React from "react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Contenido from "./components/Contenido.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Contenido/>
      <Login/>
			{children}
			<Footer />
      <Register/>
    </div>
  );
};

export default Layout;
