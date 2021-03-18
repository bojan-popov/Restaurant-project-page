import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="navMainDiv">
        <ul className="navUl">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/location">
            <li>Location</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Nav;
