const colors = require('colors/safe')
const define = require('../define')
const random = require('../random')

const saberVsConocer = [
  {
    question: 'Used for facts, information, or knowledge that can be stated.',
    checkAnswer: answer => answerIsCorrect(answer, 'saber')
  },
  {
    question: "Do you know Marta's address?",
    checkAnswer: answer => answerIsCorrect(answer, 'saber')
  },
  {
    question: 'Do you know how to cook?',
    checkAnswer: answer => answerIsCorrect(answer, 'saber')
  },
  {
    question: 'To know a person or to be familiar with a place.',
    checkAnswer: answer => answerIsCorrect(answer, 'conocer')
  },
  {
    question: 'Do you know Pedro Gómez?',
    checkAnswer: answer => answerIsCorrect(answer, 'conocer')
  },
  {
    question: 'Are you familiar with the university?',
    checkAnswer: answer => answerIsCorrect(answer, 'conocer')
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
  name: 'Saber vs. Conocer',
  askQuestion: () => {
    questionToAnswer = random(saberVsConocer)
    console.log(`Saber or Conocer: "${questionToAnswer.question}".`)
  },
  checkAnswer: answer => questionToAnswer.checkAnswer(answer)
}
