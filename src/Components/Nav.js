import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul>
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
    </>
  );
}

export default Nav;
