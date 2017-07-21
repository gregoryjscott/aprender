const define = require('../define')

const pronouns = [
  { spanish: 'Yo', english: 'I' },
  { spanish: 'Tu', english: 'You (informal)' },
  { spanish: 'El', english: 'He' },
  { spanish: 'Ella', english: 'She' },
  { spanish: 'Usted', english: 'You (formal)' },
  { spanish: 'Nosotros', english: 'We (male)' },
  { spanish: 'Nosotras', english: 'We (female)' },
  { spanish: 'Ellos', english: 'They (male)' },
  { spanish: 'Ellas', english: 'They (female)' },
  { spanish: 'Ustedes', english: "Y'all" }
]

const definitions = define(pronouns)

module.exports = {
  name: 'Pronouns',
  words: pronouns,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
