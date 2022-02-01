import { ICharacter } from '~/types/character'

const CharactersElectroMap = new Map<string, ICharacter>()

CharactersElectroMap.set('beidou', {
  name: 'Beidou',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vajrada Amethyst Sliver', amount: 1 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 3 },
        common: { name: 'Treasure Hoarder Insignia', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 3 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 10 },
        common: { name: 'Treasure Hoarder Insignia', amount: 15 },
        boss: { name: 'Lightning Prism', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 6 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 20 },
        common: { name: 'Silver Raven Insignia', amount: 12 },
        boss: { name: 'Lightning Prism', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 3 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 30 },
        common: { name: 'Silver Raven Insignia', amount: 18 },
        boss: { name: 'Lightning Prism', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 6 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 45 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        boss: { name: 'Lightning Prism', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vajrada Amethyst Gemstone', amount: 6 },
        localSpecialty: { name: 'Noctilucous Jade', amount: 60 },
        common: { name: 'Golden Raven Insignia', amount: 24 },
        boss: { name: 'Lightning Prism', amount: 20 },
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
        boss: { name: "Dvalin's Sigh", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Golden Raven Insignia', amount: 6 },
        book: { name: 'Philosophies of Gold', amount: 6 },
        boss: { name: "Dvalin's Sigh", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Golden Raven Insignia', amount: 9 },
        book: { name: 'Philosophies of Gold', amount: 12 },
        boss: { name: "Dvalin's Sigh", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Golden Raven Insignia', amount: 12 },
        book: { name: 'Philosophies of Gold', amount: 16 },
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

CharactersElectroMap.set('fischl', {
  name: 'Fischl',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vajrada Amethyst Sliver', amount: 1 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 3 },
        common: { name: 'Firm Arrowhead', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 3 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 10 },
        common: { name: 'Firm Arrowhead', amount: 15 },
        boss: { name: 'Lightning Prism', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 6 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 20 },
        common: { name: 'Sharp Arrowhead', amount: 12 },
        boss: { name: 'Lightning Prism', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 3 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 30 },
        common: { name: 'Sharp Arrowhead', amount: 18 },
        boss: { name: 'Lightning Prism', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 6 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 45 },
        common: { name: 'Weathered Arrowhead', amount: 12 },
        boss: { name: 'Lightning Prism', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vajrada Amethyst Gemstone', amount: 6 },
        localSpecialty: { name: 'Small Lamp Grass', amount: 60 },
        common: { name: 'Weathered Arrowhead', amount: 24 },
        boss: { name: 'Lightning Prism', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Firm Arrowhead', amount: 3 },
        book: { name: 'Teachings of Ballad', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Sharp Arrowhead', amount: 3 },
        book: { name: 'Guide of Ballad', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Sharp Arrowhead', amount: 4 },
        book: { name: 'Guide of Ballad', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Sharp Arrowhead', amount: 6 },
        book: { name: 'Guide of Ballad', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Sharp Arrowhead', amount: 9 },
        book: { name: 'Guide of Ballad', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Weathered Arrowhead', amount: 4 },
        book: { name: 'Philosophies of Ballad', amount: 4 },
        boss: { name: 'Spirit Locket of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Weathered Arrowhead', amount: 6 },
        book: { name: 'Philosophies of Ballad', amount: 6 },
        boss: { name: 'Spirit Locket of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Weathered Arrowhead', amount: 9 },
        book: { name: 'Philosophies of Ballad', amount: 12 },
        boss: { name: 'Spirit Locket of Boreas', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Weathered Arrowhead', amount: 12 },
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

CharactersElectroMap.set('keqing', {
  name: 'Keqing',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vajrada Amethyst Sliver', amount: 1 },
        localSpecialty: { name: 'Cor Lapis', amount: 3 },
        common: { name: 'Whopperflower Nectar', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 3 },
        localSpecialty: { name: 'Cor Lapis', amount: 10 },
        common: { name: 'Whopperflower Nectar', amount: 15 },
        boss: { name: 'Lightning Prism', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 6 },
        localSpecialty: { name: 'Cor Lapis', amount: 20 },
        common: { name: 'Shimmering Nectar', amount: 12 },
        boss: { name: 'Lightning Prism', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 3 },
        localSpecialty: { name: 'Cor Lapis', amount: 30 },
        common: { name: 'Shimmering Nectar', amount: 18 },
        boss: { name: 'Lightning Prism', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 6 },
        localSpecialty: { name: 'Cor Lapis', amount: 45 },
        common: { name: 'Energy Nectar', amount: 12 },
        boss: { name: 'Lightning Prism', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vajrada Amethyst Gemstone', amount: 6 },
        localSpecialty: { name: 'Cor Lapis', amount: 60 },
        common: { name: 'Energy Nectar', amount: 24 },
        boss: { name: 'Lightning Prism', amount: 20 },
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
        boss: { name: 'Ring of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Energy Nectar', amount: 6 },
        book: { name: 'Philosophies of Prosperity', amount: 6 },
        boss: { name: 'Ring of Boreas', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Energy Nectar', amount: 9 },
        book: { name: 'Philosophies of Prosperity', amount: 12 },
        boss: { name: 'Ring of Boreas', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Energy Nectar', amount: 12 },
        book: { name: 'Philosophies of Prosperity', amount: 16 },
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

CharactersElectroMap.set('kujou-sara', {
  name: 'Kujou Sara',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vajrada Amethyst Sliver', amount: 1 },
        localSpecialty: { name: 'Dendrobium', amount: 3 },
        common: { name: 'Damaged Mask', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 3 },
        localSpecialty: { name: 'Dendrobium', amount: 10 },
        common: { name: 'Damaged Mask', amount: 15 },
        boss: { name: 'Storm Beads', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 6 },
        localSpecialty: { name: 'Dendrobium', amount: 20 },
        common: { name: 'Stained Mask', amount: 12 },
        boss: { name: 'Storm Beads', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 3 },
        localSpecialty: { name: 'Dendrobium', amount: 30 },
        common: { name: 'Stained Mask', amount: 18 },
        boss: { name: 'Storm Beads', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 6 },
        localSpecialty: { name: 'Dendrobium', amount: 45 },
        common: { name: 'Ominous Mask', amount: 12 },
        boss: { name: 'Storm Beads', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vajrada Amethyst Gemstone', amount: 6 },
        localSpecialty: { name: 'Wolfhook', amount: 60 },
        common: { name: 'Ominous Mask', amount: 24 },
        boss: { name: 'Storm Beads', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Damaged Mask', amount: 3 },
        book: { name: 'Teachings of Elegance', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Stained Mask', amount: 3 },
        book: { name: 'Guide of Elegance', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Stained Mask', amount: 4 },
        book: { name: 'Guide of Elegance', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Stained Mask', amount: 6 },
        book: { name: 'Guide of Elegance', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Stained Mask', amount: 9 },
        book: { name: 'Guide of Elegance', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Ominous Mask', amount: 4 },
        book: { name: 'Philosophies of Elegance', amount: 4 },
        boss: { name: 'Ashen Heart', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Ominous Mask', amount: 6 },
        book: { name: 'Philosophies of Elegance', amount: 6 },
        boss: { name: 'Ashen Heart', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Ominous Mask', amount: 9 },
        book: { name: 'Philosophies of Elegance', amount: 12 },
        boss: { name: 'Ashen Heart', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Ominous Mask', amount: 12 },
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

CharactersElectroMap.set('lisa', {
  name: 'Lisa',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vajrada Amethyst Sliver', amount: 1 },
        localSpecialty: { name: 'Valberry', amount: 3 },
        common: { name: 'Slime Condensate', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 3 },
        localSpecialty: { name: 'Valberry', amount: 10 },
        common: { name: 'Slime Condensate', amount: 15 },
        boss: { name: 'Lightning Prism', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 6 },
        localSpecialty: { name: 'Valberry', amount: 20 },
        common: { name: 'Slime Secretions', amount: 12 },
        boss: { name: 'Lightning Prism', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 3 },
        localSpecialty: { name: 'Valberry', amount: 30 },
        common: { name: 'Slime Secretions', amount: 18 },
        boss: { name: 'Lightning Prism', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 6 },
        localSpecialty: { name: 'Valberry', amount: 45 },
        common: { name: 'Slime Concentrate', amount: 12 },
        boss: { name: 'Lightning Prism', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vajrada Amethyst Gemstone', amount: 6 },
        localSpecialty: { name: 'Valberry', amount: 60 },
        common: { name: 'Slime Concentrate', amount: 24 },
        boss: { name: 'Lightning Prism', amount: 20 },
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
        boss: { name: "Dvalin's Claw", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Slime Concentrate', amount: 6 },
        book: { name: 'Philosophies of Ballad', amount: 6 },
        boss: { name: "Dvalin's Claw", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Slime Concentrate', amount: 9 },
        book: { name: 'Philosophies of Ballad', amount: 12 },
        boss: { name: "Dvalin's Claw", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Slime Concentrate', amount: 12 },
        book: { name: 'Philosophies of Ballad', amount: 16 },
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

CharactersElectroMap.set('raiden-shogun', {
  name: 'Raiden Shogun',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vajrada Amethyst Sliver', amount: 1 },
        localSpecialty: { name: 'Amakumo Fruit', amount: 3 },
        common: { name: 'Old Handguard', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 3 },
        localSpecialty: { name: 'Amakumo Fruit', amount: 10 },
        common: { name: 'Old Handguard', amount: 15 },
        boss: { name: 'Storm Beads', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 6 },
        localSpecialty: { name: 'Amakumo Fruit', amount: 20 },
        common: { name: 'Kageuchi Handguard', amount: 12 },
        boss: { name: 'Storm Beads', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 3 },
        localSpecialty: { name: 'Amakumo Fruit', amount: 30 },
        common: { name: 'Kageuchi Handguard', amount: 18 },
        boss: { name: 'Storm Beads', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 6 },
        localSpecialty: { name: 'Amakumo Fruit', amount: 45 },
        common: { name: 'Famed Handguard', amount: 12 },
        boss: { name: 'Storm Beads', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vajrada Amethyst Gemstone', amount: 6 },
        localSpecialty: { name: 'Amakumo Fruit', amount: 60 },
        common: { name: 'Famed Handguard', amount: 24 },
        boss: { name: 'Storm Beads', amount: 20 },
      },
    ],
    talent: [
      {
        mora: { name: 'Mora', amount: 12_500 },
        common: { name: 'Old Handguard', amount: 3 },
        book: { name: 'Teachings of Light', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Kageuchi Handguard', amount: 3 },
        book: { name: 'Guide of Light', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Kageuchi Handguard', amount: 4 },
        book: { name: 'Guide of Light', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Kageuchi Handguard', amount: 6 },
        book: { name: 'Guide of Light', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Kageuchi Handguard', amount: 9 },
        book: { name: 'Guide of Light', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Famed Handguard', amount: 4 },
        book: { name: 'Philosophies of Light', amount: 4 },
        boss: { name: 'Molten Moment', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Famed Handguard', amount: 6 },
        book: { name: 'Philosophies of Light', amount: 6 },
        boss: { name: 'Molten Moment', amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Famed Handguard', amount: 9 },
        book: { name: 'Philosophies of Light', amount: 12 },
        boss: { name: 'Molten Moment', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Famed Handguard', amount: 12 },
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

CharactersElectroMap.set('razor', {
  name: 'Razor',
  material: {
    ascension: [
      {
        mora: { name: 'Mora', amount: 20_000 },
        gem: { name: 'Vajrada Amethyst Sliver', amount: 1 },
        localSpecialty: { name: 'Wolfhook', amount: 3 },
        common: { name: 'Damaged Mask', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 40_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 3 },
        localSpecialty: { name: 'Wolfhook', amount: 10 },
        common: { name: 'Damaged Mask', amount: 15 },
        boss: { name: 'Lightning Prism', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 60_000 },
        gem: { name: 'Vajrada Amethyst Fragment', amount: 6 },
        localSpecialty: { name: 'Wolfhook', amount: 20 },
        common: { name: 'Stained Mask', amount: 12 },
        boss: { name: 'Lightning Prism', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 80_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 3 },
        localSpecialty: { name: 'Wolfhook', amount: 30 },
        common: { name: 'Stained Mask', amount: 18 },
        boss: { name: 'Lightning Prism', amount: 8 },
      },
      {
        mora: { name: 'Mora', amount: 100_000 },
        gem: { name: 'Vajrada Amethyst Chunk', amount: 6 },
        localSpecialty: { name: 'Wolfhook', amount: 45 },
        common: { name: 'Ominous Mask', amount: 12 },
        boss: { name: 'Lightning Prism', amount: 12 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        gem: { name: 'Vajrada Amethyst Gemstone', amount: 6 },
        localSpecialty: { name: 'Wolfhook', amount: 60 },
        common: { name: 'Ominous Mask', amount: 24 },
        boss: { name: 'Lightning Prism', amount: 20 },
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

CharactersElectroMap.set('traveler-electro', {
  name: 'Traveler Electro',
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
        common: { name: 'Old Handguard', amount: 3 },
        book: { name: 'Teachings of Transience', amount: 3 },
      },
      {
        mora: { name: 'Mora', amount: 17_500 },
        common: { name: 'Kageuchi Handguard', amount: 3 },
        book: { name: 'Guide of Elegance', amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 25_000 },
        common: { name: 'Kageuchi Handguard', amount: 4 },
        book: { name: 'Guide of Light', amount: 4 },
      },
      {
        mora: { name: 'Mora', amount: 30_000 },
        common: { name: 'Kageuchi Handguard', amount: 6 },
        book: { name: 'Guide of Transience', amount: 6 },
      },
      {
        mora: { name: 'Mora', amount: 37_500 },
        common: { name: 'Kageuchi Handguard', amount: 9 },
        book: { name: 'Guide of Elegance', amount: 9 },
      },
      {
        mora: { name: 'Mora', amount: 120_000 },
        common: { name: 'Famed Handguard', amount: 4 },
        book: { name: 'Philosophies of Light', amount: 4 },
        boss: { name: "Dragon Lord's Crown", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 260_000 },
        common: { name: 'Famed Handguard', amount: 6 },
        book: { name: 'Philosophies of Transience', amount: 6 },
        boss: { name: "Dragon Lord's Crown", amount: 1 },
      },
      {
        mora: { name: 'Mora', amount: 450_000 },
        common: { name: 'Famed Handguard', amount: 9 },
        book: { name: 'Philosophies of Elegance', amount: 12 },
        boss: { name: "Dragon Lord's Crown", amount: 2 },
      },
      {
        mora: { name: 'Mora', amount: 700_000 },
        common: { name: 'Famed Handguard', amount: 12 },
        book: { name: 'Philosophies of Light', amount: 16 },
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

export default CharactersElectroMap
