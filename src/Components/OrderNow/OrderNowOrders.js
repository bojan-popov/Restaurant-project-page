import { Component } from "react";
import { connect } from "react-redux";
import {
  deleteOrder,
  reduceOrderCounter,
  addOrderCounter,
} from "../../actions";

class OrderNowOrders extends Component {
  renderOrder = (order) => {
    return (
      <div key={order.id} className="orders-menu">
        <div className="orders-container">
          <div className="orders-title">
            {this.props.meals[order.id - 1].title}
          </div>
          <div>...</div>
          <div className="orders-price">
            {this.props.meals[order.id - 1].price}
          </div>
          <div
            className="button"
            onClick={() => this.props.addOrderCounter(order.id)}
          >
            +
          </div>
          <div className="orders-amounth">{order.qty}</div>

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
