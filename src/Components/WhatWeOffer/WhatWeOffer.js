import React from "react";
import "./WhatWeOffer.css";
import { Salat, Main, Dessert } from "./WhatWeOfferData";

function WhatWeOffer(props) {
  return (
    <>
      <div className="wwo-main">
        <h3>What we offer:</h3>
        <div className="wwo-container">
          <div className="items-header">
            <h4>Starters ...</h4>
          </div>
          <div className="items-container">
            {Salat.map((item) => {
              return (
                <div className="items">
                  <h5>{item.title} </h5>
                  <img src={item.image} alt="salat" />
                  <p>{item.description}</p>
                  <h6>{item.price}</h6>
                </div>
              );
            })}
          </div>
          <div className="read-more">
            <h4>More ...</h4>
          </div>
        </div>
        <div className="wwo-container">
          <div className="items-header">
            <h4>Main course ...</h4>
          </div>
          <div className="items-container">
            {Main.map((item) => {
              return (
                <div className="items">
                  <h5>{item.title} </h5>
                  <img src={item.image} alt="main" />
                  <p>{item.description}</p>
                  <h6>{item.price}</h6>
                </div>
              );
            })}
          </div>
          <div className="read-more">
            <h4>More ...</h4>
          </div>
        </div>
        <div className="wwo-container">
          <div className="items-header">
            <h4>Deserts ...</h4>
          </div>
          <div className="items-container">
            {Dessert.map((item) => {
              return (
                <div className="items">
                  <h5>{item.title} </h5>
                  <img src={item.image} alt="dessert" />
                  <p>{item.description}</p>
                  <h6>{item.price}</h6>
                </div>
              );
            })}
          </div>
          <div className="read-more">
            <h4>More ...</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeOffer;
