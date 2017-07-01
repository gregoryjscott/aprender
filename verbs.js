const words = require('./words')
const define = require('./define')
const quiz = require('./quiz')

const definitions = define(words.verbs)

quiz.start(definitions.askQuestion, definitions.checkAnswer)
