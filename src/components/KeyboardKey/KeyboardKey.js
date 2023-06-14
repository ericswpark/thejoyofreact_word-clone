import React from "react";

function KeyboardKey({ status, letter }) {
  return <span className={`key ${status}`}>{letter}</span>;
}

export default KeyboardKey;
