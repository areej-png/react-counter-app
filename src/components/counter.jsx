import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>Counter</h2>
        <div className="count-display">{count}</div>
        <div className="button-group">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button className="reset-btn" onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
