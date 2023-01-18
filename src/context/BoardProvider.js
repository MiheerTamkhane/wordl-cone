import { createContext, useContext, useEffect, useState } from "react";

import { generateWords, boardDefault } from "../Words";
const BoardContext = createContext(null);

const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault);
  const [words, setWords] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [disabledArr, setDisabledArr] = useState([]);
  const [gameOver, setGameOver] = useState({
    over: false,
    guessedWord: false,
  });
  const [currAttempt, setCurrAttempt] = useState({
    attemptVal: 0,
    letterPos: 0,
  });

  const onSelectLetterHandler = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attemptVal][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onDeleteHandler = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attemptVal][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onEnterHandler = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attemptVal][i];
    }
    console.log(words);
    console.log("current word : ", currWord, correctWord);
    console.log(words?.includes(currWord.toLowerCase()));
    if (words?.length > 0 && words?.includes(currWord.toLowerCase())) {
      setCurrAttempt({ attemptVal: currAttempt.attemptVal + 1, letterPos: 0 });
    } else {
      alert("Word not found in bank!");
    }

    if (currWord.toLowerCase() === correctWord.toLowerCase()) {
      setGameOver({ over: true, guessedWord: true });
      return;
    }
    if (currAttempt.attemptVal === 5) {
      setGameOver({ over: true, guessedWord: false });
    }
  };

  useEffect(() => {
    generateWords().then((result) => {
      console.log(result);
      setWords(result.wordsSet);
      setCorrectWord(result.todaysWord.toUpperCase());
    });
  }, []);

  console.log(correctWord);
  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
        words,
        setWords,
        currAttempt,
        disabledArr,
        gameOver,
        setGameOver,
        setDisabledArr,
        setCurrAttempt,
        onSelectLetterHandler,
        onDeleteHandler,
        onEnterHandler,
        correctWord,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

const useBoard = () => {
  const context = useContext(BoardContext);

  if (context === undefined) {
    throw new Error("Auth context error");
  }
  return context;
};

export { useBoard, BoardProvider };
