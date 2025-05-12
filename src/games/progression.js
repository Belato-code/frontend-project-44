import _ from 'lodash'
import makeProgression from '../index.js'

const task = 'What number is missing in the progression?'
const minIndex = 1
const maxIndex = 9
const startMin = 1
const startMax = 100

const getData = () => {
  const arr = []
  const index = _.random(minIndex, maxIndex)
  const start = _.random(startMin, startMax)
  const limit = 10 * index + start

  for (let i = start; i < limit; i += index) {
    arr.push(i)
  }

  const result = arr.splice(index, 1, '..')
  const question = arr.join(' ')
  const expectedValue = result.toString()
  return [question, expectedValue]
}

export default () => {
  makeProgression(task, getData)
}
