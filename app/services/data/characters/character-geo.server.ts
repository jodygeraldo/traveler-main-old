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
        mora: 20_000,
        gem: { name: 'Prithiva Topaz Sliver', count: 1 },
        localSpecialty: { name: 'Cecilia', count: 3 },
        common: { name: 'Divining Scroll', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 3 },
        localSpecialty: { name: 'Cecilia', count: 10 },
        common: { name: 'Divining Scroll', count: 15 },
        boss: { name: 'Basalt Pillar', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 6 },
        localSpecialty: { name: 'Cecilia', count: 20 },
        common: { name: 'Sealed Scroll', count: 12 },
        boss: { name: 'Basalt Pillar', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 3 },
        localSpecialty: { name: 'Cecilia', count: 30 },
        common: { name: 'Sealed Scroll', count: 18 },
        boss: { name: 'Basalt Pillar', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 6 },
        localSpecialty: { name: 'Cecilia', count: 45 },
        common: { name: 'Forbidden Curse Scroll', count: 12 },
        boss: { name: 'Basalt Pillar', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Prithiva Topaz Gemstone', count: 6 },
        localSpecialty: { name: 'Cecilia', count: 60 },
        common: { name: 'Forbidden Curse Scroll', count: 24 },
        boss: { name: 'Basalt Pillar', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Divining Scroll', count: 3 },
        book: { name: 'Teachings of Ballad', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Sealed Scroll', count: 3 },
        book: { name: 'Guide of Ballad', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Sealed Scroll', count: 4 },
        book: { name: 'Guide of Ballad', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Sealed Scroll', count: 6 },
        book: { name: 'Guide of Ballad', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Sealed Scroll', count: 9 },
        book: { name: 'Guide of Ballad', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Forbidden Curse Scroll', count: 4 },
        book: { name: 'Philosophies of Ballad', count: 4 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Forbidden Curse Scroll', count: 6 },
        book: { name: 'Philosophies of Ballad', count: 6 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Forbidden Curse Scroll', count: 9 },
        book: { name: 'Philosophies of Ballad', count: 12 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Forbidden Curse Scroll', count: 12 },
        book: { name: 'Philosophies of Ballad', count: 16 },
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

charactersGeoMap.set('Arataki Itto', {
  name: 'Arataki Itto',
  vision: 'Geo',
  rarity: 5,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Prithiva Topaz Sliver', count: 1 },
        localSpecialty: { name: 'Onikabuto', count: 3 },
        common: { name: 'Slime Condensate', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 3 },
        localSpecialty: { name: 'Onikabuto', count: 10 },
        common: { name: 'Slime Condensate', count: 15 },
        boss: { name: 'Riftborn Regalia', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 6 },
        localSpecialty: { name: 'Onikabuto', count: 20 },
        common: { name: 'Slime Secretions', count: 12 },
        boss: { name: 'Riftborn Regalia', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 3 },
        localSpecialty: { name: 'Onikabuto', count: 30 },
        common: { name: 'Slime Secretions', count: 18 },
        boss: { name: 'Riftborn Regalia', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 6 },
        localSpecialty: { name: 'Onikabuto', count: 45 },
        common: { name: 'Slime Concentrate', count: 12 },
        boss: { name: 'Riftborn Regalia', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Prithiva Topaz Gemstone', count: 6 },
        localSpecialty: { name: 'Onikabuto', count: 60 },
        common: { name: 'Slime Concentrate', count: 24 },
        boss: { name: 'Riftborn Regalia', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Slime Condensate', count: 3 },
        book: { name: 'Teachings of Elegance', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Slime Secretions', count: 3 },
        book: { name: 'Guide of Elegance', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Slime Secretions', count: 4 },
        book: { name: 'Guide of Elegance', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Slime Secretions', count: 6 },
        book: { name: 'Guide of Elegance', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Slime Secretions', count: 9 },
        book: { name: 'Guide of Elegance', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Slime Concentrate', count: 4 },
        book: { name: 'Philosophies of Elegance', count: 4 },
        boss: { name: 'Ashen Heart', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Slime Concentrate', count: 6 },
        book: { name: 'Philosophies of Elegance', count: 6 },
        boss: { name: 'Ashen Heart', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Slime Concentrate', count: 9 },
        book: { name: 'Philosophies of Elegance', count: 12 },
        boss: { name: 'Ashen Heart', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Slime Concentrate', count: 12 },
        book: { name: 'Philosophies of Elegance', count: 16 },
        boss: { name: 'Ashen Heart', count: 2 },
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

charactersGeoMap.set('Gorou', {
  name: 'Gorou',
  vision: 'Geo',
  rarity: 4,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Prithiva Topaz Sliver', count: 1 },
        localSpecialty: { name: 'Sango Pearl', count: 3 },
        common: { name: 'Spectral Husk', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 3 },
        localSpecialty: { name: 'Sango Pearl', count: 10 },
        common: { name: 'Spectral Husk', count: 15 },
        boss: { name: 'Perpetual Heart', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 6 },
        localSpecialty: { name: 'Sango Pearl', count: 20 },
        common: { name: 'Spectral Heart', count: 12 },
        boss: { name: 'Perpetual Heart', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 3 },
        localSpecialty: { name: 'Sango Pearl', count: 30 },
        common: { name: 'Spectral Heart', count: 18 },
        boss: { name: 'Perpetual Heart', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 6 },
        localSpecialty: { name: 'Sango Pearl', count: 45 },
        common: { name: 'Spectral Nucleus', count: 12 },
        boss: { name: 'Perpetual Heart', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Prithiva Topaz Gemstone', count: 6 },
        localSpecialty: { name: 'Sango Pearl', count: 60 },
        common: { name: 'Spectral Nucleus', count: 24 },
        boss: { name: 'Perpetual Heart', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Spectral Husk', count: 3 },
        book: { name: 'Teachings of Light', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Spectral Heart', count: 3 },
        book: { name: 'Guide of Light', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Spectral Heart', count: 4 },
        book: { name: 'Guide of Light', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Spectral Heart', count: 6 },
        book: { name: 'Guide of Light', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Spectral Heart', count: 9 },
        book: { name: 'Guide of Light', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Spectral Nucleus', count: 4 },
        book: { name: 'Philosophies of Light', count: 4 },
        boss: { name: 'Molten Moment', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Spectral Nucleus', count: 6 },
        book: { name: 'Philosophies of Light', count: 6 },
        boss: { name: 'Molten Moment', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Spectral Nucleus', count: 9 },
        book: { name: 'Philosophies of Light', count: 12 },
        boss: { name: 'Molten Moment', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Spectral Nucleus', count: 12 },
        book: { name: 'Philosophies of Light', count: 16 },
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

charactersGeoMap.set('Ningguang', {
  name: 'Ningguang',
  vision: 'Geo',
  rarity: 4,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Prithiva Topaz Sliver', count: 1 },
        localSpecialty: { name: 'Glaze Lily', count: 3 },
        common: { name: "Recruit's Insignia", count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 3 },
        localSpecialty: { name: 'Glaze Lily', count: 10 },
        common: { name: "Recruit's Insignia", count: 15 },
        boss: { name: 'Basalt Pillar', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 6 },
        localSpecialty: { name: 'Glaze Lily', count: 20 },
        common: { name: "Sergeant's Insignia", count: 12 },
        boss: { name: 'Basalt Pillar', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 3 },
        localSpecialty: { name: 'Glaze Lily', count: 30 },
        common: { name: "Sergeant's Insignia", count: 18 },
        boss: { name: 'Basalt Pillar', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 6 },
        localSpecialty: { name: 'Glaze Lily', count: 45 },
        common: { name: "Lieutenant's Insignia", count: 12 },
        boss: { name: 'Basalt Pillar', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Prithiva Topaz Gemstone', count: 6 },
        localSpecialty: { name: 'Glaze Lily', count: 60 },
        common: { name: "Lieutenant's Insignia", count: 24 },
        boss: { name: 'Basalt Pillar', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: "Recruit's Insignia", count: 3 },
        book: { name: 'Teachings of Prosperity', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: "Sergeant's Insignia", count: 3 },
        book: { name: 'Guide of Prosperity', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: "Sergeant's Insignia", count: 4 },
        book: { name: 'Guide of Prosperity', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: "Sergeant's Insignia", count: 6 },
        book: { name: 'Guide of Prosperity', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: "Sergeant's Insignia", count: 9 },
        book: { name: 'Guide of Prosperity', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: "Lieutenant's Insignia", count: 4 },
        book: { name: 'Philosophies of Prosperity', count: 4 },
        boss: { name: 'Spirit Locket of Boreas', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: "Lieutenant's Insignia", count: 6 },
        book: { name: 'Philosophies of Prosperity', count: 6 },
        boss: { name: 'Spirit Locket of Boreas', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: "Lieutenant's Insignia", count: 9 },
        book: { name: 'Philosophies of Prosperity', count: 12 },
        boss: { name: 'Spirit Locket of Boreas', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: "Lieutenant's Insignia", count: 12 },
        book: { name: 'Philosophies of Prosperity', count: 16 },
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

charactersGeoMap.set('Noelle', {
  name: 'Noelle',
  vision: 'Geo',
  rarity: 4,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Prithiva Topaz Sliver', count: 1 },
        localSpecialty: { name: 'Valberry', count: 3 },
        common: { name: 'Damaged Mask', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 3 },
        localSpecialty: { name: 'Valberry', count: 10 },
        common: { name: 'Damaged Mask', count: 15 },
        boss: { name: 'Basalt Pillar', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 6 },
        localSpecialty: { name: 'Valberry', count: 20 },
        common: { name: 'Stained Mask', count: 12 },
        boss: { name: 'Basalt Pillar', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 3 },
        localSpecialty: { name: 'Valberry', count: 30 },
        common: { name: 'Stained Mask', count: 18 },
        boss: { name: 'Basalt Pillar', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 6 },
        localSpecialty: { name: 'Valberry', count: 45 },
        common: { name: 'Ominous Mask', count: 12 },
        boss: { name: 'Basalt Pillar', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Prithiva Topaz Gemstone', count: 6 },
        localSpecialty: { name: 'Valberry', count: 60 },
        common: { name: 'Ominous Mask', count: 24 },
        boss: { name: 'Basalt Pillar', count: 20 },
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
        boss: { name: "Dvalin's Claw", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Ominous Mask', count: 6 },
        book: { name: 'Philosophies of Resistance', count: 6 },
        boss: { name: "Dvalin's Claw", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Ominous Mask', count: 9 },
        book: { name: 'Philosophies of Resistance', count: 12 },
        boss: { name: "Dvalin's Claw", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Ominous Mask', count: 12 },
        book: { name: 'Philosophies of Resistance', count: 16 },
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

charactersGeoMap.set('Traveler Geo', {
  name: 'Traveler Geo',
  vision: 'Geo',
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
    talent: {
      normal: [
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
      skill: [
        {
          mora: 12_500,
          common: { name: 'Firm Arrowhead', count: 3 },
          book: { name: 'Teachings of Prosperity', count: 3 },
        },
        {
          mora: 17_500,
          common: { name: 'Sharp Arrowhead', count: 3 },
          book: { name: 'Guide of Diligence', count: 2 },
        },
        {
          mora: 25_000,
          common: { name: 'Sharp Arrowhead', count: 4 },
          book: { name: 'Guide of Gold', count: 4 },
        },
        {
          mora: 30_000,
          common: { name: 'Sharp Arrowhead', count: 6 },
          book: { name: 'Guide of Prosperity', count: 6 },
        },
        {
          mora: 37_500,
          common: { name: 'Sharp Arrowhead', count: 9 },
          book: { name: 'Guide of Diligence', count: 9 },
        },
        {
          mora: 120_000,
          common: { name: 'Weathered Arrowhead', count: 4 },
          book: { name: 'Philosophies of Gold', count: 4 },
          boss: { name: 'Tail of Boreas', count: 1 },
        },
        {
          mora: 260_000,
          common: { name: 'Weathered Arrowhead', count: 6 },
          book: { name: 'Philosophies of Prosperity', count: 6 },
          boss: { name: 'Tail of Boreas', count: 1 },
        },
        {
          mora: 450_000,
          common: { name: 'Weathered Arrowhead', count: 9 },
          book: { name: 'Philosophies of Diligence', count: 12 },
          boss: { name: 'Tail of Boreas', count: 2 },
        },
        {
          mora: 700_000,
          common: { name: 'Weathered Arrowhead', count: 12 },
          book: { name: 'Philosophies of Gold', count: 16 },
          boss: { name: 'Tail of Boreas', count: 2 },
          crown: 1,
        },
      ],
      burst: [
        {
          mora: 12_500,
          common: { name: 'Firm Arrowhead', count: 3 },
          book: { name: 'Teachings of Prosperity', count: 3 },
        },
        {
          mora: 17_500,
          common: { name: 'Sharp Arrowhead', count: 3 },
          book: { name: 'Guide of Diligence', count: 2 },
        },
        {
          mora: 25_000,
          common: { name: 'Sharp Arrowhead', count: 4 },
          book: { name: 'Guide of Gold', count: 4 },
        },
        {
          mora: 30_000,
          common: { name: 'Sharp Arrowhead', count: 6 },
          book: { name: 'Guide of Prosperity', count: 6 },
        },
        {
          mora: 37_500,
          common: { name: 'Sharp Arrowhead', count: 9 },
          book: { name: 'Guide of Diligence', count: 9 },
        },
        {
          mora: 120_000,
          common: { name: 'Weathered Arrowhead', count: 4 },
          book: { name: 'Philosophies of Gold', count: 4 },
          boss: { name: 'Tail of Boreas', count: 1 },
        },
        {
          mora: 260_000,
          common: { name: 'Weathered Arrowhead', count: 6 },
          book: { name: 'Philosophies of Prosperity', count: 6 },
          boss: { name: 'Tail of Boreas', count: 1 },
        },
        {
          mora: 450_000,
          common: { name: 'Weathered Arrowhead', count: 9 },
          book: { name: 'Philosophies of Diligence', count: 12 },
          boss: { name: 'Tail of Boreas', count: 2 },
        },
        {
          mora: 700_000,
          common: { name: 'Weathered Arrowhead', count: 12 },
          book: { name: 'Philosophies of Gold', count: 16 },
          boss: { name: 'Tail of Boreas', count: 2 },
          crown: 1,
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
        mora: 20_000,
        gem: { name: 'Prithiva Topaz Sliver', count: 1 },
        localSpecialty: { name: 'Glaze Lily', count: 3 },
        common: { name: 'Damaged Mask', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 3 },
        localSpecialty: { name: 'Glaze Lily', count: 10 },
        common: { name: 'Damaged Mask', count: 15 },
        boss: { name: 'Riftborn Regalia', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 6 },
        localSpecialty: { name: 'Glaze Lily', count: 20 },
        common: { name: 'Stained Mask', count: 12 },
        boss: { name: 'Riftborn Regalia', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 3 },
        localSpecialty: { name: 'Glaze Lily', count: 30 },
        common: { name: 'Stained Mask', count: 18 },
        boss: { name: 'Riftborn Regalia', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 6 },
        localSpecialty: { name: 'Glaze Lily', count: 45 },
        common: { name: 'Ominous Mask', count: 12 },
        boss: { name: 'Riftborn Regalia', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Prithiva Topaz Gemstone', count: 6 },
        localSpecialty: { name: 'Glaze Lily', count: 60 },
        common: { name: 'Ominous Mask', count: 24 },
        boss: { name: 'Riftborn Regalia', count: 20 },
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
        boss: { name: 'Ashen Heart', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Ominous Mask', count: 6 },
        book: { name: 'Philosophies of Diligence', count: 6 },
        boss: { name: 'Ashen Heart', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Ominous Mask', count: 9 },
        book: { name: 'Philosophies of Diligence', count: 12 },
        boss: { name: 'Ashen Heart', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Ominous Mask', count: 12 },
        book: { name: 'Philosophies of Diligence', count: 16 },
        boss: { name: 'Ashen Heart', count: 2 },
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

charactersGeoMap.set('Zhongli', {
  name: 'Zhongli',
  vision: 'Geo',
  rarity: 5,
  weaponType: 'Polearm',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Prithiva Topaz Sliver', count: 1 },
        localSpecialty: { name: 'Cor Lapis', count: 3 },
        common: { name: 'Slime Condensate', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 3 },
        localSpecialty: { name: 'Cor Lapis', count: 10 },
        common: { name: 'Slime Condensate', count: 15 },
        boss: { name: 'Basalt Pillar', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Prithiva Topaz Fragment', count: 6 },
        localSpecialty: { name: 'Cor Lapis', count: 20 },
        common: { name: 'Slime Secretions', count: 12 },
        boss: { name: 'Basalt Pillar', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 3 },
        localSpecialty: { name: 'Cor Lapis', count: 30 },
        common: { name: 'Slime Secretions', count: 18 },
        boss: { name: 'Basalt Pillar', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Prithiva Topaz Chunk', count: 6 },
        localSpecialty: { name: 'Cor Lapis', count: 45 },
        common: { name: 'Slime Concentrate', count: 12 },
        boss: { name: 'Basalt Pillar', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Prithiva Topaz Gemstone', count: 6 },
        localSpecialty: { name: 'Cor Lapis', count: 60 },
        common: { name: 'Slime Concentrate', count: 24 },
        boss: { name: 'Basalt Pillar', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Slime Condensate', count: 3 },
        book: { name: 'Teachings of Gold', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Slime Secretions', count: 3 },
        book: { name: 'Guide of Gold', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Slime Secretions', count: 4 },
        book: { name: 'Guide of Gold', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Slime Secretions', count: 6 },
        book: { name: 'Guide of Gold', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Slime Secretions', count: 9 },
        book: { name: 'Guide of Gold', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Slime Concentrate', count: 4 },
        book: { name: 'Philosophies of Gold', count: 4 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Slime Concentrate', count: 6 },
        book: { name: 'Philosophies of Gold', count: 6 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Slime Concentrate', count: 9 },
        book: { name: 'Philosophies of Gold', count: 12 },
        boss: { name: 'Tusk of Monoceros Caeli', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Slime Concentrate', count: 12 },
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

export default charactersGeoMap
