import { CharacterName, ICharacter } from '~/types/character'

const charactersElectroMap = new Map<CharacterName, ICharacter>()

charactersElectroMap.set('Beidou', {
  name: 'Beidou',
  vision: 'Electro',
  rarity: 4,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vajrada Amethyst Sliver', count: 1 },
        localSpecialty: { name: 'Noctilucous Jade', count: 3 },
        common: { name: 'Treasure Hoarder Insignia', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 3 },
        localSpecialty: { name: 'Noctilucous Jade', count: 10 },
        common: { name: 'Treasure Hoarder Insignia', count: 15 },
        boss: { name: 'Lightning Prism', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 6 },
        localSpecialty: { name: 'Noctilucous Jade', count: 20 },
        common: { name: 'Silver Raven Insignia', count: 12 },
        boss: { name: 'Lightning Prism', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 3 },
        localSpecialty: { name: 'Noctilucous Jade', count: 30 },
        common: { name: 'Silver Raven Insignia', count: 18 },
        boss: { name: 'Lightning Prism', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 6 },
        localSpecialty: { name: 'Noctilucous Jade', count: 45 },
        common: { name: 'Golden Raven Insignia', count: 12 },
        boss: { name: 'Lightning Prism', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vajrada Amethyst Gemstone', count: 6 },
        localSpecialty: { name: 'Noctilucous Jade', count: 60 },
        common: { name: 'Golden Raven Insignia', count: 24 },
        boss: { name: 'Lightning Prism', count: 20 },
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
        boss: { name: "Dvalin's Sigh", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Golden Raven Insignia', count: 6 },
        book: { name: 'Philosophies of Gold', count: 6 },
        boss: { name: "Dvalin's Sigh", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Golden Raven Insignia', count: 9 },
        book: { name: 'Philosophies of Gold', count: 12 },
        boss: { name: "Dvalin's Sigh", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Golden Raven Insignia', count: 12 },
        book: { name: 'Philosophies of Gold', count: 16 },
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

charactersElectroMap.set('Fischl', {
  name: 'Fischl',
  vision: 'Electro',
  rarity: 4,
  weaponType: 'Bow',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vajrada Amethyst Sliver', count: 1 },
        localSpecialty: { name: 'Small Lamp Grass', count: 3 },
        common: { name: 'Firm Arrowhead', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 3 },
        localSpecialty: { name: 'Small Lamp Grass', count: 10 },
        common: { name: 'Firm Arrowhead', count: 15 },
        boss: { name: 'Lightning Prism', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 6 },
        localSpecialty: { name: 'Small Lamp Grass', count: 20 },
        common: { name: 'Sharp Arrowhead', count: 12 },
        boss: { name: 'Lightning Prism', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 3 },
        localSpecialty: { name: 'Small Lamp Grass', count: 30 },
        common: { name: 'Sharp Arrowhead', count: 18 },
        boss: { name: 'Lightning Prism', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 6 },
        localSpecialty: { name: 'Small Lamp Grass', count: 45 },
        common: { name: 'Weathered Arrowhead', count: 12 },
        boss: { name: 'Lightning Prism', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vajrada Amethyst Gemstone', count: 6 },
        localSpecialty: { name: 'Small Lamp Grass', count: 60 },
        common: { name: 'Weathered Arrowhead', count: 24 },
        boss: { name: 'Lightning Prism', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Firm Arrowhead', count: 3 },
        book: { name: 'Teachings of Ballad', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Sharp Arrowhead', count: 3 },
        book: { name: 'Guide of Ballad', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Sharp Arrowhead', count: 4 },
        book: { name: 'Guide of Ballad', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Sharp Arrowhead', count: 6 },
        book: { name: 'Guide of Ballad', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Sharp Arrowhead', count: 9 },
        book: { name: 'Guide of Ballad', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Weathered Arrowhead', count: 4 },
        book: { name: 'Philosophies of Ballad', count: 4 },
        boss: { name: 'Spirit Locket of Boreas', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Weathered Arrowhead', count: 6 },
        book: { name: 'Philosophies of Ballad', count: 6 },
        boss: { name: 'Spirit Locket of Boreas', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Weathered Arrowhead', count: 9 },
        book: { name: 'Philosophies of Ballad', count: 12 },
        boss: { name: 'Spirit Locket of Boreas', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Weathered Arrowhead', count: 12 },
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

charactersElectroMap.set('Keqing', {
  name: 'Keqing',
  vision: 'Electro',
  rarity: 5,
  weaponType: 'Sword',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vajrada Amethyst Sliver', count: 1 },
        localSpecialty: { name: 'Cor Lapis', count: 3 },
        common: { name: 'Whopperflower Nectar', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 3 },
        localSpecialty: { name: 'Cor Lapis', count: 10 },
        common: { name: 'Whopperflower Nectar', count: 15 },
        boss: { name: 'Lightning Prism', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 6 },
        localSpecialty: { name: 'Cor Lapis', count: 20 },
        common: { name: 'Shimmering Nectar', count: 12 },
        boss: { name: 'Lightning Prism', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 3 },
        localSpecialty: { name: 'Cor Lapis', count: 30 },
        common: { name: 'Shimmering Nectar', count: 18 },
        boss: { name: 'Lightning Prism', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 6 },
        localSpecialty: { name: 'Cor Lapis', count: 45 },
        common: { name: 'Energy Nectar', count: 12 },
        boss: { name: 'Lightning Prism', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vajrada Amethyst Gemstone', count: 6 },
        localSpecialty: { name: 'Cor Lapis', count: 60 },
        common: { name: 'Energy Nectar', count: 24 },
        boss: { name: 'Lightning Prism', count: 20 },
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
        boss: { name: 'Ring of Boreas', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Energy Nectar', count: 6 },
        book: { name: 'Philosophies of Prosperity', count: 6 },
        boss: { name: 'Ring of Boreas', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Energy Nectar', count: 9 },
        book: { name: 'Philosophies of Prosperity', count: 12 },
        boss: { name: 'Ring of Boreas', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Energy Nectar', count: 12 },
        book: { name: 'Philosophies of Prosperity', count: 16 },
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

charactersElectroMap.set('Kujou Sara', {
  name: 'Kujou Sara',
  vision: 'Electro',
  rarity: 4,
  weaponType: 'Bow',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vajrada Amethyst Sliver', count: 1 },
        localSpecialty: { name: 'Dendrobium', count: 3 },
        common: { name: 'Damaged Mask', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 3 },
        localSpecialty: { name: 'Dendrobium', count: 10 },
        common: { name: 'Damaged Mask', count: 15 },
        boss: { name: 'Storm Beads', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 6 },
        localSpecialty: { name: 'Dendrobium', count: 20 },
        common: { name: 'Stained Mask', count: 12 },
        boss: { name: 'Storm Beads', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 3 },
        localSpecialty: { name: 'Dendrobium', count: 30 },
        common: { name: 'Stained Mask', count: 18 },
        boss: { name: 'Storm Beads', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 6 },
        localSpecialty: { name: 'Dendrobium', count: 45 },
        common: { name: 'Ominous Mask', count: 12 },
        boss: { name: 'Storm Beads', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vajrada Amethyst Gemstone', count: 6 },
        localSpecialty: { name: 'Wolfhook', count: 60 },
        common: { name: 'Ominous Mask', count: 24 },
        boss: { name: 'Storm Beads', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Damaged Mask', count: 3 },
        book: { name: 'Teachings of Elegance', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Stained Mask', count: 3 },
        book: { name: 'Guide of Elegance', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Stained Mask', count: 4 },
        book: { name: 'Guide of Elegance', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Stained Mask', count: 6 },
        book: { name: 'Guide of Elegance', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Stained Mask', count: 9 },
        book: { name: 'Guide of Elegance', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Ominous Mask', count: 4 },
        book: { name: 'Philosophies of Elegance', count: 4 },
        boss: { name: 'Ashen Heart', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Ominous Mask', count: 6 },
        book: { name: 'Philosophies of Elegance', count: 6 },
        boss: { name: 'Ashen Heart', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Ominous Mask', count: 9 },
        book: { name: 'Philosophies of Elegance', count: 12 },
        boss: { name: 'Ashen Heart', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Ominous Mask', count: 12 },
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

charactersElectroMap.set('Lisa', {
  name: 'Lisa',
  vision: 'Electro',
  rarity: 4,
  weaponType: 'Catalyst',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vajrada Amethyst Sliver', count: 1 },
        localSpecialty: { name: 'Valberry', count: 3 },
        common: { name: 'Slime Condensate', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 3 },
        localSpecialty: { name: 'Valberry', count: 10 },
        common: { name: 'Slime Condensate', count: 15 },
        boss: { name: 'Lightning Prism', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 6 },
        localSpecialty: { name: 'Valberry', count: 20 },
        common: { name: 'Slime Secretions', count: 12 },
        boss: { name: 'Lightning Prism', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 3 },
        localSpecialty: { name: 'Valberry', count: 30 },
        common: { name: 'Slime Secretions', count: 18 },
        boss: { name: 'Lightning Prism', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 6 },
        localSpecialty: { name: 'Valberry', count: 45 },
        common: { name: 'Slime Concentrate', count: 12 },
        boss: { name: 'Lightning Prism', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vajrada Amethyst Gemstone', count: 6 },
        localSpecialty: { name: 'Valberry', count: 60 },
        common: { name: 'Slime Concentrate', count: 24 },
        boss: { name: 'Lightning Prism', count: 20 },
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
        boss: { name: "Dvalin's Claw", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Slime Concentrate', count: 6 },
        book: { name: 'Philosophies of Ballad', count: 6 },
        boss: { name: "Dvalin's Claw", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Slime Concentrate', count: 9 },
        book: { name: 'Philosophies of Ballad', count: 12 },
        boss: { name: "Dvalin's Claw", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Slime Concentrate', count: 12 },
        book: { name: 'Philosophies of Ballad', count: 16 },
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

charactersElectroMap.set('Raiden Shogun', {
  name: 'Raiden Shogun',
  vision: 'Electro',
  rarity: 5,
  weaponType: 'Polearm',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vajrada Amethyst Sliver', count: 1 },
        localSpecialty: { name: 'Amakumo Fruit', count: 3 },
        common: { name: 'Old Handguard', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 3 },
        localSpecialty: { name: 'Amakumo Fruit', count: 10 },
        common: { name: 'Old Handguard', count: 15 },
        boss: { name: 'Storm Beads', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 6 },
        localSpecialty: { name: 'Amakumo Fruit', count: 20 },
        common: { name: 'Kageuchi Handguard', count: 12 },
        boss: { name: 'Storm Beads', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 3 },
        localSpecialty: { name: 'Amakumo Fruit', count: 30 },
        common: { name: 'Kageuchi Handguard', count: 18 },
        boss: { name: 'Storm Beads', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 6 },
        localSpecialty: { name: 'Amakumo Fruit', count: 45 },
        common: { name: 'Famed Handguard', count: 12 },
        boss: { name: 'Storm Beads', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vajrada Amethyst Gemstone', count: 6 },
        localSpecialty: { name: 'Amakumo Fruit', count: 60 },
        common: { name: 'Famed Handguard', count: 24 },
        boss: { name: 'Storm Beads', count: 20 },
      },
    ],
    talent: [
      {
        mora: 12_500,
        common: { name: 'Old Handguard', count: 3 },
        book: { name: 'Teachings of Light', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Kageuchi Handguard', count: 3 },
        book: { name: 'Guide of Light', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Kageuchi Handguard', count: 4 },
        book: { name: 'Guide of Light', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Kageuchi Handguard', count: 6 },
        book: { name: 'Guide of Light', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Kageuchi Handguard', count: 9 },
        book: { name: 'Guide of Light', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Famed Handguard', count: 4 },
        book: { name: 'Philosophies of Light', count: 4 },
        boss: { name: 'Molten Moment', count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Famed Handguard', count: 6 },
        book: { name: 'Philosophies of Light', count: 6 },
        boss: { name: 'Molten Moment', count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Famed Handguard', count: 9 },
        book: { name: 'Philosophies of Light', count: 12 },
        boss: { name: 'Molten Moment', count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Famed Handguard', count: 12 },
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

charactersElectroMap.set('Razor', {
  name: 'Razor',
  vision: 'Electro',
  rarity: 4,
  weaponType: 'Claymore',
  material: {
    ascension: [
      {
        mora: 20_000,
        gem: { name: 'Vajrada Amethyst Sliver', count: 1 },
        localSpecialty: { name: 'Wolfhook', count: 3 },
        common: { name: 'Damaged Mask', count: 3 },
      },
      {
        mora: 40_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 3 },
        localSpecialty: { name: 'Wolfhook', count: 10 },
        common: { name: 'Damaged Mask', count: 15 },
        boss: { name: 'Lightning Prism', count: 2 },
      },
      {
        mora: 60_000,
        gem: { name: 'Vajrada Amethyst Fragment', count: 6 },
        localSpecialty: { name: 'Wolfhook', count: 20 },
        common: { name: 'Stained Mask', count: 12 },
        boss: { name: 'Lightning Prism', count: 4 },
      },
      {
        mora: 80_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 3 },
        localSpecialty: { name: 'Wolfhook', count: 30 },
        common: { name: 'Stained Mask', count: 18 },
        boss: { name: 'Lightning Prism', count: 8 },
      },
      {
        mora: 100_000,
        gem: { name: 'Vajrada Amethyst Chunk', count: 6 },
        localSpecialty: { name: 'Wolfhook', count: 45 },
        common: { name: 'Ominous Mask', count: 12 },
        boss: { name: 'Lightning Prism', count: 12 },
      },
      {
        mora: 120_000,
        gem: { name: 'Vajrada Amethyst Gemstone', count: 6 },
        localSpecialty: { name: 'Wolfhook', count: 60 },
        common: { name: 'Ominous Mask', count: 24 },
        boss: { name: 'Lightning Prism', count: 20 },
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

charactersElectroMap.set('Traveler Electro', {
  name: 'Traveler Electro',
  vision: 'Electro',
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
        common: { name: 'Old Handguard', count: 3 },
        book: { name: 'Teachings of Transience', count: 3 },
      },
      {
        mora: 17_500,
        common: { name: 'Kageuchi Handguard', count: 3 },
        book: { name: 'Guide of Elegance', count: 2 },
      },
      {
        mora: 25_000,
        common: { name: 'Kageuchi Handguard', count: 4 },
        book: { name: 'Guide of Light', count: 4 },
      },
      {
        mora: 30_000,
        common: { name: 'Kageuchi Handguard', count: 6 },
        book: { name: 'Guide of Transience', count: 6 },
      },
      {
        mora: 37_500,
        common: { name: 'Kageuchi Handguard', count: 9 },
        book: { name: 'Guide of Elegance', count: 9 },
      },
      {
        mora: 120_000,
        common: { name: 'Famed Handguard', count: 4 },
        book: { name: 'Philosophies of Light', count: 4 },
        boss: { name: "Dragon Lord's Crown", count: 1 },
      },
      {
        mora: 260_000,
        common: { name: 'Famed Handguard', count: 6 },
        book: { name: 'Philosophies of Transience', count: 6 },
        boss: { name: "Dragon Lord's Crown", count: 1 },
      },
      {
        mora: 450_000,
        common: { name: 'Famed Handguard', count: 9 },
        book: { name: 'Philosophies of Elegance', count: 12 },
        boss: { name: "Dragon Lord's Crown", count: 2 },
      },
      {
        mora: 700_000,
        common: { name: 'Famed Handguard', count: 12 },
        book: { name: 'Philosophies of Light', count: 16 },
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

export default charactersElectroMap
