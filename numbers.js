var colors = require('colors/safe')
const words = require('./words')
const define = require('./define')
const quiz = require('./quiz')

const definitions = define(words.numbers)

quiz.start(definitions.askQuestion, definitions.checkAnswer)
