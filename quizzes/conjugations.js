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

  console.log(`Conjugate the verb "${verb}" for the pronoun "${pronoun}".`)
}

function checkAnswer(answer) {
  const correctAnswer = determineCorrectAnswer()

  if (forgive(answer) === forgive(correctAnswer)) {
    console.log(
      colors.green(`Si, Si, Si! "${pronoun} ${correctAnswer}" is correct!\n`)
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
    middle = 'a'
  } else if (verb.endsWith('er')) {
    middle = 'e'
  } else if (verb.endsWith('ir')) {
    middle = pronoun.startsWith('Nosotr') ? 'i' : 'e'
  } else {
    oops()
  }

  switch (pronoun) {
    case 'Yo':
      return `${start}o`
    case 'Tu':
      return `${start}${middle}s`
    case 'El':
    case 'Ella':
    case 'Usted':
      return `${start}${middle}`
    case 'Nosotros':
    case 'Nosotras':
      return `${start}${middle}mos`
    case 'Ellos':
    case 'Ellas':
    case 'Ustedes':
      return `${start}${middle}n`
    default:
      oops()
  }
}

function oops() {
  throw new Error(`Something went wrong.`)
}

module.exports = {
  name: 'Conjugations',
  askQuestion,
  checkAnswer
}
