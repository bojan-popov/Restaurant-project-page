import React, { Component } from "react";
import { connect } from "react-redux";
import "./Clicks.css";
import { Link } from "react-router-dom";
import { deleteOrders } from "../../actions";

class OrderClicks extends Component {
  calculate = (a, b) => {
    let Sum = a * b;

    return Sum;
  };

  renderListOfOrders = () => {
    return this.props.meals.map((meal) => {
      return this.props.orders.map((order) => {
        if (meal.id === order.id) {
          console.log(meal.price);
          console.log(order.qty);
          return (
            <div key={meal.id}>
              <div className="order-lists">
                {meal.title} : {order.qty} x {meal.price}$ =
                {this.calculate(order.qty, meal.price)} $
              </div>
            </div>
          );
        }

        return null;
      });
    });
  };

  render() {
    return (
      <>
        <div className="order-clicks">
          <h3>Are you sure u want to order make this order? </h3>
          <div className="button-container">
            <div className="button">
              <Link to="/order">Cancle</Link>
            </div>
            <div className="button">
              <Link to="/delete">Accept</Link>
            </div>
          </div>
        </div>
        {this.renderListOfOrders()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    meals: Object.values(state.meals),
    orders: Object.values(state.orders),
  };
};

export default connect(mapStateToProps, { deleteOrders })(OrderClicks);
