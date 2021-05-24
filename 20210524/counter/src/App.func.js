import React, { useState } from "react";

// React Hook
const AppFunc = () => {
  const [count, setCount] = useState(0);
  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);

  let style = {
    backgroundColor: "white",
    color: "black",
  };

  if (count > 10) {
    style["backgroundColor"] = "orange";
    style["color"] = "red";
  } else if (count > 0) {
    style["backgroundColor"] = "yellow";
  } else if (count < -10) {
    style["backgroundColor"] = "blue";
    style["color"] = "white";
  } else if (count < 0) {
    style["backgroundColor"] = "skyblue";
    style["color"] = "blue";
  }

  return (
    <div>
      <button onClick={minus}>-</button>
      <input style={style} type="text" value={count} />
      <button onClick={plus}>+</button>
    </div>
  );
};

export default AppFunc;
