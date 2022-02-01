import { ICharacterDetail } from '~/types/character'

const CharactersLookupMap = new Map<string, ICharacterDetail>()

CharactersLookupMap.set('albedo', {
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

CharactersLookupMap.set('aloy', {
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

CharactersLookupMap.set('amber', {
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

CharactersLookupMap.set('arataki-itto', {
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

CharactersLookupMap.set('barbara', {
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

CharactersLookupMap.set('beidou', {
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

CharactersLookupMap.set('bennett', {
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

CharactersLookupMap.set('chongyun', {
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

CharactersLookupMap.set('diluc', {
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

CharactersLookupMap.set('diona', {
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

CharactersLookupMap.set('eula', {
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

CharactersLookupMap.set('fischl', {
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

CharactersLookupMap.set('ganyu', {
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

CharactersLookupMap.set('gorou', {
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

CharactersLookupMap.set('hu-tao', {
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

CharactersLookupMap.set('jean', {
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

CharactersLookupMap.set('kaedehara-kazuha', {
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

CharactersLookupMap.set('kaeya', {
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

CharactersLookupMap.set('kamisato-ayaka', {
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

CharactersLookupMap.set('keqing', {
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

CharactersLookupMap.set('klee', {
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

CharactersLookupMap.set('kujou-sara', {
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

CharactersLookupMap.set('lisa', {
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

CharactersLookupMap.set('mona', {
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

CharactersLookupMap.set('ningguang', {
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

CharactersLookupMap.set('noelle', {
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

CharactersLookupMap.set('qiqi', {
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

CharactersLookupMap.set('raiden-shogun', {
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

CharactersLookupMap.set('razor', {
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

CharactersLookupMap.set('rosaria', {
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

CharactersLookupMap.set('sangonomiya-kokomi', {
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

CharactersLookupMap.set('sayu', {
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

CharactersLookupMap.set('shenhe', {
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

CharactersLookupMap.set('sucrose', {
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

CharactersLookupMap.set('tartaglia', {
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

CharactersLookupMap.set('thoma', {
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

CharactersLookupMap.set('traveler-anemo', {
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

CharactersLookupMap.set('traveler-geo', {
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

CharactersLookupMap.set('traveler-electro', {
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

CharactersLookupMap.set('venti', {
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

CharactersLookupMap.set('xiangling', {
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

CharactersLookupMap.set('xiao', {
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

CharactersLookupMap.set('xingqiu', {
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

CharactersLookupMap.set('xinyan', {
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

CharactersLookupMap.set('yanfei', {
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

CharactersLookupMap.set('yoimiya', {
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

CharactersLookupMap.set('yun-jin', {
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

CharactersLookupMap.set('zhongli', {
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

export function getAllCharacterDetail() {
  const characters: ICharacterDetail[] = []

  CharactersLookupMap.forEach(entry => characters.push(entry))

  return characters
}

export default CharactersLookupMap
