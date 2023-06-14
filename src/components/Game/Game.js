import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";
import { checkGuess } from "../../game-helpers";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    if (isGameOver()) return;
    const newGuesses = [...guesses, { id: crypto.randomUUID(), value: guess }];
    console.log(newGuesses);
    setGuesses(newGuesses);
  }

  function isGameOver() {
    return guesses.length + 1 > NUM_OF_GUESSES_ALLOWED || isGameWon();
  }

  function isGameWon() {
    if (guesses.length === 0) return false;

    const checkLastResult = checkGuess(
      guesses[guesses.length - 1].value,
      answer
    );

    var allCorrect = true;

    checkLastResult.forEach((element) => {
      if (element.status !== "correct") allCorrect = false;
    });

    return allCorrect;
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} gameOver={isGameOver()} />
      <Keyboard guesses={guesses} answer={answer} />
      {isGameOver() && (
        <Banner won={isGameWon()} guessCount={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
