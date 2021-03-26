import React, { useState } from "react";
import "./Nav.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => setMenu(!menu);
  const list = [
    <>
      <Link to="#" key={1}>
        <li>What we offer</li>
      </Link>
      <Link to="#" key={2}>
        <li>Order now</li>
      </Link>
      <Link to="#" key={3}>
        <li>Contact us</li>
      </Link>
    </>,
  ];
  return (
    <>
      <div className="nav-container">
        <nav className="nav">
          <div className="logo">Sheff Paradise</div>
          <div className="nav-burger">
            <div className="burger-icon">
              <FaBars onClick={menuHandler} />
            </div>
          </div>
          <ul className="nav-list">{list}</ul>
        </nav>
      </div>
      <div className={menu ? "active" : ""}>
        <ul className="burger-list">{list}</ul>
      </div>
    </>
  );
}

export default Nav;
