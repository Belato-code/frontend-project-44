import _ from 'lodash'
import startPrime from '../index.js'

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const minValue = 1
const maxValue = 100

const isPrime = (num) => {
  if (num < 2) {
    return false
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const getData = () => {
  const question = _.random(minValue, maxValue)
  const expectedValue = isPrime(question) ? 'yes' : 'no'
  return [question, expectedValue]
}

export default () => {
  startPrime(task, getData)
}
