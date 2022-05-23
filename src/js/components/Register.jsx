import React from "react";

const Register = () => {
    return (
        <div>
            <h1>SmartHome</h1>
            <div class="container d-flex justify-content-center">
                <div class="col-md-6" >
                    <div class="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                        <form class="row g-4 needs-validation" novalidate>
                            <div className="container-login col-md-12 rounded-3">
                                    <p className="text-white fs-4">Sign up</p>
                            </div>
                            <div class="col-md-12">
                                <label for="nombre" class="form-label">Email @</label>
                                <input id="nombre" name="nombre" type="text" class="form-control" required />
                            </div>
                            <div class="col-md-12">
                                <label for="nombre" class="form-label"> User name</label>
                                <input id="apellido" name="apellido" type="text" class="form-control" required />
                            </div>
                            <div class="col-md-12">
                                <label for="nombre" class="form-label">Password</label>
                                <input id="apellido" name="apellido" type="text" class="form-control" required />
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="button btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;