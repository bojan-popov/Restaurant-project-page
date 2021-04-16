import React, { Component } from "react";
import { connect } from "react-redux";
import { mealsData } from "../../actions";

import imageFiles from "../WhatWeOffer/WhatWeOfferImageData";
import "./MoreInfo.css";

class MoreInfo extends Component {
  componentDidMount() {
    if (this.props.meals.length === 0) {
      return this.props.mealsData();
    } else return null;
  }
  getIMagePath = (image) => {
    let imagePath = null;
    imageFiles.map((im) => {
      if (im[image]) {
        imagePath = im[image];
        return null;
      }
      return null;
    });

    return <img src={imagePath} alt={image}></img>;
  };

  findItem = () => {
    const { meals, match } = this.props;

    const item = meals.find((item) => {
      return item.id === match.params.id * 1;
    });
    if (item) {
      return this.renderItem(item);
    } else return null;
  };

  renderItem = (item) => {
    return (
      <div className="info-container">
        <div className="info-header">
          <h3>{item.title}:</h3>
        </div>
        <div className="info-picture">{this.getIMagePath(item.image)}</div>
        <div className="info-description">{item.description}</div>
        <div className="info-price">
          <h4>
            Price :<span className="spacing"></span>
            {item.price} $
          </h4>
        </div>
      </div>
    );
  };
  render() {
    return <div>{this.findItem()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    meals: state.meals,
  };
};

export default connect(mapStateToProps, { mealsData })(MoreInfo);
