import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
        if (guesses[i]) {
          const guessMap = checkGuess(guesses[i].value, answer);

          return <Guess className="guess" key={i} guessMap={guessMap} />;
        } else {
          return <Guess className="guess" key={i} />;
        }
      })}
    </div>
  );
}

export default GuessResults;
