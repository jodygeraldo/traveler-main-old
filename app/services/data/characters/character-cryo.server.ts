import { CharacterName, ICharacter } from '~/types/character'

const charactersCryoMap = new Map<CharacterName, ICharacter>()

charactersCryoMap.set('Aloy', {
  name: 'Aloy',
  vision: 'Cryo',
  rarity: 'aloy',
  weaponType: 'Bow',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Shivada Jade Sliver', count: 1 },
        localSpecialty: { name: 'Crystal Marrow', count: 3 },
        common: { name: 'Spectral Husk', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Shivada Jade Fragment', count: 3 },
        localSpecialty: { name: 'Crystal Marrow', count: 10 },
        common: { name: 'Spectral Husk', count: 15 },
        boss: { name: 'Crystalline Bloom', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Shivada Jade Fragment', count: 6 },
        localSpecialty: { name: 'Crystal Marrow', count: 20 },
        common: { name: 'Spectral Heart', count: 12 },
        boss: { name: 'Crystalline Bloom', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Shivada Jade Chunk', count: 3 },
        localSpecialty: { name: 'Crystal Marrow', count: 30 },
        common: { name: 'Spectral Heart', count: 18 },
        boss: { name: 'Crystalline Bloom', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Shivada Jade Chunk', count: 6 },
        localSpecialty: { name: 'Crystal Marrow', count: 45 },
        common: { name: 'Spectral Nucleus', count: 12 },
        boss: { name: 'Crystalline Bloom', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Shivada Jade Gemstone', count: 6 },
        localSpecialty: { name: 'Crystal Marrow', count: 60 },
        common: { name: 'Spectral Nucleus', count: 24 },
        boss: { name: 'Crystalline Bloom', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Spectral Husk', count: 3 },
        book: { name: 'Teachings of Freedom', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Spectral Heart', count: 3 },
        book: { name: 'Guide of Freedom', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Spectral Heart', count: 4 },
        book: { name: 'Guide of Freedom', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Spectral Heart', count: 6 },
        book: { name: 'Guide of Freedom', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Spectral Heart', count: 9 },
        book: { name: 'Guide of Freedom', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Spectral Nucleus', count: 4 },
        book: { name: 'Philosophies of Freedom', count: 4 },
        boss: { name: 'Molten Moment', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Spectral Nucleus', count: 6 },
        book: { name: 'Philosophies of Freedom', count: 6 },
        boss: { name: 'Molten Moment', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Spectral Nucleus', count: 9 },
        book: { name: 'Philosophies of Freedom', count: 12 },
        boss: { name: 'Molten Moment', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Spectral Nucleus', count: 12 },
        book: { name: 'Philosophies of Freedom', count: 16 },
        boss: { name: 'Molten Moment', count: 2 },
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

charactersCryoMap.set('Chongyun', {
  name: 'Chongyun',
  vision: 'Cryo',
  rarity: 4,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Shivada Jade Sliver', count: 1 },
        localSpecialty: { name: 'Cor Lapis', count: 3 },
        common: { name: 'Damaged Mask', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Shivada Jade Fragment', count: 3 },
        localSpecialty: { name: 'Cor Lapis', count: 10 },
        common: { name: 'Damaged Mask', count: 15 },
        boss: { name: 'Hoarfrost Core', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Shivada Jade Fragment', count: 6 },
        localSpecialty: { name: 'Cor Lapis', count: 20 },
        common: { name: 'Stained Mask', count: 12 },
        boss: { name: 'Hoarfrost Core', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Shivada Jade Chunk', count: 3 },
        localSpecialty: { name: 'Cor Lapis', count: 30 },
        common: { name: 'Stained Mask', count: 18 },
        boss: { name: 'Hoarfrost Core', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Shivada Jade Chunk', count: 6 },
        localSpecialty: { name: 'Cor Lapis', count: 45 },
        common: { name: 'Ominous Mask', count: 12 },
        boss: { name: 'Hoarfrost Core', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Shivada Jade Gemstone', count: 6 },
        localSpecialty: { name: 'Cor Lapis', count: 60 },
        common: { name: 'Ominous Mask', count: 24 },
        boss: { name: 'Hoarfrost Core', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Damaged Mask', count: 3 },
        book: { name: 'Teachings of Diligence', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Stained Mask', count: 3 },
        book: { name: 'Guide of Diligence', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Stained Mask', count: 4 },
        book: { name: 'Guide of Diligence', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Stained Mask', count: 6 },
        book: { name: 'Guide of Diligence', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Stained Mask', count: 9 },
        book: { name: 'Guide of Diligence', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Ominous Mask', count: 4 },
        book: { name: 'Philosophies of Diligence', count: 4 },
        boss: { name: "Dvalin's Sigh", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Ominous Mask', count: 6 },
        book: { name: 'Philosophies of Diligence', count: 6 },
        boss: { name: "Dvalin's Sigh", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Ominous Mask', count: 9 },
        book: { name: 'Philosophies of Diligence', count: 12 },
        boss: { name: "Dvalin's Sigh", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Ominous Mask', count: 12 },
        book: { name: 'Philosophies of Diligence', count: 16 },
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

charactersCryoMap.set('Diona', {
  name: 'Diona',
  vision: 'Cryo',
  rarity: 4,
  weaponType: 'Bow',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Shivada Jade Sliver', count: 1 },
        localSpecialty: { name: 'Calla Lily', count: 3 },
        common: { name: 'Firm Arrowhead', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Shivada Jade Fragment', count: 3 },
        localSpecialty: { name: 'Calla Lily', count: 10 },
        common: { name: 'Firm Arrowhead', count: 15 },
        boss: { name: 'Hoarfrost Core', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Shivada Jade Fragment', count: 6 },
        localSpecialty: { name: 'Calla Lily', count: 20 },
        common: { name: 'Sharp Arrowhead', count: 12 },
        boss: { name: 'Hoarfrost Core', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Shivada Jade Chunk', count: 3 },
        localSpecialty: { name: 'Calla Lily', count: 30 },
        common: { name: 'Sharp Arrowhead', count: 18 },
        boss: { name: 'Hoarfrost Core', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Shivada Jade Chunk', count: 6 },
        localSpecialty: { name: 'Calla Lily', count: 45 },
        common: { name: 'Weathered Arrowhead', count: 12 },
        boss: { name: 'Hoarfrost Core', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Shivada Jade Gemstone', count: 6 },
        localSpecialty: { name: 'Calla Lily', count: 60 },
        common: { name: 'Weathered Arrowhead', count: 24 },
        boss: { name: 'Hoarfrost Core', count: 20 },
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
        boss: { name: 'Tusk of Monoceros Caeli', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Weathered Arrowhead', count: 6 },
        book: { name: 'Philosophies of Freedom', count: 6 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Weathered Arrowhead', count: 9 },
        book: { name: 'Philosophies of Freedom', count: 12 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Weathered Arrowhead', count: 12 },
        book: { name: 'Philosophies of Freedom', count: 16 },
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

charactersCryoMap.set('Eula', {
  name: 'Eula',
  vision: 'Cryo',
  rarity: 5,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Shivada Jade Sliver', count: 1 },
        localSpecialty: { name: 'Dandelion Seed', count: 3 },
        common: { name: 'Damaged Mask', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Shivada Jade Fragment', count: 3 },
        localSpecialty: { name: 'Dandelion Seed', count: 10 },
        common: { name: 'Damaged Mask', count: 15 },
        boss: { name: 'Crystalline Bloom', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Shivada Jade Fragment', count: 6 },
        localSpecialty: { name: 'Dandelion Seed', count: 20 },
        common: { name: 'Stained Mask', count: 12 },
        boss: { name: 'Crystalline Bloom', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Shivada Jade Chunk', count: 3 },
        localSpecialty: { name: 'Dandelion Seed', count: 30 },
        common: { name: 'Stained Mask', count: 18 },
        boss: { name: 'Crystalline Bloom', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Shivada Jade Chunk', count: 6 },
        localSpecialty: { name: 'Dandelion Seed', count: 45 },
        common: { name: 'Ominous Mask', count: 12 },
        boss: { name: 'Crystalline Bloom', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Shivada Jade Gemstone', count: 6 },
        localSpecialty: { name: 'Dandelion Seed', count: 60 },
        common: { name: 'Ominous Mask', count: 24 },
        boss: { name: 'Crystalline Bloom', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Damaged Mask', count: 3 },
        book: { name: 'Teachings of Resistance', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Stained Mask', count: 3 },
        book: { name: 'Guide of Resistance', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Stained Mask', count: 4 },
        book: { name: 'Guide of Resistance', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Stained Mask', count: 6 },
        book: { name: 'Guide of Resistance', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Stained Mask', count: 9 },
        book: { name: 'Guide of Resistance', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Ominous Mask', count: 4 },
        book: { name: 'Philosophies of Resistance', count: 4 },
        boss: { name: "Dragon Lord's Crown", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Ominous Mask', count: 6 },
        book: { name: 'Philosophies of Resistance', count: 6 },
        boss: { name: "Dragon Lord's Crown", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Ominous Mask', count: 9 },
        book: { name: 'Philosophies of Resistance', count: 12 },
        boss: { name: "Dragon Lord's Crown", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Ominous Mask', count: 12 },
        book: { name: 'Philosophies of Resistance', count: 16 },
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

charactersCryoMap.set('Ganyu', {
  name: 'Ganyu',
  vision: 'Cryo',
  rarity: 5,
  weaponType: 'Bow',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Shivada Jade Sliver', count: 1 },
        localSpecialty: { name: 'Qingxin', count: 3 },
        common: { name: 'Whopperflower Nectar', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Shivada Jade Fragment', count: 3 },
        localSpecialty: { name: 'Qingxin', count: 10 },
        common: { name: 'Whopperflower Nectar', count: 15 },
        boss: { name: 'Hoarfrost Core', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Shivada Jade Fragment', count: 6 },
        localSpecialty: { name: 'Qingxin', count: 20 },
        common: { name: 'Shimmering Nectar', count: 12 },
        boss: { name: 'Hoarfrost Core', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Shivada Jade Chunk', count: 3 },
        localSpecialty: { name: 'Qingxin', count: 30 },
        common: { name: 'Shimmering Nectar', count: 18 },
        boss: { name: 'Hoarfrost Core', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Shivada Jade Chunk', count: 6 },
        localSpecialty: { name: 'Qingxin', count: 45 },
        common: { name: 'Energy Nectar', count: 12 },
        boss: { name: 'Hoarfrost Core', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Shivada Jade Gemstone', count: 6 },
        localSpecialty: { name: 'Qingxin', count: 60 },
        common: { name: 'Energy Nectar', count: 24 },
        boss: { name: 'Hoarfrost Core', count: 20 },
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
        boss: { name: 'Shadow of the Warrior', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Energy Nectar', count: 6 },
        book: { name: 'Philosophies of Diligence', count: 6 },
        boss: { name: 'Shadow of the Warrior', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Energy Nectar', count: 9 },
        book: { name: 'Philosophies of Diligence', count: 12 },
        boss: { name: 'Shadow of the Warrior', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Energy Nectar', count: 12 },
        book: { name: 'Philosophies of Diligence', count: 16 },
        boss: { name: 'Shadow of the Warrior', count: 2 },
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

charactersCryoMap.set('Kaeya', {
  name: 'Kaeya',
  vision: 'Cryo',
  rarity: 4,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Shivada Jade Sliver', count: 1 },
        localSpecialty: { name: 'Calla Lily', count: 3 },
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Shivada Jade Fragment', count: 3 },
        localSpecialty: { name: 'Calla Lily', count: 10 },
        common: { name: 'Treasure Hoarder Insignia', count: 15 },
        boss: { name: 'Hoarfrost Core', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Shivada Jade Fragment', count: 6 },
        localSpecialty: { name: 'Calla Lily', count: 20 },
        common: { name: 'Silver Raven Insignia', count: 12 },
        boss: { name: 'Hoarfrost Core', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Shivada Jade Chunk', count: 3 },
        localSpecialty: { name: 'Calla Lily', count: 30 },
        common: { name: 'Silver Raven Insignia', count: 18 },
        boss: { name: 'Hoarfrost Core', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Shivada Jade Chunk', count: 6 },
        localSpecialty: { name: 'Calla Lily', count: 45 },
        common: { name: 'Golden Raven Insignia', count: 12 },
        boss: { name: 'Hoarfrost Core', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Shivada Jade Gemstone', count: 6 },
        localSpecialty: { name: 'Calla Lily', count: 60 },
        common: { name: 'Golden Raven Insignia', count: 24 },
        boss: { name: 'Hoarfrost Core', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
        book: { name: 'Teachings of Ballad', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Silver Raven Insignia', count: 3 },
        book: { name: 'Guide of Ballad', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Silver Raven Insignia', count: 4 },
        book: { name: 'Guide of Ballad', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Silver Raven Insignia', count: 6 },
        book: { name: 'Guide of Ballad', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Silver Raven Insignia', count: 9 },
        book: { name: 'Guide of Ballad', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Golden Raven Insignia', count: 4 },
        book: { name: 'Philosophies of Ballad', count: 4 },
        boss: { name: 'Spirit Locket of Boreas', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Golden Raven Insignia', count: 6 },
        book: { name: 'Philosophies of Ballad', count: 6 },
        boss: { name: 'Spirit Locket of Boreas', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Golden Raven Insignia', count: 9 },
        book: { name: 'Philosophies of Ballad', count: 12 },
        boss: { name: 'Spirit Locket of Boreas', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Golden Raven Insignia', count: 12 },
        book: { name: 'Philosophies of Ballad', count: 16 },
        boss: { name: 'Spirit Locket of Boreas', count: 2 },
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

charactersCryoMap.set('Kamisato Ayaka', {
  name: 'Kamisato Ayaka',
  vision: 'Cryo',
  rarity: 5,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Shivada Jade Sliver', count: 1 },
        localSpecialty: { name: 'Sakura Bloom', count: 3 },
        common: { name: 'Old Handguard', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Shivada Jade Fragment', count: 3 },
        localSpecialty: { name: 'Sakura Bloom', count: 10 },
        common: { name: 'Old Handguard', count: 15 },
        boss: { name: 'Perpetual Heart', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Shivada Jade Fragment', count: 6 },
        localSpecialty: { name: 'Sakura Bloom', count: 20 },
        common: { name: 'Kageuchi Handguard', count: 12 },
        boss: { name: 'Perpetual Heart', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Shivada Jade Chunk', count: 3 },
        localSpecialty: { name: 'Sakura Bloom', count: 30 },
        common: { name: 'Kageuchi Handguard', count: 18 },
        boss: { name: 'Perpetual Heart', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Shivada Jade Chunk', count: 6 },
        localSpecialty: { name: 'Sakura Bloom', count: 45 },
        common: { name: 'Famed Handguard', count: 12 },
        boss: { name: 'Perpetual Heart', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Shivada Jade Gemstone', count: 6 },
        localSpecialty: { name: 'Sakura Bloom', count: 60 },
        common: { name: 'Famed Handguard', count: 24 },
        boss: { name: 'Perpetual Heart', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Old Handguard', count: 3 },
        book: { name: 'Teachings of Elegance', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Kageuchi Handguard', count: 3 },
        book: { name: 'Guide of Elegance', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Kageuchi Handguard', count: 4 },
        book: { name: 'Guide of Elegance', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Kageuchi Handguard', count: 6 },
        book: { name: 'Guide of Elegance', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Kageuchi Handguard', count: 9 },
        book: { name: 'Guide of Elegance', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Famed Handguard', count: 4 },
        book: { name: 'Philosophies of Elegance', count: 4 },
        boss: { name: 'Bloodjade Branch', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Famed Handguard', count: 6 },
        book: { name: 'Philosophies of Elegance', count: 6 },
        boss: { name: 'Bloodjade Branch', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Famed Handguard', count: 9 },
        book: { name: 'Philosophies of Elegance', count: 12 },
        boss: { name: 'Bloodjade Branch', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Famed Handguard', count: 12 },
        book: { name: 'Philosophies of Elegance', count: 16 },
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

charactersCryoMap.set('Qiqi', {
  name: 'Qiqi',
  vision: 'Cryo',
  rarity: 5,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Shivada Jade Sliver', count: 1 },
        localSpecialty: { name: 'Violetgrass', count: 3 },
        common: { name: 'Divining Scroll', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Shivada Jade Fragment', count: 3 },
        localSpecialty: { name: 'Violetgrass', count: 10 },
        common: { name: 'Divining Scroll', count: 15 },
        boss: { name: 'Hoarfrost Core', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Shivada Jade Fragment', count: 6 },
        localSpecialty: { name: 'Violetgrass', count: 20 },
        common: { name: 'Sealed Scroll', count: 12 },
        boss: { name: 'Hoarfrost Core', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Shivada Jade Chunk', count: 3 },
        localSpecialty: { name: 'Violetgrass', count: 30 },
        common: { name: 'Sealed Scroll', count: 18 },
        boss: { name: 'Hoarfrost Core', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Shivada Jade Chunk', count: 6 },
        localSpecialty: { name: 'Violetgrass', count: 45 },
        common: { name: 'Forbidden Curse Scroll', count: 12 },
        boss: { name: 'Hoarfrost Core', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Shivada Jade Gemstone', count: 6 },
        localSpecialty: { name: 'Violetgrass', count: 60 },
        common: { name: 'Forbidden Curse Scroll', count: 24 },
        boss: { name: 'Hoarfrost Core', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Divining Scroll', count: 3 },
        book: { name: 'Teachings of Prosperity', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Sealed Scroll', count: 3 },
        book: { name: 'Guide of Prosperity', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Sealed Scroll', count: 4 },
        book: { name: 'Guide of Prosperity', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Sealed Scroll', count: 6 },
        book: { name: 'Guide of Prosperity', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Sealed Scroll', count: 9 },
        book: { name: 'Guide of Prosperity', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Forbidden Curse Scroll', count: 4 },
        book: { name: 'Philosophies of Prosperity', count: 4 },
        boss: { name: 'Tail of Boreas', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Forbidden Curse Scroll', count: 6 },
        book: { name: 'Philosophies of Prosperity', count: 6 },
        boss: { name: 'Tail of Boreas', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Forbidden Curse Scroll', count: 9 },
        book: { name: 'Philosophies of Prosperity', count: 12 },
        boss: { name: 'Tail of Boreas', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Forbidden Curse Scroll', count: 12 },
        book: { name: 'Philosophies of Prosperity', count: 16 },
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

charactersCryoMap.set('Rosaria', {
  name: 'Rosaria',
  vision: 'Cryo',
  rarity: 4,
  weaponType: 'Polearm',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Shivada Jade Sliver', count: 1 },
        localSpecialty: { name: 'Valberry', count: 3 },
        common: { name: "Recruit's Insignia", count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Shivada Jade Fragment', count: 3 },
        localSpecialty: { name: 'Valberry', count: 10 },
        common: { name: "Recruit's Insignia", count: 15 },
        boss: { name: 'Hoarfrost Core', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Shivada Jade Fragment', count: 6 },
        localSpecialty: { name: 'Valberry', count: 20 },
        common: { name: "Sergeant's Insignia", count: 12 },
        boss: { name: 'Hoarfrost Core', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Shivada Jade Chunk', count: 3 },
        localSpecialty: { name: 'Valberry', count: 30 },
        common: { name: "Sergeant's Insignia", count: 18 },
        boss: { name: 'Hoarfrost Core', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Shivada Jade Chunk', count: 6 },
        localSpecialty: { name: 'Valberry', count: 45 },
        common: { name: "Lieutenant's Insignia", count: 12 },
        boss: { name: 'Hoarfrost Core', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Shivada Jade Gemstone', count: 6 },
        localSpecialty: { name: 'Valberry', count: 60 },
        common: { name: "Lieutenant's Insignia", count: 24 },
        boss: { name: 'Hoarfrost Core', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: "Recruit's Insignia", count: 3 },
        book: { name: 'Teachings of Ballad', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: "Sergeant's Insignia", count: 3 },
        book: { name: 'Guide of Ballad', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: "Sergeant's Insignia", count: 4 },
        book: { name: 'Guide of Ballad', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: "Sergeant's Insignia", count: 6 },
        book: { name: 'Guide of Ballad', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: "Sergeant's Insignia", count: 9 },
        book: { name: 'Guide of Ballad', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: "Lieutenant's Insignia", count: 4 },
        book: { name: 'Philosophies of Ballad', count: 4 },
        boss: { name: 'Shadow of the Warrior', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: "Lieutenant's Insignia", count: 6 },
        book: { name: 'Philosophies of Ballad', count: 6 },
        boss: { name: 'Shadow of the Warrior', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: "Lieutenant's Insignia", count: 9 },
        book: { name: 'Philosophies of Ballad', count: 12 },
        boss: { name: 'Shadow of the Warrior', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: "Lieutenant's Insignia", count: 12 },
        book: { name: 'Philosophies of Ballad', count: 16 },
        boss: { name: 'Shadow of the Warrior', count: 2 },
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

charactersCryoMap.set('Shenhe', {
  name: 'Shenhe',
  vision: 'Cryo',
  rarity: 5,
  weaponType: 'Polearm',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Shivada Jade Sliver', count: 1 },
        localSpecialty: { name: 'Qingxin', count: 3 },
        common: { name: 'Whopperflower Nectar', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Shivada Jade Fragment', count: 3 },
        localSpecialty: { name: 'Qingxin', count: 10 },
        common: { name: 'Whopperflower Nectar', count: 15 },
        boss: { name: "Dragonheir's False Fin", count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Shivada Jade Fragment', count: 6 },
        localSpecialty: { name: 'Qingxin', count: 20 },
        common: { name: 'Shimmering Nectar', count: 12 },
        boss: { name: "Dragonheir's False Fin", count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Shivada Jade Chunk', count: 3 },
        localSpecialty: { name: 'Qingxin', count: 30 },
        common: { name: 'Shimmering Nectar', count: 18 },
        boss: { name: "Dragonheir's False Fin", count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Shivada Jade Chunk', count: 6 },
        localSpecialty: { name: 'Qingxin', count: 45 },
        common: { name: 'Energy Nectar', count: 12 },
        boss: { name: "Dragonheir's False Fin", count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Shivada Jade Gemstone', count: 6 },
        localSpecialty: { name: 'Qingxin', count: 60 },
        common: { name: 'Energy Nectar', count: 24 },
        boss: { name: "Dragonheir's False Fin", count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Whopperflower Nectar', count: 3 },
        book: { name: 'Teachings of Prosperity', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Shimmering Nectar', count: 3 },
        book: { name: 'Guide of Prosperity', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Shimmering Nectar', count: 4 },
        book: { name: 'Guide of Prosperity', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Shimmering Nectar', count: 6 },
        book: { name: 'Guide of Prosperity', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Shimmering Nectar', count: 9 },
        book: { name: 'Guide of Prosperity', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Energy Nectar', count: 4 },
        book: { name: 'Philosophies of Prosperity', count: 4 },
        boss: { name: 'Hellfire Butterfly', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Energy Nectar', count: 6 },
        book: { name: 'Philosophies of Prosperity', count: 6 },
        boss: { name: 'Hellfire Butterfly', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Energy Nectar', count: 9 },
        book: { name: 'Philosophies of Prosperity', count: 12 },
        boss: { name: 'Hellfire Butterfly', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Energy Nectar', count: 12 },
        book: { name: 'Philosophies of Prosperity', count: 16 },
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

export default charactersCryoMap
