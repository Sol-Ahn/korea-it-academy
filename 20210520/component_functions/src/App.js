import "./App.css";
import React from "react";

function RoundButton(props) {
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
    <button style={btnStyle} onClick={eventFunction} id={props.id}>
      {props.children} - {props.id}
    </button>
  );
}

function eventFunction() {
  alert("A click event occured!");
}

export default RoundButton;
