import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./context/appContext";

import Layout from "./layout";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Landing from "./components/Landing.jsx";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "'Rubik', sans-serif",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={basename}>
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<h1>404 Not found</h1>} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default injectContext(App);
