import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function showAlert() {
  alert("Print an alert window");
}

ReactDOM.render(
  <div>
    <App id="app1" click={showAlert}>
      CONTENT1
    </App>
    <App id="app2" click={showAlert}>
      CONTENT2
    </App>
    <App id="app3" click={showAlert}>
      CONTENT3
    </App>
    <App id="app4" click={showAlert}>
      CONTENT4
    </App>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
