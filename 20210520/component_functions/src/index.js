import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RoundButton from "./App";

ReactDOM.render(
  <div>
    <RoundButton id="id1">Button</RoundButton>
    <RoundButton id="id2">Button</RoundButton>
    <RoundButton id="id3">Button</RoundButton>
    <RoundButton id="id4">Button</RoundButton>
    <RoundButton id="id5">Button</RoundButton>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
