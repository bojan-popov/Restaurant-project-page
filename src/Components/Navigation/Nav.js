import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => setMenu(!menu);

  return (
    <>
      <div className="nav-container">
        <nav className="nav">
          <div className="logo">
            <Link to="/">Sheff Paradise</Link>
          </div>
          <div className="nav-burger">
            <div className="burger-icon">
              <FaBars onClick={menuHandler} />
            </div>
          </div>
          <ul className="nav-list" onClick={menuHandler}>
            <Link to="/offers">
              <li>What we offer</li>
            </Link>
            <Link to="/contact">
              <li>Contact us</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className={menu ? "active" : ""} onClick={menuHandler}>
        <ul className="burger-list">
          <Link to="/offers">
            <li>What we offer</li>
          </Link>

          <Link to="/contact">
            <li>Contact us</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Nav;
