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
  console.log(`Conjugate "${verb.spanish}" for "${pronoun.spanish}" in imperfect tense.`)
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
        return verb.imperfect && verb.imperfect.yo || `${start}aba`
      case 'Tu':
        return verb.imperfect && verb.imperfect.tu || `${start}abas`
      case 'El':
      case 'Ella':
      case 'Usted':
        return verb.imperfect && verb.imperfect.elEllaUsted || `${start}aba`
      case 'Nosotros':
      case 'Nosotras':
        return verb.imperfect && verb.imperfect.nosotrosNosotras || `${start}ábamos`
      case 'Ellos':
      case 'Ellas':
      case 'Ustedes':
        return verb.imperfect && verb.imperfect.ellosEllasUstedes || `${start}aban`
      default:
        oops()
    }
  } else if (verb.spanish.endsWith('er') || verb.spanish.endsWith('ir')) {
    switch (pronoun.spanish) {
      case 'Yo':
        return verb.imperfect && verb.imperfect.yo || `${start}ía`
      case 'Tu':
        return verb.imperfect && verb.imperfect.tu || `${start}ías`
      case 'El':
      case 'Ella':
      case 'Usted':
        return verb.imperfect && verb.imperfect.elEllaUsted || `${start}ía`
      case 'Nosotros':
      case 'Nosotras':
        return verb.imperfect && verb.imperfect.nosotrosNosotras || `${start}íamos`
      case 'Ellos':
      case 'Ellas':
      case 'Ustedes':
        return verb.imperfect && verb.imperfect.ellosEllasUstedes || `${start}ían`
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
  name: 'Imperfect Irregular Conjugations',
  askQuestion,
  checkAnswer
}
