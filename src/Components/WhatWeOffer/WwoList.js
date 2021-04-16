import React, { Component } from "react";
import imageFiles from "./WhatWeOfferImageData";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { orderNowData } from "../../actions";
import OrderNow from "../OrderNow/OrderNow";

class WwoList extends Component {
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

  onClickHandler = (item) => {
    return this.props.orderNowData(item.id);
  };
  renderList = (item) => {
    return (
      <div className="list-container" key={item.id}>
        <div className="list-inner-container">
          <div className="list-image">
            <div className="list-side-text">
              <Link to={`/info/${item.id}`}>Click for more info</Link>
            </div>
            <div className="list-title">
              <h4>{item.title} </h4>
            </div>
            {this.getIMagePath(item.image)}
            <div className="list-footer">
              <div className="list-price">{item.price} $</div>
              <div
                className="button-list border-button"
                onClick={() => this.onClickHandler(item)}
              >
                Order {this.props.orders.id}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  renderMainList = () => {
    if (this.props.type === "all") {
      return this.props.elements.map((item) => {
        return this.renderList(item);
      });
    } else if (this.props.type === "salad") {
      return this.props.elements.map((item) => {
        if (item.type === "salad") {
          return this.renderList(item);
        }
        return null;
      });
    } else if (this.props.type === "main") {
      return this.props.elements.map((item) => {
        if (item.type === "main") {
          return this.renderList(item);
        }
        return null;
      });
    } else if (this.props.type === "dessert") {
      return this.props.elements.map((item) => {
        if (item.type === "dessert") {
          return this.renderList(item);
        }
        return null;
      });
    } else return null;
  };

  render() {
    return (
      <div>
        <div className="wwo-container">{this.renderMainList()}</div>
        <OrderNow />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps, { orderNowData })(WwoList);
