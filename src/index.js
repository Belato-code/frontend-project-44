import readlineSync from "readline-sync";

const randomNum = (max) => Math.ceil(Math.random() * max);

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

const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b));

const gameEnd = (playerName) =>
  console.log("Congratulations, " + playerName + "!");

export { randomNum, getAnswer, wrongAnswer, gameEnd, welcome, task, getGcd };
