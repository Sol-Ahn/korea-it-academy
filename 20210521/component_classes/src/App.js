import React, { Component } from "react";

class RoundButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const btnStyle = {
      width: "150px",
      padding: "10px",
      marginLeft: "5px",
      border: "1px solid black",
      borderRadius: "10px",
      backgroundColor: "lime",
      fontSize: "24px",
      display: "inline-block",
    };

    return (
      <button
        style={btnStyle}
        onClick={this.eventFunction.bind(this)}
        id={this.props.id}
      >
        {this.props.children} - {this.props.id}
      </button>
    );
  }

  eventFunction() {
    console.log(this.props.id);
    alert("button click event occurred!");
  }
}

export default RoundButton;
