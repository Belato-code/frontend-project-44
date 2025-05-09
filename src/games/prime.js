import readlineSync from "readline-sync";
import {
  randomNum,
  getAnswer,
  wrongAnswer,
  gameEnd,
  welcome,
  task,
  isPrime,
} from "../index.js";

const taskValue =
  "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

export default () => {
  welcome();

  const playerName = readlineSync.question("May I have your name? ");

  task(playerName, taskValue);

  for (let i = 0; i < 3; i += 1) {
    const random = randomNum(1, 100);
    const answer = getAnswer(random);
    const result = isPrime(random) ? "yes" : "no";

    if (result === answer) {
      console.log("Correct!");
    } else {
      return wrongAnswer(answer, result, playerName);
    }
  }
  return gameEnd(playerName);
};
