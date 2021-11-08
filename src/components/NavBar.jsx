import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import data from "../assets/data/data.json";

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const menuOptions = Object.keys(data);
	const pathname = useHistory().location.pathname;

	const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

	return (
		<nav className="navbar-container">
			<img src="icons/logo.svg" alt="" />
			{!showMenu ? (
				<img
					src="icons/icon-hamburger.svg"
					alt=""
					onClick={() => setShowMenu(true)}
				/>
			) : (
				""
			)}
			<div className={!showMenu ? "navbar-menu-hidden" : "navbar-menu"}>
				<img
					src="icons/icon-close.svg"
					alt=""
					onClick={() => setShowMenu(false)}
				/>
				<ol
					className={!showMenu ? "navbar-menu-options-hidden" : "navbar-menu-options"}
					onClick={() => setShowMenu(false)}
				>
					<Link to="/">
						<li className={"/" === pathname ? "menuOptionUnderline" : ""}>
							Home
						</li>
					</Link>
					{menuOptions.map(option => (
						<Link key={option} to={`/${option}`}>
							<li
								className={
									`/${option}` === pathname ? "menuOptionUnderline" : ""
								}
							>
								{capitalize(option)}
							</li>
						</Link>
					))}
				</ol>
			</div>
		</nav>
	);
};

export default NavBar;
