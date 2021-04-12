import React, { Component } from "react";

import { connect } from "react-redux";
import { heroData } from "../../actions";

import food from "./img/background-food2.png";
import "./Hero.css";

class Hero extends Component {
  componentDidMount() {
    this.props.heroData();
  }

  render() {
    return (
      <>
        <div className="hero-container" id="hero">
          <div className="hero-image">
            <img src={food} alt="food"></img>
          </div>
          <div className="hero-header">
            <h2>{this.props.hero.subtitle}</h2>
            <h1>{this.props.hero.title}</h1>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { hero: state.hero };
};

export default connect(mapStateToProps, { heroData })(Hero);
