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
  let todaysWord;
  await fetch(wordsBank)
    .then((res) => res.text())
    .then((data) => {
      const wordArr = data.split("\r\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordsSet = new Set(wordArr);
    });
  return { wordsSet, todaysWord };
};
