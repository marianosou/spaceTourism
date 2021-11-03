import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar-container">
      <img src="icons/logo.svg" alt="" />
      {!showMenu ?
        <img
          src="icons/icon-hamburger.svg"
          alt=""
          onClick={() => setShowMenu(true)}
        /> :
        <div className="navbar-menu">
          <img
            src="icons/icon-close.svg"
            alt=""
            onClick={() => setShowMenu(false)}
          />
          <ol start="2">
            <li>Home</li>
            <li>Destination</li>
            <li>Crew</li>
            <li>Technology</li>
          </ol>
        </div>
      }
    </nav>
  );
};

export default NavBar;
