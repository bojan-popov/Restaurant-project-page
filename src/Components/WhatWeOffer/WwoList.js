import React, { Component } from "react";

export default class WwoList extends Component {
  renderList = (item) => {
    console.log(item);
    return (
      <div className="list-container" key={item.id}>
        <div>
          <div className="list-title">
            <h4>{item.title} </h4>
          </div>
          <div className="list-description">{item.description}</div>
          <div className="list-price">{item.price}</div>
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
    return <div>{this.renderMainList()}</div>;
  }
}
