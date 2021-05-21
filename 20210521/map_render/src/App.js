// eslint-disable-next-line
import React, { Component } from "react";

class Circle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var line = ["1호선", "2호선", "3호선", "4호선", "5호선"];
    var color = ["#0052a4", "#00a84d", "#ef7c1c", "#00a4e3", "#996cac"];

    var style = {
      width: "100px",
      heignt: "100px",
      fontSize: "20px",
      lineHeight: "20px",
      textAlign: "center",
      border: "5px solid black",
      borderRadius: "50%",
      padding: "35px 0",
      boxSizing: "border-box",
    };

    const lineItems = line.map((data, index) => {
      var itemStyle = { ...style }; // copy object
      var border = style.border.split(" ");
      border[2] = color[index];
      itemStyle.border = border.join(" ");
      return <div style={itemStyle}>{data}</div>;
    });

    return <div>{lineItems}</div>;
  }
}

export default Circle;
