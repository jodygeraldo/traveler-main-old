import { ItemCategory, ItemType } from '~/types/item'

const items = new Map<ItemCategory, ItemType>()

items.set('TalentCrown', {
  name: 'Crown of Insight',
  material: [{ id: 1000000001, name: 'Crown of Insight' }],
})

items.set('TalentBook', {
  name: 'Talent Book',
  material: [
    { id: 2001000001, name: 'Freedom', region: 'mondstadt' },
    { id: 2001000002, name: 'Resistance', region: 'mondstadt' },
    { id: 2001000003, name: 'Ballad', region: 'mondstadt' },
    { id: 2002000004, name: 'Prosperity', region: 'liyue' },
    { id: 2002000005, name: 'Diligence', region: 'liyue' },
    { id: 2002000006, name: 'Gold', region: 'liyue' },
    { id: 2003000007, name: 'Transience', region: 'inazuma' },
    { id: 2003000008, name: 'Elegance', region: 'inazuma' },
    { id: 2003000009, name: 'Light', region: 'inazuma' },
  ],
})

items.set('TalentBossMaterial', {
  name: 'Talent Boss Material',
  material: [
    { id: 3001000001, name: "Dvalin's Plume", region: 'mondstadt' },
    { id: 3001000002, name: "Dvalin's Claw", region: 'mondstadt' },
    { id: 3001000003, name: "Dvalin's Sigh", region: 'mondstadt' },
    { id: 3001000004, name: 'Tail of Boreas', region: 'mondstadt' },
    { id: 3001000005, name: 'Ring of Boreas', region: 'mondstadt' },
    { id: 3001000006, name: 'Spirit Locket of Boreas', region: 'mondstadt' },
    { id: 3002000007, name: 'Tusk of Monoceros Caeli', region: 'liyue' },
    { id: 3002000008, name: 'Shard of a Foul Legacy', region: 'liyue' },
    { id: 3002000009, name: 'Shadow of the Warrior', region: 'liyue' },
    { id: 3002000010, name: "Dragon Lord's Crown", region: 'liyue' },
    { id: 3002000011, name: 'Bloodjade Branch', region: 'liyue' },
    { id: 3002000012, name: 'Gilded Scale', region: 'liyue' },
    { id: 3003000013, name: 'Molten Moment', region: 'inazuma' },
    { id: 3003000014, name: 'Ashen Heart', region: 'inazuma' },
    { id: 3003000015, name: 'Hellfire Butterfly', region: 'inazuma' },
  ],
})

items.set('AscensionGem', {
  name: 'Ascension Gem',
  material: [
    { id: 4000000001, name: 'Brilliant Diamond' },
    { id: 4000000002, name: 'Agnidus Agate' },
    { id: 4000000003, name: 'Varunada Lazurite' },
    { id: 4000000004, name: 'Vajrada Amethyst' },
    { id: 4000000005, name: 'Vayuda Turquoise' },
    { id: 4000000006, name: 'Shivada Jade' },
    { id: 4000000007, name: 'Prithiva Topaz' },
  ],
})

items.set('AscensionBossMaterial', {
  name: 'Ascension Boss Material',
  material: [
    { id: 5001000001, name: 'Hurricane Seed', region: 'mondstadt' },
    { id: 5001000002, name: 'Lightning Prism', region: 'mondstadt' },
    { id: 5002000003, name: 'Basalt Pillar', region: 'liyue' },
    { id: 5001000004, name: 'Hoarfrost Core', region: 'mondstadt' },
    { id: 5002000005, name: 'Everflame Seed', region: 'liyue' },
    { id: 5002000006, name: 'Cleansing Heart', region: 'liyue' },
    { id: 5002000007, name: 'Juvenile Jade', region: 'liyue' },
    { id: 5001000008, name: 'Crystalline Bloom', region: 'mondstadt' },
    { id: 5003000009, name: 'Marionette Core', region: 'inazuma' },
    { id: 5003000010, name: 'Perpetual Heart', region: 'inazuma' },
    { id: 5003000011, name: 'Smoldering Pearl', region: 'inazuma' },
    { id: 5003000012, name: 'Dew of Repudiation', region: 'inazuma' },
    { id: 5003000013, name: 'Storm Beads', region: 'inazuma' },
    { id: 5003000014, name: 'Riftborn Regalia', region: 'inazuma' },
    { id: 5003000015, name: "Dragonheir's False Fin", region: 'inazuma' },
  ],
})

items.set('LocalSpecialty', {
  name: 'Local Specialty',
  material: [
    { id: 6001000001, name: 'Calla Lily', region: 'mondstadt' },
    { id: 6001000002, name: 'Wolfhook', region: 'mondstadt' },
    { id: 6001000003, name: 'Valberry', region: 'mondstadt' },
    { id: 6001000004, name: 'Cecilia', region: 'mondstadt' },
    { id: 6001000005, name: 'Windwheel Aster', region: 'mondstadt' },
    { id: 6001000006, name: 'Philanemo Mushroom', region: 'mondstadt' },
    { id: 6002000007, name: 'Jueyun Chili', region: 'liyue' },
    { id: 6002000008, name: 'Noctilucous Jade', region: 'liyue' },
    { id: 6002000009, name: 'Silk Flower', region: 'liyue' },
    { id: 6002000010, name: 'Glaze Lily', region: 'liyue' },
    { id: 6002000011, name: 'Qingxin', region: 'liyue' },
    { id: 6002000012, name: 'Starconch', region: 'liyue' },
    { id: 6002000013, name: 'Violet Grass', region: 'liyue' },
    { id: 6001000014, name: 'Small Lamp Grass', region: 'mondstadt' },
    { id: 6001000014, name: 'Dandelion', region: 'mondstadt' },
    { id: 6002000015, name: 'Cor Lapis', region: 'liyue' },
    { id: 6003000016, name: 'Onikabuto', region: 'inazuma' },
    { id: 6003000017, name: 'Sakura Bloom', region: 'inazuma' },
    { id: 6003000018, name: 'Crystal Marrow', region: 'inazuma' },
    { id: 6003000019, name: 'Dendrobium', region: 'inazuma' },
    { id: 6003000020, name: 'Naku Weed', region: 'inazuma' },
    { id: 6003000021, name: 'Sea Ganoderma', region: 'inazuma' },
    { id: 6003000022, name: 'Sango Pearl', region: 'inazuma' },
    { id: 6003000023, name: 'Amakumo Fruit', region: 'inazuma' },
    { id: 6003000024, name: 'Fluorescent Fungus', region: 'inazuma' },
  ],
})

items.set('AscensionCommonMaterial', {
  name: 'Ascension Common Material',
  material: [
    { id: 7000000001, name: 'Slime', isElite: false },
    { id: 7000000002, name: 'Hilichurl Masks', isElite: false },
    { id: 7000000003, name: 'Samachurl Scrolls', isElite: false },
    { id: 7000000004, name: 'Hilichurl Arrowheads', isElite: false },
    { id: 7000000005, name: 'Fatui Insignia', isElite: false },
    { id: 7000000006, name: 'Treasure Hoarder Insignias', isElite: false },
    { id: 7000000007, name: 'Whopperflower Nectar', isElite: false },
    { id: 7000000008, name: 'Nobushi Handguards', isElite: false },
    { id: 7000000009, name: 'Spectral Cores', isElite: false },
    { id: 7000000010, name: 'Hilichurl Horns', isElite: true },
    { id: 7000000011, name: 'Ley Lines', isElite: true },
    { id: 7000000012, name: 'Chaos Parts', isElite: true },
    { id: 7000000013, name: 'Mist Grass', isElite: true },
    { id: 7000000014, name: 'Sacrificial Knifes', isElite: true },
    { id: 7000000015, name: 'Bone Shards', isElite: true },
    { id: 7000000016, name: 'Sentinel Chaos Parts', isElite: true },
    { id: 7000000017, name: 'Prisms', isElite: true },
    { id: 7000000018, name: 'Concealed Rifthound Claws', isElite: true },
  ],
})

function getItems() {
  const result: ItemType[] = []
  items.forEach(value => result.push(value))
  return result
}

export { getItems, items }
