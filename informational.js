const define = require('./define')

const informational = [
  { spanish: 'Como se llama?', english: 'What is your name?' },
  { spanish: 'Como esta?', english: 'How are you?' },
  { spanish: 'Donde vive?', english: 'Where do you live?' },
  { spanish: 'De donde es?', english: 'Where are you from?' },
  { spanish: 'Cual es su numero de telefono?', english: 'What is your telephone number?' },
  { spanish: 'Cual es su dirrecion?', english: 'What is your address?' }
]

const definitions = define(informational)

module.exports = {
  name: 'Informational',
  words: informational,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
