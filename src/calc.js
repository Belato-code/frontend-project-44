import readlineSync from "readline-sync";
import {
  randomNum,
  getAnswer,
  wrongAnswer,
  gameEnd,
  welcome,
  task,
} from "../src/index.js";

const operands = ["+", "-", "*"];
const taskValue = "What is the result of the expression?";

export default () => {
  welcome();
  task(playerName, taskValue);

  const playerName = readlineSync.question("May I have your name? ");

  for (let i = 0; i < 3; i += 1) {
    const getNum1 = randomNum();
    const getNum2 = randomNum();
    const index = Math.round(Math.random() * 2);
    const operand = operands[index];
    const maxNum = Math.max(getNum1, getNum2);
    const minNum = Math.min(getNum1, getNum2);
    const operation = `${maxNum} ${operand} ${minNum}`;
    const answer = getAnswer(operation);
    const result = eval(operation);

    if (result === Number(answer)) {
      console.log("Correct!");
    } else {
      return wrongAnswer(answer, result, playerName);
    }
    gameEnd(playerName);
  }
};
