import React from "react";
import { useBoard } from "../../context/BoardProvider";
import "./GameOver.css";
export const GameOver = () => {
  const { gameOver, currAttempt, correctWord } = useBoard();
  return (
    <div>
      {gameOver.guessedWord && (
        <>
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
        </>
      )}
      <h3>{gameOver.guessedWord ? "You Won!" : "Try again!"}</h3>
      <h2>Correct word is : {correctWord}</h2>
      <h3>
        {gameOver.guessedWord &&
          `you guessed in ${currAttempt.attemptVal} attempts.`}
      </h3>
    </div>
  );
};
