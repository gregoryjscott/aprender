const define = require('../define')

const time = [
  { spanish: 'Es la una', english: "It's one o'clock" },
  { spanish: 'Son las dos', english: "It's two o'clock" },
  { spanish: 'Son las cinco', english: "It's five o'clock" },
  { spanish: 'Son las diez', english: "It's 10 o'clock" },
  { spanish: 'Es la una y viente', english: "It's 1:20" },
  { spanish: 'Son las cuatro y cinco', english: "It's 4:05" },
  { spanish: 'Son las ocho y cincuenta', english: "It's 8:50" },
  { spanish: 'Son las doce y media', english: "It's half past 12:00" },
  { spanish: 'Son la nueve y cuarto', english: "It's quarter past 9:00" },
  { spanish: 'Son las dos menos cinco', english: "It's 2:00 minus 5 minutes" },
  { spanish: 'Son cinco para las dos', english: "It's 5 minutes until 2:00" },
  { spanish: 'Son las once de la mañana', english: "It's 11:00 in the morning" },
  { spanish: 'Son las siete de la tarde', english: "It's 7:00 in the afternoon" },
  { spanish: 'Son las diez de la noche', english: "It's 10:00 in the evening" },
  { spanish: 'Es mediodía', english: "It's noon" },
  { spanish: 'Es medianoche', english: "It's midnight" }
]
const definitions = define(time)

module.exports = {
  name: 'Time',
  words: time,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
