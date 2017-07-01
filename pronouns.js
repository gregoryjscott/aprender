const words = require('./words')
const define = require('./define')
const quiz = require('./quiz')

const definitions = define(words.pronouns)

quiz.start(definitions.askQuestion, definitions.checkAnswer)
