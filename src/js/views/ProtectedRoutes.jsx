import React, { useContext } from "react";
import { Outlet } from "react-router";
import { Context } from "../context/appContext";

import Login from "./Login.jsx";

const useAuth = () => {
  let context = useContext(Context);
  if (context.store.user.token === "") {
    return false;
  } else {
    return true;
  }
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
