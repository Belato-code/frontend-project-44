import readlineSync from "readline-sync";

const randomNumber = () => Math.round(Math.random() * 100);

export default () => {
  console.log("Welcome to the Brain Games");
  let userName = readlineSync.question("May I have your name? ");

  console.log("Hello, " + userName + " !");
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'");

  for (let i = 0; i < 3; i += 1) {
    let getNum = randomNumber();
    let answer = readlineSync.question("Question: " + getNum + " ", {
      hideEchoBack: true,
      mask: "",
    });
    console.log("Your answer: " + answer);
    let result = getNum % 2 === 0 ? "yes" : "no";
    if (result === answer) {
      console.log("Correct!");
    } else {
      return console.log(
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
    }
  }
  console.log("Congratulations, " + userName + "!");
};
