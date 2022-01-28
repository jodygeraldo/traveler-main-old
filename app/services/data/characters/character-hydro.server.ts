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
        mora: 20_000,
        gem: { name: 'Varunada Lazurite Sliver', count: 1 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 3 },
        common: { name: 'Divining Scroll', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Varunada Lazurite Fragment', count: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 10 },
        common: { name: 'Divining Scroll', count: 15 },
        boss: { name: 'Cleansing Heart', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Varunada Lazurite Fragment', count: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 20 },
        common: { name: 'Sealed Scroll', count: 12 },
        boss: { name: 'Cleansing Heart', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Varunada Lazurite Chunk', count: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 30 },
        common: { name: 'Sealed Scroll', count: 18 },
        boss: { name: 'Cleansing Heart', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Varunada Lazurite Chunk', count: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 45 },
        common: { name: 'Forbidden Curse Scroll', count: 12 },
        boss: { name: 'Cleansing Heart', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Varunada Lazurite Gemstone', count: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 60 },
        common: { name: 'Forbidden Curse Scroll', count: 24 },
        boss: { name: 'Cleansing Heart', count: 20 },
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

charactersHydroMap.set('Mona', {
  name: 'Mona',
  vision: 'Hydro',
  rarity: 5,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Varunada Lazurite Sliver', count: 1 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 3 },
        common: { name: 'Whopperflower Nectar', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Varunada Lazurite Fragment', count: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 10 },
        common: { name: 'Whopperflower Nectar', count: 15 },
        boss: { name: 'Cleansing Heart', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Varunada Lazurite Fragment', count: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 20 },
        common: { name: 'Shimmering Nectar', count: 12 },
        boss: { name: 'Cleansing Heart', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Varunada Lazurite Chunk', count: 3 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 30 },
        common: { name: 'Shimmering Nectar', count: 18 },
        boss: { name: 'Cleansing Heart', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Varunada Lazurite Chunk', count: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 45 },
        common: { name: 'Energy Nectar', count: 12 },
        boss: { name: 'Cleansing Heart', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Varunada Lazurite Gemstone', count: 6 },
        localSpecialty: { name: 'Philanemo Mushroom', count: 60 },
        common: { name: 'Energy Nectar', count: 24 },
        boss: { name: 'Cleansing Heart', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Whopperflower Nectar', count: 3 },
        book: { name: 'Teachings of Resistance', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Shimmering Nectar', count: 3 },
        book: { name: 'Guide of Resistance', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Shimmering Nectar', count: 4 },
        book: { name: 'Guide of Resistance', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Shimmering Nectar', count: 6 },
        book: { name: 'Guide of Resistance', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Shimmering Nectar', count: 9 },
        book: { name: 'Guide of Resistance', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Energy Nectar', count: 4 },
        book: { name: 'Philosophies of Resistance', count: 4 },
        boss: { name: 'Ring of Boreas', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Energy Nectar', count: 6 },
        book: { name: 'Philosophies of Resistance', count: 6 },
        boss: { name: 'Ring of Boreas', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Energy Nectar', count: 9 },
        book: { name: 'Philosophies of Resistance', count: 12 },
        boss: { name: 'Ring of Boreas', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Energy Nectar', count: 12 },
        book: { name: 'Philosophies of Resistance', count: 16 },
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

charactersHydroMap.set('Sangonomiya Kokomi', {
  name: 'Sangonomiya Kokomi',
  vision: 'Hydro',
  rarity: 5,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Varunada Lazurite Sliver', count: 1 },
        localSpecialty: { name: 'Sango Pearl', count: 3 },
        common: { name: 'Spectral Husk', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Varunada Lazurite Fragment', count: 3 },
        localSpecialty: { name: 'Sango Pearl', count: 10 },
        common: { name: 'Spectral Husk', count: 15 },
        boss: { name: 'Dew of Repudiation', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Varunada Lazurite Fragment', count: 6 },
        localSpecialty: { name: 'Sango Pearl', count: 20 },
        common: { name: 'Spectral Heart', count: 12 },
        boss: { name: 'Dew of Repudiation', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Varunada Lazurite Chunk', count: 3 },
        localSpecialty: { name: 'Sango Pearl', count: 30 },
        common: { name: 'Spectral Heart', count: 18 },
        boss: { name: 'Dew of Repudiation', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Varunada Lazurite Chunk', count: 6 },
        localSpecialty: { name: 'Sango Pearl', count: 45 },
        common: { name: 'Spectral Nucleus', count: 12 },
        boss: { name: 'Dew of Repudiation', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Varunada Lazurite Gemstone', count: 6 },
        localSpecialty: { name: 'Sango Pearl', count: 60 },
        common: { name: 'Spectral Nucleus', count: 24 },
        boss: { name: 'Dew of Repudiation', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Spectral Husk', count: 3 },
        book: { name: 'Teachings of Transience', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Spectral Heart', count: 3 },
        book: { name: 'Guide of Transience', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Spectral Heart', count: 4 },
        book: { name: 'Guide of Transience', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Spectral Heart', count: 6 },
        book: { name: 'Guide of Transience', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Spectral Heart', count: 9 },
        book: { name: 'Guide of Transience', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Spectral Nucleus', count: 4 },
        book: { name: 'Philosophies of Transience', count: 4 },
        boss: { name: 'Hellfire Butterfly', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Spectral Nucleus', count: 6 },
        book: { name: 'Philosophies of Transience', count: 6 },
        boss: { name: 'Hellfire Butterfly', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Spectral Nucleus', count: 9 },
        book: { name: 'Philosophies of Transience', count: 12 },
        boss: { name: 'Hellfire Butterfly', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Spectral Nucleus', count: 12 },
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

charactersHydroMap.set('Tartaglia', {
  name: 'Tartaglia',
  vision: 'Hydro',
  rarity: 5,
  weaponType: 'Bow',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Varunada Lazurite Sliver', count: 1 },
        localSpecialty: { name: 'Starconch', count: 3 },
        common: { name: "Recruit's Insignia", count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Varunada Lazurite Fragment', count: 3 },
        localSpecialty: { name: 'Starconch', count: 10 },
        common: { name: "Recruit's Insignia", count: 15 },
        boss: { name: 'Cleansing Heart', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Varunada Lazurite Fragment', count: 6 },
        localSpecialty: { name: 'Starconch', count: 20 },
        common: { name: "Sergeant's Insignia", count: 12 },
        boss: { name: 'Cleansing Heart', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Varunada Lazurite Chunk', count: 3 },
        localSpecialty: { name: 'Starconch', count: 30 },
        common: { name: "Sergeant's Insignia", count: 18 },
        boss: { name: 'Cleansing Heart', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Varunada Lazurite Chunk', count: 6 },
        localSpecialty: { name: 'Starconch', count: 45 },
        common: { name: "Lieutenant's Insignia", count: 12 },
        boss: { name: 'Cleansing Heart', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Varunada Lazurite Gemstone', count: 6 },
        localSpecialty: { name: 'Starconch', count: 60 },
        common: { name: "Lieutenant's Insignia", count: 24 },
        boss: { name: 'Cleansing Heart', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: "Recruit's Insignia", count: 3 },
        book: { name: 'Teachings of Freedom', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: "Sergeant's Insignia", count: 3 },
        book: { name: 'Guide of Freedom', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: "Sergeant's Insignia", count: 4 },
        book: { name: 'Guide of Freedom', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: "Sergeant's Insignia", count: 6 },
        book: { name: 'Guide of Freedom', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: "Sergeant's Insignia", count: 9 },
        book: { name: 'Guide of Freedom', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: "Lieutenant's Insignia", count: 4 },
        book: { name: 'Philosophies of Freedom', count: 4 },
        boss: { name: 'Shard of a Foul Legacy', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: "Lieutenant's Insignia", count: 6 },
        book: { name: 'Philosophies of Freedom', count: 6 },
        boss: { name: 'Shard of a Foul Legacy', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: "Lieutenant's Insignia", count: 9 },
        book: { name: 'Philosophies of Freedom', count: 12 },
        boss: { name: 'Shard of a Foul Legacy', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: "Lieutenant's Insignia", count: 12 },
        book: { name: 'Philosophies of Freedom', count: 16 },
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

charactersHydroMap.set('Xingqiu', {
  name: 'Xingqiu',
  vision: 'Hydro',
  rarity: 4,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Varunada Lazurite Sliver', count: 1 },
        localSpecialty: { name: 'Silk Flower', count: 3 },
        common: { name: 'Damaged Mask', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Varunada Lazurite Fragment', count: 3 },
        localSpecialty: { name: 'Silk Flower', count: 10 },
        common: { name: 'Damaged Mask', count: 15 },
        boss: { name: 'Cleansing Heart', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Varunada Lazurite Fragment', count: 6 },
        localSpecialty: { name: 'Silk Flower', count: 20 },
        common: { name: 'Stained Mask', count: 12 },
        boss: { name: 'Cleansing Heart', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Varunada Lazurite Chunk', count: 3 },
        localSpecialty: { name: 'Silk Flower', count: 30 },
        common: { name: 'Stained Mask', count: 18 },
        boss: { name: 'Cleansing Heart', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Varunada Lazurite Chunk', count: 6 },
        localSpecialty: { name: 'Silk Flower', count: 45 },
        common: { name: 'Ominous Mask', count: 12 },
        boss: { name: 'Cleansing Heart', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Varunada Lazurite Gemstone', count: 6 },
        localSpecialty: { name: 'Silk Flower', count: 60 },
        common: { name: 'Ominous Mask', count: 24 },
        boss: { name: 'Cleansing Heart', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Damaged Mask', count: 3 },
        book: { name: 'Teachings of Gold', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Stained Mask', count: 3 },
        book: { name: 'Guide of Gold', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Stained Mask', count: 4 },
        book: { name: 'Guide of Gold', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Stained Mask', count: 6 },
        book: { name: 'Guide of Gold', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Stained Mask', count: 9 },
        book: { name: 'Guide of Gold', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Ominous Mask', count: 4 },
        book: { name: 'Philosophies of Gold', count: 4 },
        boss: { name: 'Tail of Boreas', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Ominous Mask', count: 6 },
        book: { name: 'Philosophies of Gold', count: 6 },
        boss: { name: 'Tail of Boreas', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Ominous Mask', count: 9 },
        book: { name: 'Philosophies of Gold', count: 12 },
        boss: { name: 'Tail of Boreas', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Ominous Mask', count: 12 },
        book: { name: 'Philosophies of Gold', count: 16 },
        boss: { name: 'Tail of Boreas', count: 2 },
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

export default charactersHydroMap
