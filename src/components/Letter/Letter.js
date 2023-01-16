import React from "react";
import { useBoard } from "../../context/BoardProvider";
export const Letter = ({ letterPos, attemptVal }) => {
  const { board } = useBoard();
  const letter = board[attemptVal][letterPos];

  return <div className="letter">{letter}</div>;
};
