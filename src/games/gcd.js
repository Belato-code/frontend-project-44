import readlineSync from 'readline-sync'
import {
  randomNum,
  getAnswer,
  wrongAnswer,
  gameEnd,
  welcome,
  task,
  getGcd,
} from '../index.js'

const taskValue = 'Find the greatest common divisor of given numbers.'

export default () => {
  welcome()

  const playerName = readlineSync.question('May I have your name? ')

  task(playerName, taskValue)

  for (let i = 0; i < 3; i += 1) {
    const getNum1 = randomNum(1, 100)
    const getNum2 = randomNum(1, 100)
    const maxNum = Math.max(getNum1, getNum2)
    const minNum = Math.min(getNum1, getNum2)
    const operation = `${getNum1} ${getNum2}`
    const answer = getAnswer(operation)
    const result = getGcd(maxNum, minNum)

    if (result === Number(answer)) {
      console.log('Correct!')
    }
    else {
      return wrongAnswer(answer, result, playerName)
    }
  }
  return gameEnd(playerName)
}
