import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import data from "../assets/data/data.json";

const useClickOutside = handler => {
	const domNode = useRef();

	useEffect(() => {
		let maybeHandler = event => {
			if (!domNode.current.contains(event.target)) {
				handler();
			}
		};

		document.addEventListener("mousedown", maybeHandler);

		return () => {
			document.removeEventListener("mousedown", maybeHandler);
		};
	});

	return domNode;
};

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const menuOptions = Object.keys(data);
	const pathname = useHistory().location.pathname;

	const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

	const domNode = useClickOutside(() => {
		setShowMenu(false);
	});

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
			<div
				className={!showMenu ? "navbar-menu-hidden" : "navbar-menu"}
				ref={domNode}
			>
				<img
					src="icons/icon-close.svg"
					alt=""
					onClick={() => setShowMenu(false)}
				/>
				<ol
					className={
						!showMenu ? "navbar-menu-options-hidden" : "navbar-menu-options"
					}
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
