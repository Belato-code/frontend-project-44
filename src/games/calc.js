import _ from 'lodash'
import makeCalc from '../index.js'

const operands = ['+', '-', '*']
const task = 'What is the result of the expression?'
const minValue = 0
const maxValue = 10
const minIndex = 0
const maxIndex = operands.length - 1

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const getData = () => {
  const getNum1 = _.random(minValue, maxValue)
  const getNum2 = _.random(minValue, maxValue)
  const index = _.random(minIndex, maxIndex)
  const operand = operands[index]
  const maxNum = Math.max(getNum1, getNum2)
  const minNum = Math.min(getNum1, getNum2)
  const question = `${maxNum} ${operand} ${minNum}`
  const expectedValue = ops[operand](maxNum, minNum).toString()

  return [question, expectedValue]
}

export default () => {
  makeCalc(task, getData)
}
