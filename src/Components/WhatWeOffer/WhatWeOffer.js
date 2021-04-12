import React, { Component } from "react";

import { connect } from "react-redux";
import { mealsData } from "../../actions";
import WwoList from "./WwoList";
import "./WhatWeOffer.css";

class WhatWeOffer extends Component {
  state = { type: "all" };

  componentDidMount() {
    this.props.mealsData();
  }

  onClickHandler = (type) => {
    switch (type) {
      case "salad":
        return this.setState({ type: "salad" });
      case "main":
        return this.setState({ type: "main" });
      case "dessert":
        return this.setState({ type: "dessert" });
      case "all":
        return this.setState({ type: "all" });
      default:
        return this.setState({ type: "all" });
    }
  };

  render() {
    return (
      <div id="wwo">
        <div className="header-wwo">
          <h3>What we offer :</h3>
        </div>
        <div className="button-container">
          <div onClick={() => this.onClickHandler("all")} className="button">
            All meals
          </div>
          <div onClick={() => this.onClickHandler("salad")} className="button">
            Salad meals
          </div>
          <div onClick={() => this.onClickHandler("main")} className="button">
            Main meals
          </div>
          <div
            onClick={() => this.onClickHandler("dessert")}
            className="button"
          >
            Dessert meals
          </div>
        </div>
        <WwoList type={this.state.type} elements={this.props.meals}></WwoList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { meals: state.meals };
};

export default connect(mapStateToProps, { mealsData })(WhatWeOffer);
