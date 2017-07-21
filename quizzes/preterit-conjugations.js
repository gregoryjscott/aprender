const colors = require('colors/safe')
const pronouns = require('./pronouns')
const verbs = require('./verbs')
const random = require('../random')

let pronoun, verb

function askQuestion() {
  pronoun = random(pronouns.words).spanish
  verb = random(verbs.words).spanish

  console.log(`Conjugate "${verb}" for "${pronoun}" in preterit tense.`)
}

function checkAnswer(answer) {
  const correctAnswer = determineCorrectAnswer()

  if (answer === correctAnswer) {
    console.log(
      colors.green(`Si, Si, Si! "${pronoun} ${answer}" is correct!\n`)
    )
    return true
  } else {
    console.log(colors.red(`No. It's ${pronoun} "${correctAnswer}".\n`))
    return false
  }
}

function determineCorrectAnswer() {
  const start = verb.substr(0, verb.length - 2)
  let middle

  if (verb.endsWith('ar')) {
    switch (pronoun) {
      case 'Yo':
        return `${start}é`
      case 'Tu':
        return `${start}aste`
      case 'El':
      case 'Ella':
      case 'Usted':
        return `${start}ó`
      case 'Nosotros':
      case 'Nosotras':
        return `${start}amos`
      case 'Ellos':
      case 'Ellas':
      case 'Ustedes':
        return `${start}aron`
      default:
        oops()
    }
  } else if (verb.endsWith('er') || verb.endsWith('ir')) {
    switch (pronoun) {
      case 'Yo':
        return `${start}í`
      case 'Tu':
        return `${start}íste`
      case 'El':
      case 'Ella':
      case 'Usted':
        return `${start}ió`
      case 'Nosotros':
      case 'Nosotras':
        return `${start}ímos`
      case 'Ellos':
      case 'Ellas':
      case 'Ustedes':
        return `${start}ieron`
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
  name: 'Preterit Conjugations',
  askQuestion,
  checkAnswer
}