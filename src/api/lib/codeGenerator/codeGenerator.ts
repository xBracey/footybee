import { words } from "./words";

export const generateWords = () =>
  Array(4)
    .fill(null)
    .map((value, index) => {
      const word = words[Math.floor(Math.random() * words.length)];
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
