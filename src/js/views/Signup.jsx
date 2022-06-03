import React, { useContext } from "react";
import Logo from "../../img/Logo2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Context } from "../context/appContext"

const Signup = () => {

  let context = useContext(
    Context
  )

  const [datos, setDatos] = useState({
    name: "",
    email: "",
    serialnumber: "",
    password: ""

  })

  const handleInputChange = (event) => {
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datos.name + ' ' + datos.password)
    context.actions.signup(datos);
  }

  return (
      <div className="container">
        <div className="container d-flex justify-content-center">
          <div className="col-4">
            <div className="shadow-lg p-4">
              <form className="row g-4 needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="imagen-login col-md-12 rounded-3">
                  <img src={Logo} height="70" />
                </div>
                <div className="col-12">
                  <input className="form-control" type="text" name="name" onChange={handleInputChange} maxLength="220" placeholder="name" required />
                </div>
                <div className="col-12">
                  <input className="form-control" type="text" name="email" onChange={handleInputChange} maxLength="110" placeholder="email" required />
                </div>
                <div className="col-12">
                  <input className="form-control" type="text" name="serialnumber" onChange={handleInputChange} maxLength="15" placeholder="controller number" required />
                </div>
                <div className="col-12">
                  <input className="form-control" type="password" name="password" onChange={handleInputChange} maxLength="75" placeholder="password" required />
                </div>
                <div className="d-grid col-12 ">
                  <button className="button btn btn-primary" type="submit">Sign Up</button>
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
                  <p className="fw-bold">Do you have an account created ? <Link to="/login">Log In</Link> </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signup;
