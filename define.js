const colors = require('colors/safe')
const random = require('./random')

function define(words) {
  const languages = [
    'Spanish',
    'English'
  ]

  let word, definition, yes

  return {
    askQuestion: () => {
      const language = random(languages)
      word = random(words)

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
    },

    checkAnswer: answer => {
      if (answer.toLowerCase() === definition.toLowerCase()) {
        console.log(colors.green(`${yes}, ${yes}, ${yes}! "${answer}" is correct!\n`))
      } else {
        console.log(colors.red(`No. It's "${definition}".\n`))
      }
    }
  }
}

module.exports = define
