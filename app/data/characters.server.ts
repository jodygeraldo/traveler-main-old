import { CharacterName, ICharacter, ITraveler } from '~/types/character'

const characterMap = new Map<CharacterName, ICharacter | ITraveler>()

characterMap.set('Traveler', {
  name: 'Traveler',
  vision: ['Anemo', 'Geo', 'Electro'],
  rarity: 5,
  weapon_type: 'Sword',
  materials: {
    talent: {
      anemo: {
        book: 'Freedom',
        boss: "Dvalin's Sigh",
      },
      geo: {
        book: 'Prosperity',
        boss: 'Tail of Boreas',
      },
      electro: {
        book: 'Transience',
        boss: "Dragon Lord's Crown",
      },
    },
    ascension: {
      material: 'Brilliant Diamond',
      local: 'Windwheel Aster',
      common: 'Hilichurl Mask',
    },
  },
  level: {
    character: 1,
    ascension: 0,
    talent: {
      anemo: [1, 1, 1],
      geo: [1, 1, 1],
      electro: [1, 1, 1],
    },
  },
  own: true,
})

characterMap.set('Albedo', {
  name: 'Albedo',
  vision: 'Geo',
  rarity: 5,
  weapon_type: 'Sword',
  materials: {
    talent: {
      book: 'Ballad',
      boss: 'Tusk of Monoceros Caeli',
    },
    ascension: {
      material: 'Prithiva Topaz',
      boss: 'Basalt Pillar',
      local: 'Cecilia',
      common: 'Samachurl Scrolls',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Aloy', {
  name: 'Aloy',
  vision: 'Cryo',
  rarity: 'aloy',
  weapon_type: 'Bow',
  materials: {
    talent: {
      book: 'Freedom',
      boss: 'Molten Moment',
    },
    ascension: {
      material: 'Shivada Jade',
      boss: 'Crystalline Bloom',
      local: 'Crystal Marrow',
      common: 'Spectral Cores',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Amber', {
  name: 'Amber',
  vision: 'Pyro',
  rarity: 4,
  weapon_type: 'Bow',
  materials: {
    talent: {
      book: 'Freedom',
      boss: "Dvalin's Sigh",
    },
    ascension: {
      material: 'Agnidus Agate',
      boss: 'Everflame Seed',
      local: 'Small Lamp Grass',
      common: 'Hilichurl Arrowheads',
    },
  },
  own: true,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Arataki Itto', {
  name: 'Arataki Itto',
  vision: 'Geo',
  rarity: 5,
  weapon_type: 'Claymore',

  materials: {
    talent: {
      book: 'Elegance',
      boss: 'Ashen Heart',
    },
    ascension: {
      material: 'Prithiva Topaz',
      boss: 'Riftborn Regalia',
      local: 'Onikabuto',
      common: 'Slime',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Barbara', {
  name: 'Barbara',
  vision: 'Hydro',
  rarity: 4,
  weapon_type: 'Catalyst',
  materials: {
    talent: {
      book: 'Freedom',
      boss: 'Ring of Boreas',
    },
    ascension: {
      material: 'Varunada Lazurite',
      boss: 'Cleansing Heart',
      local: 'Philanemo Mushroom',
      common: 'Samachurl Scrolls',
    },
  },
  own: true,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Beidou', {
  name: 'Beidou',
  vision: 'Electro',
  rarity: 4,
  weapon_type: 'Claymore',
  materials: {
    talent: {
      book: 'Gold',
      boss: "Dvalin's Sigh",
    },
    ascension: {
      material: 'Vajrada Amethyst',
      boss: 'Lightning Prism',
      local: 'Noctilucous Jade',
      common: 'Treasure Hoarder Insignias',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Bennett', {
  name: 'Bennett',
  vision: 'Pyro',
  rarity: 4,
  weapon_type: 'Sword',
  materials: {
    talent: {
      book: 'Resistance',
      boss: "Dvalin's Plume",
    },
    ascension: {
      material: 'Agnidus Agate',
      boss: 'Everflame Seed',
      local: 'Windwheel Aster',
      common: 'Treasure Hoarder Insignias',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Chongyun', {
  name: 'Chongyun',
  vision: 'Cryo',
  rarity: 4,
  weapon_type: 'Claymore',
  materials: {
    talent: {
      book: 'Diligence',
      boss: "Dvalin's Sigh",
    },
    ascension: {
      material: 'Shivada Jade',
      boss: 'Hoarfrost Core',
      local: 'Cor Lapis',
      common: 'Hilichurl Masks',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Diluc', {
  name: 'Diluc',
  vision: 'Pyro',
  rarity: 5,
  weapon_type: 'Claymore',
  materials: {
    talent: {
      book: 'Resistance',
      boss: "Dvalin's Plume",
    },
    ascension: {
      material: 'Agnidus Agate',
      boss: 'Everflame Seed',
      local: 'Small Lamp Grass',
      common: 'Fatui Insignia',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Diona', {
  name: 'Diona',
  vision: 'Cryo',
  rarity: 4,
  weapon_type: 'Bow',
  materials: {
    talent: {
      book: 'Freedom',
      boss: 'Shard of a Foul Legacy',
    },
    ascension: {
      material: 'Shivada Jade',
      boss: 'Hoarfrost Core',
      local: 'Calla Lily',
      common: 'Hilichurl Arrowheads',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Eula', {
  name: 'Eula',
  vision: 'Cryo',
  rarity: 5,
  weapon_type: 'Claymore',
  materials: {
    talent: {
      book: 'Resistance',
      boss: "Dragon Lord's Crown",
    },
    ascension: {
      material: 'Shivada Jade',
      boss: 'Crystalline Bloom',
      local: 'Dandelion',
      common: 'Hilichurl Masks',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Fischl', {
  name: 'Fischl',
  vision: 'Electro',
  rarity: 4,
  weapon_type: 'Bow',
  materials: {
    talent: {
      book: 'Ballad',
      boss: 'Spirit Locket of Boreas',
    },
    ascension: {
      material: 'Vajrada Amethyst',
      boss: 'Lightning Prism',
      local: 'Small Lamp Grass',
      common: 'Hilichurl Arrowheads',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Ganyu', {
  name: 'Ganyu',
  vision: 'Cryo',
  rarity: 5,
  weapon_type: 'Bow',
  materials: {
    talent: {
      book: 'Diligence',
      boss: 'Shadow of the Warrior',
    },
    ascension: {
      material: 'Shivada Jade',
      boss: 'Hoarfrost Core',
      local: 'Qingxin',
      common: 'Whopperflower Nectar',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Gorou', {
  name: 'Gorou',
  vision: 'Geo',
  rarity: 4,
  weapon_type: 'Sword',
  materials: {
    talent: {
      book: 'Light',
      boss: 'Molten Moment',
    },
    ascension: {
      material: 'Prithiva Topaz',
      boss: 'Perpetual Heart',
      local: 'Sango Pearl',
      common: 'Spectral Cores',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Hu Tao', {
  name: 'Hu Tao',
  vision: 'Pyro',
  rarity: 5,
  weapon_type: 'Polearm',
  materials: {
    talent: {
      book: 'Diligence',
      boss: 'Shard of a Foul Legacy',
    },
    ascension: {
      material: 'Agnidus Agate',
      boss: 'Juvenile Jade',
      local: 'Silk Flower',
      common: 'Whopperflower Nectar',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Jean', {
  name: 'Jean',
  vision: 'Anemo',
  rarity: 5,
  weapon_type: 'Sword',
  materials: {
    talent: {
      book: 'Resistance',
      boss: "Dvalin's Plume",
    },
    ascension: {
      material: 'Vayuda Turquoise',
      boss: 'Hurricane Seed',
      local: 'Dandelion',
      common: 'Hilichurl Masks',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Kaedehara Kazuha', {
  name: 'Kaedehara Kazuha',
  vision: 'Anemo',
  rarity: 5,
  weapon_type: 'Sword',
  materials: {
    talent: {
      book: 'Diligence',
      boss: 'Gilded Scale',
    },
    ascension: {
      material: 'Vayuda Turquoise',
      boss: 'Marionette Core',
      local: 'Sea Ganoderma',
      common: 'Treasure Hoarder Insignias',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Kaeya', {
  name: 'Kaeya',
  vision: 'Cryo',
  rarity: 4,
  weapon_type: 'Sword',
  materials: {
    talent: {
      book: 'Ballad',
      boss: 'Spirit Locket of Boreas',
    },
    ascension: {
      material: 'Shivada Jade',
      boss: 'Hoarfrost Core',
      local: 'Calla Lily',
      common: 'Treasure Hoarder Insignias',
    },
  },
  own: true,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Kamisato Ayaka', {
  name: 'Kamisato Ayaka',
  vision: 'Cryo',
  rarity: 5,
  weapon_type: 'Sword',
  materials: {
    talent: {
      book: 'Elegance',
      boss: 'Bloodjade Branch',
    },
    ascension: {
      material: 'Shivada Jade',
      boss: 'Perpetual Heart',
      local: 'Sakura Bloom',
      common: 'Nobushi Handguards',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Keqing', {
  name: 'Keqing',
  vision: 'Electro',
  rarity: 5,
  weapon_type: 'Sword',
  materials: {
    talent: {
      book: 'Prosperity',
      boss: 'Ring of Boreas',
    },
    ascension: {
      material: 'Vajrada Amethyst',
      boss: 'Lightning Prism',
      local: 'Cor Lapis',
      common: 'Whopperflower Nectar',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Klee', {
  name: 'Klee',
  vision: 'Pyro',
  rarity: 5,
  weapon_type: 'Catalyst',
  materials: {
    talent: {
      book: 'Freedom',
      boss: 'Ring of Boreas',
    },
    ascension: {
      material: 'Agnidus Agate',
      boss: 'Everflame Seed',
      local: 'Philanemo Mushroom',
      common: 'Samachurl Scrolls',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Kujou Sara', {
  name: 'Kujou Sara',
  vision: 'Electro',
  rarity: 4,
  weapon_type: 'Bow',
  materials: {
    talent: {
      book: 'Elegance',
      boss: 'Ashen Heart',
    },
    ascension: {
      material: 'Vajrada Amethyst',
      boss: 'Storm Beads',
      local: 'Dendrobium',
      common: 'Hilichurl Masks',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Lisa', {
  name: 'Lisa',
  vision: 'Electro',
  rarity: 4,
  weapon_type: 'Catalyst',
  materials: {
    talent: {
      book: 'Ballad',
      boss: "Dvalin's Claw",
    },
    ascension: {
      material: 'Vajrada Amethyst',
      boss: 'Lightning Prism',
      local: 'Valberry',
      common: 'Slime',
    },
  },
  own: true,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Mona', {
  name: 'Mona',
  vision: 'Hydro',
  rarity: 5,
  weapon_type: 'Catalyst',
  materials: {
    talent: {
      book: 'Resistance',
      boss: 'Ring of Boreas',
    },
    ascension: {
      material: 'Varunada Lazurite',
      boss: 'Cleansing Heart',
      local: 'Philanemo Mushroom',
      common: 'Whopperflower Nectar',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Ningguang', {
  name: 'Ningguang',
  vision: 'Geo',
  rarity: 4,
  weapon_type: 'Catalyst',
  materials: {
    talent: {
      book: 'Prosperity',
      boss: 'Spirit Locket of Boreas',
    },
    ascension: {
      material: 'Prithiva Topaz',
      boss: 'Basalt Pillar',
      local: 'Glaze Lily',
      common: 'Fatui Insignia',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Noelle', {
  name: 'Noelle',
  vision: 'Geo',
  rarity: 4,
  weapon_type: 'Claymore',
  materials: {
    talent: {
      book: 'Resistance',
      boss: "Dvalin's Claw",
    },
    ascension: {
      material: 'Prithiva Topaz',
      boss: 'Basalt Pillar',
      local: 'Valberry',
      common: 'Hilichurl Masks',
    },
  },
  own: true,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Qiqi', {
  name: 'Qiqi',
  vision: 'Cryo',
  rarity: 5,
  weapon_type: 'Sword',
  materials: {
    talent: {
      book: 'Prosperity',
      boss: 'Tail of Boreas',
    },
    ascension: {
      material: 'Shivada Jade',
      boss: 'Hoarfrost Core',
      local: 'Violet Grass',
      common: 'Samachurl Scrolls',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Raiden Shogun', {
  name: 'Raiden Shogun',
  vision: 'Electro',
  rarity: 5,
  weapon_type: 'Polearm',
  materials: {
    talent: {
      book: 'Light',
      boss: 'Molten Moment',
    },
    ascension: {
      material: 'Vajrada Amethyst',
      boss: 'Storm Beads',
      local: 'Amakumo Fruit',
      common: 'Nobushi Handguards',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Razor', {
  name: 'Razor',
  vision: 'Electro',
  rarity: 4,
  weapon_type: 'Claymore',
  materials: {
    talent: {
      book: 'Resistance',
      boss: "Dvalin's Claw",
    },
    ascension: {
      material: 'Vajrada Amethyst',
      boss: 'Lightning Prism',
      local: 'Wolfhook',
      common: 'Hilichurl Masks',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Rosaria', {
  name: 'Rosaria',
  vision: 'Cryo',
  rarity: 4,
  weapon_type: 'Polearm',
  materials: {
    talent: {
      book: 'Ballad',
      boss: 'Shadow of the Warrior',
    },
    ascension: {
      material: 'Shivada Jade',
      boss: 'Hoarfrost Core',
      local: 'Valberry',
      common: 'Treasure Hoarder Insignias',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Sangonomiya Kokomi', {
  name: 'Sangonomiya Kokomi',
  vision: 'Hydro',
  rarity: 5,
  weapon_type: 'Catalyst',
  materials: {
    talent: {
      book: 'Transience',
      boss: 'Hellfire Butterfly',
    },
    ascension: {
      material: 'Varunada Lazurite',
      boss: 'Dew of Repudiation',
      local: 'Sango Pearl',
      common: 'Spectral Cores',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Sayu', {
  name: 'Sayu',
  vision: 'Anemo',
  rarity: 4,
  weapon_type: 'Claymore',
  materials: {
    talent: {
      book: 'Light',
      boss: 'Gilded Scale',
    },
    ascension: {
      material: 'Vayuda Turquoise',
      boss: 'Marionette Core',
      local: 'Crystal Marrow',
      common: 'Whopperflower Nectar',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Shenhe', {
  name: 'Shenhe',
  vision: 'Cryo',
  rarity: 5,
  weapon_type: 'Polearm',
  materials: {
    talent: {
      book: 'Prosperity',
      boss: 'Hellfire Butterfly',
    },
    ascension: {
      material: 'Shivada Jade',
      boss: "Dragonheir's False Fin",
      local: 'Qingxin',
      common: 'Whopperflower Nectar',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Sucrose', {
  name: 'Sucrose',
  vision: 'Anemo',
  rarity: 4,
  weapon_type: 'Catalyst',
  materials: {
    talent: {
      book: 'Freedom',
      boss: 'Spirit Locket of Boreas',
    },
    ascension: {
      material: 'Vayuda Turquoise',
      boss: 'Hurricane Seed',
      local: 'Windwheel Aster',
      common: 'Whopperflower Nectar',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Tartaglia', {
  name: 'Tartaglia',
  vision: 'Hydro',
  rarity: 5,
  weapon_type: 'Bow',
  materials: {
    talent: {
      book: 'Freedom',
      boss: 'Shard of a Foul Legacy',
    },
    ascension: {
      material: 'Varunada Lazurite',
      boss: 'Cleansing Heart',
      local: 'Starconch',
      common: 'Fatui Insignia',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Thoma', {
  name: 'Thoma',
  vision: 'Pyro',
  rarity: 4,
  weapon_type: 'Polearm',
  materials: {
    talent: {
      book: 'Transience',
      boss: 'Hellfire Butterfly',
    },
    ascension: {
      material: 'Agnidus Agate',
      boss: 'Smoldering Pearl',
      local: 'Fluorescent Fungus',
      common: 'Treasure Hoarder Insignias',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Venti', {
  name: 'Venti',
  vision: 'Anemo',
  rarity: 5,
  weapon_type: 'Bow',
  materials: {
    talent: {
      book: 'Ballad',
      boss: 'Tail of Boreas',
    },
    ascension: {
      material: 'Vayuda Turquoise',
      boss: 'Hurricane Seed',
      local: 'Qingxin',
      common: 'Slime',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Xiangling', {
  name: 'Xiangling',
  vision: 'Pyro',
  rarity: 4,
  weapon_type: 'Polearm',
  materials: {
    talent: {
      book: 'Diligence',
      boss: "Dvalin's Claw",
    },
    ascension: {
      material: 'Agnidus Agate',
      boss: 'Everflame Seed',
      local: 'Jueyun Chili',
      common: 'Slime',
    },
  },
  own: true,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})
characterMap.set('Xiao', {
  name: 'Xiao',
  vision: 'Anemo',
  rarity: 5,
  weapon_type: 'Polearm',
  materials: {
    talent: {
      book: 'Prosperity',
      boss: 'Shadow of the Warrior',
    },
    ascension: {
      material: 'Vayuda Turquoise',
      boss: 'Juvenile Jade',
      local: 'Qingxin',
      common: 'Slime',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Xingqiu', {
  name: 'Xingqiu',
  vision: 'Hydro',
  rarity: 4,
  weapon_type: 'Sword',
  materials: {
    talent: {
      book: 'Gold',
      boss: 'Tail of Boreas',
    },
    ascension: {
      material: 'Varunada Lazurite',
      boss: 'Cleansing Heart',
      local: 'Silk Flower',
      common: 'Hilichurl Masks',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Xinyan', {
  name: 'Xinyan',
  vision: 'Pyro',
  rarity: 4,
  weapon_type: 'Claymore',
  materials: {
    talent: {
      book: 'Gold',
      boss: 'Tusk of Monoceros Caeli',
    },
    ascension: {
      material: 'Agnidus Agate',
      boss: 'Everflame Seed',
      local: 'Violet Grass',
      common: 'Treasure Hoarder Insignias',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Yanfei', {
  name: 'Yanfei',
  vision: 'Pyro',
  rarity: 4,
  weapon_type: 'Catalyst',
  materials: {
    talent: {
      book: 'Gold',
      boss: 'Bloodjade Branch',
    },
    ascension: {
      material: 'Agnidus Agate',
      boss: 'Juvenile Jade',
      local: 'Noctilucous Jade',
      common: 'Treasure Hoarder Insignias',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Yoimiya', {
  name: 'Yoimiya',
  vision: 'Pyro',
  rarity: 5,
  weapon_type: 'Bow',
  materials: {
    talent: {
      book: 'Transience',
      boss: "Dragon Lord's Crown",
    },
    ascension: {
      material: 'Agnidus Agate',
      boss: 'Smoldering Pearl',
      local: 'Naku Weed',
      common: 'Samachurl Scrolls',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Yun Jin', {
  name: 'Yun Jin',
  vision: 'Geo',
  rarity: 4,
  weapon_type: 'Polearm',
  materials: {
    talent: {
      book: 'Diligence',
      boss: 'Ashen Heart',
    },
    ascension: {
      material: 'Prithiva Topaz',
      boss: 'Riftborn Regalia',
      local: 'Glaze Lily',
      common: 'Hilichurl Masks',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

characterMap.set('Zhongli', {
  name: 'Zhongli',
  vision: 'Geo',
  rarity: 5,
  weapon_type: 'Polearm',
  materials: {
    talent: {
      book: 'Gold',
      boss: 'Tusk of Monoceros Caeli',
    },
    ascension: {
      material: 'Prithiva Topaz',
      boss: 'Basalt Pillar',
      local: 'Cor Lapis',
      common: 'Slime',
    },
  },
  own: false,
  level: {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

export default characterMap
