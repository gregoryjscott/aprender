const colors = require('colors/safe')
const words = require('./words')
const quiz = require('./quiz')

let pronoun, verb

function askQuestion() {
  pronoun = words.pronouns[random(words.pronouns.length - 1)]
  verb = words.verbs[random(words.verbs.length - 1)]

  console.log(`Conjugate the verb "${verb}" for the pronoun "${pronoun}".`)
}

function checkAnswer(answer) {
  let correctAnswer = determineCorrectAnswer(verb)

  if (answer === correctAnswer) {
    console.log(colors.green(`Si, Si, Si! "${pronoun} ${answer}" is correct!\n`))
  } else {
    console.log(colors.red(`No. It's ${pronoun} "${correctAnswer}".\n`))
  }
}

function determineCorrectAnswer() {
  let start, middle

  start = dropEnding(verb)

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

function random(max) {
  return Math.floor(Math.random() * max)
}

function oops() {
  throw new Error(`Something went wrong.`)
}

quiz.start(askQuestion, checkAnswer)
