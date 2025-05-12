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
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
}
