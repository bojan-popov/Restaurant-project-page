import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="navMainDiv">
        <ul className="navUl">
          <Link to="/">
            <li className="navUnderline">Home</li>
          </Link>
          <Link to="/about">
            <li className="navUnderline">About</li>
          </Link>
          <Link to="/menu">
            <li className="navUnderline">Menu</li>
          </Link>
          <Link to="/contact">
            <li className="navUnderline">Contact</li>
          </Link>
          <Link to="/location">
            <li className="navUnderline">Location</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Nav;
