import { CharacterName, ICharacter } from '~/types/character'

const charactersHydroMap = new Map<CharacterName, ICharacter>()

charactersHydroMap.set('Barbara', {
  name: 'Barbara',
  vision: 'Hydro',
  rarity: 4,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Varunada Lazurite Sliver', amount: 1 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 3 },
        common: { name: 'Divining Scroll', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Varunada Lazurite Fragment', amount: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 10 },
        common: { name: 'Divining Scroll', amount: 15 },
        boss: { name: 'Cleansing Heart', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Varunada Lazurite Fragment', amount: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 20 },
        common: { name: 'Sealed Scroll', amount: 12 },
        boss: { name: 'Cleansing Heart', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Varunada Lazurite Chunk', amount: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 30 },
        common: { name: 'Sealed Scroll', amount: 18 },
        boss: { name: 'Cleansing Heart', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Varunada Lazurite Chunk', amount: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 45 },
        common: { name: 'Forbidden Curse Scroll', amount: 12 },
        boss: { name: 'Cleansing Heart', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Varunada Lazurite Gemstone', amount: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 60 },
        common: { name: 'Forbidden Curse Scroll', amount: 24 },
        boss: { name: 'Cleansing Heart', amount: 20 },
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

charactersHydroMap.set('Mona', {
  name: 'Mona',
  vision: 'Hydro',
  rarity: 5,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Varunada Lazurite Sliver', amount: 1 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 3 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Varunada Lazurite Fragment', amount: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 10 },
        common: { name: 'Whopperflower Nectar', amount: 15 },
        boss: { name: 'Cleansing Heart', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Varunada Lazurite Fragment', amount: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 20 },
        common: { name: 'Shimmering Nectar', amount: 12 },
        boss: { name: 'Cleansing Heart', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Varunada Lazurite Chunk', amount: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 30 },
        common: { name: 'Shimmering Nectar', amount: 18 },
        boss: { name: 'Cleansing Heart', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Varunada Lazurite Chunk', amount: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 45 },
        common: { name: 'Energy Nectar', amount: 12 },
        boss: { name: 'Cleansing Heart', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Varunada Lazurite Gemstone', amount: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', amount: 60 },
        common: { name: 'Energy Nectar', amount: 24 },
        boss: { name: 'Cleansing Heart', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
        book: { name: 'Teachings of Resistance', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Shimmering Nectar', amount: 3 },
        book: { name: 'Guide of Resistance', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Shimmering Nectar', amount: 4 },
        book: { name: 'Guide of Resistance', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Shimmering Nectar', amount: 6 },
        book: { name: 'Guide of Resistance', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Shimmering Nectar', amount: 9 },
        book: { name: 'Guide of Resistance', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Energy Nectar', amount: 4 },
        book: { name: 'Philosophies of Resistance', amount: 4 },
        boss: { name: 'Ring of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Energy Nectar', amount: 6 },
        book: { name: 'Philosophies of Resistance', amount: 6 },
        boss: { name: 'Ring of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Energy Nectar', amount: 9 },
        book: { name: 'Philosophies of Resistance', amount: 12 },
        boss: { name: 'Ring of Boreas', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Energy Nectar', amount: 12 },
        book: { name: 'Philosophies of Resistance', amount: 16 },
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

charactersHydroMap.set('Sangonomiya Kokomi', {
  name: 'Sangonomiya Kokomi',
  vision: 'Hydro',
  rarity: 5,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Varunada Lazurite Sliver', amount: 1 },
        localSpecialty: { name: 'Sango Pearl', amount: 3 },
        common: { name: 'Spectral Husk', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Varunada Lazurite Fragment', amount: 3 },
        localSpecialty: { name: 'Sango Pearl', amount: 10 },
        common: { name: 'Spectral Husk', amount: 15 },
        boss: { name: 'Dew of Repudiation', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Varunada Lazurite Fragment', amount: 6 },
        localSpecialty: { name: 'Sango Pearl', amount: 20 },
        common: { name: 'Spectral Heart', amount: 12 },
        boss: { name: 'Dew of Repudiation', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Varunada Lazurite Chunk', amount: 3 },
        localSpecialty: { name: 'Sango Pearl', amount: 30 },
        common: { name: 'Spectral Heart', amount: 18 },
        boss: { name: 'Dew of Repudiation', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Varunada Lazurite Chunk', amount: 6 },
        localSpecialty: { name: 'Sango Pearl', amount: 45 },
        common: { name: 'Spectral Nucleus', amount: 12 },
        boss: { name: 'Dew of Repudiation', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Varunada Lazurite Gemstone', amount: 6 },
        localSpecialty: { name: 'Sango Pearl', amount: 60 },
        common: { name: 'Spectral Nucleus', amount: 24 },
        boss: { name: 'Dew of Repudiation', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Spectral Husk', amount: 3 },
        book: { name: 'Teachings of Transience', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Spectral Heart', amount: 3 },
        book: { name: 'Guide of Transience', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Spectral Heart', amount: 4 },
        book: { name: 'Guide of Transience', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Spectral Heart', amount: 6 },
        book: { name: 'Guide of Transience', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Spectral Heart', amount: 9 },
        book: { name: 'Guide of Transience', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Spectral Nucleus', amount: 4 },
        book: { name: 'Philosophies of Transience', amount: 4 },
        boss: { name: 'Hellfire Butterfly', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Spectral Nucleus', amount: 6 },
        book: { name: 'Philosophies of Transience', amount: 6 },
        boss: { name: 'Hellfire Butterfly', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Spectral Nucleus', amount: 9 },
        book: { name: 'Philosophies of Transience', amount: 12 },
        boss: { name: 'Hellfire Butterfly', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Spectral Nucleus', amount: 12 },
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

charactersHydroMap.set('Tartaglia', {
  name: 'Tartaglia',
  vision: 'Hydro',
  rarity: 5,
  weaponType: 'Bow',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Varunada Lazurite Sliver', amount: 1 },
        localSpecialty: { name: 'Starconch', amount: 3 },
        common: { name: "Recruit's Insignia", amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Varunada Lazurite Fragment', amount: 3 },
        localSpecialty: { name: 'Starconch', amount: 10 },
        common: { name: "Recruit's Insignia", amount: 15 },
        boss: { name: 'Cleansing Heart', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Varunada Lazurite Fragment', amount: 6 },
        localSpecialty: { name: 'Starconch', amount: 20 },
        common: { name: "Sergeant's Insignia", amount: 12 },
        boss: { name: 'Cleansing Heart', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Varunada Lazurite Chunk', amount: 3 },
        localSpecialty: { name: 'Starconch', amount: 30 },
        common: { name: "Sergeant's Insignia", amount: 18 },
        boss: { name: 'Cleansing Heart', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Varunada Lazurite Chunk', amount: 6 },
        localSpecialty: { name: 'Starconch', amount: 45 },
        common: { name: "Lieutenant's Insignia", amount: 12 },
        boss: { name: 'Cleansing Heart', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Varunada Lazurite Gemstone', amount: 6 },
        localSpecialty: { name: 'Starconch', amount: 60 },
        common: { name: "Lieutenant's Insignia", amount: 24 },
        boss: { name: 'Cleansing Heart', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: "Recruit's Insignia", amount: 3 },
        book: { name: 'Teachings of Freedom', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: "Sergeant's Insignia", amount: 3 },
        book: { name: 'Guide of Freedom', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: "Sergeant's Insignia", amount: 4 },
        book: { name: 'Guide of Freedom', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: "Sergeant's Insignia", amount: 6 },
        book: { name: 'Guide of Freedom', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: "Sergeant's Insignia", amount: 9 },
        book: { name: 'Guide of Freedom', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: "Lieutenant's Insignia", amount: 4 },
        book: { name: 'Philosophies of Freedom', amount: 4 },
        boss: { name: 'Shard of a Foul Legacy', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: "Lieutenant's Insignia", amount: 6 },
        book: { name: 'Philosophies of Freedom', amount: 6 },
        boss: { name: 'Shard of a Foul Legacy', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: "Lieutenant's Insignia", amount: 9 },
        book: { name: 'Philosophies of Freedom', amount: 12 },
        boss: { name: 'Shard of a Foul Legacy', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: "Lieutenant's Insignia", amount: 12 },
        book: { name: 'Philosophies of Freedom', amount: 16 },
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

charactersHydroMap.set('Xingqiu', {
  name: 'Xingqiu',
  vision: 'Hydro',
  rarity: 4,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Varunada Lazurite Sliver', amount: 1 },
        localSpecialty: { name: 'Silk Flower', amount: 3 },
        common: { name: 'Damaged Mask', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Varunada Lazurite Fragment', amount: 3 },
        localSpecialty: { name: 'Silk Flower', amount: 10 },
        common: { name: 'Damaged Mask', amount: 15 },
        boss: { name: 'Cleansing Heart', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Varunada Lazurite Fragment', amount: 6 },
        localSpecialty: { name: 'Silk Flower', amount: 20 },
        common: { name: 'Stained Mask', amount: 12 },
        boss: { name: 'Cleansing Heart', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Varunada Lazurite Chunk', amount: 3 },
        localSpecialty: { name: 'Silk Flower', amount: 30 },
        common: { name: 'Stained Mask', amount: 18 },
        boss: { name: 'Cleansing Heart', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Varunada Lazurite Chunk', amount: 6 },
        localSpecialty: { name: 'Silk Flower', amount: 45 },
        common: { name: 'Ominous Mask', amount: 12 },
        boss: { name: 'Cleansing Heart', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Varunada Lazurite Gemstone', amount: 6 },
        localSpecialty: { name: 'Silk Flower', amount: 60 },
        common: { name: 'Ominous Mask', amount: 24 },
        boss: { name: 'Cleansing Heart', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Damaged Mask', amount: 3 },
        book: { name: 'Teachings of Gold', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Stained Mask', amount: 3 },
        book: { name: 'Guide of Gold', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Stained Mask', amount: 4 },
        book: { name: 'Guide of Gold', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Stained Mask', amount: 6 },
        book: { name: 'Guide of Gold', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Stained Mask', amount: 9 },
        book: { name: 'Guide of Gold', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Ominous Mask', amount: 4 },
        book: { name: 'Philosophies of Gold', amount: 4 },
        boss: { name: 'Tail of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Ominous Mask', amount: 6 },
        book: { name: 'Philosophies of Gold', amount: 6 },
        boss: { name: 'Tail of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Ominous Mask', amount: 9 },
        book: { name: 'Philosophies of Gold', amount: 12 },
        boss: { name: 'Tail of Boreas', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Ominous Mask', amount: 12 },
        book: { name: 'Philosophies of Gold', amount: 16 },
        boss: { name: 'Tail of Boreas', amount: 2 },
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

export default charactersHydroMap
