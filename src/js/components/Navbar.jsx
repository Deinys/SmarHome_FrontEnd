import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className="color-navbar navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link to='/'>
						<img src="./Logo2.png" height='70' />
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
};

export default Navbar;