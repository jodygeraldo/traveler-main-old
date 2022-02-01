import { CharacterName, ICharacter } from '~/types/character'

const CharactersCryoMap = new Map<CharacterName, ICharacter>()

CharactersCryoMap.set('Aloy', {
  name: 'Aloy',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Shivada Jade Sliver', amount: 1 },
        localSpecialty: { name: 'Crystal Marrow', amount: 3 },
        common: { name: 'Spectral Husk', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 3 },
        localSpecialty: { name: 'Crystal Marrow', amount: 10 },
        common: { name: 'Spectral Husk', amount: 15 },
        boss: { name: 'Crystalline Bloom', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 6 },
        localSpecialty: { name: 'Crystal Marrow', amount: 20 },
        common: { name: 'Spectral Heart', amount: 12 },
        boss: { name: 'Crystalline Bloom', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 3 },
        localSpecialty: { name: 'Crystal Marrow', amount: 30 },
        common: { name: 'Spectral Heart', amount: 18 },
        boss: { name: 'Crystalline Bloom', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 6 },
        localSpecialty: { name: 'Crystal Marrow', amount: 45 },
        common: { name: 'Spectral Nucleus', amount: 12 },
        boss: { name: 'Crystalline Bloom', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Shivada Jade Gemstone', amount: 6 },
        localSpecialty: { name: 'Crystal Marrow', amount: 60 },
        common: { name: 'Spectral Nucleus', amount: 24 },
        boss: { name: 'Crystalline Bloom', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Spectral Husk', amount: 3 },
        book: { name: 'Teachings of Freedom', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Spectral Heart', amount: 3 },
        book: { name: 'Guide of Freedom', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Spectral Heart', amount: 4 },
        book: { name: 'Guide of Freedom', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Spectral Heart', amount: 6 },
        book: { name: 'Guide of Freedom', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Spectral Heart', amount: 9 },
        book: { name: 'Guide of Freedom', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Spectral Nucleus', amount: 4 },
        book: { name: 'Philosophies of Freedom', amount: 4 },
        boss: { name: 'Molten Moment', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Spectral Nucleus', amount: 6 },
        book: { name: 'Philosophies of Freedom', amount: 6 },
        boss: { name: 'Molten Moment', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Spectral Nucleus', amount: 9 },
        book: { name: 'Philosophies of Freedom', amount: 12 },
        boss: { name: 'Molten Moment', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Spectral Nucleus', amount: 12 },
        book: { name: 'Philosophies of Freedom', amount: 16 },
        boss: { name: 'Molten Moment', amount: 2 },
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

CharactersCryoMap.set('Chongyun', {
  name: 'Chongyun',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Shivada Jade Sliver', amount: 1 },
        localSpecialty: { name: 'Cor Lapis', amount: 3 },
        common: { name: 'Damaged Mask', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 3 },
        localSpecialty: { name: 'Cor Lapis', amount: 10 },
        common: { name: 'Damaged Mask', amount: 15 },
        boss: { name: 'Hoarfrost Core', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 6 },
        localSpecialty: { name: 'Cor Lapis', amount: 20 },
        common: { name: 'Stained Mask', amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 3 },
        localSpecialty: { name: 'Cor Lapis', amount: 30 },
        common: { name: 'Stained Mask', amount: 18 },
        boss: { name: 'Hoarfrost Core', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 6 },
        localSpecialty: { name: 'Cor Lapis', amount: 45 },
        common: { name: 'Ominous Mask', amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Shivada Jade Gemstone', amount: 6 },
        localSpecialty: { name: 'Cor Lapis', amount: 60 },
        common: { name: 'Ominous Mask', amount: 24 },
        boss: { name: 'Hoarfrost Core', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Damaged Mask', amount: 3 },
        book: { name: 'Teachings of Diligence', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Stained Mask', amount: 3 },
        book: { name: 'Guide of Diligence', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Stained Mask', amount: 4 },
        book: { name: 'Guide of Diligence', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Stained Mask', amount: 6 },
        book: { name: 'Guide of Diligence', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Stained Mask', amount: 9 },
        book: { name: 'Guide of Diligence', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Ominous Mask', amount: 4 },
        book: { name: 'Philosophies of Diligence', amount: 4 },
        boss: { name: "Dvalin's Sigh", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Ominous Mask', amount: 6 },
        book: { name: 'Philosophies of Diligence', amount: 6 },
        boss: { name: "Dvalin's Sigh", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Ominous Mask', amount: 9 },
        book: { name: 'Philosophies of Diligence', amount: 12 },
        boss: { name: "Dvalin's Sigh", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Ominous Mask', amount: 12 },
        book: { name: 'Philosophies of Diligence', amount: 16 },
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

CharactersCryoMap.set('Diona', {
  name: 'Diona',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Shivada Jade Sliver', amount: 1 },
        localSpecialty: { name: 'Calla Lily', amount: 3 },
        common: { name: 'Firm Arrowhead', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 3 },
        localSpecialty: { name: 'Calla Lily', amount: 10 },
        common: { name: 'Firm Arrowhead', amount: 15 },
        boss: { name: 'Hoarfrost Core', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 6 },
        localSpecialty: { name: 'Calla Lily', amount: 20 },
        common: { name: 'Sharp Arrowhead', amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 3 },
        localSpecialty: { name: 'Calla Lily', amount: 30 },
        common: { name: 'Sharp Arrowhead', amount: 18 },
        boss: { name: 'Hoarfrost Core', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 6 },
        localSpecialty: { name: 'Calla Lily', amount: 45 },
        common: { name: 'Weathered Arrowhead', amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Shivada Jade Gemstone', amount: 6 },
        localSpecialty: { name: 'Calla Lily', amount: 60 },
        common: { name: 'Weathered Arrowhead', amount: 24 },
        boss: { name: 'Hoarfrost Core', amount: 20 },
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
        boss: { name: 'Tusk of Monoceros Caeli', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Weathered Arrowhead', amount: 6 },
        book: { name: 'Philosophies of Freedom', amount: 6 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Weathered Arrowhead', amount: 9 },
        book: { name: 'Philosophies of Freedom', amount: 12 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Weathered Arrowhead', amount: 12 },
        book: { name: 'Philosophies of Freedom', amount: 16 },
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

CharactersCryoMap.set('Eula', {
  name: 'Eula',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Shivada Jade Sliver', amount: 1 },
        localSpecialty: { name: 'Dandelion Seed', amount: 3 },
        common: { name: 'Damaged Mask', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 3 },
        localSpecialty: { name: 'Dandelion Seed', amount: 10 },
        common: { name: 'Damaged Mask', amount: 15 },
        boss: { name: 'Crystalline Bloom', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 6 },
        localSpecialty: { name: 'Dandelion Seed', amount: 20 },
        common: { name: 'Stained Mask', amount: 12 },
        boss: { name: 'Crystalline Bloom', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 3 },
        localSpecialty: { name: 'Dandelion Seed', amount: 30 },
        common: { name: 'Stained Mask', amount: 18 },
        boss: { name: 'Crystalline Bloom', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 6 },
        localSpecialty: { name: 'Dandelion Seed', amount: 45 },
        common: { name: 'Ominous Mask', amount: 12 },
        boss: { name: 'Crystalline Bloom', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Shivada Jade Gemstone', amount: 6 },
        localSpecialty: { name: 'Dandelion Seed', amount: 60 },
        common: { name: 'Ominous Mask', amount: 24 },
        boss: { name: 'Crystalline Bloom', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Damaged Mask', amount: 3 },
        book: { name: 'Teachings of Resistance', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Stained Mask', amount: 3 },
        book: { name: 'Guide of Resistance', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Stained Mask', amount: 4 },
        book: { name: 'Guide of Resistance', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Stained Mask', amount: 6 },
        book: { name: 'Guide of Resistance', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Stained Mask', amount: 9 },
        book: { name: 'Guide of Resistance', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Ominous Mask', amount: 4 },
        book: { name: 'Philosophies of Resistance', amount: 4 },
        boss: { name: "Dragon Lord's Crown", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Ominous Mask', amount: 6 },
        book: { name: 'Philosophies of Resistance', amount: 6 },
        boss: { name: "Dragon Lord's Crown", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Ominous Mask', amount: 9 },
        book: { name: 'Philosophies of Resistance', amount: 12 },
        boss: { name: "Dragon Lord's Crown", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Ominous Mask', amount: 12 },
        book: { name: 'Philosophies of Resistance', amount: 16 },
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

CharactersCryoMap.set('Ganyu', {
  name: 'Ganyu',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Shivada Jade Sliver', amount: 1 },
        localSpecialty: { name: 'Qingxin', amount: 3 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 3 },
        localSpecialty: { name: 'Qingxin', amount: 10 },
        common: { name: 'Whopperflower Nectar', amount: 15 },
        boss: { name: 'Hoarfrost Core', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 6 },
        localSpecialty: { name: 'Qingxin', amount: 20 },
        common: { name: 'Shimmering Nectar', amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 3 },
        localSpecialty: { name: 'Qingxin', amount: 30 },
        common: { name: 'Shimmering Nectar', amount: 18 },
        boss: { name: 'Hoarfrost Core', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 6 },
        localSpecialty: { name: 'Qingxin', amount: 45 },
        common: { name: 'Energy Nectar', amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Shivada Jade Gemstone', amount: 6 },
        localSpecialty: { name: 'Qingxin', amount: 60 },
        common: { name: 'Energy Nectar', amount: 24 },
        boss: { name: 'Hoarfrost Core', amount: 20 },
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
        boss: { name: 'Shadow of the Warrior', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Energy Nectar', amount: 6 },
        book: { name: 'Philosophies of Diligence', amount: 6 },
        boss: { name: 'Shadow of the Warrior', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Energy Nectar', amount: 9 },
        book: { name: 'Philosophies of Diligence', amount: 12 },
        boss: { name: 'Shadow of the Warrior', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Energy Nectar', amount: 12 },
        book: { name: 'Philosophies of Diligence', amount: 16 },
        boss: { name: 'Shadow of the Warrior', amount: 2 },
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

CharactersCryoMap.set('Kaeya', {
  name: 'Kaeya',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Shivada Jade Sliver', amount: 1 },
        localSpecialty: { name: 'Calla Lily', amount: 3 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 3 },
        localSpecialty: { name: 'Calla Lily', amount: 10 },
        common: { name: 'Treasure Hoarder Insignia', amount: 15 },
        boss: { name: 'Hoarfrost Core', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 6 },
        localSpecialty: { name: 'Calla Lily', amount: 20 },
        common: { name: 'Silver Raven Insignia', amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 3 },
        localSpecialty: { name: 'Calla Lily', amount: 30 },
        common: { name: 'Silver Raven Insignia', amount: 18 },
        boss: { name: 'Hoarfrost Core', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 6 },
        localSpecialty: { name: 'Calla Lily', amount: 45 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Shivada Jade Gemstone', amount: 6 },
        localSpecialty: { name: 'Calla Lily', amount: 60 },
        common: { name: 'Golden Raven Insignia', amount: 24 },
        boss: { name: 'Hoarfrost Core', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
        book: { name: 'Teachings of Ballad', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Silver Raven Insignia', amount: 3 },
        book: { name: 'Guide of Ballad', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Silver Raven Insignia', amount: 4 },
        book: { name: 'Guide of Ballad', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Silver Raven Insignia', amount: 6 },
        book: { name: 'Guide of Ballad', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Silver Raven Insignia', amount: 9 },
        book: { name: 'Guide of Ballad', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Golden Raven Insignia', amount: 4 },
        book: { name: 'Philosophies of Ballad', amount: 4 },
        boss: { name: 'Spirit Locket of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Golden Raven Insignia', amount: 6 },
        book: { name: 'Philosophies of Ballad', amount: 6 },
        boss: { name: 'Spirit Locket of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Golden Raven Insignia', amount: 9 },
        book: { name: 'Philosophies of Ballad', amount: 12 },
        boss: { name: 'Spirit Locket of Boreas', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        book: { name: 'Philosophies of Ballad', amount: 16 },
        boss: { name: 'Spirit Locket of Boreas', amount: 2 },
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

CharactersCryoMap.set('Kamisato Ayaka', {
  name: 'Kamisato Ayaka',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Shivada Jade Sliver', amount: 1 },
        localSpecialty: { name: 'Sakura Bloom', amount: 3 },
        common: { name: 'Old Handguard', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 3 },
        localSpecialty: { name: 'Sakura Bloom', amount: 10 },
        common: { name: 'Old Handguard', amount: 15 },
        boss: { name: 'Perpetual Heart', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 6 },
        localSpecialty: { name: 'Sakura Bloom', amount: 20 },
        common: { name: 'Kageuchi Handguard', amount: 12 },
        boss: { name: 'Perpetual Heart', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 3 },
        localSpecialty: { name: 'Sakura Bloom', amount: 30 },
        common: { name: 'Kageuchi Handguard', amount: 18 },
        boss: { name: 'Perpetual Heart', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 6 },
        localSpecialty: { name: 'Sakura Bloom', amount: 45 },
        common: { name: 'Famed Handguard', amount: 12 },
        boss: { name: 'Perpetual Heart', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Shivada Jade Gemstone', amount: 6 },
        localSpecialty: { name: 'Sakura Bloom', amount: 60 },
        common: { name: 'Famed Handguard', amount: 24 },
        boss: { name: 'Perpetual Heart', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Old Handguard', amount: 3 },
        book: { name: 'Teachings of Elegance', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Kageuchi Handguard', amount: 3 },
        book: { name: 'Guide of Elegance', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Kageuchi Handguard', amount: 4 },
        book: { name: 'Guide of Elegance', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Kageuchi Handguard', amount: 6 },
        book: { name: 'Guide of Elegance', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Kageuchi Handguard', amount: 9 },
        book: { name: 'Guide of Elegance', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Famed Handguard', amount: 4 },
        book: { name: 'Philosophies of Elegance', amount: 4 },
        boss: { name: 'Bloodjade Branch', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Famed Handguard', amount: 6 },
        book: { name: 'Philosophies of Elegance', amount: 6 },
        boss: { name: 'Bloodjade Branch', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Famed Handguard', amount: 9 },
        book: { name: 'Philosophies of Elegance', amount: 12 },
        boss: { name: 'Bloodjade Branch', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Famed Handguard', amount: 12 },
        book: { name: 'Philosophies of Elegance', amount: 16 },
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

CharactersCryoMap.set('Qiqi', {
  name: 'Qiqi',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Shivada Jade Sliver', amount: 1 },
        localSpecialty: { name: 'Violetgrass', amount: 3 },
        common: { name: 'Divining Scroll', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 3 },
        localSpecialty: { name: 'Violetgrass', amount: 10 },
        common: { name: 'Divining Scroll', amount: 15 },
        boss: { name: 'Hoarfrost Core', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 6 },
        localSpecialty: { name: 'Violetgrass', amount: 20 },
        common: { name: 'Sealed Scroll', amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 3 },
        localSpecialty: { name: 'Violetgrass', amount: 30 },
        common: { name: 'Sealed Scroll', amount: 18 },
        boss: { name: 'Hoarfrost Core', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 6 },
        localSpecialty: { name: 'Violetgrass', amount: 45 },
        common: { name: 'Forbidden Curse Scroll', amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Shivada Jade Gemstone', amount: 6 },
        localSpecialty: { name: 'Violetgrass', amount: 60 },
        common: { name: 'Forbidden Curse Scroll', amount: 24 },
        boss: { name: 'Hoarfrost Core', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Divining Scroll', amount: 3 },
        book: { name: 'Teachings of Prosperity', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Sealed Scroll', amount: 3 },
        book: { name: 'Guide of Prosperity', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Sealed Scroll', amount: 4 },
        book: { name: 'Guide of Prosperity', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Sealed Scroll', amount: 6 },
        book: { name: 'Guide of Prosperity', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Sealed Scroll', amount: 9 },
        book: { name: 'Guide of Prosperity', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 4 },
        book: { name: 'Philosophies of Prosperity', amount: 4 },
        boss: { name: 'Tail of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 6 },
        book: { name: 'Philosophies of Prosperity', amount: 6 },
        boss: { name: 'Tail of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 9 },
        book: { name: 'Philosophies of Prosperity', amount: 12 },
        boss: { name: 'Tail of Boreas', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 12 },
        book: { name: 'Philosophies of Prosperity', amount: 16 },
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

CharactersCryoMap.set('Rosaria', {
  name: 'Rosaria',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Shivada Jade Sliver', amount: 1 },
        localSpecialty: { name: 'Valberry', amount: 3 },
        common: { name: "Recruit's Insignia", amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 3 },
        localSpecialty: { name: 'Valberry', amount: 10 },
        common: { name: "Recruit's Insignia", amount: 15 },
        boss: { name: 'Hoarfrost Core', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 6 },
        localSpecialty: { name: 'Valberry', amount: 20 },
        common: { name: "Sergeant's Insignia", amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 3 },
        localSpecialty: { name: 'Valberry', amount: 30 },
        common: { name: "Sergeant's Insignia", amount: 18 },
        boss: { name: 'Hoarfrost Core', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 6 },
        localSpecialty: { name: 'Valberry', amount: 45 },
        common: { name: "Lieutenant's Insignia", amount: 12 },
        boss: { name: 'Hoarfrost Core', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Shivada Jade Gemstone', amount: 6 },
        localSpecialty: { name: 'Valberry', amount: 60 },
        common: { name: "Lieutenant's Insignia", amount: 24 },
        boss: { name: 'Hoarfrost Core', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: "Recruit's Insignia", amount: 3 },
        book: { name: 'Teachings of Ballad', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: "Sergeant's Insignia", amount: 3 },
        book: { name: 'Guide of Ballad', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: "Sergeant's Insignia", amount: 4 },
        book: { name: 'Guide of Ballad', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: "Sergeant's Insignia", amount: 6 },
        book: { name: 'Guide of Ballad', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: "Sergeant's Insignia", amount: 9 },
        book: { name: 'Guide of Ballad', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: "Lieutenant's Insignia", amount: 4 },
        book: { name: 'Philosophies of Ballad', amount: 4 },
        boss: { name: 'Shadow of the Warrior', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: "Lieutenant's Insignia", amount: 6 },
        book: { name: 'Philosophies of Ballad', amount: 6 },
        boss: { name: 'Shadow of the Warrior', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: "Lieutenant's Insignia", amount: 9 },
        book: { name: 'Philosophies of Ballad', amount: 12 },
        boss: { name: 'Shadow of the Warrior', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: "Lieutenant's Insignia", amount: 12 },
        book: { name: 'Philosophies of Ballad', amount: 16 },
        boss: { name: 'Shadow of the Warrior', amount: 2 },
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

CharactersCryoMap.set('Shenhe', {
  name: 'Shenhe',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Shivada Jade Sliver', amount: 1 },
        localSpecialty: { name: 'Qingxin', amount: 3 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 3 },
        localSpecialty: { name: 'Qingxin', amount: 10 },
        common: { name: 'Whopperflower Nectar', amount: 15 },
        boss: { name: "Dragonheir's False Fin", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Shivada Jade Fragment', amount: 6 },
        localSpecialty: { name: 'Qingxin', amount: 20 },
        common: { name: 'Shimmering Nectar', amount: 12 },
        boss: { name: "Dragonheir's False Fin", amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 3 },
        localSpecialty: { name: 'Qingxin', amount: 30 },
        common: { name: 'Shimmering Nectar', amount: 18 },
        boss: { name: "Dragonheir's False Fin", amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Shivada Jade Chunk', amount: 6 },
        localSpecialty: { name: 'Qingxin', amount: 45 },
        common: { name: 'Energy Nectar', amount: 12 },
        boss: { name: "Dragonheir's False Fin", amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Shivada Jade Gemstone', amount: 6 },
        localSpecialty: { name: 'Qingxin', amount: 60 },
        common: { name: 'Energy Nectar', amount: 24 },
        boss: { name: "Dragonheir's False Fin", amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
        book: { name: 'Teachings of Prosperity', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Shimmering Nectar', amount: 3 },
        book: { name: 'Guide of Prosperity', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Shimmering Nectar', amount: 4 },
        book: { name: 'Guide of Prosperity', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Shimmering Nectar', amount: 6 },
        book: { name: 'Guide of Prosperity', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Shimmering Nectar', amount: 9 },
        book: { name: 'Guide of Prosperity', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Energy Nectar', amount: 4 },
        book: { name: 'Philosophies of Prosperity', amount: 4 },
        boss: { name: 'Hellfire Butterfly', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Energy Nectar', amount: 6 },
        book: { name: 'Philosophies of Prosperity', amount: 6 },
        boss: { name: 'Hellfire Butterfly', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Energy Nectar', amount: 9 },
        book: { name: 'Philosophies of Prosperity', amount: 12 },
        boss: { name: 'Hellfire Butterfly', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Energy Nectar', amount: 12 },
        book: { name: 'Philosophies of Prosperity', amount: 16 },
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

export default CharactersCryoMap
