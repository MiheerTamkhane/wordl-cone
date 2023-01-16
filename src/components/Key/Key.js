import React from "react";
import { useBoard } from "../../context/BoardProvider";

export const Key = ({ keyVal, bigKey }) => {
  const { onSelectLetterHandler, onDeleteHandler, onEnterHandler } = useBoard();
  function selectLetter() {
    if (keyVal === "ENTER") {
      onEnterHandler();
    } else if (keyVal === "DELETE") {
      onDeleteHandler();
    } else {
      onSelectLetterHandler(keyVal);
    }
  }
  return (
    <div className={`key ${bigKey && "big"}`} onClick={selectLetter}>
      {keyVal}
    </div>
  );
};
