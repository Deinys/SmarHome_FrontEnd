import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./context/store";
import ScrollToTop from "./components/302897";

import Layout from "./layout";
import Home from "./views/Home.jsx";

const App = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Layout>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>404 Not found</h1>} />
              </Routes>
            </div>
          </Layout>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(App);
