const colors = require('colors/safe')
const forgive = require('../forgive')
const pronouns = require('./pronouns')
const picker = require('../picker')
const verbs = require('./irregular-verbs')

let pronoun, verb
const pronounPicker = picker(pronouns.words)
const verbPicker = picker(verbs.words)

function askQuestion() {
  pronoun = pronounPicker.next()
  verb = verbPicker.next()

  console.log(
    `Conjugate the verb "${verb.spanish}" for the pronoun "${pronoun.spanish}".`
  )
}

function checkAnswer(answer) {
  const correctAnswer = determineCorrectAnswer()

  if (forgive(answer) === forgive(correctAnswer)) {
    console.log(
      colors.green(
        `Sí, Sí, Sí! "${pronoun.spanish} ${correctAnswer}" is correct!\n`
      )
    )
    return true
  } else {
    console.log(colors.red(`No. It's ${pronoun.spanish} "${correctAnswer}".\n`))
    return false
  }
}

function determineCorrectAnswer() {
  const start = verb.spanish.substr(0, verb.spanish.length - 2)
  let middle

  if (verb.spanish.endsWith('ar')) {
    middle = 'a'
  } else if (verb.spanish.endsWith('er')) {
    middle = 'e'
  } else if (verb.spanish.endsWith('ir')) {
    middle = pronoun.spanish.startsWith('Nosotr') ? 'i' : 'e'
  } else {
    oops()
  }

  switch (pronoun.spanish) {
    case 'Yo':
      return verb.present && verb.present.yo || `${start}o`
    case 'Tu':
      return verb.present && verb.present.tu || `${start}${middle}s`
    case 'El':
    case 'Ella':
    case 'Usted':
      return verb.present && verb.present.elEllaUsted || `${start}${middle}`
    case 'Nosotros':
    case 'Nosotras':
      return verb.present && verb.present.nosotrosNosotras || `${start}${middle}mos`
    case 'Ellos':
    case 'Ellas':
    case 'Ustedes':
      return verb.present && verb.present.ellosEllasUstedes || `${start}${middle}n`
    default:
      oops()
  }
}

function oops() {
  throw new Error(`Something went wrong.`)
}

module.exports = {
  name: 'Irregular Conjugations',
  askQuestion,
  checkAnswer
}
