import React from "react";
import { connect } from "react-redux";

import { Salat, Main, Dessert } from "./WhatWeOfferData";

import "./WhatWeOffer.css";
import { fetchMealsAsync } from "../../redux/meals/action";

function WhatWeOffer(props) {
  return (
    <>
      <div className="wwo-main" id="wwo">
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
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  meals: state.meals.meals,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMeals: () => dispatch(fetchMealsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WhatWeOffer);
