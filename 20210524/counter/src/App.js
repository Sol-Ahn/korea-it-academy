import React, { Component } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  plus = () => this.setState({ count: this.state.count + 1 });

  minus = () => this.setState({ count: this.state.count - 1 });

  render() {
    let style = {
      backgroundColor: "white",
      color: "black",
    };

    if (this.state.count > 10) {
      style["backgroundColor"] = "orange";
      style["color"] = "red";
    } else if (this.state.count > 0) {
      style["backgroundColor"] = "yellow";
    } else if (this.state.count < -10) {
      style["backgroundColor"] = "blue";
      style["color"] = "white";
    } else if (this.state.count < 0) {
      style["backgroundColor"] = "skyblue";
      style["color"] = "blue";
    }

    return (
      <div>
        <button onClick={this.minus}>-</button>
        <input style={style} type="text" value={this.state.count} />
        <button onClick={this.plus}>+</button>
      </div>
    );
  }
}

export default Counter;
