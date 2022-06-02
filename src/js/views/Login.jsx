import React from "react";
import Logo from "../../img/Logo2.png";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div>
      <div className="container">
        <div className="container d-flex justify-content-center">
          <div className="col-4">
            <div className="shadow-lg p-4">
              <form className="row g-4 needs-validation" noValidate>
                <div className="imagen-login col-md-12 rounded-3">
                  <img src={Logo} height="70" />
                </div>
                <div className="col-12">
                  <label for="nombre" className="form-label"></label>
                  <input
                    className="form-control" maxLength="220" placeholder="Name" required
                  />
                </div>
                <div className="col-12">
                  <label for="nombre" className="form-label"></label>
                  <input className="form-control" type="password" maxLength="75" placeholder="Password" required />
                </div>
                <div className="d-grid col-12 ">
                  <button className="button btn btn-primary" type="submit">Log in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center p-4">
          <div className="col-4">
            <div className="shadow-lg p-4">
              <form className="row g-4 needs-validation" noValidate>
                <div className="d-grid col-12 ">
                  <p className="fw-bold">Don't have an account ?
                    <Link to="/signup"> Sign Up</Link></p>
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
