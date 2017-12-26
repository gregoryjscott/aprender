const define = require('../define')

const verbs = [
  {
    spanish: 'hacer',
    english: 'to do', // to make
    present: {
      yo: 'hago'
    }
  },
  {
    spanish: 'poner',
    english: 'to put',
    present: {
      yo: 'pongo'
    }
  },
  {
    spanish: 'salir',
    english: 'to go out',
    present: {
      yo: 'salgo'
    }
  },
  {
    spanish: 'caer',
    english: 'to fall',
    present: {
      yo: 'me caigo'
    }
  },
  {
    spanish: 'traer',
    english: 'to bring',
    present: {
      yo: 'traigo'
    }
  },
  {
    spanish: 'venir',
    english: 'to come',
    present: {
      yo: 'vengo'
    }
  },
  {
    spanish: 'tener',
    english: 'to have',
    present: {
      yo: 'tengo',
      tu: 'tienes',
      elEllaUsted: 'tiene',
      nosotrosNosotras: 'tenemos',
      ellosEllasUstedes: 'tienen'
    }
  },
  {
    spanish: 'decir',
    english: 'to say',
    present: {
      yo: 'digo'
    }
  },
  {
    spanish: 'oir',
    english: 'to listen',
    present: {
      yo: 'oigo'
    }
  },
  {
    spanish: 'ver',
    english: 'to see',
    present: {
      yo: 'veo'
    }
  },
  {
    spanish: 'saber',
    english: 'to know facts',
    present: {
      yo: 'se'
    }
  },
  {
    spanish: 'conocer',
    english: 'to be familiar',
    present: {
      yo: 'conozco'
    }
  },
  {
    spanish: 'dar',
    english: 'to give',
    present: {
      yo: 'doy'
    }
  },
  {
    spanish: 'ser',
    english: 'to be (permanent)',
    present: {
      yo: 'soy',
      tu: 'eres',
      elEllaUsted: 'es',
      nosotrosNosotras: 'somos',
      ellosEllasUstedes: 'son'
    }
  },
  {
    spanish: 'estar',
    english: 'to be (temporary)',
    present: {
      yo: 'estoy'
    }
  },
  {
    spanish: 'poder',
    english: 'to be able',
    present: {
      yo: 'puedo',
      tu: 'puedes',
      elEllaUsted: 'puede',
      nosotrosNosotras: 'podemos',
      ellosEllasUstedes: 'pueden'
    }
  },
  {
    spanish: 'ir',
    english: 'to go',
    present: {
      yo: 'voy',
      tu: 'vas',
      elEllaUsted: 'va',
      nosotrosNosotras: 'vamos',
      ellosEllasUstedes: 'van'
    }
  }
]

const definitions = define(verbs)

module.exports = {
  name: 'Irregular Verbs',
  words: verbs,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}
