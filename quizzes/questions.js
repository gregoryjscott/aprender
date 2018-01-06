const define = require('../define')

const questions = [
  { spanish: '¿Quien?', english: 'Who?' },
  { spanish: '¿Que?', english: 'What?' },
  { spanish: '¿Por que?', english: 'Why?' },
  { spanish: '¿Cual?', english: 'Which?' },
  { spanish: '¿Donde?', english: 'Where?' },
  { spanish: '¿Cuando?', english: 'When?' },
  { spanish: '¿Cuanto?', english: 'How much?' }, // or How many?
  { spanish: '¿Como?', english: 'How?' }
]
const definitions = define(questions)

module.exports = {
  name: 'Questions',
  words: questions,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
