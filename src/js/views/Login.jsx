import React, { useContext, useState } from "react";
import Logo from "../../img/Logo2.png";
import { Link } from "react-router-dom";
import { Context } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Login = () => {
  let context = useContext(Context);
  let navigate = useNavigate();

  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    context.actions.login(datos.email, datos.password);
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <div>
      <div className="container">
        <div className="container d-flex justify-content-center">
          <div className="col-4 custom-margin">
            <div className="shadow-lg p-4 rounded-2">
              <form
                className="row g-4 needs-validation"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="imagen-login col-md-12 rounded-3">
                  <img src={Logo} height="60" />
                </div>
                {/* <div className="imagen-login col-md-12 rounded-3">
                  <img src={Logo} height="70" />
                </div> */}
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Email Address
                    </Typography>
                  </label>
                  <input
                    className="form-control"
                    name="email"
                    onChange={handleInputChange}
                    maxLength="220"
                    //placeholder="Email"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label">
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Password
                    </Typography>
                  </label>
                  <input
                    className="form-control"
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                    maxLength="75"
                    //placeholder="Password"
                    required
                  />
                </div>
                <div className="d-grid col-12 ">
                  <button
                    className="button btn btn-primary p-2 mt-1 mb-4"
                    type="submit"
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      LOG IN
                    </Typography>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center p-4">
          <div className="col-4">
            <div className="shadow-lg p-4 rounded-2">
              <form className="row g-4 needs-validation" noValidate>
                <div className="d-grid col-12">
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Don't have an account? <Link to="/signup"> Sign Up</Link>
                  </Typography>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
