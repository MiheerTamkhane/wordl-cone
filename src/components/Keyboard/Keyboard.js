import { useCallback, useEffect } from "react";
import { Key } from "../Key/Key";
import { useBoard } from "../../context/BoardProvider";
export const Keyboard = () => {
  const { onSelectLetterHandler, onDeleteHandler, onEnterHandler } = useBoard();
  const lineOneKeys = splitIntoArray("qwertyuiop");
  const lineTwoKeys = splitIntoArray("asdfghjkl");
  const lineThreeKeys = splitIntoArray("zxcvbnm");

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnterHandler();
    } else if (event.key === "Backspace") {
      onDeleteHandler();
    } else {
      const allCombined = [...lineOneKeys, ...lineTwoKeys, ...lineThreeKeys];
      allCombined.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelectLetterHandler(key);
        }
      });
    }
  });

  function splitIntoArray(str) {
    return str.split("").map((item) => item.toUpperCase());
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {lineOneKeys.map((key) => (
          <Key key={key} keyVal={key} />
        ))}
      </div>
      <div className="line2">
        {lineTwoKeys.map((key) => (
          <Key key={key} keyVal={key} />
        ))}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey={true} />
        {lineThreeKeys.map((key) => (
          <Key key={key} keyVal={key} />
        ))}
        <Key keyVal={"DELETE"} bigKey={true} />
      </div>
    </div>
  );
};
