import { useEffect } from "react";
import { useBoard } from "../../context/BoardProvider";
export const Letter = ({ letterPos, attemptVal }) => {
  const { board, currAttempt, setDisabledArr, correctWord } = useBoard();
  const letter = board[attemptVal][letterPos];

  const correct = correctWord
    ? correctWord.toUpperCase()[letterPos] === letter
    : false;
  const almost = !correct && letter !== "" && correctWord?.includes(letter);
  const letterState =
    currAttempt.attemptVal > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledArr((prev) => [...prev, letter]);
    }
  }, [currAttempt.attemptVal, correct, almost, letter, setDisabledArr]);
  return (
    <div className="letter" id={letterState ? letterState : ""}>
      {letter}
    </div>
  );
};
