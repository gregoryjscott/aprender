const define = require('../define')

const verbs = [
  {
    spanish: 'querer',
    english: 'to want',
    present: {
      yo: 'quiero',
      tu: 'quieres',
      elEllaUsted: 'quiere',
      // nosotrosNosotras: 'queremos',
      ellosEllasUstedes: 'quieron'
    }
  },
  {
    spanish: 'dormir',
    english: 'to sleep',
    present: {
      yo: 'duermo',
      tu: 'duermos',
      elEllaUsted: 'duerme',
      // nosotrosNosotras: 'dormimos',
      ellosEllasUstedes: 'duermen'
    }
  },
  {
    spanish: 'repetir',
    english: 'to repeat',
    present: {
      yo: 'repito',
      tu: 'repites',
      elEllaUsted: 'repite',
      // nosotrosNosotras: 'repetimos',
      ellosEllasUstedes: 'repiten'
    }
  }
]
const definitions = define(verbs)

module.exports = {
  name: 'Stem-Changing Verbs',
  words: verbs,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
