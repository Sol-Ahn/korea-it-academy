// eslint-disable-next-line
import React, { Component } from "react";

class Box extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      width: "100px",
      height: "100px",
      backgroundColor: "orangered",
      border: "1px solid black",
      display: "inline-block",
    };

    return <div style={style}></div>;
  }
}

export default Box;
