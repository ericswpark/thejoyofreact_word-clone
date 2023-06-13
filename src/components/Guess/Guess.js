import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(0, 5).map((i) => {
        return (
          <span className="cell" key={i}>
            {word[i]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
