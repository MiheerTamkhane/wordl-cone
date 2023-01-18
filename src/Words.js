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
      wordsSet = data.split("\r\n");
      todaysWord = wordsSet[Math.floor(Math.random() * wordsSet.length)];
    });
  return { wordsSet, todaysWord };
};
