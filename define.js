const colors = require('colors/safe')
const random = require('./random')
const picker = require('./picker')

module.exports = function (words) {
  const languages = [
    'Spanish',
    'English'
  ]

  let word, definition, yes
  const wordPicker = picker(words)

  return {
    askQuestion: () => {
      const language = random(languages)
      word = wordPicker.next()

      if (language === 'Spanish') {
        yes = 'Sí'
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
        return true
      } else {
        console.log(colors.red(`No. It's "${definition}".\n`))
        return false
      }
    }
  }
}
