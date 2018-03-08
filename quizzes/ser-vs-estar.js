const colors = require('colors/safe')
const define = require('../define')
const random = require('../random')

const serVsEstar = [
  {
    question: 'Tells what something is',
    checkAnswer: answer => answerIsCorrect(answer, 'ser')
  },
  {
    question:
      "Used for permanent characteristics - like a person's job, nationality, or name",
    checkAnswer: answer => answerIsCorrect(answer, 'ser')
  },
  {
    question:
      'For indicationg where someone is from, what a object is made of, for ownership',
    checkAnswer: answer => answerIsCorrect(answer, 'ser')
  },
  {
    question: 'For telling time',
    checkAnswer: answer => answerIsCorrect(answer, 'ser')
  },
  {
    question: 'How something is in the moment',
    checkAnswer: answer => answerIsCorrect(answer, 'estar')
  },
  {
    question: 'Used for temporary conditions, like the water is cold',
    checkAnswer: answer => answerIsCorrect(answer, 'estar')
  },
  {
    question: 'For talking about your health',
    checkAnswer: answer => answerIsCorrect(answer, 'estar')
  },
  {
    question: 'For talking about where things are',
    checkAnswer: answer => answerIsCorrect(answer, 'estar')
  }
]

function answerIsCorrect(answer, expected) {
  if (answer.toLowerCase() === expected) {
    console.log(colors.green(`Sí, sí, sí! "${expected}" is correct!\n`))
    return true
  } else {
    console.log(colors.red(`No. The answer is "${expected}".\n`))
    return false
  }
}
let questionToAnswer

module.exports = {
  name: 'Ser vs. Estar',
  askQuestion: () => {
    questionToAnswer = random(serVsEstar)
    console.log(`Ser or Estar: "${questionToAnswer.question}".`)
  },
  checkAnswer: answer => questionToAnswer.checkAnswer(answer)
}
