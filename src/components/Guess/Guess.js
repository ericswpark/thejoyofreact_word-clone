import React from "react";
import { range } from "../../utils";

function Guess({ guessMap = undefined }) {
  return (
    <p className="guess">
      {range(0, 5).map((i) => {
        if (guessMap && guessMap[i])
          return (
            <span className={`cell ${guessMap[i].status}`} key={i}>
              {guessMap[i].letter}
            </span>
          );
        else return <span className="cell" key={i}></span>;
      })}
    </p>
  );
}

export default Guess;
