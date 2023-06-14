import React from "react";
import { checkGuess } from "../../game-helpers";
import KeyboardKey from "../KeyboardKey/KeyboardKey";

function Keyboard({ guesses, answer }) {
  function getKeyStatus(letter) {
    var keyStatus = undefined;

    guesses.forEach((guess) => {
      checkGuess(guess.value, answer).forEach((guessLetter) => {
        if (guessLetter.letter === letter) {
          // Only upgrade the status of the key:
          // undefined -> incorrect -> misplaced -> correct
          if (keyStatus === undefined && guessLetter.status !== undefined) {
            keyStatus = guessLetter.status;
          } else if (keyStatus === "incorrect") {
            if (
              guessLetter.status === "misplaced" ||
              guessLetter.status === "correct"
            )
              keyStatus = guessLetter.status;
          } else if (
            keyStatus === "misplaced" &&
            guessLetter.status === "correct"
          ) {
            keyStatus = guessLetter.status;
          }
        }
      });
    });

    return keyStatus;
  }

  const TOP_ROW = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const MIDDLE_ROW = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const BOTTOM_ROW = ["Z", "X", "C", "V", "B", "N", "M"];

  const ROWS = [TOP_ROW, MIDDLE_ROW, BOTTOM_ROW];

  return (
    <div className="keyboard">
      {ROWS.map((row, rowIndex) => {
        return (
          <div className="keyboard row" key={rowIndex}>
            {row.map((key, keyIndex) => {
              return (
                <KeyboardKey
                  status={getKeyStatus(key)}
                  letter={key}
                  key={keyIndex}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
