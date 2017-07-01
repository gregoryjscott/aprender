var colors = require('colors/safe')
const words = require('./words')
const quiz = require('./quiz')

let verb

function askQuestion() {
  verb = words.verbs[random(words.verbs.length - 1)]

  console.log(`What is "to ${verb.english}" in Spanish?`)
}

function checkAnswer(answer) {
  if (answer === verb.spanish) {
    console.log(colors.green(`Si, Si, Si! "${answer}" is correct!\n`))
  } else {
    console.log(colors.red(`No. It's "${verb.spanish}".\n`))
  }
}

function random(max) {
  return Math.floor(Math.random() * max)
}

quiz.start(askQuestion, checkAnswer)
