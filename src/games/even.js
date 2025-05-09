import readlineSync from "readline-sync";
import { randomNum, getAnswer, wrongAnswer, gameEnd } from "../index.js";

export default () => {
  console.log("Welcome to the Brain Games!");

  const playerName = readlineSync.question("May I have your name? ");

  console.log("Hello, " + playerName + "!");
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'");

  for (let i = 0; i < 3; i += 1) {
    let getNum = randomNum(1, 100);
    let answer = getAnswer(getNum);
    let result = getNum % 2 === 0 ? "yes" : "no";

    if (result === answer) {
      console.log("Correct!");
    } else {
      return wrongAnswer(answer, result, playerName);
    }
    gameEnd(playerName);
  }
};
