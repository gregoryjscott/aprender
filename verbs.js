const { verbs } = require('./words')
const define = require('./define')
const quiz = require('./quiz')

quiz.start(define(verbs))
