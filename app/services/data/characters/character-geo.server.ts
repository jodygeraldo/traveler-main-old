import { CharacterName, ICharacter } from '~/types/character'

const charactersGeoMap = new Map<CharacterName, ICharacter>()

charactersGeoMap.set('Albedo', {
  name: 'Albedo',
  vision: 'Geo',
  rarity: 5,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Prithiva Topaz Sliver', amount: 1 },
        localSpecialty: { name: 'Cecilia', amount: 3 },
        common: { name: 'Divining Scroll', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 3 },
        localSpecialty: { name: 'Cecilia', amount: 10 },
        common: { name: 'Divining Scroll', amount: 15 },
        boss: { name: 'Basalt Pillar', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 6 },
        localSpecialty: { name: 'Cecilia', amount: 20 },
        common: { name: 'Sealed Scroll', amount: 12 },
        boss: { name: 'Basalt Pillar', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 3 },
        localSpecialty: { name: 'Cecilia', amount: 30 },
        common: { name: 'Sealed Scroll', amount: 18 },
        boss: { name: 'Basalt Pillar', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 6 },
        localSpecialty: { name: 'Cecilia', amount: 45 },
        common: { name: 'Forbidden Curse Scroll', amount: 12 },
        boss: { name: 'Basalt Pillar', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Prithiva Topaz Gemstone', amount: 6 },
        localSpecialty: { name: 'Cecilia', amount: 60 },
        common: { name: 'Forbidden Curse Scroll', amount: 24 },
        boss: { name: 'Basalt Pillar', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Divining Scroll', amount: 3 },
        book: { name: 'Teachings of Ballad', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Sealed Scroll', amount: 3 },
        book: { name: 'Guide of Ballad', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Sealed Scroll', amount: 4 },
        book: { name: 'Guide of Ballad', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Sealed Scroll', amount: 6 },
        book: { name: 'Guide of Ballad', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Sealed Scroll', amount: 9 },
        book: { name: 'Guide of Ballad', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 4 },
        book: { name: 'Philosophies of Ballad', amount: 4 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 6 },
        book: { name: 'Philosophies of Ballad', amount: 6 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 9 },
        book: { name: 'Philosophies of Ballad', amount: 12 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Forbidden Curse Scroll', amount: 12 },
        book: { name: 'Philosophies of Ballad', amount: 16 },
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

charactersGeoMap.set('Arataki Itto', {
  name: 'Arataki Itto',
  vision: 'Geo',
  rarity: 5,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Prithiva Topaz Sliver', amount: 1 },
        localSpecialty: { name: 'Onikabuto', amount: 3 },
        common: { name: 'Slime Condensate', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 3 },
        localSpecialty: { name: 'Onikabuto', amount: 10 },
        common: { name: 'Slime Condensate', amount: 15 },
        boss: { name: 'Riftborn Regalia', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 6 },
        localSpecialty: { name: 'Onikabuto', amount: 20 },
        common: { name: 'Slime Secretions', amount: 12 },
        boss: { name: 'Riftborn Regalia', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 3 },
        localSpecialty: { name: 'Onikabuto', amount: 30 },
        common: { name: 'Slime Secretions', amount: 18 },
        boss: { name: 'Riftborn Regalia', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 6 },
        localSpecialty: { name: 'Onikabuto', amount: 45 },
        common: { name: 'Slime Concentrate', amount: 12 },
        boss: { name: 'Riftborn Regalia', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Prithiva Topaz Gemstone', amount: 6 },
        localSpecialty: { name: 'Onikabuto', amount: 60 },
        common: { name: 'Slime Concentrate', amount: 24 },
        boss: { name: 'Riftborn Regalia', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Slime Condensate', amount: 3 },
        book: { name: 'Teachings of Elegance', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Slime Secretions', amount: 3 },
        book: { name: 'Guide of Elegance', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Slime Secretions', amount: 4 },
        book: { name: 'Guide of Elegance', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Slime Secretions', amount: 6 },
        book: { name: 'Guide of Elegance', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Slime Secretions', amount: 9 },
        book: { name: 'Guide of Elegance', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Slime Concentrate', amount: 4 },
        book: { name: 'Philosophies of Elegance', amount: 4 },
        boss: { name: 'Ashen Heart', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Slime Concentrate', amount: 6 },
        book: { name: 'Philosophies of Elegance', amount: 6 },
        boss: { name: 'Ashen Heart', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Slime Concentrate', amount: 9 },
        book: { name: 'Philosophies of Elegance', amount: 12 },
        boss: { name: 'Ashen Heart', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Slime Concentrate', amount: 12 },
        book: { name: 'Philosophies of Elegance', amount: 16 },
        boss: { name: 'Ashen Heart', amount: 2 },
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

charactersGeoMap.set('Gorou', {
  name: 'Gorou',
  vision: 'Geo',
  rarity: 4,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Prithiva Topaz Sliver', amount: 1 },
        localSpecialty: { name: 'Sango Pearl', amount: 3 },
        common: { name: 'Spectral Husk', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 3 },
        localSpecialty: { name: 'Sango Pearl', amount: 10 },
        common: { name: 'Spectral Husk', amount: 15 },
        boss: { name: 'Perpetual Heart', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 6 },
        localSpecialty: { name: 'Sango Pearl', amount: 20 },
        common: { name: 'Spectral Heart', amount: 12 },
        boss: { name: 'Perpetual Heart', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 3 },
        localSpecialty: { name: 'Sango Pearl', amount: 30 },
        common: { name: 'Spectral Heart', amount: 18 },
        boss: { name: 'Perpetual Heart', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 6 },
        localSpecialty: { name: 'Sango Pearl', amount: 45 },
        common: { name: 'Spectral Nucleus', amount: 12 },
        boss: { name: 'Perpetual Heart', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Prithiva Topaz Gemstone', amount: 6 },
        localSpecialty: { name: 'Sango Pearl', amount: 60 },
        common: { name: 'Spectral Nucleus', amount: 24 },
        boss: { name: 'Perpetual Heart', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Spectral Husk', amount: 3 },
        book: { name: 'Teachings of Light', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Spectral Heart', amount: 3 },
        book: { name: 'Guide of Light', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Spectral Heart', amount: 4 },
        book: { name: 'Guide of Light', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Spectral Heart', amount: 6 },
        book: { name: 'Guide of Light', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Spectral Heart', amount: 9 },
        book: { name: 'Guide of Light', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Spectral Nucleus', amount: 4 },
        book: { name: 'Philosophies of Light', amount: 4 },
        boss: { name: 'Molten Moment', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Spectral Nucleus', amount: 6 },
        book: { name: 'Philosophies of Light', amount: 6 },
        boss: { name: 'Molten Moment', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Spectral Nucleus', amount: 9 },
        book: { name: 'Philosophies of Light', amount: 12 },
        boss: { name: 'Molten Moment', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Spectral Nucleus', amount: 12 },
        book: { name: 'Philosophies of Light', amount: 16 },
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

charactersGeoMap.set('Ningguang', {
  name: 'Ningguang',
  vision: 'Geo',
  rarity: 4,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Prithiva Topaz Sliver', amount: 1 },
        localSpecialty: { name: 'Glaze Lily', amount: 3 },
        common: { name: "Recruit's Insignia", amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 3 },
        localSpecialty: { name: 'Glaze Lily', amount: 10 },
        common: { name: "Recruit's Insignia", amount: 15 },
        boss: { name: 'Basalt Pillar', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 6 },
        localSpecialty: { name: 'Glaze Lily', amount: 20 },
        common: { name: "Sergeant's Insignia", amount: 12 },
        boss: { name: 'Basalt Pillar', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 3 },
        localSpecialty: { name: 'Glaze Lily', amount: 30 },
        common: { name: "Sergeant's Insignia", amount: 18 },
        boss: { name: 'Basalt Pillar', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 6 },
        localSpecialty: { name: 'Glaze Lily', amount: 45 },
        common: { name: "Lieutenant's Insignia", amount: 12 },
        boss: { name: 'Basalt Pillar', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Prithiva Topaz Gemstone', amount: 6 },
        localSpecialty: { name: 'Glaze Lily', amount: 60 },
        common: { name: "Lieutenant's Insignia", amount: 24 },
        boss: { name: 'Basalt Pillar', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: "Recruit's Insignia", amount: 3 },
        book: { name: 'Teachings of Prosperity', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: "Sergeant's Insignia", amount: 3 },
        book: { name: 'Guide of Prosperity', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: "Sergeant's Insignia", amount: 4 },
        book: { name: 'Guide of Prosperity', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: "Sergeant's Insignia", amount: 6 },
        book: { name: 'Guide of Prosperity', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: "Sergeant's Insignia", amount: 9 },
        book: { name: 'Guide of Prosperity', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: "Lieutenant's Insignia", amount: 4 },
        book: { name: 'Philosophies of Prosperity', amount: 4 },
        boss: { name: 'Spirit Locket of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: "Lieutenant's Insignia", amount: 6 },
        book: { name: 'Philosophies of Prosperity', amount: 6 },
        boss: { name: 'Spirit Locket of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: "Lieutenant's Insignia", amount: 9 },
        book: { name: 'Philosophies of Prosperity', amount: 12 },
        boss: { name: 'Spirit Locket of Boreas', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: "Lieutenant's Insignia", amount: 12 },
        book: { name: 'Philosophies of Prosperity', amount: 16 },
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

charactersGeoMap.set('Noelle', {
  name: 'Noelle',
  vision: 'Geo',
  rarity: 4,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Prithiva Topaz Sliver', amount: 1 },
        localSpecialty: { name: 'Valberry', amount: 3 },
        common: { name: 'Damaged Mask', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 3 },
        localSpecialty: { name: 'Valberry', amount: 10 },
        common: { name: 'Damaged Mask', amount: 15 },
        boss: { name: 'Basalt Pillar', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 6 },
        localSpecialty: { name: 'Valberry', amount: 20 },
        common: { name: 'Stained Mask', amount: 12 },
        boss: { name: 'Basalt Pillar', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 3 },
        localSpecialty: { name: 'Valberry', amount: 30 },
        common: { name: 'Stained Mask', amount: 18 },
        boss: { name: 'Basalt Pillar', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 6 },
        localSpecialty: { name: 'Valberry', amount: 45 },
        common: { name: 'Ominous Mask', amount: 12 },
        boss: { name: 'Basalt Pillar', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Prithiva Topaz Gemstone', amount: 6 },
        localSpecialty: { name: 'Valberry', amount: 60 },
        common: { name: 'Ominous Mask', amount: 24 },
        boss: { name: 'Basalt Pillar', amount: 20 },
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
        boss: { name: "Dvalin's Claw", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Ominous Mask', amount: 6 },
        book: { name: 'Philosophies of Resistance', amount: 6 },
        boss: { name: "Dvalin's Claw", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Ominous Mask', amount: 9 },
        book: { name: 'Philosophies of Resistance', amount: 12 },
        boss: { name: "Dvalin's Claw", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Ominous Mask', amount: 12 },
        book: { name: 'Philosophies of Resistance', amount: 16 },
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

charactersGeoMap.set('Traveler Geo', {
  name: 'Traveler Geo',
  vision: 'Geo',
  rarity: 5,
  weaponType: 'Sword',
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
    talent: {
      normal: [
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
      skill: [
        {
          mora: { name: 'Mora', amount: 12_500 },
          common: { name: 'Firm Arrowhead', amount: 3 },
          book: { name: 'Teachings of Prosperity', amount: 3 },
        },
        {
          mora: { name: 'Mora', amount: 17_500 },
          common: { name: 'Sharp Arrowhead', amount: 3 },
          book: { name: 'Guide of Diligence', amount: 2 },
        },
        {
          mora: { name: 'Mora', amount: 25_000 },
          common: { name: 'Sharp Arrowhead', amount: 4 },
          book: { name: 'Guide of Gold', amount: 4 },
        },
        {
          mora: { name: 'Mora', amount: 30_000 },
          common: { name: 'Sharp Arrowhead', amount: 6 },
          book: { name: 'Guide of Prosperity', amount: 6 },
        },
        {
          mora: { name: 'Mora', amount: 37_500 },
          common: { name: 'Sharp Arrowhead', amount: 9 },
          book: { name: 'Guide of Diligence', amount: 9 },
        },
        {
          mora: { name: 'Mora', amount: 120_000 },
          common: { name: 'Weathered Arrowhead', amount: 4 },
          book: { name: 'Philosophies of Gold', amount: 4 },
          boss: { name: 'Tail of Boreas', amount: 1 },
        },
        {
          mora: { name: 'Mora', amount: 260_000 },
          common: { name: 'Weathered Arrowhead', amount: 6 },
          book: { name: 'Philosophies of Prosperity', amount: 6 },
          boss: { name: 'Tail of Boreas', amount: 1 },
        },
        {
          mora: { name: 'Mora', amount: 450_000 },
          common: { name: 'Weathered Arrowhead', amount: 9 },
          book: { name: 'Philosophies of Diligence', amount: 12 },
          boss: { name: 'Tail of Boreas', amount: 2 },
        },
        {
          mora: { name: 'Mora', amount: 700_000 },
          common: { name: 'Weathered Arrowhead', amount: 12 },
          book: { name: 'Philosophies of Gold', amount: 16 },
          boss: { name: 'Tail of Boreas', amount: 2 },
          crown: { name: 'Crown of Insight', amount: 1 },
        },
      ],
      burst: [
        {
          mora: { name: 'Mora', amount: 12_500 },
          common: { name: 'Firm Arrowhead', amount: 3 },
          book: { name: 'Teachings of Prosperity', amount: 3 },
        },
        {
          mora: { name: 'Mora', amount: 17_500 },
          common: { name: 'Sharp Arrowhead', amount: 3 },
          book: { name: 'Guide of Diligence', amount: 2 },
        },
        {
          mora: { name: 'Mora', amount: 25_000 },
          common: { name: 'Sharp Arrowhead', amount: 4 },
          book: { name: 'Guide of Gold', amount: 4 },
        },
        {
          mora: { name: 'Mora', amount: 30_000 },
          common: { name: 'Sharp Arrowhead', amount: 6 },
          book: { name: 'Guide of Prosperity', amount: 6 },
        },
        {
          mora: { name: 'Mora', amount: 37_500 },
          common: { name: 'Sharp Arrowhead', amount: 9 },
          book: { name: 'Guide of Diligence', amount: 9 },
        },
        {
          mora: { name: 'Mora', amount: 120_000 },
          common: { name: 'Weathered Arrowhead', amount: 4 },
          book: { name: 'Philosophies of Gold', amount: 4 },
          boss: { name: 'Tail of Boreas', amount: 1 },
        },
        {
          mora: { name: 'Mora', amount: 260_000 },
          common: { name: 'Weathered Arrowhead', amount: 6 },
          book: { name: 'Philosophies of Prosperity', amount: 6 },
          boss: { name: 'Tail of Boreas', amount: 1 },
        },
        {
          mora: { name: 'Mora', amount: 450_000 },
          common: { name: 'Weathered Arrowhead', amount: 9 },
          book: { name: 'Philosophies of Diligence', amount: 12 },
          boss: { name: 'Tail of Boreas', amount: 2 },
        },
        {
          mora: { name: 'Mora', amount: 700_000 },
          common: { name: 'Weathered Arrowhead', amount: 12 },
          book: { name: 'Philosophies of Gold', amount: 16 },
          boss: { name: 'Tail of Boreas', amount: 2 },
          crown: { name: 'Crown of Insight', amount: 1 },
        },
      ],
    },
  },
  progression: {
    level: 1,
    ascension: 0,
    talent: [1, 1, 1],
  },
})

charactersGeoMap.set('Yun Jin', {
  name: 'Yun Jin',
  vision: 'Geo',
  rarity: 4,
  weaponType: 'Polearm',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Prithiva Topaz Sliver', amount: 1 },
        localSpecialty: { name: 'Glaze Lily', amount: 3 },
        common: { name: 'Damaged Mask', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 3 },
        localSpecialty: { name: 'Glaze Lily', amount: 10 },
        common: { name: 'Damaged Mask', amount: 15 },
        boss: { name: 'Riftborn Regalia', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 6 },
        localSpecialty: { name: 'Glaze Lily', amount: 20 },
        common: { name: 'Stained Mask', amount: 12 },
        boss: { name: 'Riftborn Regalia', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 3 },
        localSpecialty: { name: 'Glaze Lily', amount: 30 },
        common: { name: 'Stained Mask', amount: 18 },
        boss: { name: 'Riftborn Regalia', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 6 },
        localSpecialty: { name: 'Glaze Lily', amount: 45 },
        common: { name: 'Ominous Mask', amount: 12 },
        boss: { name: 'Riftborn Regalia', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Prithiva Topaz Gemstone', amount: 6 },
        localSpecialty: { name: 'Glaze Lily', amount: 60 },
        common: { name: 'Ominous Mask', amount: 24 },
        boss: { name: 'Riftborn Regalia', amount: 20 },
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
        boss: { name: 'Ashen Heart', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Ominous Mask', amount: 6 },
        book: { name: 'Philosophies of Diligence', amount: 6 },
        boss: { name: 'Ashen Heart', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Ominous Mask', amount: 9 },
        book: { name: 'Philosophies of Diligence', amount: 12 },
        boss: { name: 'Ashen Heart', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Ominous Mask', amount: 12 },
        book: { name: 'Philosophies of Diligence', amount: 16 },
        boss: { name: 'Ashen Heart', amount: 2 },
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

charactersGeoMap.set('Zhongli', {
  name: 'Zhongli',
  vision: 'Geo',
  rarity: 5,
  weaponType: 'Polearm',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Prithiva Topaz Sliver', amount: 1 },
        localSpecialty: { name: 'Cor Lapis', amount: 3 },
        common: { name: 'Slime Condensate', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 3 },
        localSpecialty: { name: 'Cor Lapis', amount: 10 },
        common: { name: 'Slime Condensate', amount: 15 },
        boss: { name: 'Basalt Pillar', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Prithiva Topaz Fragment', amount: 6 },
        localSpecialty: { name: 'Cor Lapis', amount: 20 },
        common: { name: 'Slime Secretions', amount: 12 },
        boss: { name: 'Basalt Pillar', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 3 },
        localSpecialty: { name: 'Cor Lapis', amount: 30 },
        common: { name: 'Slime Secretions', amount: 18 },
        boss: { name: 'Basalt Pillar', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Prithiva Topaz Chunk', amount: 6 },
        localSpecialty: { name: 'Cor Lapis', amount: 45 },
        common: { name: 'Slime Concentrate', amount: 12 },
        boss: { name: 'Basalt Pillar', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Prithiva Topaz Gemstone', amount: 6 },
        localSpecialty: { name: 'Cor Lapis', amount: 60 },
        common: { name: 'Slime Concentrate', amount: 24 },
        boss: { name: 'Basalt Pillar', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Slime Condensate', amount: 3 },
        book: { name: 'Teachings of Gold', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Slime Secretions', amount: 3 },
        book: { name: 'Guide of Gold', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Slime Secretions', amount: 4 },
        book: { name: 'Guide of Gold', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Slime Secretions', amount: 6 },
        book: { name: 'Guide of Gold', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Slime Secretions', amount: 9 },
        book: { name: 'Guide of Gold', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Slime Concentrate', amount: 4 },
        book: { name: 'Philosophies of Gold', amount: 4 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Slime Concentrate', amount: 6 },
        book: { name: 'Philosophies of Gold', amount: 6 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Slime Concentrate', amount: 9 },
        book: { name: 'Philosophies of Gold', amount: 12 },
        boss: { name: 'Tusk of Monoceros Caeli', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Slime Concentrate', amount: 12 },
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

export default charactersGeoMap
