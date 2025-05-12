import _ from 'lodash'
import getDevider from '../index.js'

const task = 'Find the greatest common divisor of given numbers.'
const minValue = 1
const maxValue = 100

const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b))

const getData = () => {
  const num1 = _.random(minValue, maxValue)
  const num2 = _.random(minValue, maxValue)
  const maxNum = Math.max(num1, num2)
  const minNum = Math.min(num1, num2)
  const question = `${num1} ${num2}`
  const expectedValue = getGCD(maxNum, minNum).toString()
  return [question, expectedValue]
}

export default () => {
  getDevider(task, getData)
}
