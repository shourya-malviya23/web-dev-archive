import React from "react";
import "./StateArray.css";

export default function StateArray() {
  /**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize
   * the state array as an empty array
   *
   * Don't worry about fixing `addFavoriteThing` quite yet.
   */
  const [myFavoriteThings, setMyFavouriteThings] = React.useState([]);

  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    // We'll work on this next, nothing to do here yet.
    setMyFavouriteThings((prev) => [...prev, "Test"]);
  }

  return (
    <div className="stateArray">
      <main>
        <button onClick={addFavoriteThing}>Add item</button>
        <section aria-live="polite">{thingsElements}</section>
      </main>
    </div>
  );
}
