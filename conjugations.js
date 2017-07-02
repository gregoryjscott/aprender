const colors = require('colors/safe')
const words = require('./words')
const random = require('./random')

let pronoun, verb

function askQuestion() {
  pronoun = random(words.pronouns).spanish
  verb = random(words.verbs).spanish

  console.log(`Conjugate the verb "${verb}" for the pronoun "${pronoun}".`)
}

function checkAnswer(answer) {
  const correctAnswer = determineCorrectAnswer(verb)

  if (answer === correctAnswer) {
    console.log(colors.green(`Si, Si, Si! "${pronoun} ${answer}" is correct!\n`))
  } else {
    console.log(colors.red(`No. It's ${pronoun} "${correctAnswer}".\n`))
  }
}

function determineCorrectAnswer() {
  const start = dropEnding(verb)
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

function dropEnding(verb) {
  return verb.substr(0, verb.length - 2)
}

function oops() {
  throw new Error(`Something went wrong.`)
}

module.exports = {
  name: 'Conjugations',
  askQuestion,
  checkAnswer
}
