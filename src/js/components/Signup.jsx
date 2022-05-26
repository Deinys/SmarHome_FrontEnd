import React from "react";
import Logo from "../../img/Logo2.png"

const Register = () => {
    return (
        <div>
        <div className="container">
            <div class="container d-flex justify-content-center">
                <div class="col-4" >
                    <div class="shadow-lg p-4">
                        <form class="row g-4 needs-validation" novalidate>
                            <div className="imagen-login col-md-12 rounded-3">
                            <img src={Logo} height='70' />
                            </div>
                            <div class="col-12">
                                <label for="nombre" class="form-label"></label>
                                <input class="form-control" placeholder="username" required />
                            </div>
                            <div class="col-12">
                                <label for="nombre" class="form-label"></label>
                                <input class="form-control" placeholder="email" required/>
                            </div>


                            <div class="col-12">
                                <label for="nombre" class="form-label"></label>
                                <input class="form-control" placeholder="password" required/>
                            </div>



                            <div class="d-grid col-12 ">
                                <button class="button btn btn-primary">Sing Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="container d-flex justify-content-center p-4">
                <div class="col-4" >
                    <div class="shadow-lg p-4">
                        <form class="row g-4 needs-validation" novalidate>
                            <div class="d-grid col-12 ">
                                {/* <p className="fw-bold">Do you already have an account created ?  <a href="#" class="stretched-link">Log in</a></p> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;