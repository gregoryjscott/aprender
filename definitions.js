var colors = require('colors/safe')
const words = require('./words')
const quiz = require('./quiz')

const languages = [
  'Spanish',
  'English'
]

let verb, language, word, definition, yes

function askQuestion() {
  language = languages[random(languages.length - 1)]
  verb = words.verbs[random(words.verbs.length - 1)]

  if (language === 'Spanish') {
    yes = 'Si'
    word = verb.english
    definition = verb.spanish
  } else {
    yes = 'Yes'
    word = verb.spanish
    definition = verb.english
  }

  console.log(`What is "${word}" in ${language}?`)
}

function checkAnswer(answer) {
  if (answer === definition) {
    console.log(colors.green(`${yes}, ${yes}, ${yes}! "${answer}" is correct!\n`))
  } else {
    console.log(colors.red(`No. It's "${definition}".\n`))
  }
}

function random(max) {
  return Math.round(Math.random() * max)
}

quiz.start(askQuestion, checkAnswer)
