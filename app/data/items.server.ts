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

export const talentCrownMap = new Map<TalentCrown, ITalentCrown>([
  ['Crown of Insight', { name: 'Crown of Insight', rarity: 5, count: 0 }],
])

export const talentBookMap = new Map<TalentBook, ITalentBook>([
  [
    'Teachings of Freedom',
    { name: 'Teachings of Freedom', region: 'mondstadt', rarity: 2, count: 0 },
  ],
  [
    'Guide of Freedom',
    { name: 'Guide of Freedom', region: 'mondstadt', rarity: 3, count: 0 },
  ],
  [
    'Philosophies of Freedom',
    {
      name: 'Philosophies of Freedom',
      region: 'mondstadt',
      rarity: 4,
      count: 0,
    },
  ],
  [
    'Teachings of Prosperity',
    { name: 'Teachings of Prosperity', region: 'liyue', rarity: 2, count: 0 },
  ],
  [
    'Guide of Prosperity',
    { name: 'Guide of Prosperity', region: 'liyue', rarity: 3, count: 0 },
  ],
  [
    'Philosophies of Prosperity',
    {
      name: 'Philosophies of Prosperity',
      region: 'liyue',
      rarity: 4,
      count: 0,
    },
  ],
  [
    'Teachings of Transience',
    { name: 'Teachings of Transience', region: 'inazuma', rarity: 2, count: 0 },
  ],
  [
    'Guide of Transience',
    { name: 'Guide of Transience', region: 'inazuma', rarity: 3, count: 0 },
  ],
  [
    'Philosophies of Transience',
    {
      name: 'Philosophies of Transience',
      region: 'inazuma',
      rarity: 4,
      count: 0,
    },
  ],
  [
    'Teachings of Elegance',
    { name: 'Teachings of Elegance', region: 'inazuma', rarity: 2, count: 0 },
  ],
  [
    'Guide of Elegance',
    { name: 'Guide of Elegance', region: 'inazuma', rarity: 3, count: 0 },
  ],
  [
    'Philosophies of Elegance',
    {
      name: 'Philosophies of Elegance',
      region: 'inazuma',
      rarity: 4,
      count: 0,
    },
  ],
  [
    'Teachings of Resistance',
    {
      name: 'Teachings of Resistance',
      region: 'mondstadt',
      rarity: 2,
      count: 0,
    },
  ],
  [
    'Guide of Resistance',
    { name: 'Guide of Resistance', region: 'mondstadt', rarity: 3, count: 0 },
  ],
  [
    'Philosophies of Resistance',
    {
      name: 'Philosophies of Resistance',
      region: 'mondstadt',
      rarity: 4,
      count: 0,
    },
  ],
  [
    'Teachings of Diligence',
    { name: 'Teachings of Diligence', region: 'liyue', rarity: 2, count: 0 },
  ],
  [
    'Guide of Diligence',
    { name: 'Guide of Diligence', region: 'liyue', rarity: 3, count: 0 },
  ],
  [
    'Philosophies of Diligence',
    { name: 'Philosophies of Diligence', region: 'liyue', rarity: 4, count: 0 },
  ],
  [
    'Teachings of Ballad',
    { name: 'Teachings of Ballad', region: 'mondstadt', rarity: 2, count: 0 },
  ],
  [
    'Guide of Ballad',
    { name: 'Guide of Ballad', region: 'mondstadt', rarity: 3, count: 0 },
  ],
  [
    'Philosophies of Ballad',
    {
      name: 'Philosophies of Ballad',
      region: 'mondstadt',
      rarity: 4,
      count: 0,
    },
  ],
  [
    'Teachings of Gold',
    { name: 'Teachings of Gold', region: 'liyue', rarity: 2, count: 0 },
  ],
  [
    'Guide of Gold',
    { name: 'Guide of Gold', region: 'liyue', rarity: 3, count: 0 },
  ],
  [
    'Philosophies of Gold',
    { name: 'Philosophies of Gold', region: 'liyue', rarity: 4, count: 0 },
  ],
  [
    'Teachings of Light',
    { name: 'Teachings of Light', region: 'inazuma', rarity: 2, count: 0 },
  ],
  [
    'Guide of Light',
    { name: 'Guide of Light', region: 'inazuma', rarity: 3, count: 0 },
  ],
  [
    'Philosophies of Light',
    { name: 'Philosophies of Light', region: 'inazuma', rarity: 4, count: 0 },
  ],
])

export const talentBossMaterialMap = new Map<
  TalentBossMaterial,
  ITalentBossMaterial
>([
  [
    "Dvalin's Plume",
    { name: "Dvalin's Plume", region: 'mondstadt', rarity: 5, count: 0 },
  ],
  [
    "Dvalin's Claw",
    { name: "Dvalin's Claw", region: 'mondstadt', rarity: 5, count: 0 },
  ],
  [
    "Dvalin's Sigh",
    { name: "Dvalin's Sigh", region: 'mondstadt', rarity: 5, count: 0 },
  ],
  [
    'Tail of Boreas',
    { name: 'Tail of Boreas', region: 'mondstadt', rarity: 5, count: 0 },
  ],
  [
    'Ring of Boreas',
    { name: 'Ring of Boreas', region: 'mondstadt', rarity: 5, count: 0 },
  ],
  [
    'Spirit Locket of Boreas',
    {
      name: 'Spirit Locket of Boreas',
      region: 'mondstadt',
      rarity: 5,
      count: 0,
    },
  ],
  [
    'Tusk of Monoceros Caeli',
    { name: 'Tusk of Monoceros Caeli', region: 'liyue', rarity: 5, count: 0 },
  ],
  [
    'Shard of a Foul Legacy',
    { name: 'Shard of a Foul Legacy', region: 'liyue', rarity: 5, count: 0 },
  ],
  [
    'Shadow of the Warrior',
    { name: 'Shadow of the Warrior', region: 'liyue', rarity: 5, count: 0 },
  ],
  [
    "Dragon Lord's Crown",
    { name: "Dragon Lord's Crown", region: 'liyue', rarity: 5, count: 0 },
  ],
  [
    'Bloodjade Branch',
    { name: 'Bloodjade Branch', region: 'liyue', rarity: 5, count: 0 },
  ],
  [
    'Gilded Scale',
    { name: 'Gilded Scale', region: 'liyue', rarity: 5, count: 0 },
  ],
  [
    'Molten Moment',
    { name: 'Molten Moment', region: 'inazuma', rarity: 5, count: 0 },
  ],
  [
    'Ashen Heart',
    { name: 'Ashen Heart', region: 'inazuma', rarity: 5, count: 0 },
  ],
  [
    'Hellfire Butterfly',
    { name: 'Hellfire Butterfly', region: 'inazuma', rarity: 5, count: 0 },
  ],
])

export const ascensionGemMap = new Map<AscensionGem, IAscensionGem>([
  [
    'Brilliant Diamond Sliver',
    { name: 'Brilliant Diamond Sliver', rarity: 2, count: 0 },
  ],
  [
    'Brilliant Diamond Fragment',
    { name: 'Brilliant Diamond Fragment', rarity: 3, count: 0 },
  ],
  [
    'Brilliant Diamond Chunk',
    { name: 'Brilliant Diamond Chunk', rarity: 4, count: 0 },
  ],
  [
    'Brilliant Diamond Gemstone',
    { name: 'Brilliant Diamond Gemstone', rarity: 5, count: 0 },
  ],
  [
    'Agnidus Agate Sliver',
    { name: 'Agnidus Agate Sliver', rarity: 2, count: 0 },
  ],
  [
    'Agnidus Agate Fragment',
    { name: 'Agnidus Agate Fragment', rarity: 3, count: 0 },
  ],
  ['Agnidus Agate Chunk', { name: 'Agnidus Agate Chunk', rarity: 4, count: 0 }],
  [
    'Agnidus Agate Gemstone',
    { name: 'Agnidus Agate Gemstone', rarity: 5, count: 0 },
  ],
  [
    'Varunada Lazurite Sliver',
    { name: 'Varunada Lazurite Sliver', rarity: 2, count: 0 },
  ],
  [
    'Varunada Lazurite Fragment',
    { name: 'Varunada Lazurite Fragment', rarity: 3, count: 0 },
  ],
  [
    'Varunada Lazurite Chunk',
    { name: 'Varunada Lazurite Chunk', rarity: 4, count: 0 },
  ],
  [
    'Varunada Lazurite Gemstone',
    { name: 'Varunada Lazurite Gemstone', rarity: 5, count: 0 },
  ],
  [
    'Vajrada Amethyst Sliver',
    { name: 'Vajrada Amethyst Sliver', rarity: 2, count: 0 },
  ],
  [
    'Vajrada Amethyst Fragment',
    { name: 'Vajrada Amethyst Fragment', rarity: 3, count: 0 },
  ],
  [
    'Vajrada Amethyst Chunk',
    { name: 'Vajrada Amethyst Chunk', rarity: 4, count: 0 },
  ],
  [
    'Vajrada Amethyst Gemstone',
    { name: 'Vajrada Amethyst Gemstone', rarity: 5, count: 0 },
  ],
  [
    'Vayuda Turquoise Sliver',
    { name: 'Vayuda Turquoise Sliver', rarity: 2, count: 0 },
  ],
  [
    'Vayuda Turquoise Fragment',
    { name: 'Vayuda Turquoise Fragment', rarity: 3, count: 0 },
  ],
  [
    'Vayuda Turquoise Chunk',
    { name: 'Vayuda Turquoise Chunk', rarity: 4, count: 0 },
  ],
  [
    'Vayuda Turquoise Gemstone',
    { name: 'Vayuda Turquoise Gemstone', rarity: 5, count: 0 },
  ],
  ['Shivada Jade Sliver', { name: 'Shivada Jade Sliver', rarity: 2, count: 0 }],
  [
    'Shivada Jade Fragment',
    { name: 'Shivada Jade Fragment', rarity: 3, count: 0 },
  ],
  ['Shivada Jade Chunk', { name: 'Shivada Jade Chunk', rarity: 4, count: 0 }],
  [
    'Shivada Jade Gemstone',
    { name: 'Shivada Jade Gemstone', rarity: 5, count: 0 },
  ],
  [
    'Prithiva Topaz Sliver',
    { name: 'Prithiva Topaz Sliver', rarity: 2, count: 0 },
  ],
  [
    'Prithiva Topaz Fragment',
    { name: 'Prithiva Topaz Fragment', rarity: 3, count: 0 },
  ],
  [
    'Prithiva Topaz Chunk',
    { name: 'Prithiva Topaz Chunk', rarity: 4, count: 0 },
  ],
  [
    'Prithiva Topaz Gemstone',
    { name: 'Prithiva Topaz Gemstone', rarity: 5, count: 0 },
  ],
])

export const ascensionBossMaterialMap = new Map<
  AscensionBossMaterial,
  IAscensionBossMaterial
>([
  [
    'Hurricane Seed',
    { name: 'Hurricane Seed', region: 'mondstadt', rarity: 4, count: 0 },
  ],
  [
    'Lightning Prism',
    { name: 'Lightning Prism', region: 'mondstadt', rarity: 4, count: 0 },
  ],
  [
    'Basalt Pillar',
    { name: 'Basalt Pillar', region: 'liyue', rarity: 4, count: 0 },
  ],
  [
    'Hoarfrost Core',
    { name: 'Hoarfrost Core', region: 'mondstadt', rarity: 4, count: 0 },
  ],
  [
    'Everflame Seed',
    { name: 'Everflame Seed', region: 'liyue', rarity: 4, count: 0 },
  ],
  [
    'Cleansing Heart',
    { name: 'Cleansing Heart', region: 'liyue', rarity: 4, count: 0 },
  ],
  [
    'Juvenile Jade',
    { name: 'Juvenile Jade', region: 'liyue', rarity: 4, count: 0 },
  ],
  [
    'Crystalline Bloom',
    { name: 'Crystalline Bloom', region: 'mondstadt', rarity: 4, count: 0 },
  ],
  [
    'Marionette Core',
    { name: 'Marionette Core', region: 'inazuma', rarity: 4, count: 0 },
  ],
  [
    'Perpetual Heart',
    { name: 'Perpetual Heart', region: 'inazuma', rarity: 4, count: 0 },
  ],
  [
    'Smoldering Pearl',
    { name: 'Smoldering Pearl', region: 'inazuma', rarity: 4, count: 0 },
  ],
  [
    'Dew of Repudiation',
    { name: 'Dew of Repudiation', region: 'inazuma', rarity: 4, count: 0 },
  ],
  [
    'Storm Beads',
    { name: 'Storm Beads', region: 'inazuma', rarity: 4, count: 0 },
  ],
  [
    'Riftborn Regalia',
    { name: 'Riftborn Regalia', region: 'inazuma', rarity: 4, count: 0 },
  ],
  [
    "Dragonheir's False Fin",
    { name: "Dragonheir's False Fin", region: 'inazuma', rarity: 4, count: 0 },
  ],
])

export const ascensionLocalSpecialtyMap = new Map<
  LocalSpecialty,
  ILocalSpecialty
>([
  [
    'Calla Lily',
    { name: 'Calla Lily', region: 'mondstadt', rarity: 1, count: 0 },
  ],
  ['Wolfhook', { name: 'Wolfhook', region: 'mondstadt', rarity: 1, count: 0 }],
  ['Valberry', { name: 'Valberry', region: 'mondstadt', rarity: 1, count: 0 }],
  ['Cecilia', { name: 'Cecilia', region: 'mondstadt', rarity: 1, count: 0 }],
  [
    'Windwheel Aster',
    { name: 'Windwheel Aster', region: 'mondstadt', rarity: 1, count: 0 },
  ],
  [
    'Philanemo Mushroom',
    { name: 'Philanemo Mushroom', region: 'mondstadt', rarity: 1, count: 0 },
  ],
  [
    'Jueyun Chili',
    { name: 'Jueyun Chili', region: 'liyue', rarity: 1, count: 0 },
  ],
  [
    'Noctilucous Jade',
    { name: 'Noctilucous Jade', region: 'liyue', rarity: 1, count: 0 },
  ],
  [
    'Silk Flower',
    { name: 'Silk Flower', region: 'liyue', rarity: 1, count: 0 },
  ],
  ['Glaze Lily', { name: 'Glaze Lily', region: 'liyue', rarity: 1, count: 0 }],
  ['Qingxin', { name: 'Qingxin', region: 'liyue', rarity: 1, count: 0 }],
  ['Starconch', { name: 'Starconch', region: 'liyue', rarity: 1, count: 0 }],
  [
    'Violetgrass',
    { name: 'Violetgrass', region: 'liyue', rarity: 1, count: 0 },
  ],
  [
    'Small Lamp Grass',
    { name: 'Small Lamp Grass', region: 'mondstadt', rarity: 1, count: 0 },
  ],
  [
    'Dandelion Seed',
    { name: 'Dandelion Seed', region: 'mondstadt', rarity: 1, count: 0 },
  ],
  ['Cor Lapis', { name: 'Cor Lapis', region: 'liyue', rarity: 1, count: 0 }],
  ['Onikabuto', { name: 'Onikabuto', region: 'inazuma', rarity: 1, count: 0 }],
  [
    'Sakura Bloom',
    { name: 'Sakura Bloom', region: 'inazuma', rarity: 1, count: 0 },
  ],
  [
    'Crystal Marrow',
    { name: 'Crystal Marrow', region: 'inazuma', rarity: 1, count: 0 },
  ],
  [
    'Dendrobium',
    { name: 'Dendrobium', region: 'inazuma', rarity: 1, count: 0 },
  ],
  ['Naku Weed', { name: 'Naku Weed', region: 'inazuma', rarity: 1, count: 0 }],
  [
    'Sea Ganoderma',
    { name: 'Sea Ganoderma', region: 'inazuma', rarity: 1, count: 0 },
  ],
  [
    'Sango Pearl',
    { name: 'Sango Pearl', region: 'inazuma', rarity: 1, count: 0 },
  ],
  [
    'Amakumo Fruit',
    { name: 'Amakumo Fruit', region: 'inazuma', rarity: 1, count: 0 },
  ],
  [
    'Fluorescent Fungus',
    { name: 'Fluorescent Fungus', region: 'inazuma', rarity: 1, count: 0 },
  ],
])

export const ascensionCommonMaterialMap = new Map<
  AscensionCommonMaterial,
  IAscensionCommonMaterial
>([
  ['Slime Condensate', { name: 'Slime Condensate', rarity: 1, count: 0 }],
  ['Slime Secretions', { name: 'Slime Secretions', rarity: 2, count: 0 }],
  ['Slime Concentrate', { name: 'Slime Concentrate', rarity: 3, count: 0 }],
  ['Damaged Mask', { name: 'Damaged Mask', rarity: 1, count: 0 }],
  ['Stained Mask', { name: 'Stained Mask', rarity: 2, count: 0 }],
  ['Ominous Mask', { name: 'Ominous Mask', rarity: 3, count: 0 }],
  ['Divining Scroll', { name: 'Divining Scroll', rarity: 1, count: 0 }],
  ['Sealed Scroll', { name: 'Sealed Scroll', rarity: 2, count: 0 }],
  [
    'Forbidden Curse Scroll',
    { name: 'Forbidden Curse Scroll', rarity: 3, count: 0 },
  ],
  ['Firm Arrowhead', { name: 'Firm Arrowhead', rarity: 1, count: 0 }],
  ['Sharp Arrowhead', { name: 'Sharp Arrowhead', rarity: 2, count: 0 }],
  ['Weathered Arrowhead', { name: 'Weathered Arrowhead', rarity: 3, count: 0 }],
  ["Recruit's Insignia", { name: "Recruit's Insignia", rarity: 1, count: 0 }],
  ["Sergeant's Insignia", { name: "Sergeant's Insignia", rarity: 2, count: 0 }],
  [
    "Lieutenant's Insignia",
    { name: "Lieutenant's Insignia", rarity: 3, count: 0 },
  ],
  [
    'Treasure Hoarder Insignia',
    { name: 'Treasure Hoarder Insignia', rarity: 1, count: 0 },
  ],
  [
    'Silver Raven Insignia',
    { name: 'Silver Raven Insignia', rarity: 2, count: 0 },
  ],
  [
    'Golden Raven Insignia',
    { name: 'Golden Raven Insignia', rarity: 3, count: 0 },
  ],
  [
    'Whopperflower Nectar',
    { name: 'Whopperflower Nectar', rarity: 1, count: 0 },
  ],
  ['Shinmmering Nectar', { name: 'Shinmmering Nectar', rarity: 2, count: 0 }],
  ['Energy Nectar', { name: 'Energy Nectar', rarity: 3, count: 0 }],
  ['Old Handguard', { name: 'Old Handguard', rarity: 1, count: 0 }],
  ['Kageuchi Handguard', { name: 'Kageuchi Handguard', rarity: 2, count: 0 }],
  ['Famed Handguard', { name: 'Famed Handguard', rarity: 3, count: 0 }],
  ['Spectral Husk', { name: 'Spectral Husk', rarity: 1, count: 0 }],
  ['Spectral Heart', { name: 'Spectral Heart', rarity: 2, count: 0 }],
  ['Spectral Nucleus', { name: 'Spectral Nucleus', rarity: 3, count: 0 }],
  ['Heavy Horn', { name: 'Heavy Horn', rarity: 2, count: 0 }],
  ['Black Bronze Horn', { name: 'Black Bronze Horn', rarity: 3, count: 0 }],
  ['Black Crystal Horn', { name: 'Black Crystal Horn', rarity: 4, count: 0 }],
  [
    'Dead Ley Line Branch',
    { name: 'Dead Ley Line Branch', rarity: 2, count: 0 },
  ],
  [
    'Dead Ley Line Leaves',
    { name: 'Dead Ley Line Leaves', rarity: 3, count: 0 },
  ],
  ['Ley Line Sprout', { name: 'Ley Line Sprout', rarity: 4, count: 0 }],
  ['Chaos Device', { name: 'Chaos Device', rarity: 2, count: 0 }],
  ['Chaos Circuit', { name: 'Chaos Circuit', rarity: 3, count: 0 }],
  ['Chaos Core', { name: 'Chaos Core', rarity: 4, count: 0 }],
  ['Mist Grass Pollen', { name: 'Mist Grass Pollen', rarity: 2, count: 0 }],
  ['Mist Grass', { name: 'Mist Grass', rarity: 3, count: 0 }],
  ['Mist Grass Wick', { name: 'Mist Grass Wick', rarity: 4, count: 0 }],
  [
    "Hunter's Sacrificial Knife",
    { name: "Hunter's Sacrificial Knife", rarity: 2, count: 0 },
  ],
  [
    "Agent's Sacrificial Knife",
    { name: "Agent's Sacrificial Knife", rarity: 3, count: 0 },
  ],
  [
    "Inspector's Sacrificial Knife",
    { name: "Inspector's Sacrificial Knife", rarity: 4, count: 0 },
  ],
  ['Fragile Bone Shard', { name: 'Fragile Bone Shard', rarity: 2, count: 0 }],
  ['Sturdy Bone Shard', { name: 'Sturdy Bone Shard', rarity: 3, count: 0 }],
  [
    'Fossilized Bone Shard',
    { name: 'Fossilized Bone Shard', rarity: 4, count: 0 },
  ],
  ['Chaos Gear', { name: 'Chaos Gear', rarity: 2, count: 0 }],
  ['Chaos Axis', { name: 'Chaos Axis', rarity: 3, count: 0 }],
  ['Chaos Oculus', { name: 'Chaos Oculus', rarity: 4, count: 0 }],
  ['Dismal Prism', { name: 'Dismal Prism', rarity: 2, count: 0 }],
  ['Crystal Prism', { name: 'Crystal Prism', rarity: 3, count: 0 }],
  ['Polarizing Prism', { name: 'Polarizing Prism', rarity: 4, count: 0 }],
  ['Concealed Claw', { name: 'Concealed Claw', rarity: 2, count: 0 }],
  ['Concealed Unguis', { name: 'Concealed Unguis', rarity: 3, count: 0 }],
  ['Concealed Talon', { name: 'Concealed Talon', rarity: 4, count: 0 }],
])
