import React from "react";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="container d-flex justify-content-center">
          <div className="col-md-6">
            <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
              <form className="row g-4 needs-validation" noValidate>
                <div className="container-login col-md-12 rounded-3">
                  <p className="text-white fs-4">Login</p>
                </div>
                <div className="col-md-12">
                  <label htmlFor="nombre" className="form-label">
                    User name
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="nombre" className="form-label">
                    Password
                  </label>
                  <input
                    id="apellido"
                    name="apellido"
                    type="text"
                    className="form-control"
                    required
                  />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="button btn btn-primary">Login</button>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="button btn btn-primary">Sing up</button>
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
