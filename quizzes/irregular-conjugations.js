const colors = require('colors/safe')
const pronouns = require('./pronouns')
const verbs = require('./irregular-verbs')
const random = require('../random')

let verb

function askQuestion() {
  verb = random(verbs.words)

  console.log(
    `Conjugate the verb "${verb.spanish}" for the pronoun Yo.`
  )
}

function checkAnswer(answer) {
  const correctAnswer = determineCorrectAnswer()

  if (answer === correctAnswer) {
    console.log(
      colors.green(`Si, Si, Si! "Yo ${answer}" is correct!\n`)
    )
    return true
  } else {
    console.log(colors.red(`No. It's Yo "${correctAnswer}".\n`))
    return false
  }
}

function determineCorrectAnswer() {
  const start = verb.spanish.substr(0, verb.spanish.length - 2)

  return verb.yo || `${start}o`
}

module.exports = {
  name: 'Irregular Conjugations',
  askQuestion,
  checkAnswer
}
