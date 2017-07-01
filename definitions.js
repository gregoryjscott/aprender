var colors = require('colors/safe')
const words = require('./words')
const quiz = require('./quiz')

const languages = [
  'Spanish',
  'English'
]

const wordTypes = [
  'pronoun',
  'verb'
]

let language, word, definition, yes

function askQuestion() {
  language = languages[random(languages.length - 1)]
  wordType = wordTypes[random(wordTypes.length - 1)]

  if (wordType === 'pronoun') {
    word = words.pronouns[random(words.pronouns.length - 1)]
  } else {
    word = words.verbs[random(words.verbs.length - 1)]
  }

  if (language === 'Spanish') {
    yes = 'Si'
    definition = word.spanish
    word = word.english
  } else {
    yes = 'Yes'
    definition = word.english
    word = word.spanish
  }

  console.log(`What is "${word}" in ${language}?`)
}

function checkAnswer(answer) {
  if (answer.toLowerCase() === definition.toLowerCase()) {
    console.log(colors.green(`${yes}, ${yes}, ${yes}! "${answer}" is correct!\n`))
  } else {
    console.log(colors.red(`No. It's "${definition}".\n`))
  }
}

function random(max) {
  return Math.round(Math.random() * max)
}

quiz.start(askQuestion, checkAnswer)
