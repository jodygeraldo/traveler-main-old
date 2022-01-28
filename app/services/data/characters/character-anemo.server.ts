import { CharacterName, ICharacter } from '~/types/character'

const charactersAnemoMap = new Map<CharacterName, ICharacter>()

charactersAnemoMap.set('Jean', {
  name: 'Jean',
  vision: 'Anemo',
  rarity: 5,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vayuda Turquoise Sliver', count: 1 },
        localSpecialty: { name: 'Dandelion Seed', count: 3 },
        common: { name: 'Damaged Mask', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 3 },
        localSpecialty: { name: 'Dandelion Seed', count: 10 },
        common: { name: 'Damaged Mask', count: 15 },
        boss: { name: 'Hurricane Seed', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 6 },
        localSpecialty: { name: 'Dandelion Seed', count: 20 },
        common: { name: 'Stained Mask', count: 12 },
        boss: { name: 'Hurricane Seed', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 3 },
        localSpecialty: { name: 'Dandelion Seed', count: 30 },
        common: { name: 'Stained Mask', count: 18 },
        boss: { name: 'Hurricane Seed', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 6 },
        localSpecialty: { name: 'Dandelion Seed', count: 45 },
        common: { name: 'Ominous Mask', count: 12 },
        boss: { name: 'Hurricane Seed', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vayuda Turquoise Gemstone', count: 6 },
        localSpecialty: { name: 'Dandelion Seed', count: 60 },
        common: { name: 'Ominous Mask', count: 24 },
        boss: { name: 'Hurricane Seed', count: 20 },
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
        boss: { name: "Dvalin's Plume", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Ominous Mask', count: 6 },
        book: { name: 'Philosophies of Resistance', count: 6 },
        boss: { name: "Dvalin's Plume", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Ominous Mask', count: 9 },
        book: { name: 'Philosophies of Resistance', count: 12 },
        boss: { name: "Dvalin's Plume", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Ominous Mask', count: 12 },
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

charactersAnemoMap.set('Kaedehara Kazuha', {
  name: 'Kaedehara Kazuha',
  vision: 'Anemo',
  rarity: 5,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vayuda Turquoise Sliver', count: 1 },
        localSpecialty: { name: 'Sea Ganoderma', count: 3 },
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 3 },
        localSpecialty: { name: 'Sea Ganoderma', count: 10 },
        common: { name: 'Treasure Hoarder Insignia', count: 15 },
        boss: { name: 'Marionette Core', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 6 },
        localSpecialty: { name: 'Sea Ganoderma', count: 20 },
        common: { name: 'Silver Raven Insignia', count: 12 },
        boss: { name: 'Marionette Core', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 3 },
        localSpecialty: { name: 'Sea Ganoderma', count: 30 },
        common: { name: 'Silver Raven Insignia', count: 18 },
        boss: { name: 'Marionette Core', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 6 },
        localSpecialty: { name: 'Sea Ganoderma', count: 45 },
        common: { name: 'Golden Raven Insignia', count: 12 },
        boss: { name: 'Marionette Core', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vayuda Turquoise Gemstone', count: 6 },
        localSpecialty: { name: 'Sea Ganoderma', count: 60 },
        common: { name: 'Golden Raven Insignia', count: 24 },
        boss: { name: 'Marionette Core', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
        book: { name: 'Teachings of Diligence', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Silver Raven Insignia', count: 3 },
        book: { name: 'Guide of Diligence', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Silver Raven Insignia', count: 4 },
        book: { name: 'Guide of Diligence', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Silver Raven Insignia', count: 6 },
        book: { name: 'Guide of Diligence', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Silver Raven Insignia', count: 9 },
        book: { name: 'Guide of Diligence', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Golden Raven Insignia', count: 4 },
        book: { name: 'Philosophies of Diligence', count: 4 },
        boss: { name: 'Gilded Scale', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Golden Raven Insignia', count: 6 },
        book: { name: 'Philosophies of Diligence', count: 6 },
        boss: { name: 'Gilded Scale', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Golden Raven Insignia', count: 9 },
        book: { name: 'Philosophies of Diligence', count: 12 },
        boss: { name: 'Gilded Scale', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Golden Raven Insignia', count: 12 },
        book: { name: 'Philosophies of Diligence', count: 16 },
        boss: { name: 'Gilded Scale', count: 2 },
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

charactersAnemoMap.set('Sayu', {
  name: 'Sayu',
  vision: 'Anemo',
  rarity: 4,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vayuda Turquoise Sliver', count: 1 },
        localSpecialty: { name: 'Crystal Marrow', count: 3 },
        common: { name: 'Whopperflower Nectar', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 3 },
        localSpecialty: { name: 'Crystal Marrow', count: 10 },
        common: { name: 'Whopperflower Nectar', count: 15 },
        boss: { name: 'Marionette Core', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 6 },
        localSpecialty: { name: 'Crystal Marrow', count: 20 },
        common: { name: 'Shimmering Nectar', count: 12 },
        boss: { name: 'Marionette Core', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 3 },
        localSpecialty: { name: 'Crystal Marrow', count: 30 },
        common: { name: 'Shimmering Nectar', count: 18 },
        boss: { name: 'Marionette Core', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 6 },
        localSpecialty: { name: 'Crystal Marrow', count: 45 },
        common: { name: 'Energy Nectar', count: 12 },
        boss: { name: 'Marionette Core', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vayuda Turquoise Gemstone', count: 6 },
        localSpecialty: { name: 'Crystal Marrow', count: 60 },
        common: { name: 'Energy Nectar', count: 24 },
        boss: { name: 'Marionette Core', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Whopperflower Nectar', count: 3 },
        book: { name: 'Teachings of Light', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Shimmering Nectar', count: 3 },
        book: { name: 'Guide of Light', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Shimmering Nectar', count: 4 },
        book: { name: 'Guide of Light', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Shimmering Nectar', count: 6 },
        book: { name: 'Guide of Light', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Shimmering Nectar', count: 9 },
        book: { name: 'Guide of Light', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Energy Nectar', count: 4 },
        book: { name: 'Philosophies of Light', count: 4 },
        boss: { name: 'Gilded Scale', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Energy Nectar', count: 6 },
        book: { name: 'Philosophies of Light', count: 6 },
        boss: { name: 'Gilded Scale', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Energy Nectar', count: 9 },
        book: { name: 'Philosophies of Light', count: 12 },
        boss: { name: 'Gilded Scale', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Energy Nectar', count: 12 },
        book: { name: 'Philosophies of Light', count: 16 },
        boss: { name: 'Gilded Scale', count: 2 },
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

charactersAnemoMap.set('Sucrose', {
  name: 'Sucrose',
  vision: 'Anemo',
  rarity: 4,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vayuda Turquoise Sliver', count: 1 },
        localSpecialty: { name: 'Windwheel Aster', count: 3 },
        common: { name: 'Whopperflower Nectar', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 3 },
        localSpecialty: { name: 'Windwheel Aster', count: 10 },
        common: { name: 'Whopperflower Nectar', count: 15 },
        boss: { name: 'Hurricane Seed', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 6 },
        localSpecialty: { name: 'Windwheel Aster', count: 20 },
        common: { name: 'Shimmering Nectar', count: 12 },
        boss: { name: 'Hurricane Seed', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 3 },
        localSpecialty: { name: 'Windwheel Aster', count: 30 },
        common: { name: 'Shimmering Nectar', count: 18 },
        boss: { name: 'Hurricane Seed', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 6 },
        localSpecialty: { name: 'Windwheel Aster', count: 45 },
        common: { name: 'Energy Nectar', count: 12 },
        boss: { name: 'Hurricane Seed', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vayuda Turquoise Gemstone', count: 6 },
        localSpecialty: { name: 'Windwheel Aster', count: 60 },
        common: { name: 'Energy Nectar', count: 24 },
        boss: { name: 'Hurricane Seed', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Whopperflower Nectar', count: 3 },
        book: { name: 'Teachings of Freedom', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Shimmering Nectar', count: 3 },
        book: { name: 'Guide of Freedom', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Shimmering Nectar', count: 4 },
        book: { name: 'Guide of Freedom', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Shimmering Nectar', count: 6 },
        book: { name: 'Guide of Freedom', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Shimmering Nectar', count: 9 },
        book: { name: 'Guide of Freedom', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Energy Nectar', count: 4 },
        book: { name: 'Philosophies of Freedom', count: 4 },
        boss: { name: 'Spirit Locket of Boreas', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Energy Nectar', count: 6 },
        book: { name: 'Philosophies of Freedom', count: 6 },
        boss: { name: 'Spirit Locket of Boreas', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Energy Nectar', count: 9 },
        book: { name: 'Philosophies of Freedom', count: 12 },
        boss: { name: 'Spirit Locket of Boreas', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Energy Nectar', count: 12 },
        book: { name: 'Philosophies of Freedom', count: 16 },
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

charactersAnemoMap.set('Anemo Traveler', {
  name: 'Anemo Traveler',
  vision: 'Anemo',
  rarity: 5,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Brilliant Diamond Sliver', count: 1 },
        localSpecialty: { name: 'Windwheel Aster', count: 3 },
        common: { name: 'Damaged Mask', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Brilliant Diamond Fragment', count: 3 },
        localSpecialty: { name: 'Windwheel Aster', count: 10 },
        common: { name: 'Damaged Mask', count: 15 },
      },
      {
        mora: 60_000,
        gem: { name: 'Brilliant Diamond Fragment', count: 6 },
        localSpecialty: { name: 'Windwheel Aster', count: 20 },
        common: { name: 'Stained Mask', count: 12 },
      },
      {
        mora: 80_000,
        gem: { name: 'Brilliant Diamond Chunk', count: 3 },
        localSpecialty: { name: 'Windwheel Aster', count: 30 },
        common: { name: 'Stained Mask', count: 18 },
      },
      {
        mora: 100_000,
        gem: { name: 'Brilliant Diamond Chunk', count: 6 },
        localSpecialty: { name: 'Windwheel Aster', count: 45 },
        common: { name: 'Ominous Mask', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Brilliant Diamond Gemstone', count: 6 },
        localSpecialty: { name: 'Windwheel Aster', count: 60 },
        common: { name: 'Ominous Mask', count: 24 },
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
        book: { name: 'Guide of Resistance', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Sealed Scroll', count: 4 },
        book: { name: 'Guide of Ballad', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Sealed Scroll', count: 6 },
        book: { name: 'Guide of Freedom', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Sealed Scroll', count: 9 },
        book: { name: 'Guide of Resistance', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Forbidden Curse Scroll', count: 4 },
        book: { name: 'Philosophies of Ballad', count: 4 },
        boss: { name: "Dvalin's Sigh", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Forbidden Curse Scroll', count: 6 },
        book: { name: 'Philosophies of Freedom', count: 6 },
        boss: { name: "Dvalin's Sigh", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Forbidden Curse Scroll', count: 9 },
        book: { name: 'Philosophies of Resistance', count: 12 },
        boss: { name: "Dvalin's Sigh", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Forbidden Curse Scroll', count: 12 },
        book: { name: 'Philosophies of Ballad', count: 16 },
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

charactersAnemoMap.set('Venti', {
  name: 'Venti',
  vision: 'Anemo',
  rarity: 5,
  weaponType: 'Bow',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vayuda Turquoise Sliver', count: 1 },
        localSpecialty: { name: 'Cecilia', count: 3 },
        common: { name: 'Slime Condensate', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 3 },
        localSpecialty: { name: 'Cecilia', count: 10 },
        common: { name: 'Slime Condensate', count: 15 },
        boss: { name: 'Hurricane Seed', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 6 },
        localSpecialty: { name: 'Cecilia', count: 20 },
        common: { name: 'Slime Secretions', count: 12 },
        boss: { name: 'Hurricane Seed', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 3 },
        localSpecialty: { name: 'Cecilia', count: 30 },
        common: { name: 'Slime Secretions', count: 18 },
        boss: { name: 'Hurricane Seed', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 6 },
        localSpecialty: { name: 'Cecilia', count: 45 },
        common: { name: 'Slime Concentrate', count: 12 },
        boss: { name: 'Hurricane Seed', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vayuda Turquoise Gemstone', count: 6 },
        localSpecialty: { name: 'Cecilia', count: 60 },
        common: { name: 'Slime Concentrate', count: 24 },
        boss: { name: 'Hurricane Seed', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Slime Condensate', count: 3 },
        book: { name: 'Teachings of Ballad', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Slime Secretions', count: 3 },
        book: { name: 'Guide of Ballad', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Slime Secretions', count: 4 },
        book: { name: 'Guide of Ballad', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Slime Secretions', count: 6 },
        book: { name: 'Guide of Ballad', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Slime Secretions', count: 9 },
        book: { name: 'Guide of Ballad', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Slime Concentrate', count: 4 },
        book: { name: 'Philosophies of Ballad', count: 4 },
        boss: { name: 'Tail of Boreas', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Slime Concentrate', count: 6 },
        book: { name: 'Philosophies of Ballad', count: 6 },
        boss: { name: 'Tail of Boreas', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Slime Concentrate', count: 9 },
        book: { name: 'Philosophies of Ballad', count: 12 },
        boss: { name: 'Tail of Boreas', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Slime Concentrate', count: 12 },
        book: { name: 'Philosophies of Ballad', count: 16 },
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

charactersAnemoMap.set('Xiao', {
  name: 'Xiao',
  vision: 'Anemo',
  rarity: 5,
  weaponType: 'Polearm',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vayuda Turquoise Sliver', count: 1 },
        localSpecialty: { name: 'Qingxin', count: 3 },
        common: { name: 'Slime Condensate', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 3 },
        localSpecialty: { name: 'Qingxin', count: 10 },
        common: { name: 'Slime Condensate', count: 15 },
        boss: { name: 'Juvenile Jade', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vayuda Turquoise Fragment', count: 6 },
        localSpecialty: { name: 'Qingxin', count: 20 },
        common: { name: 'Slime Secretions', count: 12 },
        boss: { name: 'Juvenile Jade', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 3 },
        localSpecialty: { name: 'Qingxin', count: 30 },
        common: { name: 'Slime Secretions', count: 18 },
        boss: { name: 'Juvenile Jade', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vayuda Turquoise Chunk', count: 6 },
        localSpecialty: { name: 'Qingxin', count: 45 },
        common: { name: 'Slime Concentrate', count: 12 },
        boss: { name: 'Juvenile Jade', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vayuda Turquoise Gemstone', count: 6 },
        localSpecialty: { name: 'Qingxin', count: 60 },
        common: { name: 'Slime Concentrate', count: 24 },
        boss: { name: 'Juvenile Jade', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Slime Condensate', count: 3 },
        book: { name: 'Teachings of Prosperity', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Slime Secretions', count: 3 },
        book: { name: 'Guide of Prosperity', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Slime Secretions', count: 4 },
        book: { name: 'Guide of Prosperity', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Slime Secretions', count: 6 },
        book: { name: 'Guide of Prosperity', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Slime Secretions', count: 9 },
        book: { name: 'Guide of Prosperity', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Slime Concentrate', count: 4 },
        book: { name: 'Philosophies of Prosperity', count: 4 },
        boss: { name: 'Shadow of the Warrior', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Slime Concentrate', count: 6 },
        book: { name: 'Philosophies of Prosperity', count: 6 },
        boss: { name: 'Shadow of the Warrior', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Slime Concentrate', count: 9 },
        book: { name: 'Philosophies of Prosperity', count: 12 },
        boss: { name: 'Shadow of the Warrior', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Slime Concentrate', count: 12 },
        book: { name: 'Philosophies of Prosperity', count: 16 },
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

export default charactersAnemoMap
