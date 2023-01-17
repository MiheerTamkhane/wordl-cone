import wordsBank from "./wordsBank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWords = async () => {
  let wordsSet;
  await fetch(wordsBank)
    .then((res) => res.text())
    .then((data) => {
      const wordArr = data.split("\r\n");
      wordsSet = new Set(wordArr);
    });
  return wordsSet;
};
