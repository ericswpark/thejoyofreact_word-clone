import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
        if (guesses[i]) {
          return <Guess className="guess" key={i} word={guesses[i].value} />;
        } else {
          return <Guess className="guess" key={i} word={""} />;
        }
      })}
    </div>
  );
}

export default GuessResults;
