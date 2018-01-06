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
  console.log(`Conjugate "${verb}" for "${pronoun}" in imperfect tense.`)
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
  const start = verb.substr(0, verb.length - 2)
  if (verb.endsWith('ar')) {
    switch (pronoun) {
      case 'Yo':
        return `${start}aba`
      case 'Tu':
        return `${start}abas`
      case 'El':
      case 'Ella':
      case 'Usted':
        return `${start}aba`
      case 'Nosotros':
      case 'Nosotras':
        return `${start}ábamos`
      case 'Ellos':
      case 'Ellas':
      case 'Ustedes':
        return `${start}aban`
      default:
        oops()
    }
  } else if (verb.endsWith('er') || verb.endsWith('ir')) {
    switch (pronoun) {
      case 'Yo':
        return `${start}ía`
      case 'Tu':
        return `${start}ías`
      case 'El':
      case 'Ella':
      case 'Usted':
        return `${start}ía`
      case 'Nosotros':
      case 'Nosotras':
        return `${start}íamos`
      case 'Ellos':
      case 'Ellas':
      case 'Ustedes':
        return `${start}ían`
      default:
        oops()
    }
  } else {
    oops()
  }
}

function oops() {
  throw new Error(`Something went wrong.`)
}

module.exports = {
  name: 'Imperfect Conjugations',
  askQuestion,
  checkAnswer
}
