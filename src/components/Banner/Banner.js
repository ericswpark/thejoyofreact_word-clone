import React from "react";

function Banner({ won, guessCount, answer }) {
  if (won) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {guessCount} {guessCount === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
