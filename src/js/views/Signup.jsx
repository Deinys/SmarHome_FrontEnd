import React, { useContext } from "react";
import Logo from "../../img/Logo2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Context } from "../context/appContext";
import { Typography } from "@mui/material";

const Signup = () => {
  let context = useContext(Context);

  const [datos, setDatos] = useState({
    name: "",
    email: "",
    serialnumber: "",
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
    context.actions.signup(
      datos.name,
      datos.email,
      datos.password,
      datos.serialnumber
    );
  };

  return (
    <div className="container">
      <div className="container d-flex justify-content-center">
        <div className="col-4 custom-margin">
          <div className="shadow-lg p-4">
            <form
              className="row g-4 needs-validation"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="imagen-login col-md-12 rounded-3">
                <img src={Logo} height="60" />
              </div>
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Name
                  </Typography>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  maxLength="220"
                  //placeholder="name"
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Email
                  </Typography>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  onChange={handleInputChange}
                  maxLength="110"
                  //placeholder="email"
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Serial number
                  </Typography>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="serialnumber"
                  onChange={handleInputChange}
                  maxLength="15"
                  //placeholder="controller number"
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Password
                  </Typography>
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  maxLength="75"
                  //placeholder="password"
                  required
                />
              </div>
              <div className="d-grid col-12 ">
                <button
                  className="button btn btn-primary p-2 mt-1 mb-4"
                  type="submit"
                >
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    SIGN UP
                  </Typography>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center p-4">
        <div className="col-4">
          <div className="shadow-lg p-4 pb-2">
            <form className="row g-4 needs-validation" noValidate>
              <div className="d-grid col-12 ">
                <p className="fw-bold">
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Already have an account? <Link to="/login">Log In</Link>
                  </Typography>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
