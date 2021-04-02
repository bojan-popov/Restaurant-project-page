import React from "react";

import "./Hero.css";
import food from "./img/background-food2.png";

function Home() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-image">
          <img src={food} alt="food"></img>
        </div>
        <div className="hero-header">
          <h2>Welcome to cheff paradise restaurant</h2>
          <h1>To eat is a necessity, but to eat intelligently is an art ...</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
