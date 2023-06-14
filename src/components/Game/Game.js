import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";
import { checkGuess } from "../../game-helpers";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });

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

  function newGame() {
    setGuesses([]);
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {isGameOver() && (
        <button
          onClick={() => {
            newGame();
          }}
        >
          Play again
        </button>
      )}
      <GuessInput addGuess={addGuess} gameOver={isGameOver()} />
      <Keyboard guesses={guesses} answer={answer} />
      {isGameOver() && (
        <Banner won={isGameWon()} guessCount={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
