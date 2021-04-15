import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import "./OrderNow.css";

class OrderNow extends Component {
  state = { isActive: false };

  renderOrders = () => {
    if (this.props.orders.length !== 0) {
      return (
        <Link to="/order">
          <div className="order-now">
            <FaShoppingCart />
            Your orders
          </div>
        </Link>
      );
    }
  };

  handleToggleClass = () => {
    this.setState({ isActive: true });
  };

  render() {
    return (
      <div>
        <div>{this.renderOrders()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    meals: state.meals,
  };
};
export default connect(mapStateToProps)(OrderNow);
