import {
  AscensionBossMaterial,
  AscensionCommonMaterial,
  AscensionGem,
  IAscensionBossMaterial,
  IAscensionCommonMaterial,
  IAscensionGem,
  ILocalSpecialty,
  ITalentBook,
  ITalentBossMaterial,
  ITalentCrown,
  LocalSpecialty,
  TalentBook,
  TalentBossMaterial,
  TalentCrown,
} from '~/types/item'

export const talentCrownMap: ReadonlyMap<TalentCrown, ITalentCrown> = new Map([
  ['Crown of Insight', { name: 'Crown of Insight', count: 0 }],
])

export const talentBookMap: ReadonlyMap<TalentBook, ITalentBook> = new Map([
  ['Freedom', { name: 'Freedom', region: 'mondstadt', count: 0 }],
  ['Resistance', { name: 'Resistance', region: 'mondstadt', count: 0 }],
  ['Ballad', { name: 'Ballad', region: 'mondstadt', count: 0 }],
  ['Prosperity', { name: 'Prosperity', region: 'liyue', count: 0 }],
  ['Diligence', { name: 'Diligence', region: 'liyue', count: 0 }],
  ['Gold', { name: 'Gold', region: 'liyue', count: 0 }],
  ['Transience', { name: 'Transience', region: 'inazuma', count: 0 }],
  ['Elegance', { name: 'Elegance', region: 'inazuma', count: 0 }],
  ['Light', { name: 'Light', region: 'inazuma', count: 0 }],
])

export const talentBossMaterialMap: ReadonlyMap<
  TalentBossMaterial,
  ITalentBossMaterial
> = new Map([
  ["Dvalin's Plume", { name: "Dvalin's Plume", region: 'mondstadt', count: 0 }],
  ["Dvalin's Claw", { name: "Dvalin's Claw", region: 'mondstadt', count: 0 }],
  ["Dvalin's Sigh", { name: "Dvalin's Sigh", region: 'mondstadt', count: 0 }],
  ['Tail of Boreas', { name: 'Tail of Boreas', region: 'mondstadt', count: 0 }],
  ['Ring of Boreas', { name: 'Ring of Boreas', region: 'mondstadt', count: 0 }],
  [
    'Spirit Locket of Boreas',
    { name: 'Spirit Locket of Boreas', region: 'mondstadt', count: 0 },
  ],
  [
    'Tusk of Monoceros Caeli',
    { name: 'Tusk of Monoceros Caeli', region: 'liyue', count: 0 },
  ],
  [
    'Shard of a Foul Legacy',
    { name: 'Shard of a Foul Legacy', region: 'liyue', count: 0 },
  ],
  [
    'Shadow of the Warrior',
    { name: 'Shadow of the Warrior', region: 'liyue', count: 0 },
  ],
  [
    "Dragon Lord's Crown",
    { name: "Dragon Lord's Crown", region: 'liyue', count: 0 },
  ],
  ['Bloodjade Branch', { name: 'Bloodjade Branch', region: 'liyue', count: 0 }],
  ['Gilded Scale', { name: 'Gilded Scale', region: 'liyue', count: 0 }],
  ['Molten Moment', { name: 'Molten Moment', region: 'inazuma', count: 0 }],
  ['Ashen Heart', { name: 'Ashen Heart', region: 'inazuma', count: 0 }],
  [
    'Hellfire Butterfly',
    { name: 'Hellfire Butterfly', region: 'inazuma', count: 0 },
  ],
])

export const ascensionGemMap: ReadonlyMap<AscensionGem, IAscensionGem> =
  new Map([
    ['Brilliant Diamond', { name: 'Brilliant Diamond', count: 0 }],
    ['Agnidus Agate', { name: 'Agnidus Agate', count: 0 }],
    ['Varunada Lazurite', { name: 'Varunada Lazurite', count: 0 }],
    ['Vajrada Amethyst', { name: 'Vajrada Amethyst', count: 0 }],
    ['Vayuda Turquoise', { name: 'Vayuda Turquoise', count: 0 }],
    ['Shivada Jade', { name: 'Shivada Jade', count: 0 }],
    ['Prithiva Topaz', { name: 'Prithiva Topaz', count: 0 }],
  ])

export const ascensionBossMaterialMap = new Map<
  AscensionBossMaterial,
  IAscensionBossMaterial
>([
  ['Hurricane Seed', { name: 'Hurricane Seed', region: 'mondstadt', count: 0 }],
  [
    'Lightning Prism',
    { name: 'Lightning Prism', region: 'mondstadt', count: 0 },
  ],
  ['Basalt Pillar', { name: 'Basalt Pillar', region: 'liyue', count: 0 }],
  ['Hoarfrost Core', { name: 'Hoarfrost Core', region: 'mondstadt', count: 0 }],
  ['Everflame Seed', { name: 'Everflame Seed', region: 'liyue', count: 0 }],
  ['Cleansing Heart', { name: 'Cleansing Heart', region: 'liyue', count: 0 }],
  ['Juvenile Jade', { name: 'Juvenile Jade', region: 'liyue', count: 0 }],
  [
    'Crystalline Bloom',
    { name: 'Crystalline Bloom', region: 'mondstadt', count: 0 },
  ],
  ['Marionette Core', { name: 'Marionette Core', region: 'inazuma', count: 0 }],
  ['Perpetual Heart', { name: 'Perpetual Heart', region: 'inazuma', count: 0 }],
  [
    'Smoldering Pearl',
    { name: 'Smoldering Pearl', region: 'inazuma', count: 0 },
  ],
  [
    'Dew of Repudiation',
    { name: 'Dew of Repudiation', region: 'inazuma', count: 0 },
  ],
  ['Storm Beads', { name: 'Storm Beads', region: 'inazuma', count: 0 }],
  [
    'Riftborn Regalia',
    { name: 'Riftborn Regalia', region: 'inazuma', count: 0 },
  ],
  [
    "Dragonheir's False Fin",
    { name: "Dragonheir's False Fin", region: 'inazuma', count: 0 },
  ],
])

const ascensionLocalSpecialtyMap: ReadonlyMap<LocalSpecialty, ILocalSpecialty> =
  new Map([
    ['Calla Lily', { name: 'Calla Lily', region: 'mondstadt', count: 0 }],
    ['Wolfhook', { name: 'Wolfhook', region: 'mondstadt', count: 0 }],
    ['Valberry', { name: 'Valberry', region: 'mondstadt', count: 0 }],
    ['Cecilia', { name: 'Cecilia', region: 'mondstadt', count: 0 }],
    [
      'Windwheel Aster',
      { name: 'Windwheel Aster', region: 'mondstadt', count: 0 },
    ],
    [
      'Philanemo Mushroom',
      { name: 'Philanemo Mushroom', region: 'mondstadt', count: 0 },
    ],
    ['Jueyun Chili', { name: 'Jueyun Chili', region: 'liyue', count: 0 }],
    [
      'Noctilucous Jade',
      { name: 'Noctilucous Jade', region: 'liyue', count: 0 },
    ],
    ['Silk Flower', { name: 'Silk Flower', region: 'liyue', count: 0 }],
    ['Glaze Lily', { name: 'Glaze Lily', region: 'liyue', count: 0 }],
    ['Qingxin', { name: 'Qingxin', region: 'liyue', count: 0 }],
    ['Starconch', { name: 'Starconch', region: 'liyue', count: 0 }],
    ['Violet Grass', { name: 'Violet Grass', region: 'liyue', count: 0 }],
    [
      'Small Lamp Grass',
      { name: 'Small Lamp Grass', region: 'mondstadt', count: 0 },
    ],
    ['Dandelion', { name: 'Dandelion', region: 'mondstadt', count: 0 }],
    ['Cor Lapis', { name: 'Cor Lapis', region: 'liyue', count: 0 }],
    ['Onikabuto', { name: 'Onikabuto', region: 'inazuma', count: 0 }],
    ['Sakura Bloom', { name: 'Sakura Bloom', region: 'inazuma', count: 0 }],
    ['Crystal Marrow', { name: 'Crystal Marrow', region: 'inazuma', count: 0 }],
    ['Dendrobium', { name: 'Dendrobium', region: 'inazuma', count: 0 }],
    ['Naku Weed', { name: 'Naku Weed', region: 'inazuma', count: 0 }],
    ['Sea Ganoderma', { name: 'Sea Ganoderma', region: 'inazuma', count: 0 }],
    ['Sango Pearl', { name: 'Sango Pearl', region: 'inazuma', count: 0 }],
    ['Amakumo Fruit', { name: 'Amakumo Fruit', region: 'inazuma', count: 0 }],
    [
      'Fluorescent Fungus',
      { name: 'Fluorescent Fungus', region: 'inazuma', count: 0 },
    ],
  ])

export const ascensionCommonMaterialMap: ReadonlyMap<
  AscensionCommonMaterial,
  IAscensionCommonMaterial
> = new Map([
  ['Slime', { name: 'Slime', isElite: false, count: 0 }],
  ['Hilichurl Masks', { name: 'Hilichurl Masks', isElite: false, count: 0 }],
  [
    'Samachurl Scrolls',
    { name: 'Samachurl Scrolls', isElite: false, count: 0 },
  ],
  [
    'Hilichurl Arrowheads',
    { name: 'Hilichurl Arrowheads', isElite: false, count: 0 },
  ],
  ['Fatui Insignia', { name: 'Fatui Insignia', isElite: false, count: 0 }],
  [
    'Treasure Hoarder Insignias',
    { name: 'Treasure Hoarder Insignias', isElite: false, count: 0 },
  ],
  [
    'Whopperflower Nectar',
    { name: 'Whopperflower Nectar', isElite: false, count: 0 },
  ],
  [
    'Nobushi Handguards',
    { name: 'Nobushi Handguards', isElite: false, count: 0 },
  ],
  ['Spectral Cores', { name: 'Spectral Cores', isElite: false, count: 0 }],
  ['Hilichurl Horns', { name: 'Hilichurl Horns', isElite: true, count: 0 }],
  ['Ley Lines', { name: 'Ley Lines', isElite: true, count: 0 }],
  ['Chaos Parts', { name: 'Chaos Parts', isElite: true, count: 0 }],
  ['Mist Grass', { name: 'Mist Grass', isElite: true, count: 0 }],
  [
    'Sacrificial Knifes',
    { name: 'Sacrificial Knifes', isElite: true, count: 0 },
  ],
  ['Bone Shards', { name: 'Bone Shards', isElite: true, count: 0 }],
  [
    'Sentinel Chaos Parts',
    { name: 'Sentinel Chaos Parts', isElite: true, count: 0 },
  ],
  ['Prisms', { name: 'Prisms', isElite: true, count: 0 }],
  [
    'Concealed Rifthound Claws',
    { name: 'Concealed Rifthound Claws', isElite: true, count: 0 },
  ],
])
