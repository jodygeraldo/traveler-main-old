import { CharacterName, ICharacter } from '~/types/character'

const CharacterAnemoMap = new Map<CharacterName, ICharacter>()

CharacterAnemoMap.set('Jean', {
  name: 'Jean',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vayuda Turquoise Sliver', amount: 1 },
        localSpecialty: { name: 'Dandelion Seed', amount: 3 },
        common: { name: 'Damaged Mask', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 3 },
        localSpecialty: { name: 'Dandelion Seed', amount: 10 },
        common: { name: 'Damaged Mask', amount: 15 },
        boss: { name: 'Hurricane Seed', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 6 },
        localSpecialty: { name: 'Dandelion Seed', amount: 20 },
        common: { name: 'Stained Mask', amount: 12 },
        boss: { name: 'Hurricane Seed', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 3 },
        localSpecialty: { name: 'Dandelion Seed', amount: 30 },
        common: { name: 'Stained Mask', amount: 18 },
        boss: { name: 'Hurricane Seed', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 6 },
        localSpecialty: { name: 'Dandelion Seed', amount: 45 },
        common: { name: 'Ominous Mask', amount: 12 },
        boss: { name: 'Hurricane Seed', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vayuda Turquoise Gemstone', amount: 6 },
        localSpecialty: { name: 'Dandelion Seed', amount: 60 },
        common: { name: 'Ominous Mask', amount: 24 },
        boss: { name: 'Hurricane Seed', amount: 20 },
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
        boss: { name: "Dvalin's Plume", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Ominous Mask', amount: 6 },
        book: { name: 'Philosophies of Resistance', amount: 6 },
        boss: { name: "Dvalin's Plume", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Ominous Mask', amount: 9 },
        book: { name: 'Philosophies of Resistance', amount: 12 },
        boss: { name: "Dvalin's Plume", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Ominous Mask', amount: 12 },
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

CharacterAnemoMap.set('Kaedehara Kazuha', {
  name: 'Kaedehara Kazuha',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vayuda Turquoise Sliver', amount: 1 },
        localSpecialty: { name: 'Sea Ganoderma', amount: 3 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 3 },
        localSpecialty: { name: 'Sea Ganoderma', amount: 10 },
        common: { name: 'Treasure Hoarder Insignia', amount: 15 },
        boss: { name: 'Marionette Core', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 6 },
        localSpecialty: { name: 'Sea Ganoderma', amount: 20 },
        common: { name: 'Silver Raven Insignia', amount: 12 },
        boss: { name: 'Marionette Core', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 3 },
        localSpecialty: { name: 'Sea Ganoderma', amount: 30 },
        common: { name: 'Silver Raven Insignia', amount: 18 },
        boss: { name: 'Marionette Core', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 6 },
        localSpecialty: { name: 'Sea Ganoderma', amount: 45 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        boss: { name: 'Marionette Core', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vayuda Turquoise Gemstone', amount: 6 },
        localSpecialty: { name: 'Sea Ganoderma', amount: 60 },
        common: { name: 'Golden Raven Insignia', amount: 24 },
        boss: { name: 'Marionette Core', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
        book: { name: 'Teachings of Diligence', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Silver Raven Insignia', amount: 3 },
        book: { name: 'Guide of Diligence', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Silver Raven Insignia', amount: 4 },
        book: { name: 'Guide of Diligence', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Silver Raven Insignia', amount: 6 },
        book: { name: 'Guide of Diligence', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Silver Raven Insignia', amount: 9 },
        book: { name: 'Guide of Diligence', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Golden Raven Insignia', amount: 4 },
        book: { name: 'Philosophies of Diligence', amount: 4 },
        boss: { name: 'Gilded Scale', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Golden Raven Insignia', amount: 6 },
        book: { name: 'Philosophies of Diligence', amount: 6 },
        boss: { name: 'Gilded Scale', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Golden Raven Insignia', amount: 9 },
        book: { name: 'Philosophies of Diligence', amount: 12 },
        boss: { name: 'Gilded Scale', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        book: { name: 'Philosophies of Diligence', amount: 16 },
        boss: { name: 'Gilded Scale', amount: 2 },
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

CharacterAnemoMap.set('Sayu', {
  name: 'Sayu',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vayuda Turquoise Sliver', amount: 1 },
        localSpecialty: { name: 'Crystal Marrow', amount: 3 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 3 },
        localSpecialty: { name: 'Crystal Marrow', amount: 10 },
        common: { name: 'Whopperflower Nectar', amount: 15 },
        boss: { name: 'Marionette Core', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 6 },
        localSpecialty: { name: 'Crystal Marrow', amount: 20 },
        common: { name: 'Shimmering Nectar', amount: 12 },
        boss: { name: 'Marionette Core', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 3 },
        localSpecialty: { name: 'Crystal Marrow', amount: 30 },
        common: { name: 'Shimmering Nectar', amount: 18 },
        boss: { name: 'Marionette Core', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 6 },
        localSpecialty: { name: 'Crystal Marrow', amount: 45 },
        common: { name: 'Energy Nectar', amount: 12 },
        boss: { name: 'Marionette Core', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vayuda Turquoise Gemstone', amount: 6 },
        localSpecialty: { name: 'Crystal Marrow', amount: 60 },
        common: { name: 'Energy Nectar', amount: 24 },
        boss: { name: 'Marionette Core', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
        book: { name: 'Teachings of Light', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Shimmering Nectar', amount: 3 },
        book: { name: 'Guide of Light', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Shimmering Nectar', amount: 4 },
        book: { name: 'Guide of Light', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Shimmering Nectar', amount: 6 },
        book: { name: 'Guide of Light', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Shimmering Nectar', amount: 9 },
        book: { name: 'Guide of Light', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Energy Nectar', amount: 4 },
        book: { name: 'Philosophies of Light', amount: 4 },
        boss: { name: 'Gilded Scale', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Energy Nectar', amount: 6 },
        book: { name: 'Philosophies of Light', amount: 6 },
        boss: { name: 'Gilded Scale', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Energy Nectar', amount: 9 },
        book: { name: 'Philosophies of Light', amount: 12 },
        boss: { name: 'Gilded Scale', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Energy Nectar', amount: 12 },
        book: { name: 'Philosophies of Light', amount: 16 },
        boss: { name: 'Gilded Scale', amount: 2 },
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

CharacterAnemoMap.set('Sucrose', {
  name: 'Sucrose',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vayuda Turquoise Sliver', amount: 1 },
        localSpecialty: { name: 'Windwheel Aster', amount: 3 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 3 },
        localSpecialty: { name: 'Windwheel Aster', amount: 10 },
        common: { name: 'Whopperflower Nectar', amount: 15 },
        boss: { name: 'Hurricane Seed', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 6 },
        localSpecialty: { name: 'Windwheel Aster', amount: 20 },
        common: { name: 'Shimmering Nectar', amount: 12 },
        boss: { name: 'Hurricane Seed', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 3 },
        localSpecialty: { name: 'Windwheel Aster', amount: 30 },
        common: { name: 'Shimmering Nectar', amount: 18 },
        boss: { name: 'Hurricane Seed', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 6 },
        localSpecialty: { name: 'Windwheel Aster', amount: 45 },
        common: { name: 'Energy Nectar', amount: 12 },
        boss: { name: 'Hurricane Seed', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vayuda Turquoise Gemstone', amount: 6 },
        localSpecialty: { name: 'Windwheel Aster', amount: 60 },
        common: { name: 'Energy Nectar', amount: 24 },
        boss: { name: 'Hurricane Seed', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
        book: { name: 'Teachings of Freedom', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Shimmering Nectar', amount: 3 },
        book: { name: 'Guide of Freedom', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Shimmering Nectar', amount: 4 },
        book: { name: 'Guide of Freedom', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Shimmering Nectar', amount: 6 },
        book: { name: 'Guide of Freedom', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Shimmering Nectar', amount: 9 },
        book: { name: 'Guide of Freedom', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Energy Nectar', amount: 4 },
        book: { name: 'Philosophies of Freedom', amount: 4 },
        boss: { name: 'Spirit Locket of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Energy Nectar', amount: 6 },
        book: { name: 'Philosophies of Freedom', amount: 6 },
        boss: { name: 'Spirit Locket of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Energy Nectar', amount: 9 },
        book: { name: 'Philosophies of Freedom', amount: 12 },
        boss: { name: 'Spirit Locket of Boreas', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Energy Nectar', amount: 12 },
        book: { name: 'Philosophies of Freedom', amount: 16 },
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

CharacterAnemoMap.set('Traveler Anemo', {
  name: 'Traveler Anemo',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Brilliant Diamond Sliver', amount: 1 },
        localSpecialty: { name: 'Windwheel Aster', amount: 3 },
        common: { name: 'Damaged Mask', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Brilliant Diamond Fragment', amount: 3 },
        localSpecialty: { name: 'Windwheel Aster', amount: 10 },
        common: { name: 'Damaged Mask', amount: 15 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Brilliant Diamond Fragment', amount: 6 },
        localSpecialty: { name: 'Windwheel Aster', amount: 20 },
        common: { name: 'Stained Mask', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Brilliant Diamond Chunk', amount: 3 },
        localSpecialty: { name: 'Windwheel Aster', amount: 30 },
        common: { name: 'Stained Mask', amount: 18 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Brilliant Diamond Chunk', amount: 6 },
        localSpecialty: { name: 'Windwheel Aster', amount: 45 },
        common: { name: 'Ominous Mask', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Brilliant Diamond Gemstone', amount: 6 },
        localSpecialty: { name: 'Windwheel Aster', amount: 60 },
        common: { name: 'Ominous Mask', amount: 24 },
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
        book: { name: 'Guide of Resistance', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Sealed Scroll', amount: 4 },
        book: { name: 'Guide of Ballad', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Sealed Scroll', amount: 6 },
        book: { name: 'Guide of Freedom', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Sealed Scroll', amount: 9 },
        book: { name: 'Guide of Resistance', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 4 },
        book: { name: 'Philosophies of Ballad', amount: 4 },
        boss: { name: "Dvalin's Sigh", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 6 },
        book: { name: 'Philosophies of Freedom', amount: 6 },
        boss: { name: "Dvalin's Sigh", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 9 },
        book: { name: 'Philosophies of Resistance', amount: 12 },
        boss: { name: "Dvalin's Sigh", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 12 },
        book: { name: 'Philosophies of Ballad', amount: 16 },
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

CharacterAnemoMap.set('Venti', {
  name: 'Venti',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vayuda Turquoise Sliver', amount: 1 },
        localSpecialty: { name: 'Cecilia', amount: 3 },
        common: { name: 'Slime Condensate', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 3 },
        localSpecialty: { name: 'Cecilia', amount: 10 },
        common: { name: 'Slime Condensate', amount: 15 },
        boss: { name: 'Hurricane Seed', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 6 },
        localSpecialty: { name: 'Cecilia', amount: 20 },
        common: { name: 'Slime Secretions', amount: 12 },
        boss: { name: 'Hurricane Seed', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 3 },
        localSpecialty: { name: 'Cecilia', amount: 30 },
        common: { name: 'Slime Secretions', amount: 18 },
        boss: { name: 'Hurricane Seed', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 6 },
        localSpecialty: { name: 'Cecilia', amount: 45 },
        common: { name: 'Slime Concentrate', amount: 12 },
        boss: { name: 'Hurricane Seed', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vayuda Turquoise Gemstone', amount: 6 },
        localSpecialty: { name: 'Cecilia', amount: 60 },
        common: { name: 'Slime Concentrate', amount: 24 },
        boss: { name: 'Hurricane Seed', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Slime Condensate', amount: 3 },
        book: { name: 'Teachings of Ballad', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Slime Secretions', amount: 3 },
        book: { name: 'Guide of Ballad', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Slime Secretions', amount: 4 },
        book: { name: 'Guide of Ballad', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Slime Secretions', amount: 6 },
        book: { name: 'Guide of Ballad', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Slime Secretions', amount: 9 },
        book: { name: 'Guide of Ballad', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Slime Concentrate', amount: 4 },
        book: { name: 'Philosophies of Ballad', amount: 4 },
        boss: { name: 'Tail of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Slime Concentrate', amount: 6 },
        book: { name: 'Philosophies of Ballad', amount: 6 },
        boss: { name: 'Tail of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Slime Concentrate', amount: 9 },
        book: { name: 'Philosophies of Ballad', amount: 12 },
        boss: { name: 'Tail of Boreas', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Slime Concentrate', amount: 12 },
        book: { name: 'Philosophies of Ballad', amount: 16 },
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

CharacterAnemoMap.set('Xiao', {
  name: 'Xiao',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vayuda Turquoise Sliver', amount: 1 },
        localSpecialty: { name: 'Qingxin', amount: 3 },
        common: { name: 'Slime Condensate', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 3 },
        localSpecialty: { name: 'Qingxin', amount: 10 },
        common: { name: 'Slime Condensate', amount: 15 },
        boss: { name: 'Juvenile Jade', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vayuda Turquoise Fragment', amount: 6 },
        localSpecialty: { name: 'Qingxin', amount: 20 },
        common: { name: 'Slime Secretions', amount: 12 },
        boss: { name: 'Juvenile Jade', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 3 },
        localSpecialty: { name: 'Qingxin', amount: 30 },
        common: { name: 'Slime Secretions', amount: 18 },
        boss: { name: 'Juvenile Jade', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vayuda Turquoise Chunk', amount: 6 },
        localSpecialty: { name: 'Qingxin', amount: 45 },
        common: { name: 'Slime Concentrate', amount: 12 },
        boss: { name: 'Juvenile Jade', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vayuda Turquoise Gemstone', amount: 6 },
        localSpecialty: { name: 'Qingxin', amount: 60 },
        common: { name: 'Slime Concentrate', amount: 24 },
        boss: { name: 'Juvenile Jade', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Slime Condensate', amount: 3 },
        book: { name: 'Teachings of Prosperity', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Slime Secretions', amount: 3 },
        book: { name: 'Guide of Prosperity', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Slime Secretions', amount: 4 },
        book: { name: 'Guide of Prosperity', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Slime Secretions', amount: 6 },
        book: { name: 'Guide of Prosperity', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Slime Secretions', amount: 9 },
        book: { name: 'Guide of Prosperity', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Slime Concentrate', amount: 4 },
        book: { name: 'Philosophies of Prosperity', amount: 4 },
        boss: { name: 'Shadow of the Warrior', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Slime Concentrate', amount: 6 },
        book: { name: 'Philosophies of Prosperity', amount: 6 },
        boss: { name: 'Shadow of the Warrior', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Slime Concentrate', amount: 9 },
        book: { name: 'Philosophies of Prosperity', amount: 12 },
        boss: { name: 'Shadow of the Warrior', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Slime Concentrate', amount: 12 },
        book: { name: 'Philosophies of Prosperity', amount: 16 },
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

export default CharacterAnemoMap
