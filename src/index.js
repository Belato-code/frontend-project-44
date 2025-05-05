import readlineSync from "readline-sync";

const randomNum = () => Math.round(Math.random() * 100);
const welcome = () => console.log("Welcome to the Brain Games");
const task = (playerName, task) => {
  console.log("Hello, " + playerName + " !");
  console.log(task);
};

const getAnswer = (random) => {
  console.log("Question: " + random);
  let answer = readlineSync.question("You answer: ");
  return answer;
};

const wrongAnswer = (answer, result, userName) => {
  console.log(
    "'" +
      answer +
      "'" +
      " is wrong answer ;(. Correct answer was " +
      "'" +
      result +
      "'" +
      "." +
      "Let's try again, " +
      userName +
      "!"
  );
};

const gameEnd = (playerName) =>
  console.log("Congratulations, " + playerName + "!");

export { randomNum, getAnswer, wrongAnswer, gameEnd, welcome, task };
