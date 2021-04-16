import React from "react";

import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Sheff Paradise</Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
