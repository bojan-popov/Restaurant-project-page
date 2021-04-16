import { Component } from "react";
import { connect } from "react-redux";
import {
  deleteOrder,
  reduceOrderCounter,
  addOrderCounter,
} from "../../actions";
import "./OrderNowMenu.css";

class OrderNowOrders extends Component {
  calculate = (a, b) => {
    let Sum = a * b;

    return Sum;
  };

  renderOrder = (order) => {
    return (
      <div key={order.id} className="orders-menu ">
        <div className="orders-title-container">
          <div className="orders-title">
            <h2>{this.props.meals[order.id - 1].title}:</h2>
            <span className="spacing"></span>
          </div>
          <div className="orders-amounth">
            <h4>{order.qty}</h4>
          </div>
          <div>
            <span className="spacing"></span>X<span className="spacing"></span>
          </div>
          <div className="orders-price">
            <h4>{this.props.meals[order.id - 1].price}$ </h4>
          </div>
          <div>
            <span className="spacing"></span>=<span className="spacing"></span>
          </div>
          <div className="orders-sum">
            <h4>
              {this.calculate(this.props.meals[order.id - 1].price, order.qty)}{" "}
              ${" "}
            </h4>
          </div>
        </div>
        <div className="buttons-container border">
          <div
            className="button"
            onClick={() => this.props.addOrderCounter(order.id)}
          >
            +
          </div>

          <div
            onClick={() => this.props.reduceOrderCounter(order.id)}
            className="button"
          >
            -
          </div>
        </div>
      </div>
    );
  };
  render() {
    return this.props.orders.map((order) => {
      if (order.qty < 1) {
        this.props.deleteOrder(order.id);
        return null;
      } else return this.renderOrder(order);
    });
  }
}

export default connect(null, {
  deleteOrder,
  reduceOrderCounter,
  addOrderCounter,
})(OrderNowOrders);
