const define = require('../define')

const family = [
  { spanish: 'la abuela', english: 'grandmother' },
  { spanish: 'el abuelo', english: 'grandfather' },
  { spanish: 'los abuelos', english: 'grandparents' },
  { spanish: 'la esposa', english: 'wife' },
  { spanish: 'el esposo', english: 'husband' },
  { spanish: 'la familia', english: 'family' },
  { spanish: 'la madre', english: 'mother' },
  { spanish: 'el padre', english: 'father' },
  { spanish: 'los padres', english: 'parents' },
  { spanish: 'la hermana', english: 'sister' },
  { spanish: 'el hermano', english: 'brother' },
  { spanish: 'los hermanos', english: 'siblings' },
  { spanish: 'la hija', english: 'daughter' },
  { spanish: 'el hijo', english: 'son' },
  { spanish: 'los hijos', english: 'children' },
  { spanish: 'la nieta', english: 'granddaughter' },
  { spanish: 'el nieto', english: 'grandson' },
  { spanish: 'los nietos', english: 'grandchildren' },
  { spanish: 'el pariente', english: 'relative (masc)' },
  { spanish: 'la pariente', english: 'relative (fem)' },
  { spanish: 'la prima', english: 'cousin (fem)' },
  { spanish: 'el primo', english: 'cousin (masc)' },
  { spanish: 'la sobrina', english: 'niece' },
  { spanish: 'el sobrino', english: 'nephew' },
  { spanish: 'la tia', english: 'aunt' },
  { spanish: 'el tio', english: 'uncle' }
]
const definitions = define(family)

module.exports = {
  name: 'Family',
  words: family,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
