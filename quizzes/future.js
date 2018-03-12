const colors = require('colors/safe')
const forgive = require('../forgive')
const pronouns = require('./pronouns')
const picker = require('../picker')
const verbs = require('./verbs')

let pronoun, verb
const pronounPicker = picker(pronouns.words)
const verbPicker = picker(verbs.words)

function askQuestion() {
  pronoun = pronounPicker.next().spanish
  verb = verbPicker.next().spanish
  console.log(`Form "${verb}" for "${pronoun}" in future tense.`)
}

function checkAnswer(answer) {
  const correctAnswer = determineCorrectAnswer()
  if (forgive(answer) === forgive(correctAnswer)) {
    console.log(
      colors.green(`Sí, Sí, Sí! "${pronoun} ${correctAnswer}" is correct!\n`)
    )
    return true
  } else {
    console.log(colors.red(`No. It's ${pronoun} "${correctAnswer}".\n`))
    return false
  }
}

function determineCorrectAnswer() {
  switch (pronoun) {
    case 'Yo':
      return `${verb}é`
    case 'Tu':
      return `${verb}ás`
    case 'El':
    case 'Ella':
    case 'Usted':
      return `${verb}á`
    case 'Nosotros':
    case 'Nosotras':
      return `${verb}emos`
    case 'Ellos':
    case 'Ellas':
    case 'Ustedes':
      return `${verb}án`
    default:
      oops()
  }
}

function oops() {
  throw new Error(`Something went wrong.`)
}

module.exports = {
  name: 'Future',
  askQuestion,
  checkAnswer
}
