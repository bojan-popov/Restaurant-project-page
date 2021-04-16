import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteOrders } from "../../actions";
import "./Clicks.css";

class Delete extends Component {
  render() {
    return (
      <div className="delete-orders">
        <h2>Transaction successfull</h2>
        <div className="button" onClick={this.props.deleteOrders}>
          <Link to="/">OK</Link>
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteOrders })(Delete);
