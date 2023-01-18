import wordList from "./wordsBank.txt?raw";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWords = async () => {
  let wordsSet = [];
  let todaysWord = "";
  await fetch(wordList)
    .then((res) => res.text())
    .then((data) => {
      wordsSet = data.split("\r\n");
      todaysWord = wordsSet[Math.floor(Math.random() * wordsSet.length)];
    });
  return { wordsSet, todaysWord };
};
