import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteOrders } from "../../actions";
import "./Clicks.css";

class Delete extends Component {
  render() {
    return (
      <div className="delete">
        <h3>Transaction successfull</h3>
        <div className="button" onClick={this.props.deleteOrders}>
          <Link to="/">OK</Link>
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteOrders })(Delete);
