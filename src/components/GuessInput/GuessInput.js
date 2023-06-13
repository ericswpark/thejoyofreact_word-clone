import React from "react";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  function guessInputChanged(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function guessInputSubmitted(event) {
    event.preventDefault();

    addGuess(guess);
    setGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => guessInputSubmitted(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={(event) => {
          guessInputChanged(event);
        }}
      />
    </form>
  );
}

export default GuessInput;
