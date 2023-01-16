import { createContext, useContext, useState } from "react";
import { boardDefault } from "../Words";
const BoardContext = createContext(null);

const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault);
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
    setCurrAttempt({ attemptVal: currAttempt.attemptVal + 1, letterPos: 0 });
  };
  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectLetterHandler,
        onDeleteHandler,
        onEnterHandler,
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
