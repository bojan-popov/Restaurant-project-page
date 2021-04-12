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
            <a href="#hero">Sheff Paradise</a>
          </div>
          <div className="nav-burger">
            <div className="burger-icon">
              <FaBars onClick={menuHandler} />
            </div>
          </div>
          <ul className="nav-list" onClick={menuHandler}>
            <a href="#wwo">
              <li>What we offer</li>
            </a>
            <Link to="#">
              <li>Order now</li>
            </Link>
            <Link to="#">
              <li>Contact us</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className={menu ? "active" : ""} onClick={menuHandler}>
        <ul className="burger-list">
          <a href="#wwo">
            <li>What we offer</li>
          </a>
          <Link to="#">
            <li>Order now</li>
          </Link>
          <Link to="#">
            <li>Contact us</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Nav;
