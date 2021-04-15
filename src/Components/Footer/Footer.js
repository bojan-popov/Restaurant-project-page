import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="buttons-container">
        <div className="buttons">
          <Link to="/offers">What we offer</Link>
        </div>
        <div className="buttons">
          <Link to="/order">Order</Link>
        </div>
        <div className="buttons">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
