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

  console.log(`Conjugate "${verb.spanish}" for "${pronoun.spanish}" in preterit tense.`)
}

function checkAnswer(answer) {
  const correctAnswer = determineCorrectAnswer()

  if (forgive(answer) === forgive(correctAnswer)) {
    console.log(
      colors.green(`Sí, Sí, Sí! "${pronoun.spanish} ${correctAnswer}" is correct!\n`)
    )
    return true
  } else {
    console.log(colors.red(`No. It's ${pronoun.spanish} "${correctAnswer}".\n`))
    return false
  }
}

function determineCorrectAnswer() {
  const start = verb.spanish.substr(0, verb.spanish.length - 2)

  if (verb.spanish.endsWith('ar')) {
    switch (pronoun.spanish) {
      case 'Yo':
        return verb.preterit && verb.preterit.yo || `${start}é`
      case 'Tu':
        return verb.preterit && verb.preterit.tu || `${start}aste`
      case 'El':
      case 'Ella':
      case 'Usted':
        return verb.preterit && verb.preterit.elEllaUsted || `${start}ó`
      case 'Nosotros':
      case 'Nosotras':
        console.log('wat?')
        return verb.preterit && verb.preterit.nosotrosNosotras || `${start}amos`
      case 'Ellos':
      case 'Ellas':
      case 'Ustedes':
        return verb.preterit && verb.preterit.ellosEllasUstedes || `${start}aron`
      default:
        oops()
    }
  } else if (verb.spanish.endsWith('er') || verb.spanish.endsWith('ir')) {
    switch (pronoun.spanish) {
      case 'Yo':
        return verb.preterit && verb.preterit.yo || `${start}í`
      case 'Tu':
        return verb.preterit && verb.preterit.tu || `${start}íste`
      case 'El':
      case 'Ella':
      case 'Usted':
        return verb.preterit && verb.preterit.elEllaUsted || `${start}ió`
      case 'Nosotros':
      case 'Nosotras':
        return verb.preterit && verb.preterit.nosotrosNosotras || `${start}ímos`
      case 'Ellos':
      case 'Ellas':
      case 'Ustedes':
        return verb.preterit && verb.preterit.ellosEllasUstedes || `${start}ieron`
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
  name: 'Preterit Irregular Conjugations',
  askQuestion,
  checkAnswer
}
