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
        mora: 20_000,
        gem: { name: 'Agnidus Agate Sliver', count: 1 },
        localSpecialty: { name: 'Small Lamp Grass', count: 3 },
        common: { name: 'Firm Arrowhead', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Agnidus Agate Fragment', count: 3 },
        localSpecialty: { name: 'Small Lamp Grass', count: 10 },
        common: { name: 'Firm Arrowhead', count: 15 },
        boss: { name: 'Everflame Seed', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Agnidus Agate Fragment', count: 6 },
        localSpecialty: { name: 'Small Lamp Grass', count: 20 },
        common: { name: 'Sharp Arrowhead', count: 12 },
        boss: { name: 'Everflame Seed', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Agnidus Agate Chunk', count: 3 },
        localSpecialty: { name: 'Small Lamp Grass', count: 30 },
        common: { name: 'Sharp Arrowhead', count: 18 },
        boss: { name: 'Everflame Seed', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Agnidus Agate Chunk', count: 6 },
        localSpecialty: { name: 'Small Lamp Grass', count: 45 },
        common: { name: 'Weathered Arrowhead', count: 12 },
        boss: { name: 'Everflame Seed', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Agnidus Agate Gemstone', count: 6 },
        localSpecialty: { name: 'Small Lamp Grass', count: 60 },
        common: { name: 'Weathered Arrowhead', count: 24 },
        boss: { name: 'Everflame Seed', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Firm Arrowhead', count: 3 },
        book: { name: 'Teachings of Freedom', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Sharp Arrowhead', count: 3 },
        book: { name: 'Guide of Freedom', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Sharp Arrowhead', count: 4 },
        book: { name: 'Guide of Freedom', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Sharp Arrowhead', count: 6 },
        book: { name: 'Guide of Freedom', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Sharp Arrowhead', count: 9 },
        book: { name: 'Guide of Freedom', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Weathered Arrowhead', count: 4 },
        book: { name: 'Philosophies of Freedom', count: 4 },
        boss: { name: "Dvalin's Sigh", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Weathered Arrowhead', count: 6 },
        book: { name: 'Philosophies of Freedom', count: 6 },
        boss: { name: "Dvalin's Sigh", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Weathered Arrowhead', count: 9 },
        book: { name: 'Philosophies of Freedom', count: 12 },
        boss: { name: "Dvalin's Sigh", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Weathered Arrowhead', count: 12 },
        book: { name: 'Philosophies of Freedom', count: 16 },
        boss: { name: "Dvalin's Sigh", count: 2 },
        crown: 1,
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
        mora: 20_000,
        gem: { name: 'Agnidus Agate Sliver', count: 1 },
        localSpecialty: { name: 'Windwheel Aster', count: 3 },
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Agnidus Agate Fragment', count: 3 },
        localSpecialty: { name: 'Windwheel Aster', count: 10 },
        common: { name: 'Treasure Hoarder Insignia', count: 15 },
        boss: { name: 'Everflame Seed', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Agnidus Agate Fragment', count: 6 },
        localSpecialty: { name: 'Windwheel Aster', count: 20 },
        common: { name: 'Silver Raven Insignia', count: 12 },
        boss: { name: 'Everflame Seed', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Agnidus Agate Chunk', count: 3 },
        localSpecialty: { name: 'Windwheel Aster', count: 30 },
        common: { name: 'Silver Raven Insignia', count: 18 },
        boss: { name: 'Everflame Seed', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Agnidus Agate Chunk', count: 6 },
        localSpecialty: { name: 'Windwheel Aster', count: 45 },
        common: { name: 'Golden Raven Insignia', count: 12 },
        boss: { name: 'Everflame Seed', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Agnidus Agate Gemstone', count: 6 },
        localSpecialty: { name: 'Windwheel Aster', count: 60 },
        common: { name: 'Golden Raven Insignia', count: 24 },
        boss: { name: 'Everflame Seed', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
        book: { name: 'Teachings of Resistance', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Silver Raven Insignia', count: 3 },
        book: { name: 'Guide of Resistance', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Silver Raven Insignia', count: 4 },
        book: { name: 'Guide of Resistance', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Silver Raven Insignia', count: 6 },
        book: { name: 'Guide of Resistance', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Silver Raven Insignia', count: 9 },
        book: { name: 'Guide of Resistance', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Golden Raven Insignia', count: 4 },
        book: { name: 'Philosophies of Resistance', count: 4 },
        boss: { name: "Dvalin's Plume", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Golden Raven Insignia', count: 6 },
        book: { name: 'Philosophies of Resistance', count: 6 },
        boss: { name: "Dvalin's Plume", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Golden Raven Insignia', count: 9 },
        book: { name: 'Philosophies of Resistance', count: 12 },
        boss: { name: "Dvalin's Plume", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Golden Raven Insignia', count: 12 },
        book: { name: 'Philosophies of Resistance', count: 16 },
        boss: { name: "Dvalin's Plume", count: 2 },
        crown: 1,
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
        mora: 20_000,
        gem: { name: 'Agnidus Agate Sliver', count: 1 },
        localSpecialty: { name: 'Small Lamp Grass', count: 3 },
        common: { name: "Recruit's Insignia", count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Agnidus Agate Fragment', count: 3 },
        localSpecialty: { name: 'Small Lamp Grass', count: 10 },
        common: { name: "Recruit's Insignia", count: 15 },
        boss: { name: 'Everflame Seed', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Agnidus Agate Fragment', count: 6 },
        localSpecialty: { name: 'Small Lamp Grass', count: 20 },
        common: { name: "Sergeant's Insignia", count: 12 },
        boss: { name: 'Everflame Seed', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Agnidus Agate Chunk', count: 3 },
        localSpecialty: { name: 'Small Lamp Grass', count: 30 },
        common: { name: "Sergeant's Insignia", count: 18 },
        boss: { name: 'Everflame Seed', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Agnidus Agate Chunk', count: 6 },
        localSpecialty: { name: 'Small Lamp Grass', count: 45 },
        common: { name: "Lieutenant's Insignia", count: 12 },
        boss: { name: 'Everflame Seed', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Agnidus Agate Gemstone', count: 6 },
        localSpecialty: { name: 'Small Lamp Grass', count: 60 },
        common: { name: "Lieutenant's Insignia", count: 24 },
        boss: { name: 'Everflame Seed', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: "Recruit's Insignia", count: 3 },
        book: { name: 'Teachings of Resistance', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: "Sergeant's Insignia", count: 3 },
        book: { name: 'Guide of Resistance', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: "Sergeant's Insignia", count: 4 },
        book: { name: 'Guide of Resistance', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: "Sergeant's Insignia", count: 6 },
        book: { name: 'Guide of Resistance', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: "Sergeant's Insignia", count: 9 },
        book: { name: 'Guide of Resistance', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: "Lieutenant's Insignia", count: 4 },
        book: { name: 'Philosophies of Resistance', count: 4 },
        boss: { name: "Dvalin's Plume", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: "Lieutenant's Insignia", count: 6 },
        book: { name: 'Philosophies of Resistance', count: 6 },
        boss: { name: "Dvalin's Plume", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: "Lieutenant's Insignia", count: 9 },
        book: { name: 'Philosophies of Resistance', count: 12 },
        boss: { name: "Dvalin's Plume", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: "Lieutenant's Insignia", count: 12 },
        book: { name: 'Philosophies of Resistance', count: 16 },
        boss: { name: "Dvalin's Plume", count: 2 },
        crown: 1,
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
        mora: 20_000,
        gem: { name: 'Agnidus Agate Sliver', count: 1 },
        localSpecialty: { name: 'Silk Flower', count: 3 },
        common: { name: 'Whopperflower Nectar', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Agnidus Agate Fragment', count: 3 },
        localSpecialty: { name: 'Silk Flower', count: 10 },
        common: { name: 'Whopperflower Nectar', count: 15 },
        boss: { name: 'Juvenile Jade', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Agnidus Agate Fragment', count: 6 },
        localSpecialty: { name: 'Silk Flower', count: 20 },
        common: { name: 'Shimmering Nectar', count: 12 },
        boss: { name: 'Juvenile Jade', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Agnidus Agate Chunk', count: 3 },
        localSpecialty: { name: 'Silk Flower', count: 30 },
        common: { name: 'Shimmering Nectar', count: 18 },
        boss: { name: 'Juvenile Jade', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Agnidus Agate Chunk', count: 6 },
        localSpecialty: { name: 'Silk Flower', count: 45 },
        common: { name: 'Energy Nectar', count: 12 },
        boss: { name: 'Juvenile Jade', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Agnidus Agate Gemstone', count: 6 },
        localSpecialty: { name: 'Silk Flower', count: 60 },
        common: { name: 'Energy Nectar', count: 24 },
        boss: { name: 'Juvenile Jade', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Whopperflower Nectar', count: 3 },
        book: { name: 'Teachings of Diligence', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Shimmering Nectar', count: 3 },
        book: { name: 'Guide of Diligence', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Shimmering Nectar', count: 4 },
        book: { name: 'Guide of Diligence', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Shimmering Nectar', count: 6 },
        book: { name: 'Guide of Diligence', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Shimmering Nectar', count: 9 },
        book: { name: 'Guide of Diligence', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Energy Nectar', count: 4 },
        book: { name: 'Philosophies of Diligence', count: 4 },
        boss: { name: 'Shard of a Foul Legacy', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Energy Nectar', count: 6 },
        book: { name: 'Philosophies of Diligence', count: 6 },
        boss: { name: 'Shard of a Foul Legacy', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Energy Nectar', count: 9 },
        book: { name: 'Philosophies of Diligence', count: 12 },
        boss: { name: 'Shard of a Foul Legacy', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Energy Nectar', count: 12 },
        book: { name: 'Philosophies of Diligence', count: 16 },
        boss: { name: 'Shard of a Foul Legacy', count: 2 },
        crown: 1,
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
        mora: 20_000,
        gem: { name: 'Agnidus Agate Sliver', count: 1 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 3 },
        common: { name: 'Divining Scroll', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Agnidus Agate Fragment', count: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 10 },
        common: { name: 'Divining Scroll', count: 15 },
        boss: { name: 'Everflame Seed', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Agnidus Agate Fragment', count: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 20 },
        common: { name: 'Sealed Scroll', count: 12 },
        boss: { name: 'Everflame Seed', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Agnidus Agate Chunk', count: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 30 },
        common: { name: 'Sealed Scroll', count: 18 },
        boss: { name: 'Everflame Seed', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Agnidus Agate Chunk', count: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 45 },
        common: { name: 'Forbidden Curse Scroll', count: 12 },
        boss: { name: 'Everflame Seed', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Agnidus Agate Gemstone', count: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 60 },
        common: { name: 'Forbidden Curse Scroll', count: 24 },
        boss: { name: 'Everflame Seed', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Divining Scroll', count: 3 },
        book: { name: 'Teachings of Freedom', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Sealed Scroll', count: 3 },
        book: { name: 'Guide of Freedom', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Sealed Scroll', count: 4 },
        book: { name: 'Guide of Freedom', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Sealed Scroll', count: 6 },
        book: { name: 'Guide of Freedom', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Sealed Scroll', count: 9 },
        book: { name: 'Guide of Freedom', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Forbidden Curse Scroll', count: 4 },
        book: { name: 'Philosophies of Freedom', count: 4 },
        boss: { name: 'Ring of Boreas', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Forbidden Curse Scroll', count: 6 },
        book: { name: 'Philosophies of Freedom', count: 6 },
        boss: { name: 'Ring of Boreas', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Forbidden Curse Scroll', count: 9 },
        book: { name: 'Philosophies of Freedom', count: 12 },
        boss: { name: 'Ring of Boreas', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Forbidden Curse Scroll', count: 12 },
        book: { name: 'Philosophies of Freedom', count: 16 },
        boss: { name: 'Ring of Boreas', count: 2 },
        crown: 1,
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
        mora: 20_000,
        gem: { name: 'Agnidus Agate Sliver', count: 1 },
        localSpecialty: { name: 'Fluorescent Fungus', count: 3 },
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Agnidus Agate Fragment', count: 3 },
        localSpecialty: { name: 'Fluorescent Fungus', count: 10 },
        common: { name: 'Treasure Hoarder Insignia', count: 15 },
        boss: { name: 'Smoldering Pearl', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Agnidus Agate Fragment', count: 6 },
        localSpecialty: { name: 'Fluorescent Fungus', count: 20 },
        common: { name: 'Silver Raven Insignia', count: 12 },
        boss: { name: 'Smoldering Pearl', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Agnidus Agate Chunk', count: 3 },
        localSpecialty: { name: 'Fluorescent Fungus', count: 30 },
        common: { name: 'Silver Raven Insignia', count: 18 },
        boss: { name: 'Smoldering Pearl', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Agnidus Agate Chunk', count: 6 },
        localSpecialty: { name: 'Fluorescent Fungus', count: 45 },
        common: { name: 'Golden Raven Insignia', count: 12 },
        boss: { name: 'Smoldering Pearl', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Agnidus Agate Gemstone', count: 6 },
        localSpecialty: { name: 'Fluorescent Fungus', count: 60 },
        common: { name: 'Golden Raven Insignia', count: 24 },
        boss: { name: 'Smoldering Pearl', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
        book: { name: 'Teachings of Transience', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Silver Raven Insignia', count: 3 },
        book: { name: 'Guide of Transience', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Silver Raven Insignia', count: 4 },
        book: { name: 'Guide of Transience', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Silver Raven Insignia', count: 6 },
        book: { name: 'Guide of Transience', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Silver Raven Insignia', count: 9 },
        book: { name: 'Guide of Transience', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Golden Raven Insignia', count: 4 },
        book: { name: 'Philosophies of Transience', count: 4 },
        boss: { name: 'Hellfire Butterfly', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Golden Raven Insignia', count: 6 },
        book: { name: 'Philosophies of Transience', count: 6 },
        boss: { name: 'Hellfire Butterfly', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Golden Raven Insignia', count: 9 },
        book: { name: 'Philosophies of Transience', count: 12 },
        boss: { name: 'Hellfire Butterfly', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Golden Raven Insignia', count: 12 },
        book: { name: 'Philosophies of Transience', count: 16 },
        boss: { name: 'Hellfire Butterfly', count: 2 },
        crown: 1,
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
        mora: 20_000,
        gem: { name: 'Agnidus Agate Sliver', count: 1 },
        localSpecialty: { name: 'Jueyun Chili', count: 3 },
        common: { name: 'Slime Condensate', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Agnidus Agate Fragment', count: 3 },
        localSpecialty: { name: 'Jueyun Chili', count: 10 },
        common: { name: 'Slime Condensate', count: 15 },
        boss: { name: 'Everflame Seed', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Agnidus Agate Fragment', count: 6 },
        localSpecialty: { name: 'Jueyun Chili', count: 20 },
        common: { name: 'Slime Secretions', count: 12 },
        boss: { name: 'Everflame Seed', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Agnidus Agate Chunk', count: 3 },
        localSpecialty: { name: 'Jueyun Chili', count: 30 },
        common: { name: 'Slime Secretions', count: 18 },
        boss: { name: 'Everflame Seed', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Agnidus Agate Chunk', count: 6 },
        localSpecialty: { name: 'Jueyun Chili', count: 45 },
        common: { name: 'Slime Concentrate', count: 12 },
        boss: { name: 'Everflame Seed', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Agnidus Agate Gemstone', count: 6 },
        localSpecialty: { name: 'Jueyun Chili', count: 60 },
        common: { name: 'Slime Concentrate', count: 24 },
        boss: { name: 'Everflame Seed', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Slime Condensate', count: 3 },
        book: { name: 'Teachings of Diligence', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Slime Secretions', count: 3 },
        book: { name: 'Guide of Diligence', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Slime Secretions', count: 4 },
        book: { name: 'Guide of Diligence', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Slime Secretions', count: 6 },
        book: { name: 'Guide of Diligence', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Slime Secretions', count: 9 },
        book: { name: 'Guide of Diligence', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Slime Concentrate', count: 4 },
        book: { name: 'Philosophies of Diligence', count: 4 },
        boss: { name: "Dvalin's Claw", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Slime Concentrate', count: 6 },
        book: { name: 'Philosophies of Diligence', count: 6 },
        boss: { name: "Dvalin's Claw", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Slime Concentrate', count: 9 },
        book: { name: 'Philosophies of Diligence', count: 12 },
        boss: { name: "Dvalin's Claw", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Slime Concentrate', count: 12 },
        book: { name: 'Philosophies of Diligence', count: 16 },
        boss: { name: "Dvalin's Claw", count: 2 },
        crown: 1,
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
        mora: 20_000,
        gem: { name: 'Agnidus Agate Sliver', count: 1 },
        localSpecialty: { name: 'Violetgrass', count: 3 },
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Agnidus Agate Fragment', count: 3 },
        localSpecialty: { name: 'Violetgrass', count: 10 },
        common: { name: 'Treasure Hoarder Insignia', count: 15 },
        boss: { name: 'Everflame Seed', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Agnidus Agate Fragment', count: 6 },
        localSpecialty: { name: 'Violetgrass', count: 20 },
        common: { name: 'Silver Raven Insignia', count: 12 },
        boss: { name: 'Everflame Seed', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Agnidus Agate Chunk', count: 3 },
        localSpecialty: { name: 'Violetgrass', count: 30 },
        common: { name: 'Silver Raven Insignia', count: 18 },
        boss: { name: 'Everflame Seed', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Agnidus Agate Chunk', count: 6 },
        localSpecialty: { name: 'Violetgrass', count: 45 },
        common: { name: 'Golden Raven Insignia', count: 12 },
        boss: { name: 'Everflame Seed', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Agnidus Agate Gemstone', count: 6 },
        localSpecialty: { name: 'Violetgrass', count: 60 },
        common: { name: 'Golden Raven Insignia', count: 24 },
        boss: { name: 'Everflame Seed', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
        book: { name: 'Teachings of Gold', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Silver Raven Insignia', count: 3 },
        book: { name: 'Guide of Gold', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Silver Raven Insignia', count: 4 },
        book: { name: 'Guide of Gold', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Silver Raven Insignia', count: 6 },
        book: { name: 'Guide of Gold', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Silver Raven Insignia', count: 9 },
        book: { name: 'Guide of Gold', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Golden Raven Insignia', count: 4 },
        book: { name: 'Philosophies of Gold', count: 4 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Golden Raven Insignia', count: 6 },
        book: { name: 'Philosophies of Gold', count: 6 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Golden Raven Insignia', count: 9 },
        book: { name: 'Philosophies of Gold', count: 12 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Golden Raven Insignia', count: 12 },
        book: { name: 'Philosophies of Gold', count: 16 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 2 },
        crown: 1,
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
        mora: 20_000,
        gem: { name: 'Agnidus Agate Sliver', count: 1 },
        localSpecialty: { name: 'Noctilucous Jade', count: 3 },
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Agnidus Agate Fragment', count: 3 },
        localSpecialty: { name: 'Noctilucous Jade', count: 10 },
        common: { name: 'Treasure Hoarder Insignia', count: 15 },
        boss: { name: 'Juvenile Jade', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Agnidus Agate Fragment', count: 6 },
        localSpecialty: { name: 'Noctilucous Jade', count: 20 },
        common: { name: 'Silver Raven Insignia', count: 12 },
        boss: { name: 'Juvenile Jade', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Agnidus Agate Chunk', count: 3 },
        localSpecialty: { name: 'Noctilucous Jade', count: 30 },
        common: { name: 'Silver Raven Insignia', count: 18 },
        boss: { name: 'Juvenile Jade', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Agnidus Agate Chunk', count: 6 },
        localSpecialty: { name: 'Noctilucous Jade', count: 45 },
        common: { name: 'Golden Raven Insignia', count: 12 },
        boss: { name: 'Juvenile Jade', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Agnidus Agate Gemstone', count: 6 },
        localSpecialty: { name: 'Noctilucous Jade', count: 60 },
        common: { name: 'Golden Raven Insignia', count: 24 },
        boss: { name: 'Juvenile Jade', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
        book: { name: 'Teachings of Gold', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Silver Raven Insignia', count: 3 },
        book: { name: 'Guide of Gold', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Silver Raven Insignia', count: 4 },
        book: { name: 'Guide of Gold', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Silver Raven Insignia', count: 6 },
        book: { name: 'Guide of Gold', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Silver Raven Insignia', count: 9 },
        book: { name: 'Guide of Gold', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Golden Raven Insignia', count: 4 },
        book: { name: 'Philosophies of Gold', count: 4 },
        boss: { name: 'Bloodjade Branch', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Golden Raven Insignia', count: 6 },
        book: { name: 'Philosophies of Gold', count: 6 },
        boss: { name: 'Bloodjade Branch', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Golden Raven Insignia', count: 9 },
        book: { name: 'Philosophies of Gold', count: 12 },
        boss: { name: 'Bloodjade Branch', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Golden Raven Insignia', count: 12 },
        book: { name: 'Philosophies of Gold', count: 16 },
        boss: { name: 'Bloodjade Branch', count: 2 },
        crown: 1,
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
        mora: 20_000,
        gem: { name: 'Agnidus Agate Sliver', count: 1 },
        localSpecialty: { name: 'Naku Weed', count: 3 },
        common: { name: 'Divining Scroll', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Agnidus Agate Fragment', count: 3 },
        localSpecialty: { name: 'Naku Weed', count: 10 },
        common: { name: 'Divining Scroll', count: 15 },
        boss: { name: 'Smoldering Pearl', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Agnidus Agate Fragment', count: 6 },
        localSpecialty: { name: 'Naku Weed', count: 20 },
        common: { name: 'Sealed Scroll', count: 12 },
        boss: { name: 'Smoldering Pearl', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Agnidus Agate Chunk', count: 3 },
        localSpecialty: { name: 'Naku Weed', count: 30 },
        common: { name: 'Sealed Scroll', count: 18 },
        boss: { name: 'Smoldering Pearl', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Agnidus Agate Chunk', count: 6 },
        localSpecialty: { name: 'Naku Weed', count: 45 },
        common: { name: 'Forbidden Curse Scroll', count: 12 },
        boss: { name: 'Smoldering Pearl', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Agnidus Agate Gemstone', count: 6 },
        localSpecialty: { name: 'Naku Weed', count: 60 },
        common: { name: 'Forbidden Curse Scroll', count: 24 },
        boss: { name: 'Smoldering Pearl', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Divining Scroll', count: 3 },
        book: { name: 'Teachings of Transience', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Sealed Scroll', count: 3 },
        book: { name: 'Guide of Transience', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Sealed Scroll', count: 4 },
        book: { name: 'Guide of Transience', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Sealed Scroll', count: 6 },
        book: { name: 'Guide of Transience', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Sealed Scroll', count: 9 },
        book: { name: 'Guide of Transience', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Forbidden Curse Scroll', count: 4 },
        book: { name: 'Philosophies of Transience', count: 4 },
        boss: { name: "Dragon Lord's Crown", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Forbidden Curse Scroll', count: 6 },
        book: { name: 'Philosophies of Transience', count: 6 },
        boss: { name: "Dragon Lord's Crown", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Forbidden Curse Scroll', count: 9 },
        book: { name: 'Philosophies of Transience', count: 12 },
        boss: { name: "Dragon Lord's Crown", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Forbidden Curse Scroll', count: 12 },
        book: { name: 'Philosophies of Transience', count: 16 },
        boss: { name: "Dragon Lord's Crown", count: 2 },
        crown: 1,
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
