import React from 'react';

// The Alphabet component renders the letters of the alphabet as clickable elements
// for the user and indicates previous correct & incorrect choices.

function Alphabet(props) {

  // It would be cheaper to do "abcd...".split(""), but I'm trying to look clever here.
  const alphabet = [...Array(26).keys()].map(num => String.fromCharCode(num + 97));

  let isGameRunning = props.gameStatus === "running";

  return (
    <div className={isGameRunning ? "alphabet" : "hide"}>
      {alphabet.map(letter => {
        let classname = "";
        if (props.lettersCorrect.includes(letter)) classname = "correct";
        if (props.lettersWrong.includes(letter)) classname = "wrong";
        return (
          <h4 
            key={letter} 
            id={letter}
            onClick={e => props.handleAlphabetGuess(e)}
            className={classname}
          >
            {letter}
          </h4>
        );
      })}
    </div>
  );
}

export default Alphabet;