import { CharacterName, ICharacter } from '~/types/character'

const charactersPyroMap = new Map<CharacterName, ICharacter>()

charactersPyroMap.set('Amber', {
  name: 'Amber',
  vision: 'Pyro',
  rarity: 4,
  weaponType: 'Bow',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Agnidus Agate Sliver', amount: 1 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 3 },
        common: { name: 'Firm Arrowhead', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 3 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 10 },
        common: { name: 'Firm Arrowhead', amount: 15 },
        boss: { name: 'Everflame Seed', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 6 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 20 },
        common: { name: 'Sharp Arrowhead', amount: 12 },
        boss: { name: 'Everflame Seed', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 3 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 30 },
        common: { name: 'Sharp Arrowhead', amount: 18 },
        boss: { name: 'Everflame Seed', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 6 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 45 },
        common: { name: 'Weathered Arrowhead', amount: 12 },
        boss: { name: 'Everflame Seed', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Agnidus Agate Gemstone', amount: 6 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 60 },
        common: { name: 'Weathered Arrowhead', amount: 24 },
        boss: { name: 'Everflame Seed', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Firm Arrowhead', amount: 3 },
        book: { name: 'Teachings of Freedom', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Sharp Arrowhead', amount: 3 },
        book: { name: 'Guide of Freedom', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Sharp Arrowhead', amount: 4 },
        book: { name: 'Guide of Freedom', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Sharp Arrowhead', amount: 6 },
        book: { name: 'Guide of Freedom', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Sharp Arrowhead', amount: 9 },
        book: { name: 'Guide of Freedom', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Weathered Arrowhead', amount: 4 },
        book: { name: 'Philosophies of Freedom', amount: 4 },
        boss: { name: "Dvalin's Sigh", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Weathered Arrowhead', amount: 6 },
        book: { name: 'Philosophies of Freedom', amount: 6 },
        boss: { name: "Dvalin's Sigh", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Weathered Arrowhead', amount: 9 },
        book: { name: 'Philosophies of Freedom', amount: 12 },
        boss: { name: "Dvalin's Sigh", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Weathered Arrowhead', amount: 12 },
        book: { name: 'Philosophies of Freedom', amount: 16 },
        boss: { name: "Dvalin's Sigh", amount: 2 },
        crown: { name: 'Crown of Insight', amount: 1 },
      },
    ],
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

charactersPyroMap.set('Bennett', {
  name: 'Bennett',
  vision: 'Pyro',
  rarity: 4,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Agnidus Agate Sliver', amount: 1 },
        localSpecialty: { name: 'Windwheel Aster', amount: 3 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 3 },
        localSpecialty: { name: 'Windwheel Aster', amount: 10 },
        common: { name: 'Treasure Hoarder Insignia', amount: 15 },
        boss: { name: 'Everflame Seed', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 6 },
        localSpecialty: { name: 'Windwheel Aster', amount: 20 },
        common: { name: 'Silver Raven Insignia', amount: 12 },
        boss: { name: 'Everflame Seed', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 3 },
        localSpecialty: { name: 'Windwheel Aster', amount: 30 },
        common: { name: 'Silver Raven Insignia', amount: 18 },
        boss: { name: 'Everflame Seed', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 6 },
        localSpecialty: { name: 'Windwheel Aster', amount: 45 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        boss: { name: 'Everflame Seed', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Agnidus Agate Gemstone', amount: 6 },
        localSpecialty: { name: 'Windwheel Aster', amount: 60 },
        common: { name: 'Golden Raven Insignia', amount: 24 },
        boss: { name: 'Everflame Seed', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
        book: { name: 'Teachings of Resistance', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Silver Raven Insignia', amount: 3 },
        book: { name: 'Guide of Resistance', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Silver Raven Insignia', amount: 4 },
        book: { name: 'Guide of Resistance', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Silver Raven Insignia', amount: 6 },
        book: { name: 'Guide of Resistance', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Silver Raven Insignia', amount: 9 },
        book: { name: 'Guide of Resistance', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Golden Raven Insignia', amount: 4 },
        book: { name: 'Philosophies of Resistance', amount: 4 },
        boss: { name: "Dvalin's Plume", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Golden Raven Insignia', amount: 6 },
        book: { name: 'Philosophies of Resistance', amount: 6 },
        boss: { name: "Dvalin's Plume", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Golden Raven Insignia', amount: 9 },
        book: { name: 'Philosophies of Resistance', amount: 12 },
        boss: { name: "Dvalin's Plume", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        book: { name: 'Philosophies of Resistance', amount: 16 },
        boss: { name: "Dvalin's Plume", amount: 2 },
        crown: { name: 'Crown of Insight', amount: 1 },
      },
    ],
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

charactersPyroMap.set('Diluc', {
  name: 'Diluc',
  vision: 'Pyro',
  rarity: 5,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Agnidus Agate Sliver', amount: 1 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 3 },
        common: { name: "Recruit's Insignia", amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 3 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 10 },
        common: { name: "Recruit's Insignia", amount: 15 },
        boss: { name: 'Everflame Seed', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 6 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 20 },
        common: { name: "Sergeant's Insignia", amount: 12 },
        boss: { name: 'Everflame Seed', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 3 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 30 },
        common: { name: "Sergeant's Insignia", amount: 18 },
        boss: { name: 'Everflame Seed', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 6 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 45 },
        common: { name: "Lieutenant's Insignia", amount: 12 },
        boss: { name: 'Everflame Seed', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Agnidus Agate Gemstone', amount: 6 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 60 },
        common: { name: "Lieutenant's Insignia", amount: 24 },
        boss: { name: 'Everflame Seed', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: "Recruit's Insignia", amount: 3 },
        book: { name: 'Teachings of Resistance', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: "Sergeant's Insignia", amount: 3 },
        book: { name: 'Guide of Resistance', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: "Sergeant's Insignia", amount: 4 },
        book: { name: 'Guide of Resistance', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: "Sergeant's Insignia", amount: 6 },
        book: { name: 'Guide of Resistance', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: "Sergeant's Insignia", amount: 9 },
        book: { name: 'Guide of Resistance', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: "Lieutenant's Insignia", amount: 4 },
        book: { name: 'Philosophies of Resistance', amount: 4 },
        boss: { name: "Dvalin's Plume", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: "Lieutenant's Insignia", amount: 6 },
        book: { name: 'Philosophies of Resistance', amount: 6 },
        boss: { name: "Dvalin's Plume", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: "Lieutenant's Insignia", amount: 9 },
        book: { name: 'Philosophies of Resistance', amount: 12 },
        boss: { name: "Dvalin's Plume", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: "Lieutenant's Insignia", amount: 12 },
        book: { name: 'Philosophies of Resistance', amount: 16 },
        boss: { name: "Dvalin's Plume", amount: 2 },
        crown: { name: 'Crown of Insight', amount: 1 },
      },
    ],
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

charactersPyroMap.set('Hu Tao', {
  name: 'Hu Tao',
  vision: 'Pyro',
  rarity: 5,
  weaponType: 'Polearm',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Agnidus Agate Sliver', amount: 1 },
        localSpecialty: { name: 'Silk Flower', amount: 3 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 3 },
        localSpecialty: { name: 'Silk Flower', amount: 10 },
        common: { name: 'Whopperflower Nectar', amount: 15 },
        boss: { name: 'Juvenile Jade', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 6 },
        localSpecialty: { name: 'Silk Flower', amount: 20 },
        common: { name: 'Shimmering Nectar', amount: 12 },
        boss: { name: 'Juvenile Jade', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 3 },
        localSpecialty: { name: 'Silk Flower', amount: 30 },
        common: { name: 'Shimmering Nectar', amount: 18 },
        boss: { name: 'Juvenile Jade', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 6 },
        localSpecialty: { name: 'Silk Flower', amount: 45 },
        common: { name: 'Energy Nectar', amount: 12 },
        boss: { name: 'Juvenile Jade', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Agnidus Agate Gemstone', amount: 6 },
        localSpecialty: { name: 'Silk Flower', amount: 60 },
        common: { name: 'Energy Nectar', amount: 24 },
        boss: { name: 'Juvenile Jade', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
        book: { name: 'Teachings of Diligence', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Shimmering Nectar', amount: 3 },
        book: { name: 'Guide of Diligence', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Shimmering Nectar', amount: 4 },
        book: { name: 'Guide of Diligence', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Shimmering Nectar', amount: 6 },
        book: { name: 'Guide of Diligence', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Shimmering Nectar', amount: 9 },
        book: { name: 'Guide of Diligence', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Energy Nectar', amount: 4 },
        book: { name: 'Philosophies of Diligence', amount: 4 },
        boss: { name: 'Shard of a Foul Legacy', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Energy Nectar', amount: 6 },
        book: { name: 'Philosophies of Diligence', amount: 6 },
        boss: { name: 'Shard of a Foul Legacy', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Energy Nectar', amount: 9 },
        book: { name: 'Philosophies of Diligence', amount: 12 },
        boss: { name: 'Shard of a Foul Legacy', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Energy Nectar', amount: 12 },
        book: { name: 'Philosophies of Diligence', amount: 16 },
        boss: { name: 'Shard of a Foul Legacy', amount: 2 },
        crown: { name: 'Crown of Insight', amount: 1 },
      },
    ],
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

charactersPyroMap.set('Klee', {
  name: 'Klee',
  vision: 'Pyro',
  rarity: 5,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Agnidus Agate Sliver', amount: 1 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 3 },
        common: { name: 'Divining Scroll', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 10 },
        common: { name: 'Divining Scroll', amount: 15 },
        boss: { name: 'Everflame Seed', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 20 },
        common: { name: 'Sealed Scroll', amount: 12 },
        boss: { name: 'Everflame Seed', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 30 },
        common: { name: 'Sealed Scroll', amount: 18 },
        boss: { name: 'Everflame Seed', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 45 },
        common: { name: 'Forbidden Curse Scroll', amount: 12 },
        boss: { name: 'Everflame Seed', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Agnidus Agate Gemstone', amount: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 60 },
        common: { name: 'Forbidden Curse Scroll', amount: 24 },
        boss: { name: 'Everflame Seed', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Divining Scroll', amount: 3 },
        book: { name: 'Teachings of Freedom', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Sealed Scroll', amount: 3 },
        book: { name: 'Guide of Freedom', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Sealed Scroll', amount: 4 },
        book: { name: 'Guide of Freedom', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Sealed Scroll', amount: 6 },
        book: { name: 'Guide of Freedom', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Sealed Scroll', amount: 9 },
        book: { name: 'Guide of Freedom', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 4 },
        book: { name: 'Philosophies of Freedom', amount: 4 },
        boss: { name: 'Ring of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 6 },
        book: { name: 'Philosophies of Freedom', amount: 6 },
        boss: { name: 'Ring of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 9 },
        book: { name: 'Philosophies of Freedom', amount: 12 },
        boss: { name: 'Ring of Boreas', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 12 },
        book: { name: 'Philosophies of Freedom', amount: 16 },
        boss: { name: 'Ring of Boreas', amount: 2 },
        crown: { name: 'Crown of Insight', amount: 1 },
      },
    ],
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

charactersPyroMap.set('Thoma', {
  name: 'Thoma',
  vision: 'Pyro',
  rarity: 4,
  weaponType: 'Polearm',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Agnidus Agate Sliver', amount: 1 },
        localSpecialty: { name: 'Fluorescent Fungus', amount: 3 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 3 },
        localSpecialty: { name: 'Fluorescent Fungus', amount: 10 },
        common: { name: 'Treasure Hoarder Insignia', amount: 15 },
        boss: { name: 'Smoldering Pearl', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 6 },
        localSpecialty: { name: 'Fluorescent Fungus', amount: 20 },
        common: { name: 'Silver Raven Insignia', amount: 12 },
        boss: { name: 'Smoldering Pearl', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 3 },
        localSpecialty: { name: 'Fluorescent Fungus', amount: 30 },
        common: { name: 'Silver Raven Insignia', amount: 18 },
        boss: { name: 'Smoldering Pearl', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 6 },
        localSpecialty: { name: 'Fluorescent Fungus', amount: 45 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        boss: { name: 'Smoldering Pearl', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Agnidus Agate Gemstone', amount: 6 },
        localSpecialty: { name: 'Fluorescent Fungus', amount: 60 },
        common: { name: 'Golden Raven Insignia', amount: 24 },
        boss: { name: 'Smoldering Pearl', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
        book: { name: 'Teachings of Transience', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Silver Raven Insignia', amount: 3 },
        book: { name: 'Guide of Transience', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Silver Raven Insignia', amount: 4 },
        book: { name: 'Guide of Transience', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Silver Raven Insignia', amount: 6 },
        book: { name: 'Guide of Transience', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Silver Raven Insignia', amount: 9 },
        book: { name: 'Guide of Transience', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Golden Raven Insignia', amount: 4 },
        book: { name: 'Philosophies of Transience', amount: 4 },
        boss: { name: 'Hellfire Butterfly', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Golden Raven Insignia', amount: 6 },
        book: { name: 'Philosophies of Transience', amount: 6 },
        boss: { name: 'Hellfire Butterfly', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Golden Raven Insignia', amount: 9 },
        book: { name: 'Philosophies of Transience', amount: 12 },
        boss: { name: 'Hellfire Butterfly', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        book: { name: 'Philosophies of Transience', amount: 16 },
        boss: { name: 'Hellfire Butterfly', amount: 2 },
        crown: { name: 'Crown of Insight', amount: 1 },
      },
    ],
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

charactersPyroMap.set('Xiangling', {
  name: 'Xiangling',
  vision: 'Pyro',
  rarity: 4,
  weaponType: 'Polearm',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Agnidus Agate Sliver', amount: 1 },
        localSpecialty: { name: 'Jueyun Chili', amount: 3 },
        common: { name: 'Slime Condensate', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 3 },
        localSpecialty: { name: 'Jueyun Chili', amount: 10 },
        common: { name: 'Slime Condensate', amount: 15 },
        boss: { name: 'Everflame Seed', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 6 },
        localSpecialty: { name: 'Jueyun Chili', amount: 20 },
        common: { name: 'Slime Secretions', amount: 12 },
        boss: { name: 'Everflame Seed', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 3 },
        localSpecialty: { name: 'Jueyun Chili', amount: 30 },
        common: { name: 'Slime Secretions', amount: 18 },
        boss: { name: 'Everflame Seed', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 6 },
        localSpecialty: { name: 'Jueyun Chili', amount: 45 },
        common: { name: 'Slime Concentrate', amount: 12 },
        boss: { name: 'Everflame Seed', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Agnidus Agate Gemstone', amount: 6 },
        localSpecialty: { name: 'Jueyun Chili', amount: 60 },
        common: { name: 'Slime Concentrate', amount: 24 },
        boss: { name: 'Everflame Seed', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Slime Condensate', amount: 3 },
        book: { name: 'Teachings of Diligence', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Slime Secretions', amount: 3 },
        book: { name: 'Guide of Diligence', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Slime Secretions', amount: 4 },
        book: { name: 'Guide of Diligence', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Slime Secretions', amount: 6 },
        book: { name: 'Guide of Diligence', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Slime Secretions', amount: 9 },
        book: { name: 'Guide of Diligence', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Slime Concentrate', amount: 4 },
        book: { name: 'Philosophies of Diligence', amount: 4 },
        boss: { name: "Dvalin's Claw", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Slime Concentrate', amount: 6 },
        book: { name: 'Philosophies of Diligence', amount: 6 },
        boss: { name: "Dvalin's Claw", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Slime Concentrate', amount: 9 },
        book: { name: 'Philosophies of Diligence', amount: 12 },
        boss: { name: "Dvalin's Claw", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Slime Concentrate', amount: 12 },
        book: { name: 'Philosophies of Diligence', amount: 16 },
        boss: { name: "Dvalin's Claw", amount: 2 },
        crown: { name: 'Crown of Insight', amount: 1 },
      },
    ],
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

charactersPyroMap.set('Xinyan', {
  name: 'Xinyan',
  vision: 'Pyro',
  rarity: 4,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Agnidus Agate Sliver', amount: 1 },
        localSpecialty: { name: 'Violetgrass', amount: 3 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 3 },
        localSpecialty: { name: 'Violetgrass', amount: 10 },
        common: { name: 'Treasure Hoarder Insignia', amount: 15 },
        boss: { name: 'Everflame Seed', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 6 },
        localSpecialty: { name: 'Violetgrass', amount: 20 },
        common: { name: 'Silver Raven Insignia', amount: 12 },
        boss: { name: 'Everflame Seed', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 3 },
        localSpecialty: { name: 'Violetgrass', amount: 30 },
        common: { name: 'Silver Raven Insignia', amount: 18 },
        boss: { name: 'Everflame Seed', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 6 },
        localSpecialty: { name: 'Violetgrass', amount: 45 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        boss: { name: 'Everflame Seed', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Agnidus Agate Gemstone', amount: 6 },
        localSpecialty: { name: 'Violetgrass', amount: 60 },
        common: { name: 'Golden Raven Insignia', amount: 24 },
        boss: { name: 'Everflame Seed', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
        book: { name: 'Teachings of Gold', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Silver Raven Insignia', amount: 3 },
        book: { name: 'Guide of Gold', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Silver Raven Insignia', amount: 4 },
        book: { name: 'Guide of Gold', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Silver Raven Insignia', amount: 6 },
        book: { name: 'Guide of Gold', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Silver Raven Insignia', amount: 9 },
        book: { name: 'Guide of Gold', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Golden Raven Insignia', amount: 4 },
        book: { name: 'Philosophies of Gold', amount: 4 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Golden Raven Insignia', amount: 6 },
        book: { name: 'Philosophies of Gold', amount: 6 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Golden Raven Insignia', amount: 9 },
        book: { name: 'Philosophies of Gold', amount: 12 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        book: { name: 'Philosophies of Gold', amount: 16 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 2 },
        crown: { name: 'Crown of Insight', amount: 1 },
      },
    ],
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

charactersPyroMap.set('Yanfei', {
  name: 'Yanfei',
  vision: 'Pyro',
  rarity: 4,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Agnidus Agate Sliver', amount: 1 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 3 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 3 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 10 },
        common: { name: 'Treasure Hoarder Insignia', amount: 15 },
        boss: { name: 'Juvenile Jade', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 6 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 20 },
        common: { name: 'Silver Raven Insignia', amount: 12 },
        boss: { name: 'Juvenile Jade', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 3 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 30 },
        common: { name: 'Silver Raven Insignia', amount: 18 },
        boss: { name: 'Juvenile Jade', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 6 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 45 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        boss: { name: 'Juvenile Jade', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Agnidus Agate Gemstone', amount: 6 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 60 },
        common: { name: 'Golden Raven Insignia', amount: 24 },
        boss: { name: 'Juvenile Jade', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
        book: { name: 'Teachings of Gold', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Silver Raven Insignia', amount: 3 },
        book: { name: 'Guide of Gold', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Silver Raven Insignia', amount: 4 },
        book: { name: 'Guide of Gold', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Silver Raven Insignia', amount: 6 },
        book: { name: 'Guide of Gold', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Silver Raven Insignia', amount: 9 },
        book: { name: 'Guide of Gold', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Golden Raven Insignia', amount: 4 },
        book: { name: 'Philosophies of Gold', amount: 4 },
        boss: { name: 'Bloodjade Branch', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Golden Raven Insignia', amount: 6 },
        book: { name: 'Philosophies of Gold', amount: 6 },
        boss: { name: 'Bloodjade Branch', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Golden Raven Insignia', amount: 9 },
        book: { name: 'Philosophies of Gold', amount: 12 },
        boss: { name: 'Bloodjade Branch', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        book: { name: 'Philosophies of Gold', amount: 16 },
        boss: { name: 'Bloodjade Branch', amount: 2 },
        crown: { name: 'Crown of Insight', amount: 1 },
      },
    ],
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

charactersPyroMap.set('Yoimiya', {
  name: 'Yoimiya',
  vision: 'Pyro',
  rarity: 5,
  weaponType: 'Bow',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Agnidus Agate Sliver', amount: 1 },
        localSpecialty: { name: 'Naku Weed', amount: 3 },
        common: { name: 'Divining Scroll', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 3 },
        localSpecialty: { name: 'Naku Weed', amount: 10 },
        common: { name: 'Divining Scroll', amount: 15 },
        boss: { name: 'Smoldering Pearl', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Agnidus Agate Fragment', amount: 6 },
        localSpecialty: { name: 'Naku Weed', amount: 20 },
        common: { name: 'Sealed Scroll', amount: 12 },
        boss: { name: 'Smoldering Pearl', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 3 },
        localSpecialty: { name: 'Naku Weed', amount: 30 },
        common: { name: 'Sealed Scroll', amount: 18 },
        boss: { name: 'Smoldering Pearl', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Agnidus Agate Chunk', amount: 6 },
        localSpecialty: { name: 'Naku Weed', amount: 45 },
        common: { name: 'Forbidden Curse Scroll', amount: 12 },
        boss: { name: 'Smoldering Pearl', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Agnidus Agate Gemstone', amount: 6 },
        localSpecialty: { name: 'Naku Weed', amount: 60 },
        common: { name: 'Forbidden Curse Scroll', amount: 24 },
        boss: { name: 'Smoldering Pearl', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Divining Scroll', amount: 3 },
        book: { name: 'Teachings of Transience', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Sealed Scroll', amount: 3 },
        book: { name: 'Guide of Transience', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Sealed Scroll', amount: 4 },
        book: { name: 'Guide of Transience', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Sealed Scroll', amount: 6 },
        book: { name: 'Guide of Transience', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Sealed Scroll', amount: 9 },
        book: { name: 'Guide of Transience', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 4 },
        book: { name: 'Philosophies of Transience', amount: 4 },
        boss: { name: "Dragon Lord's Crown", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 6 },
        book: { name: 'Philosophies of Transience', amount: 6 },
        boss: { name: "Dragon Lord's Crown", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 9 },
        book: { name: 'Philosophies of Transience', amount: 12 },
        boss: { name: "Dragon Lord's Crown", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 12 },
        book: { name: 'Philosophies of Transience', amount: 16 },
        boss: { name: "Dragon Lord's Crown", amount: 2 },
        crown: { name: 'Crown of Insight', amount: 1 },
      },
    ],
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

export default charactersPyroMap
