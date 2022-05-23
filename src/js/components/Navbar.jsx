import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className="color-navbar navbar navbar-expand-lg navbar-light ">
				<div className="container-fluid">
					<a className="navbar1 text-white navbar-brand badge rounded-pill fs-4" href="#">Smart Home!</a>
					<button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="container-fluid">
								<a className="nav-link active badge rounded-pill fs-5 text-white" aria-current="page" href="#">Ligth</a>
							</li>
							<li className="container-fluid">
								<a className="nav-link active badge rounded-pill fs-5 text-white" href="#">Water Tank</a>
							</li>
							<li className="container-fluid">
								<a className="nav-link active badge rounded-pill fs-5 text-white" href="#">Temperature</a>
							</li>
							<li className="container-fluid">
								<a className="nav-link active badge rounded-pill fs-5 text-white" href="#">Alarm</a>
							</li>
							<li className="container-fluid dropdown">
								<a className="nav-link active badge rounded-pill fs-5 text-white dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Options
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li><a className="dropdown-item" href="#">Sign off</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;