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

const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

export default () => {
  welcome();

  const playerName = readlineSync.question("May I have your name? ");

  task(playerName, taskValue);

  for (let i = 0; i < 3; i += 1) {
    const getNum1 = randomNum(10);
    const getNum2 = randomNum(10);
    const index = randomNum(2);
    const operand = operands[index];
    const maxNum = Math.max(getNum1, getNum2);
    const minNum = Math.min(getNum1, getNum2);
    const operation = `${maxNum} ${operand} ${minNum}`;
    const answer = getAnswer(operation);
    const result = ops[operand](maxNum, minNum);

    if (result === Number(answer)) {
      console.log("Correct!");
    } else {
      return wrongAnswer(answer, result, playerName);
    }
    gameEnd(playerName);
  }
};
