import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    if (guesses.length + 1 > NUM_OF_GUESSES_ALLOWED) return;
    const newGuesses = [...guesses, { id: crypto.randomUUID(), value: guess }];
    console.log(newGuesses);
    setGuesses(newGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
