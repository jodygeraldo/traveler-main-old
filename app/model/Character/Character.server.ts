import { ICharacter } from './CharacterType'

const CharacterMap = new Map<string, ICharacter>()

CharacterMap.set('albedo', {
  name: 'Albedo',
  vision: 'Geo',
  rarity: 5,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Samachurl Scrolls',
    talentBook: ['Freedom'],
    talentBoss: 'Tusk of Monoceros Caeli',
    ascensionGem: 'Prithiva Topaz',
    ascensionBoss: 'Basalt Pillar',
    localSpecialty: 'Cecilia',
  },
})

CharacterMap.set('aloy', {
  name: 'Aloy',
  vision: 'Cryo',
  rarity: 5,
  weapon: 'Bow',
  material: {
    crown: 'Crown of Insight',
    common: 'Spectral Cores',
    talentBook: ['Freedom'],
    talentBoss: 'Molten Moment',
    ascensionGem: 'Shivada Jade',
    ascensionBoss: 'Crystalline Bloom',
    localSpecialty: 'Crystal Marrow',
  },
})

CharacterMap.set('amber', {
  name: 'Amber',
  vision: 'Pyro',
  rarity: 4,
  weapon: 'Bow',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Arrowheads',
    talentBook: ['Freedom'],
    talentBoss: "Dvalin's Sigh",
    ascensionGem: 'Agnidus Agate',
    ascensionBoss: 'Everflame Seed',
    localSpecialty: 'Small Lamp Grass',
  },
})

CharacterMap.set('arataki-itto', {
  name: 'Arataki Itto',
  vision: 'Geo',
  rarity: 5,
  weapon: 'Claymore',
  material: {
    crown: 'Crown of Insight',
    common: 'Slime',
    talentBook: ['Elegance'],
    talentBoss: 'Ashen Heart',
    ascensionGem: 'Prithiva Topaz',
    ascensionBoss: 'Riftborn Regalia',
    localSpecialty: 'Onikabuto',
  },
})

CharacterMap.set('barbara', {
  name: 'Barbara',
  vision: 'Hydro',
  rarity: 4,
  weapon: 'Catalyst',
  material: {
    crown: 'Crown of Insight',
    common: 'Samachurl Scrolls',
    talentBook: ['Freedom'],
    talentBoss: 'Ring of Boreas',
    ascensionGem: 'Varunada Lazurite',
    ascensionBoss: 'Cleansing Heart',
    localSpecialty: 'Philanemo Mushroom',
  },
})

CharacterMap.set('beidou', {
  name: 'Beidou',
  vision: 'Electro',
  rarity: 4,
  weapon: 'Claymore',
  material: {
    crown: 'Crown of Insight',
    common: 'Treasure Hoarder Insignias',
    talentBook: ['Gold'],
    talentBoss: "Dvalin's Sigh",
    ascensionGem: 'Vajrada Amethyst',
    ascensionBoss: 'Lightning Prism',
    localSpecialty: 'Noctilucous Jade',
  },
})

CharacterMap.set('bennett', {
  name: 'Bennett',
  vision: 'Pyro',
  rarity: 4,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Treasure Hoarder Insignias',
    talentBook: ['Resistance'],
    talentBoss: "Dvalin's Plume",
    ascensionGem: 'Agnidus Agate',
    ascensionBoss: 'Everflame Seed',
    localSpecialty: 'Windwheel Aster',
  },
})

CharacterMap.set('chongyun', {
  name: 'Chongyun',
  vision: 'Cryo',
  rarity: 4,
  weapon: 'Claymore',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Masks',
    talentBook: ['Diligence'],
    talentBoss: "Dvalin's Sigh",
    ascensionGem: 'Shivada Jade',
    ascensionBoss: 'Hoarfrost Core',
    localSpecialty: 'Cor Lapis',
  },
})

CharacterMap.set('diluc', {
  name: 'Diluc',
  vision: 'Pyro',
  rarity: 5,
  weapon: 'Claymore',
  material: {
    crown: 'Crown of Insight',
    common: 'Fatui Insignia',
    talentBook: ['Resistance'],
    talentBoss: "Dvalin's Plume",
    ascensionGem: 'Agnidus Agate',
    ascensionBoss: 'Everflame Seed',
    localSpecialty: 'Small Lamp Grass',
  },
})

CharacterMap.set('diona', {
  name: 'Diona',
  vision: 'Cryo',
  rarity: 4,
  weapon: 'Bow',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Arrowheads',
    talentBook: ['Freedom'],
    talentBoss: 'Shard of a Foul Legacy',
    ascensionGem: 'Shivada Jade',
    ascensionBoss: 'Hoarfrost Core',
    localSpecialty: 'Calla Lily',
  },
})

CharacterMap.set('eula', {
  name: 'Eula',
  vision: 'Cryo',
  rarity: 5,
  weapon: 'Claymore',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Masks',
    talentBook: ['Resistance'],
    talentBoss: "Dragon Lord's Crown",
    ascensionGem: 'Shivada Jade',
    ascensionBoss: 'Crystalline Bloom',
    localSpecialty: 'Dandelion Seed',
  },
})

CharacterMap.set('fischl', {
  name: 'Fischl',
  vision: 'Electro',
  rarity: 4,
  weapon: 'Bow',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Arrowheads',
    talentBook: ['Ballad'],
    talentBoss: 'Spirit Locket of Boreas',
    ascensionGem: 'Vajrada Amethyst',
    ascensionBoss: 'Lightning Prism',
    localSpecialty: 'Small Lamp Grass',
  },
})

CharacterMap.set('ganyu', {
  name: 'Ganyu',
  vision: 'Cryo',
  rarity: 5,
  weapon: 'Bow',
  material: {
    crown: 'Crown of Insight',
    common: 'Whopperflower Nectar',
    talentBook: ['Diligence'],
    talentBoss: 'Shadow of the Warrior',
    ascensionGem: 'Shivada Jade',
    ascensionBoss: 'Hoarfrost Core',
    localSpecialty: 'Qingxin',
  },
})

CharacterMap.set('gorou', {
  name: 'Gorou',
  vision: 'Geo',
  rarity: 4,
  weapon: 'Bow',
  material: {
    crown: 'Crown of Insight',
    common: 'Spectral Cores',
    talentBook: ['Light'],
    talentBoss: 'Molten Moment',
    ascensionGem: 'Prithiva Topaz',
    ascensionBoss: 'Perpetual Heart',
    localSpecialty: 'Sango Pearl',
  },
})

CharacterMap.set('hu-tao', {
  name: 'Hu Tao',
  vision: 'Pyro',
  rarity: 5,
  weapon: 'Polearm',
  material: {
    crown: 'Crown of Insight',
    common: 'Whopperflower Nectar',
    talentBook: ['Diligence'],
    talentBoss: 'Shard of a Foul Legacy',
    ascensionGem: 'Agnidus Agate',
    ascensionBoss: 'Juvenile Jade',
    localSpecialty: 'Silk Flower',
  },
})

CharacterMap.set('jean', {
  name: 'Jean',
  vision: 'Anemo',
  rarity: 5,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Masks',
    talentBook: ['Resistance'],
    talentBoss: "Dvalin's Plume",
    ascensionGem: 'Vayuda Turquoise',
    ascensionBoss: 'Hurricane Seed',
    localSpecialty: 'Dandelion Seed',
  },
})

CharacterMap.set('kaedehara-kazuha', {
  name: 'Kaedehara Kazuha',
  vision: 'Anemo',
  rarity: 5,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Treasure Hoarder Insignias',
    talentBook: ['Diligence'],
    talentBoss: 'Gilded Scale',
    ascensionGem: 'Vayuda Turquoise',
    ascensionBoss: 'Marionette Core',
    localSpecialty: 'Sea Ganoderma',
  },
})

CharacterMap.set('kaeya', {
  name: 'Kaeya',
  vision: 'Cryo',
  rarity: 4,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Treasure Hoarder Insignias',
    talentBook: ['Ballad'],
    talentBoss: 'Spirit Locket of Boreas',
    ascensionGem: 'Shivada Jade',
    ascensionBoss: 'Hoarfrost Core',
    localSpecialty: 'Calla Lily',
  },
})

CharacterMap.set('kamisato-ayaka', {
  name: 'Kamisato Ayaka',
  vision: 'Cryo',
  rarity: 5,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Nobushi Handguards',
    talentBook: ['Elegance'],
    talentBoss: 'Bloodjade Branch',
    ascensionGem: 'Shivada Jade',
    ascensionBoss: 'Perpetual Heart',
    localSpecialty: 'Sakura Bloom',
  },
})

CharacterMap.set('keqing', {
  name: 'Keqing',
  vision: 'Electro',
  rarity: 5,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Whopperflower Nectar',
    talentBook: ['Prosperity'],
    talentBoss: 'Ring of Boreas',
    ascensionGem: 'Vajrada Amethyst',
    ascensionBoss: 'Lightning Prism',
    localSpecialty: 'Cor Lapis',
  },
})

CharacterMap.set('klee', {
  name: 'Klee',
  vision: 'Pyro',
  rarity: 5,
  weapon: 'Catalyst',
  material: {
    crown: 'Crown of Insight',
    common: 'Samachurl Scrolls',
    talentBook: ['Freedom'],
    talentBoss: 'Ring of Boreas',
    ascensionGem: 'Agnidus Agate',
    ascensionBoss: 'Everflame Seed',
    localSpecialty: 'Philanemo Mushroom',
  },
})

CharacterMap.set('kujou-sara', {
  name: 'Kujou Sara',
  vision: 'Electro',
  rarity: 4,
  weapon: 'Bow',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Masks',
    talentBook: ['Elegance'],
    talentBoss: 'Ashen Heart',
    ascensionGem: 'Vajrada Amethyst',
    ascensionBoss: 'Storm Beads',
    localSpecialty: 'Dendrobium',
  },
})

CharacterMap.set('lisa', {
  name: 'Lisa',
  vision: 'Electro',
  rarity: 4,
  weapon: 'Catalyst',
  material: {
    crown: 'Crown of Insight',
    common: 'Slime',
    talentBook: ['Ballad'],
    talentBoss: "Dvalin's Claw",
    ascensionGem: 'Vajrada Amethyst',
    ascensionBoss: 'Lightning Prism',
    localSpecialty: 'Valberry',
  },
})

CharacterMap.set('mona', {
  name: 'Mona',
  vision: 'Hydro',
  rarity: 5,
  weapon: 'Catalyst',
  material: {
    crown: 'Crown of Insight',
    common: 'Whopperflower Nectar',
    talentBook: ['Resistance'],
    talentBoss: 'Ring of Boreas',
    ascensionGem: 'Varunada Lazurite',
    ascensionBoss: 'Cleansing Heart',
    localSpecialty: 'Philanemo Mushroom',
  },
})

CharacterMap.set('ningguang', {
  name: 'Ningguang',
  vision: 'Geo',
  rarity: 4,
  weapon: 'Catalyst',
  material: {
    crown: 'Crown of Insight',
    common: 'Fatui Insignia',
    talentBook: ['Prosperity'],
    talentBoss: 'Spirit Locket of Boreas',
    ascensionGem: 'Prithiva Topaz',
    ascensionBoss: 'Basalt Pillar',
    localSpecialty: 'Glaze Lily',
  },
})

CharacterMap.set('noelle', {
  name: 'Noelle',
  vision: 'Geo',
  rarity: 4,
  weapon: 'Claymore',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Masks',
    talentBook: ['Resistance'],
    talentBoss: "Dvalin's Claw",
    ascensionGem: 'Prithiva Topaz',
    ascensionBoss: 'Basalt Pillar',
    localSpecialty: 'Valberry',
  },
})

CharacterMap.set('qiqi', {
  name: 'Qiqi',
  vision: 'Cryo',
  rarity: 5,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Samachurl Scrolls',
    talentBook: ['Prosperity'],
    talentBoss: 'Tail of Boreas',
    ascensionGem: 'Shivada Jade',
    ascensionBoss: 'Hoarfrost Core',
    localSpecialty: 'Violetgrass',
  },
})

CharacterMap.set('raiden-shogun', {
  name: 'Raiden Shogun',
  vision: 'Electro',
  rarity: 5,
  weapon: 'Polearm',
  material: {
    crown: 'Crown of Insight',
    common: 'Nobushi Handguards',
    talentBook: ['Light'],
    talentBoss: 'Molten Moment',
    ascensionGem: 'Vajrada Amethyst',
    ascensionBoss: 'Storm Beads',
    localSpecialty: 'Amakumo Fruit',
  },
})

CharacterMap.set('razor', {
  name: 'Razor',
  vision: 'Electro',
  rarity: 4,
  weapon: 'Claymore',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Masks',
    talentBook: ['Resistance'],
    talentBoss: "Dvalin's Claw",
    ascensionGem: 'Vajrada Amethyst',
    ascensionBoss: 'Lightning Prism',
    localSpecialty: 'Wolfhook',
  },
})

CharacterMap.set('rosaria', {
  name: 'Rosaria',
  vision: 'Cryo',
  rarity: 4,
  weapon: 'Polearm',
  material: {
    crown: 'Crown of Insight',
    common: 'Fatui Insignia',
    talentBook: ['Ballad'],
    talentBoss: 'Shadow of the Warrior',
    ascensionGem: 'Shivada Jade',
    ascensionBoss: 'Hoarfrost Core',
    localSpecialty: 'Valberry',
  },
})

CharacterMap.set('sangonomiya-kokomi', {
  name: 'Sangonomiya Kokomi',
  vision: 'Hydro',
  rarity: 5,
  weapon: 'Catalyst',
  material: {
    crown: 'Crown of Insight',
    common: 'Spectral Cores',
    talentBook: ['Transience'],
    talentBoss: 'Hellfire Butterfly',
    ascensionGem: 'Varunada Lazurite',
    ascensionBoss: 'Dew of Repudiation',
    localSpecialty: 'Sango Pearl',
  },
})

CharacterMap.set('sayu', {
  name: 'Sayu',
  vision: 'Anemo',
  rarity: 4,
  weapon: 'Claymore',
  material: {
    crown: 'Crown of Insight',
    common: 'Whopperflower Nectar',
    talentBook: ['Light'],
    talentBoss: 'Gilded Scale',
    ascensionGem: 'Vayuda Turquoise',
    ascensionBoss: 'Marionette Core',
    localSpecialty: 'Crystal Marrow',
  },
})

CharacterMap.set('shenhe', {
  name: 'Shenhe',
  vision: 'Cryo',
  rarity: 5,
  weapon: 'Polearm',
  material: {
    crown: 'Crown of Insight',
    common: 'Whopperflower Nectar',
    talentBook: ['Prosperity'],
    talentBoss: 'Hellfire Butterfly',
    ascensionGem: 'Shivada Jade',
    ascensionBoss: "Dragonheir's False Fin",
    localSpecialty: 'Qingxin',
  },
})

CharacterMap.set('sucrose', {
  name: 'Sucrose',
  vision: 'Anemo',
  rarity: 4,
  weapon: 'Catalyst',
  material: {
    crown: 'Crown of Insight',
    common: 'Whopperflower Nectar',
    talentBook: ['Freedom'],
    talentBoss: 'Spirit Locket of Boreas',
    ascensionGem: 'Vayuda Turquoise',
    ascensionBoss: 'Hurricane Seed',
    localSpecialty: 'Windwheel Aster',
  },
})

CharacterMap.set('tartaglia', {
  name: 'Tartaglia',
  vision: 'Hydro',
  rarity: 5,
  weapon: 'Bow',
  material: {
    crown: 'Crown of Insight',
    common: 'Fatui Insignia',
    talentBook: ['Freedom'],
    talentBoss: 'Shard of a Foul Legacy',
    ascensionGem: 'Varunada Lazurite',
    ascensionBoss: 'Cleansing Heart',
    localSpecialty: 'Starconch',
  },
})

CharacterMap.set('thoma', {
  name: 'Thoma',
  vision: 'Pyro',
  rarity: 4,
  weapon: 'Polearm',
  material: {
    crown: 'Crown of Insight',
    common: 'Treasure Hoarder Insignias',
    talentBook: ['Transience'],
    talentBoss: 'Hellfire Butterfly',
    ascensionGem: 'Agnidus Agate',
    ascensionBoss: 'Smoldering Pearl',
    localSpecialty: 'Fluorescent Fungus',
  },
})

CharacterMap.set('traveler-anemo', {
  name: 'Traveler Anemo',
  vision: 'Anemo',
  rarity: 5,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Samachurl Scrolls',
    talentBook: ['Freedom', 'Resistance', 'Ballad'],
    talentBoss: "Dvalin's Sigh",
    talentCommon: 'Hilichurl Masks',
    ascensionGem: 'Brilliant Diamond',
    localSpecialty: 'Windwheel Aster',
  },
})

CharacterMap.set('traveler-geo', {
  name: 'Traveler Geo',
  vision: 'Geo',
  rarity: 5,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Samachurl Scrolls',
    talentBook: ['Freedom', 'Resistance', 'Ballad'],
    talentBoss: "Dvalin's Sigh",
    talentCommon: 'Hilichurl Masks',
    ascensionGem: 'Brilliant Diamond',
    localSpecialty: 'Windwheel Aster',
  },
})

CharacterMap.set('traveler-electro', {
  name: 'Traveler Electro',
  vision: 'Electro',
  rarity: 5,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Nobushi Handguards',
    talentBook: ['Transience', 'Elegance', 'Light'],
    talentBoss: "Dragon Lord's Crown",
    talentCommon: 'Hilichurl Masks',
    ascensionGem: 'Brilliant Diamond',
    localSpecialty: 'Windwheel Aster',
  },
})

CharacterMap.set('venti', {
  name: 'Venti',
  vision: 'Anemo',
  rarity: 5,
  weapon: 'Bow',
  material: {
    crown: 'Crown of Insight',
    common: 'Slime',
    talentBook: ['Ballad'],
    talentBoss: 'Tail of Boreas',
    ascensionGem: 'Vayuda Turquoise',
    ascensionBoss: 'Hurricane Seed',
    localSpecialty: 'Qingxin',
  },
})

CharacterMap.set('xiangling', {
  name: 'Xiangling',
  vision: 'Pyro',
  rarity: 4,
  weapon: 'Polearm',
  material: {
    crown: 'Crown of Insight',
    common: 'Slime',
    talentBook: ['Diligence'],
    talentBoss: "Dvalin's Claw",
    ascensionGem: 'Agnidus Agate',
    ascensionBoss: 'Everflame Seed',
    localSpecialty: 'Jueyun Chili',
  },
})

CharacterMap.set('xiao', {
  name: 'Xiao',
  vision: 'Anemo',
  rarity: 5,
  weapon: 'Polearm',
  material: {
    crown: 'Crown of Insight',
    common: 'Slime',
    talentBook: ['Prosperity'],
    talentBoss: 'Shadow of the Warrior',
    ascensionGem: 'Vayuda Turquoise',
    ascensionBoss: 'Juvenile Jade',
    localSpecialty: 'Qingxin',
  },
})

CharacterMap.set('xingqiu', {
  name: 'Xingqiu',
  vision: 'Hydro',
  rarity: 4,
  weapon: 'Sword',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Masks',
    talentBook: ['Gold'],
    talentBoss: 'Tail of Boreas',
    ascensionGem: 'Varunada Lazurite',
    ascensionBoss: 'Cleansing Heart',
    localSpecialty: 'Silk Flower',
  },
})

CharacterMap.set('xinyan', {
  name: 'Xinyan',
  vision: 'Pyro',
  rarity: 4,
  weapon: 'Claymore',
  material: {
    crown: 'Crown of Insight',
    common: 'Treasure Hoarder Insignias',
    talentBook: ['Gold'],
    talentBoss: 'Tusk of Monoceros Caeli',
    ascensionGem: 'Agnidus Agate',
    ascensionBoss: 'Everflame Seed',
    localSpecialty: 'Violetgrass',
  },
})

CharacterMap.set('yanfei', {
  name: 'Yanfei',
  vision: 'Pyro',
  rarity: 4,
  weapon: 'Catalyst',
  material: {
    crown: 'Crown of Insight',
    common: 'Treasure Hoarder Insignias',
    talentBook: ['Gold'],
    talentBoss: 'Bloodjade Branch',
    ascensionGem: 'Agnidus Agate',
    ascensionBoss: 'Juvenile Jade',
    localSpecialty: 'Noctilucous Jade',
  },
})

CharacterMap.set('yoimiya', {
  name: 'Yoimiya',
  vision: 'Pyro',
  rarity: 5,
  weapon: 'Bow',
  material: {
    crown: 'Crown of Insight',
    common: 'Samachurl Scrolls',
    talentBook: ['Transience'],
    talentBoss: "Dragon Lord's Crown",
    ascensionGem: 'Agnidus Agate',
    ascensionBoss: 'Smoldering Pearl',
    localSpecialty: 'Naku Weed',
  },
})

CharacterMap.set('yun-jin', {
  name: 'Yun Jin',
  vision: 'Geo',
  rarity: 4,
  weapon: 'Polearm',
  material: {
    crown: 'Crown of Insight',
    common: 'Hilichurl Masks',
    talentBook: ['Diligence'],
    talentBoss: 'Ashen Heart',
    ascensionGem: 'Prithiva Topaz',
    ascensionBoss: 'Riftborn Regalia',
    localSpecialty: 'Glaze Lily',
  },
})

CharacterMap.set('zhongli', {
  name: 'Zhongli',
  vision: 'Geo',
  rarity: 5,
  weapon: 'Polearm',
  material: {
    crown: 'Crown of Insight',
    common: 'Slime',
    talentBook: ['Gold'],
    talentBoss: 'Tusk of Monoceros Caeli',
    ascensionGem: 'Prithiva Topaz',
    ascensionBoss: 'Basalt Pillar',
    localSpecialty: 'Cor Lapis',
  },
})

export function getCharacters() {
  const characters: ICharacter[] = []

  CharacterMap.forEach(entry => characters.push(entry))

  return characters
}

export default CharacterMap
