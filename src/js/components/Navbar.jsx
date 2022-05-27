import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Context } from "../context/appContext";

const Navbar = () => {
  let context = React.useContext(Context);

  return (
    <div>
      <nav className="color-navbar navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <img src="https://i.ibb.co/JjydpD3/Logo2.png" height="40" />
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="container-fluid">
                <Link
                  className="nav-link active badge rounded-pill fs-5 text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {context.store.user.token === "" ? (
                <div>
                  <li className="container-fluid">
                    <Link
                      className="nav-link active badge rounded-pill fs-5 text-white"
                      to="/Login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="container-fluid">
                    <Link
                      className="nav-link active badge rounded-pill fs-5 text-white"
                      to="/Signup"
                    >
                      Sing Up
                    </Link>
                  </li>
                </div>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
=======
import Logo from "../../img/Logo2.png"
const Navbar = () => {
	return (
		<div>
			<nav className="color-navbar navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link to='/'>
						<img src={Logo} height='70' />
					</Link>
					<button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav ms-auto">
							<li className="container-fluid">
								<Link className="nav-link active badge rounded-pill fs-5 text-white" to='/' >Home</Link>
							</li>
							<li className="container-fluid">
								<Link className="nav-link active badge rounded-pill fs-5 text-white" to='/Login' >Login</Link>
							</li>
							<li className="container-fluid">
								<Link className="nav-link active badge rounded-pill fs-5 text-white" to='/Signup' >Sing Up</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
>>>>>>> a68c932566f39f8e170499370ce4d1429e26c491
};

export default Navbar;
