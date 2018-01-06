const define = require('../define')

const verbs = [
  {
    spanish: 'hacer',
    english: 'to do', // to make
    present: {
      yo: 'hago'
    },
    preterit: {
      yo: 'hice',
      tu: 'hiciste',
      elEllaUsted: 'hizo',
      nosotrosNosotras: 'hicimos',
      ellosEllasUstedes: 'hicieron'
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
    },
    preterit: {
      yo: 'tuve',
      tu: 'tuviste',
      elEllaUsted: 'tuvo',
      nosotrosNosotras: 'tuvimos',
      ellosEllasUstedes: 'tuvieron'
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
    },
    imperfect: {
      yo: 'veía',
      tu: 'veías',
      elEllaUsted: 'veía',
      nosotrosNosotras: 'veíamos',
      ellosEllasUstedes: 'veían'
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
    },
    preterit: {
      yo: 'fui',
      tu: 'fuiste',
      elEllaUsted: 'fue',
      nosotrosNosotras: 'fuimos',
      ellosEllasUstedes: 'fueron'
    },
    imperfect: {
      yo: 'era',
      tu: 'eras',
      elEllaUsted: 'era',
      nosotrosNosotras: 'eramos',
      ellosEllasUstedes: 'eran'
    }
  },
  {
    spanish: 'estar',
    english: 'to be (temporary)',
    present: {
      yo: 'estoy'
    },
    preterit: {
      yo: 'estuve',
      tu: 'estuviste',
      elEllaUsted: 'estuvo',
      nosotrosNosotras: 'estuvimos',
      ellosEllasUstedes: 'estuvieron'
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
    },
    preterit: {
      yo: 'fui',
      tu: 'fuiste',
      elEllaUsted: 'fue',
      nosotrosNosotras: 'fuimos',
      ellosEllasUstedes: 'fueron'
    },
    imperfect: {
      yo: 'iba',
      tu: 'ibas',
      elEllaUsted: 'iba',
      nosotrosNosotras: 'ibamos',
      ellosEllasUstedes: 'iban'
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
