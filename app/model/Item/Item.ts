import {
  AscensionBossMaterial,
  AscensionGem,
  CommonMaterial,
  Crown,
  IAscensionBossMaterial,
  IAscensionGem,
  ICommonMaterial,
  ICrown,
  ILocalSpecialty,
  ITalentBook,
  ITalentBossMaterial,
  ItemTypes,
  LocalSpecialty,
  TalentBook,
  TalentBossMaterial,
} from './ItemType'

export const CrownMap = new Map<Crown, ICrown>([
  ['Crown of Insight', { name: 'Crown of Insight', rarity: 5 }],
])

export const TalentBookMap = new Map<TalentBook, ITalentBook>([
  [
    'Philosophies of Freedom',
    {
      name: 'Philosophies of Freedom',
      rarity: 4,
      group: 'Freedom',
    },
  ],
  [
    'Guide of Freedom',
    {
      name: 'Guide of Freedom',
      rarity: 3,
      group: 'Freedom',
    },
  ],
  [
    'Teachings of Freedom',
    {
      name: 'Teachings of Freedom',
      rarity: 2,
      group: 'Freedom',
    },
  ],

  [
    'Philosophies of Prosperity',
    {
      name: 'Philosophies of Prosperity',
      rarity: 4,
      group: 'Prosperity',
    },
  ],
  [
    'Guide of Prosperity',
    {
      name: 'Guide of Prosperity',
      rarity: 3,
      group: 'Prosperity',
    },
  ],
  [
    'Teachings of Prosperity',
    {
      name: 'Teachings of Prosperity',
      rarity: 2,
      group: 'Prosperity',
    },
  ],

  [
    'Philosophies of Transience',
    {
      name: 'Philosophies of Transience',
      rarity: 4,
      group: 'Transience',
    },
  ],
  [
    'Guide of Transience',
    {
      name: 'Guide of Transience',
      rarity: 3,
      group: 'Transience',
    },
  ],
  [
    'Teachings of Transience',
    {
      name: 'Teachings of Transience',
      rarity: 2,
      group: 'Transience',
    },
  ],

  [
    'Philosophies of Elegance',
    {
      name: 'Philosophies of Elegance',
      rarity: 4,
      group: 'Elegance',
    },
  ],
  [
    'Guide of Elegance',
    {
      name: 'Guide of Elegance',
      rarity: 3,
      group: 'Elegance',
    },
  ],
  [
    'Teachings of Elegance',
    {
      name: 'Teachings of Elegance',
      rarity: 2,
      group: 'Elegance',
    },
  ],

  [
    'Philosophies of Resistance',
    {
      name: 'Philosophies of Resistance',
      rarity: 4,
      group: 'Resistance',
    },
  ],
  [
    'Guide of Resistance',
    {
      name: 'Guide of Resistance',
      rarity: 3,
      group: 'Resistance',
    },
  ],
  [
    'Teachings of Resistance',
    {
      name: 'Teachings of Resistance',
      rarity: 2,
      group: 'Resistance',
    },
  ],

  [
    'Philosophies of Diligence',
    {
      name: 'Philosophies of Diligence',
      rarity: 4,
      group: 'Diligence',
    },
  ],
  [
    'Guide of Diligence',
    {
      name: 'Guide of Diligence',
      rarity: 3,
      group: 'Diligence',
    },
  ],
  [
    'Teachings of Diligence',
    {
      name: 'Teachings of Diligence',
      rarity: 2,
      group: 'Diligence',
    },
  ],

  [
    'Philosophies of Ballad',
    {
      name: 'Philosophies of Ballad',
      rarity: 4,
      group: 'Ballad',
    },
  ],
  [
    'Guide of Ballad',
    {
      name: 'Guide of Ballad',
      rarity: 3,
      group: 'Ballad',
    },
  ],
  [
    'Teachings of Ballad',
    {
      name: 'Teachings of Ballad',
      rarity: 2,
      group: 'Ballad',
    },
  ],

  [
    'Philosophies of Gold',
    {
      name: 'Philosophies of Gold',
      rarity: 4,
      group: 'Gold',
    },
  ],
  [
    'Guide of Gold',
    {
      name: 'Guide of Gold',
      rarity: 3,
      group: 'Gold',
    },
  ],
  [
    'Teachings of Gold',
    {
      name: 'Teachings of Gold',
      rarity: 2,
      group: 'Gold',
    },
  ],

  [
    'Philosophies of Light',
    {
      name: 'Philosophies of Light',
      rarity: 4,
      group: 'Light',
    },
  ],
  [
    'Guide of Light',
    {
      name: 'Guide of Light',
      rarity: 3,
      group: 'Light',
    },
  ],
  [
    'Teachings of Light',
    {
      name: 'Teachings of Light',
      rarity: 2,
      group: 'Light',
    },
  ],
])

export const TalentBossMaterialMap = new Map<
  TalentBossMaterial,
  ITalentBossMaterial
>([
  [
    "Dvalin's Plume",
    {
      name: "Dvalin's Plume",
      rarity: 5,
      group: 'Confront Stormterror',
    },
  ],
  [
    "Dvalin's Claw",
    {
      name: "Dvalin's Claw",
      rarity: 5,
      group: 'Confront Stormterror',
    },
  ],
  [
    "Dvalin's Sigh",
    {
      name: "Dvalin's Sigh",
      rarity: 5,
      group: 'Confront Stormterror',
    },
  ],

  [
    'Tail of Boreas',
    {
      name: 'Tail of Boreas',
      rarity: 5,
      group: 'Wolf of the North',
    },
  ],
  [
    'Ring of Boreas',
    {
      name: 'Ring of Boreas',
      rarity: 5,
      group: 'Wolf of the North',
    },
  ],
  [
    'Spirit Locket of Boreas',
    {
      name: 'Spirit Locket of Boreas',
      rarity: 5,
      group: 'Wolf of the North',
    },
  ],

  [
    'Tusk of Monoceros Caeli',
    {
      name: 'Tusk of Monoceros Caeli',
      rarity: 5,
      group: 'Enter the Golden House',
    },
  ],
  [
    'Shard of a Foul Legacy',
    {
      name: 'Shard of a Foul Legacy',
      rarity: 5,
      group: 'Enter the Golden House',
    },
  ],
  [
    'Shadow of the Warrior',
    {
      name: 'Shadow of the Warrior',
      rarity: 5,
      group: 'Enter the Golden House',
    },
  ],

  [
    "Dragon Lord's Crown",
    {
      name: "Dragon Lord's Crown",
      rarity: 5,
      group: 'Beneath the Dragon-Queller',
    },
  ],
  [
    'Bloodjade Branch',
    {
      name: 'Bloodjade Branch',
      rarity: 5,
      group: 'Beneath the Dragon-Queller',
    },
  ],
  [
    'Gilded Scale',
    {
      name: 'Gilded Scale',
      rarity: 5,
      group: 'Beneath the Dragon-Queller',
    },
  ],

  [
    'Molten Moment',
    {
      name: 'Molten Moment',
      rarity: 5,
      group: 'Narukami Island: Tenshukaku',
    },
  ],
  [
    'Ashen Heart',
    {
      name: 'Ashen Heart',
      rarity: 5,
      group: 'Narukami Island: Tenshukaku',
    },
  ],
  [
    'Hellfire Butterfly',
    {
      name: 'Hellfire Butterfly',
      rarity: 5,
      group: 'Narukami Island: Tenshukaku',
    },
  ],
])

export const AscensionGemMap = new Map<AscensionGem, IAscensionGem>([
  [
    'Brilliant Diamond Gemstone',
    {
      name: 'Brilliant Diamond Gemstone',
      rarity: 5,
      group: 'Brilliant Diamond',
    },
  ],
  [
    'Brilliant Diamond Chunk',
    {
      name: 'Brilliant Diamond Chunk',
      rarity: 4,
      group: 'Brilliant Diamond',
    },
  ],
  [
    'Brilliant Diamond Fragment',
    {
      name: 'Brilliant Diamond Fragment',
      rarity: 3,
      group: 'Brilliant Diamond',
    },
  ],
  [
    'Brilliant Diamond Sliver',
    {
      name: 'Brilliant Diamond Sliver',
      rarity: 2,
      group: 'Brilliant Diamond',
    },
  ],

  [
    'Agnidus Agate Gemstone',
    {
      name: 'Agnidus Agate Gemstone',
      rarity: 5,
      group: 'Agnidus Agate',
    },
  ],
  [
    'Agnidus Agate Chunk',
    {
      name: 'Agnidus Agate Chunk',
      rarity: 4,
      group: 'Agnidus Agate',
    },
  ],
  [
    'Agnidus Agate Fragment',
    {
      name: 'Agnidus Agate Fragment',
      rarity: 3,
      group: 'Agnidus Agate',
    },
  ],
  [
    'Agnidus Agate Sliver',
    {
      name: 'Agnidus Agate Sliver',
      rarity: 2,
      group: 'Agnidus Agate',
    },
  ],

  [
    'Varunada Lazurite Gemstone',
    {
      name: 'Varunada Lazurite Gemstone',
      rarity: 5,
      group: 'Varunada Lazurite',
    },
  ],
  [
    'Varunada Lazurite Chunk',
    {
      name: 'Varunada Lazurite Chunk',
      rarity: 4,
      group: 'Varunada Lazurite',
    },
  ],
  [
    'Varunada Lazurite Fragment',
    {
      name: 'Varunada Lazurite Fragment',
      rarity: 3,
      group: 'Varunada Lazurite',
    },
  ],
  [
    'Varunada Lazurite Sliver',
    {
      name: 'Varunada Lazurite Sliver',
      rarity: 2,
      group: 'Varunada Lazurite',
    },
  ],

  [
    'Vajrada Amethyst Gemstone',
    {
      name: 'Vajrada Amethyst Gemstone',
      rarity: 5,
      group: 'Vajrada Amethyst',
    },
  ],
  [
    'Vajrada Amethyst Chunk',
    {
      name: 'Vajrada Amethyst Chunk',
      rarity: 4,
      group: 'Vajrada Amethyst',
    },
  ],
  [
    'Vajrada Amethyst Fragment',
    {
      name: 'Vajrada Amethyst Fragment',
      rarity: 3,
      group: 'Vajrada Amethyst',
    },
  ],
  [
    'Vajrada Amethyst Sliver',
    {
      name: 'Vajrada Amethyst Sliver',
      rarity: 2,
      group: 'Vajrada Amethyst',
    },
  ],

  [
    'Vayuda Turquoise Gemstone',
    {
      name: 'Vayuda Turquoise Gemstone',
      rarity: 5,
      group: 'Vayuda Turquoise',
    },
  ],
  [
    'Vayuda Turquoise Chunk',
    {
      name: 'Vayuda Turquoise Chunk',
      rarity: 4,
      group: 'Vayuda Turquoise',
    },
  ],
  [
    'Vayuda Turquoise Fragment',
    {
      name: 'Vayuda Turquoise Fragment',
      rarity: 3,
      group: 'Vayuda Turquoise',
    },
  ],
  [
    'Vayuda Turquoise Sliver',
    {
      name: 'Vayuda Turquoise Sliver',
      rarity: 2,
      group: 'Vayuda Turquoise',
    },
  ],

  [
    'Shivada Jade Gemstone',
    {
      name: 'Shivada Jade Gemstone',
      rarity: 5,
      group: 'Shivada Jade',
    },
  ],
  [
    'Shivada Jade Chunk',
    { name: 'Shivada Jade Chunk', rarity: 4, group: 'Shivada Jade' },
  ],
  [
    'Shivada Jade Fragment',
    {
      name: 'Shivada Jade Fragment',
      rarity: 3,
      group: 'Shivada Jade',
    },
  ],
  [
    'Shivada Jade Sliver',
    { name: 'Shivada Jade Sliver', rarity: 2, group: 'Shivada Jade' },
  ],

  [
    'Prithiva Topaz Gemstone',
    {
      name: 'Prithiva Topaz Gemstone',
      rarity: 5,
      group: 'Prithiva Topaz',
    },
  ],
  [
    'Prithiva Topaz Chunk',
    {
      name: 'Prithiva Topaz Chunk',
      rarity: 4,
      group: 'Prithiva Topaz',
    },
  ],
  [
    'Prithiva Topaz Fragment',
    {
      name: 'Prithiva Topaz Fragment',
      rarity: 3,
      group: 'Prithiva Topaz',
    },
  ],
  [
    'Prithiva Topaz Sliver',
    {
      name: 'Prithiva Topaz Sliver',
      rarity: 2,
      group: 'Prithiva Topaz',
    },
  ],
])

export const AscensionBossMaterialMap = new Map<
  AscensionBossMaterial,
  IAscensionBossMaterial
>([
  ['Hurricane Seed', { name: 'Hurricane Seed', rarity: 4 }],
  ['Lightning Prism', { name: 'Lightning Prism', rarity: 4 }],
  ['Basalt Pillar', { name: 'Basalt Pillar', rarity: 4 }],
  ['Hoarfrost Core', { name: 'Hoarfrost Core', rarity: 4 }],
  ['Everflame Seed', { name: 'Everflame Seed', rarity: 4 }],
  ['Cleansing Heart', { name: 'Cleansing Heart', rarity: 4 }],
  ['Juvenile Jade', { name: 'Juvenile Jade', rarity: 4 }],
  ['Crystalline Bloom', { name: 'Crystalline Bloom', rarity: 4 }],
  ['Marionette Core', { name: 'Marionette Core', rarity: 4 }],
  ['Perpetual Heart', { name: 'Perpetual Heart', rarity: 4 }],
  ['Smoldering Pearl', { name: 'Smoldering Pearl', rarity: 4 }],
  ['Dew of Repudiation', { name: 'Dew of Repudiation', rarity: 4 }],
  ['Storm Beads', { name: 'Storm Beads', rarity: 4 }],
  ['Riftborn Regalia', { name: 'Riftborn Regalia', rarity: 4 }],
  ["Dragonheir's False Fin", { name: "Dragonheir's False Fin", rarity: 4 }],
])

export const LocalSpecialtyMap = new Map<LocalSpecialty, ILocalSpecialty>([
  ['Calla Lily', { name: 'Calla Lily', rarity: 1 }],
  ['Wolfhook', { name: 'Wolfhook', rarity: 1 }],
  ['Valberry', { name: 'Valberry', rarity: 1 }],
  ['Cecilia', { name: 'Cecilia', rarity: 1 }],
  ['Windwheel Aster', { name: 'Windwheel Aster', rarity: 1 }],
  ['Philanemo Mushroom', { name: 'Philanemo Mushroom', rarity: 1 }],
  ['Jueyun Chili', { name: 'Jueyun Chili', rarity: 1 }],
  ['Noctilucous Jade', { name: 'Noctilucous Jade', rarity: 1 }],
  ['Silk Flower', { name: 'Silk Flower', rarity: 1 }],
  ['Glaze Lily', { name: 'Glaze Lily', rarity: 1 }],
  ['Qingxin', { name: 'Qingxin', rarity: 1 }],
  ['Starconch', { name: 'Starconch', rarity: 1 }],
  ['Violetgrass', { name: 'Violetgrass', rarity: 1 }],
  ['Small Lamp Grass', { name: 'Small Lamp Grass', rarity: 1 }],
  ['Dandelion Seed', { name: 'Dandelion Seed', rarity: 1 }],
  ['Cor Lapis', { name: 'Cor Lapis', rarity: 1 }],
  ['Onikabuto', { name: 'Onikabuto', rarity: 1 }],
  ['Sakura Bloom', { name: 'Sakura Bloom', rarity: 1 }],
  ['Crystal Marrow', { name: 'Crystal Marrow', rarity: 1 }],
  ['Dendrobium', { name: 'Dendrobium', rarity: 1 }],
  ['Naku Weed', { name: 'Naku Weed', rarity: 1 }],
  ['Sea Ganoderma', { name: 'Sea Ganoderma', rarity: 1 }],
  ['Sango Pearl', { name: 'Sango Pearl', rarity: 1 }],
  ['Amakumo Fruit', { name: 'Amakumo Fruit', rarity: 1 }],
  ['Fluorescent Fungus', { name: 'Fluorescent Fungus', rarity: 1 }],
])

export const CommonMaterialMap = new Map<CommonMaterial, ICommonMaterial>([
  [
    'Slime Concentrate',
    { name: 'Slime Concentrate', rarity: 3, group: 'Slime' },
  ],
  ['Slime Secretions', { name: 'Slime Secretions', rarity: 2, group: 'Slime' }],
  ['Slime Condensate', { name: 'Slime Condensate', rarity: 1, group: 'Slime' }],

  [
    'Ominous Mask',
    { name: 'Ominous Mask', rarity: 3, group: 'Hilichurl Masks' },
  ],
  [
    'Stained Mask',
    { name: 'Stained Mask', rarity: 2, group: 'Hilichurl Masks' },
  ],
  [
    'Damaged Mask',
    { name: 'Damaged Mask', rarity: 1, group: 'Hilichurl Masks' },
  ],

  [
    'Forbidden Curse Scroll',
    {
      name: 'Forbidden Curse Scroll',
      rarity: 3,
      group: 'Samachurl Scrolls',
    },
  ],
  [
    'Sealed Scroll',
    { name: 'Sealed Scroll', rarity: 2, group: 'Samachurl Scrolls' },
  ],
  [
    'Divining Scroll',
    {
      name: 'Divining Scroll',
      rarity: 1,
      group: 'Samachurl Scrolls',
    },
  ],

  [
    'Weathered Arrowhead',
    {
      name: 'Weathered Arrowhead',
      rarity: 3,
      group: 'Hilichurl Arrowheads',
    },
  ],
  [
    'Sharp Arrowhead',
    {
      name: 'Sharp Arrowhead',
      rarity: 2,
      group: 'Hilichurl Arrowheads',
    },
  ],
  [
    'Firm Arrowhead',
    {
      name: 'Firm Arrowhead',
      rarity: 1,
      group: 'Hilichurl Arrowheads',
    },
  ],

  [
    'Black Crystal Horn',
    {
      name: 'Black Crystal Horn',
      rarity: 4,
      group: 'Hilichurl Horns',
    },
  ],
  [
    'Black Bronze Horn',
    {
      name: 'Black Bronze Horn',
      rarity: 3,
      group: 'Hilichurl Horns',
    },
  ],
  ['Heavy Horn', { name: 'Heavy Horn', rarity: 2, group: 'Hilichurl Horns' }],

  [
    'Ley Line Sprout',
    { name: 'Ley Line Sprout', rarity: 4, group: 'Ley Lines' },
  ],
  [
    'Dead Ley Line Leaves',
    { name: 'Dead Ley Line Leaves', rarity: 3, group: 'Ley Lines' },
  ],
  [
    'Dead Ley Line Branch',
    { name: 'Dead Ley Line Branch', rarity: 2, group: 'Ley Lines' },
  ],

  ['Chaos Core', { name: 'Chaos Core', rarity: 4, group: 'Chaos Parts' }],
  ['Chaos Circuit', { name: 'Chaos Circuit', rarity: 3, group: 'Chaos Parts' }],
  ['Chaos Device', { name: 'Chaos Device', rarity: 2, group: 'Chaos Parts' }],

  [
    'Mist Grass Wick',
    { name: 'Mist Grass Wick', rarity: 4, group: 'Mist Grass' },
  ],
  ['Mist Grass', { name: 'Mist Grass', rarity: 3, group: 'Mist Grass' }],
  [
    'Mist Grass Pollen',
    { name: 'Mist Grass Pollen', rarity: 2, group: 'Mist Grass' },
  ],

  [
    "Inspector's Sacrificial Knife",
    {
      name: "Inspector's Sacrificial Knife",
      rarity: 4,
      group: 'Sacrificial Knifes',
    },
  ],
  [
    "Agent's Sacrificial Knife",
    {
      name: "Agent's Sacrificial Knife",
      rarity: 3,
      group: 'Sacrificial Knifes',
    },
  ],
  [
    "Hunter's Sacrificial Knife",
    {
      name: "Hunter's Sacrificial Knife",
      rarity: 2,
      group: 'Sacrificial Knifes',
    },
  ],

  [
    "Lieutenant's Insignia",
    {
      name: "Lieutenant's Insignia",
      rarity: 3,
      group: 'Fatui Insignia',
    },
  ],
  [
    "Sergeant's Insignia",
    {
      name: "Sergeant's Insignia",
      rarity: 2,
      group: 'Fatui Insignia',
    },
  ],
  [
    "Recruit's Insignia",
    {
      name: "Recruit's Insignia",
      rarity: 1,
      group: 'Fatui Insignia',
    },
  ],

  [
    'Golden Raven Insignia',
    {
      name: 'Golden Raven Insignia',
      rarity: 3,
      group: 'Treasure Hoarder Insignias',
    },
  ],
  [
    'Silver Raven Insignia',
    {
      name: 'Silver Raven Insignia',
      rarity: 2,
      group: 'Treasure Hoarder Insignias',
    },
  ],
  [
    'Treasure Hoarder Insignia',
    {
      name: 'Treasure Hoarder Insignia',
      rarity: 1,
      group: 'Treasure Hoarder Insignias',
    },
  ],

  [
    'Energy Nectar',
    {
      name: 'Energy Nectar',
      rarity: 3,
      group: 'Whopperflower Nectar',
    },
  ],
  [
    'Shimmering Nectar',
    {
      name: 'Shimmering Nectar',
      rarity: 2,
      group: 'Whopperflower Nectar',
    },
  ],
  [
    'Whopperflower Nectar',
    {
      name: 'Whopperflower Nectar',
      rarity: 1,
      group: 'Whopperflower Nectar',
    },
  ],

  [
    'Fossilized Bone Shard',
    {
      name: 'Fossilized Bone Shard',
      rarity: 4,
      group: 'Bone Shards',
    },
  ],
  [
    'Sturdy Bone Shard',
    { name: 'Sturdy Bone Shard', rarity: 3, group: 'Bone Shards' },
  ],
  [
    'Fragile Bone Shard',
    { name: 'Fragile Bone Shard', rarity: 2, group: 'Bone Shards' },
  ],

  [
    'Famed Handguard',
    {
      name: 'Famed Handguard',
      rarity: 3,
      group: 'Nobushi Handguards',
    },
  ],
  [
    'Kageuchi Handguard',
    {
      name: 'Kageuchi Handguard',
      rarity: 2,
      group: 'Nobushi Handguards',
    },
  ],
  [
    'Old Handguard',
    { name: 'Old Handguard', rarity: 1, group: 'Nobushi Handguards' },
  ],

  [
    'Chaos Oculus',
    {
      name: 'Chaos Oculus',
      rarity: 4,
      group: 'Sentinel Chaos Parts',
    },
  ],
  [
    'Chaos Axis',
    { name: 'Chaos Axis', rarity: 3, group: 'Sentinel Chaos Parts' },
  ],
  [
    'Chaos Gear',
    { name: 'Chaos Gear', rarity: 2, group: 'Sentinel Chaos Parts' },
  ],

  [
    'Polarizing Prism',
    { name: 'Polarizing Prism', rarity: 4, group: 'Prisms' },
  ],
  ['Crystal Prism', { name: 'Crystal Prism', rarity: 3, group: 'Prisms' }],
  ['Dismal Prism', { name: 'Dismal Prism', rarity: 2, group: 'Prisms' }],

  [
    'Spectral Nucleus',
    { name: 'Spectral Nucleus', rarity: 3, group: 'Spectral Cores' },
  ],
  [
    'Spectral Heart',
    { name: 'Spectral Heart', rarity: 2, group: 'Spectral Cores' },
  ],
  [
    'Spectral Husk',
    { name: 'Spectral Husk', rarity: 1, group: 'Spectral Cores' },
  ],

  [
    'Concealed Talon',
    {
      name: 'Concealed Talon',
      rarity: 4,
      group: 'Concealed Rifthound Claws',
    },
  ],
  [
    'Concealed Unguis',
    {
      name: 'Concealed Unguis',
      rarity: 3,
      group: 'Concealed Rifthound Claws',
    },
  ],
  [
    'Concealed Claw',
    {
      name: 'Concealed Claw',
      rarity: 2,
      group: 'Concealed Rifthound Claws',
    },
  ],
])

export function getItems(): ItemTypes {
  return {
    common: {
      name: 'Common Material',
      items: Array.from(CommonMaterialMap.values()),
    },
    talentBoss: {
      name: 'Talent Boss Material',
      items: Array.from(TalentBossMaterialMap.values()),
    },
    ascensionBoss: {
      name: 'Ascension Boss Material',
      items: Array.from(AscensionBossMaterialMap.values()),
    },
    ascensionGem: {
      name: 'Ascension Gem',
      items: Array.from(AscensionGemMap.values()),
    },
    talentBook: {
      name: 'Talent Book',
      items: Array.from(TalentBookMap.values()),
    },
    crown: {
      name: 'Crown',
      items: Array.from(CrownMap.values()),
    },
    localSpecialty: {
      name: 'Local Specialty',
      items: Array.from(LocalSpecialtyMap.values()),
    },
  }
}
