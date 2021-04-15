import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./OrderNowMenu.css";
import { connect } from "react-redux";
import {
  addOrderCounter,
  reduceOrderCounter,
  deleteOrder,
} from "../../actions";
import OrderNowOrders from "./OrderNowOrders";

class OrderNowMenu extends Component {
  render() {
    if (this.props.orders.length === 0) {
      return (
        <div className="order-menu">
          <h3 className="order-header">
            U have selected no meals from our menu.
          </h3>
          <p className="order-para">
            Please select some meals from our menu if u wish to order meals from
            our menu
          </p>
          <div className="button order-button">
            <Link to="/offers">Our menu</Link>
          </div>
        </div>
      );
    } else
      return (
        <div>
          <div className="orders-header">
            <h2>You have selected this meals:</h2>
          </div>
          <OrderNowOrders orders={this.props.orders} meals={this.props.meals} />
          <div className="button-container">
            <div className="button">
              <Link to="confirmation1">Order online</Link>
            </div>
            <div className="button">
              <Link to="confirmation2">Make reservation</Link>
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    meals: Object.values(state.meals),
  };
};

export default connect(mapStateToProps, {
  addOrderCounter,
  reduceOrderCounter,
  deleteOrder,
})(OrderNowMenu);
