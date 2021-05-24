import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./App";
import reportWebVitals from "./reportWebVitals";
import AppFunc from "./App.func";

ReactDOM.render(
  <div>
    <Counter />
    <hr />
    <AppFunc />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
