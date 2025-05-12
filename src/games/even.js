import _ from 'lodash'
import startGameEven from '../index.js'

const task = 'Answer "yes" if the number is even, otherwise answer "no".'
const minValue = 1
const maxValue = 100

const isEven = num => num % 2 === 0

const playGame = () => {
  const number = _.random(minValue, maxValue)
  const expectedValue = isEven(number) ? 'yes' : 'no'
  return [number, expectedValue]
}

export default () => {
  startGameEven(task, playGame)
}
