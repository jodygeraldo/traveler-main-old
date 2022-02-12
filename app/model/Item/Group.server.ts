import {
  AscensionGem,
  AscensionGemGroup,
  CommonMaterial,
  CommonMaterialGroup,
  TalentBook,
  TalentBookGroup,
} from './ItemType'

export const commonGroupMap = new Map<
  CommonMaterialGroup,
  [CommonMaterial, CommonMaterial, CommonMaterial]
>([
  ['Slime', ['Slime Condensate', 'Slime Secretions', 'Slime Concentrate']],

  ['Hilichurl Masks', ['Damaged Mask', 'Stained Mask', 'Ominous Mask']],

  [
    'Samachurl Scrolls',
    ['Divining Scroll', 'Sealed Scroll', 'Forbidden Curse Scroll'],
  ],

  [
    'Hilichurl Arrowheads',
    ['Firm Arrowhead', 'Sharp Arrowhead', 'Weathered Arrowhead'],
  ],

  [
    'Hilichurl Horns',
    ['Heavy Horn', 'Black Bronze Horn', 'Black Crystal Horn'],
  ],

  [
    'Ley Lines',
    ['Dead Ley Line Branch', 'Dead Ley Line Leaves', 'Ley Line Sprout'],
  ],

  ['Chaos Parts', ['Chaos Device', 'Chaos Circuit', 'Chaos Core']],

  ['Mist Grass', ['Mist Grass Pollen', 'Mist Grass', 'Mist Grass Wick']],
  [
    'Sacrificial Knifes',
    [
      "Hunter's Sacrificial Knife",
      "Agent's Sacrificial Knife",
      "Inspector's Sacrificial Knife",
    ],
  ],
  [
    'Fatui Insignia',
    ["Recruit's Insignia", "Sergeant's Insignia", "Lieutenant's Insignia"],
  ],
  [
    'Treasure Hoarder Insignias',
    [
      'Treasure Hoarder Insignia',
      'Silver Raven Insignia',
      'Golden Raven Insignia',
    ],
  ],
  [
    'Whopperflower Nectar',
    ['Whopperflower Nectar', 'Shimmering Nectar', 'Energy Nectar'],
  ],
  [
    'Bone Shards',
    ['Fragile Bone Shard', 'Sturdy Bone Shard', 'Fossilized Bone Shard'],
  ],
  [
    'Nobushi Handguards',
    ['Old Handguard', 'Kageuchi Handguard', 'Famed Handguard'],
  ],
  ['Sentinel Chaos Parts', ['Chaos Gear', 'Chaos Axis', 'Chaos Oculus']],
  ['Prisms', ['Dismal Prism', 'Crystal Prism', 'Polarizing Prism']],
  ['Spectral Cores', ['Spectral Husk', 'Spectral Heart', 'Spectral Nucleus']],
  [
    'Concealed Rifthound Claws',
    ['Concealed Claw', 'Concealed Unguis', 'Concealed Talon'],
  ],
])

export const gemGroupMap = new Map<
  AscensionGemGroup,
  [AscensionGem, AscensionGem, AscensionGem, AscensionGem]
>([
  [
    'Brilliant Diamond',
    [
      'Brilliant Diamond Sliver',
      'Brilliant Diamond Fragment',
      'Brilliant Diamond Chunk',
      'Brilliant Diamond Gemstone',
    ],
  ],
  [
    'Agnidus Agate',
    [
      'Agnidus Agate Sliver',
      'Agnidus Agate Fragment',
      'Agnidus Agate Chunk',
      'Agnidus Agate Gemstone',
    ],
  ],
  [
    'Prithiva Topaz',
    [
      'Prithiva Topaz Sliver',
      'Prithiva Topaz Fragment',
      'Prithiva Topaz Chunk',
      'Prithiva Topaz Gemstone',
    ],
  ],
  [
    'Shivada Jade',
    [
      'Shivada Jade Sliver',
      'Shivada Jade Fragment',
      'Shivada Jade Chunk',
      'Shivada Jade Gemstone',
    ],
  ],
  [
    'Vajrada Amethyst',
    [
      'Vajrada Amethyst Sliver',
      'Vajrada Amethyst Fragment',
      'Vajrada Amethyst Chunk',
      'Vajrada Amethyst Gemstone',
    ],
  ],
  [
    'Varunada Lazurite',
    [
      'Varunada Lazurite Sliver',
      'Varunada Lazurite Fragment',
      'Varunada Lazurite Chunk',
      'Varunada Lazurite Gemstone',
    ],
  ],
  [
    'Vayuda Turquoise',
    [
      'Vayuda Turquoise Sliver',
      'Vayuda Turquoise Fragment',
      'Vayuda Turquoise Chunk',
      'Vayuda Turquoise Gemstone',
    ],
  ],
])

export const bookGroupMap = new Map<
  TalentBookGroup,
  [TalentBook, TalentBook, TalentBook]
>([
  [
    'Ballad',
    ['Teachings of Ballad', 'Guide of Ballad', 'Philosophies of Ballad'],
  ],
  [
    'Diligence',
    [
      'Teachings of Diligence',
      'Guide of Diligence',
      'Philosophies of Diligence',
    ],
  ],
  [
    'Elegance',
    ['Teachings of Elegance', 'Guide of Elegance', 'Philosophies of Elegance'],
  ],
  [
    'Freedom',
    ['Teachings of Freedom', 'Guide of Freedom', 'Philosophies of Freedom'],
  ],
  ['Gold', ['Teachings of Gold', 'Guide of Gold', 'Philosophies of Gold']],
  ['Light', ['Teachings of Light', 'Guide of Light', 'Philosophies of Light']],
  [
    'Prosperity',
    [
      'Teachings of Prosperity',
      'Guide of Prosperity',
      'Philosophies of Prosperity',
    ],
  ],
  [
    'Resistance',
    [
      'Teachings of Resistance',
      'Guide of Resistance',
      'Philosophies of Resistance',
    ],
  ],
  [
    'Transience',
    [
      'Teachings of Transience',
      'Guide of Transience',
      'Philosophies of Transience',
    ],
  ],
])
