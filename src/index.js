import readlineSync from 'readline-sync'

export default (task, data) => {
  console.log('Welcome to the Brain Games!')

  const userName = readlineSync.question('May I have your name? ')

  console.log(`Hello, ${userName}!`)
  console.log(task)
  for (let i = 0; i < 3; i += 1) {
    const [question, expectedValue] = data()

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('You answer: ')
    if (expectedValue !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedValue}".`)
      console.log(`Let's try again, ${userName}`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
}

// const randomNum = (a, b) => _.random(a, b)

// const welcome = () => console.log('Welcome to the Brain Games!')
// const task = (playerName, task) => {
//   console.log('Hello, ' + playerName + '!')
//   console.log(task)
// }

// const getAnswer = (random) => {
//   console.log('Question: ' + random)
//   let answer = readlineSync.question('You answer: ')
//   return answer
// }

// const wrongAnswer = (answer, result, userName) => {
//   console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`)
//   console.log(`Let's try again, ${userName}`)
// }

// const isPrime = (number) => {
//   const result = []
//   if (number < 2) {
//     return false
//   }
//   for (let i = 2; i <= number; i += 1) {
//     if (number % i === 0) {
//       result.push(i)
//     }
//   }
//   return result.length === 1
// }

// const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b))

// const gameEnd = (playerName) => {
//   console.log(`Congratulations, ${playerName}!`)
// }

// export {
//   randomNum,
//   getAnswer,
//   wrongAnswer,
//   gameEnd,
//   welcome,
//   task,
//   getGcd,
//   isPrime,
// }
