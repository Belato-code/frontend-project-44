import readlineSync from "readline-sync";
import {
  randomNum,
  getAnswer,
  wrongAnswer,
  gameEnd,
  welcome,
  task,
} from "../src/index.js";

const taskValue = "What number is missing in the progression?";

export default () => {
  welcome();

  const playerName = readlineSync.question("May I have your name? ");

  task(playerName, taskValue);

  for (let i = 0; i < 3; i += 1) {
    const index = randomNum(0, 9);
    const start = randomNum(1, 100);
    const limit = 10 * index + start;
    const arr = [];
    for (let i = start; i < limit; i += index) {
      arr.push(i);
    }

    const result = arr.splice(index, 1, "..");
    const question = arr.join(" ");
    const answer = getAnswer(question);

    if (result[0] === Number(answer)) {
      console.log("Correct!");
    } else {
      return wrongAnswer(answer, result[0], playerName);
    }
    gameEnd(playerName);
  }
};
