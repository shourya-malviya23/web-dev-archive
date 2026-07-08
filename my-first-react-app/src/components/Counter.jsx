import React from "react";
import "./Counter.css";

export function Counter() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="wrapper">
      <main className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button
            className="minus"
            onClick={subtract}
            aria-label="Decrease count"
          >
            –
          </button>
          <h2 className="count">{count}</h2>
          <button className="plus" onClick={add} aria-label="Increase count">
            +
          </button>
        </div>
      </main>
    </div>
  );
}
