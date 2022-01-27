import { Item, Prisma } from '@prisma/client'
import { json } from 'remix'
import invariant from 'tiny-invariant'

import {
  ascensionBossMaterialMap,
  ascensionCommonMaterialMap,
  ascensionGemMap,
  ascensionLocalSpecialtyMap,
  talentBookMap,
  talentBossMaterialMap,
  talentCrownMap,
} from '~/data/items.server'
import {
  AscensionBossMaterial,
  AscensionCommonMaterial,
  AscensionGem,
  IAscensionBossMaterial,
  IAscensionCommonMaterial,
  IAscensionGem,
  ILocalSpecialty,
  ITalentBook,
  ITalentBossMaterial,
  ITalentCrown,
  ItemTypes,
  LocalSpecialty,
  TalentBook,
  TalentBossMaterial,
  TalentCrown,
} from '~/types/item'

import { db } from './db.server'

const dummyTalentCrownName: TalentCrown[] = ['Crown of Insight']
const dummyTalentBookName: TalentBook[] = [
  'Guide of Ballad',
  'Guide of Diligence',
  'Guide of Elegance',
  'Guide of Freedom',
  'Guide of Gold',
  'Guide of Light',
  'Guide of Prosperity',
  'Guide of Resistance',
  'Guide of Transience',
  'Philosophies of Ballad',
  'Philosophies of Diligence',
  'Philosophies of Elegance',
  'Philosophies of Freedom',
  'Philosophies of Gold',
  'Philosophies of Light',
  'Philosophies of Prosperity',
  'Philosophies of Resistance',
  'Philosophies of Transience',
  'Teachings of Ballad',
  'Teachings of Diligence',
  'Teachings of Elegance',
  'Teachings of Freedom',
  'Teachings of Gold',
  'Teachings of Light',
  'Teachings of Prosperity',
  'Teachings of Resistance',
  'Teachings of Transience',
]
const dummyTalentBossName: TalentBossMaterial[] = [
  "Dvalin's Plume",
  "Dvalin's Claw",
  "Dvalin's Sigh",
  'Tail of Boreas',
  'Ring of Boreas',
  'Spirit Locket of Boreas',
  'Tusk of Monoceros Caeli',
  'Shard of a Foul Legacy',
  'Shadow of the Warrior',
  "Dragon Lord's Crown",
  'Bloodjade Branch',
  'Gilded Scale',
  'Molten Moment',
  'Ashen Heart',
  'Hellfire Butterfly',
]
const dummyAscensionGemName: AscensionGem[] = [
  'Brilliant Diamond Sliver',
  'Brilliant Diamond Fragment',
  'Brilliant Diamond Chunk',
  'Brilliant Diamond Gemstone',
  'Agnidus Agate Sliver',
  'Agnidus Agate Fragment',
  'Agnidus Agate Chunk',
  'Agnidus Agate Gemstone',
  'Varunada Lazurite Sliver',
  'Varunada Lazurite Fragment',
  'Varunada Lazurite Chunk',
  'Varunada Lazurite Gemstone',
  'Vajrada Amethyst Sliver',
  'Vajrada Amethyst Fragment',
  'Vajrada Amethyst Chunk',
  'Vajrada Amethyst Gemstone',
  'Vayuda Turquoise Sliver',
  'Vayuda Turquoise Fragment',
  'Vayuda Turquoise Chunk',
  'Vayuda Turquoise Gemstone',
  'Shivada Jade Sliver',
  'Shivada Jade Fragment',
  'Shivada Jade Chunk',
  'Shivada Jade Gemstone',
  'Prithiva Topaz Sliver',
  'Prithiva Topaz Fragment',
  'Prithiva Topaz Chunk',
  'Prithiva Topaz Gemstone',
]
const dummyAscensionBossName: AscensionBossMaterial[] = [
  'Hurricane Seed',
  'Lightning Prism',
  'Basalt Pillar',
  'Hoarfrost Core',
  'Everflame Seed',
  'Cleansing Heart',
  'Juvenile Jade',
  'Crystalline Bloom',
  'Marionette Core',
  'Perpetual Heart',
  'Smoldering Pearl',
  'Dew of Repudiation',
  'Storm Beads',
  'Riftborn Regalia',
  "Dragonheir's False Fin",
]
const dummyAscensionLocalSpecialtyName: LocalSpecialty[] = [
  'Calla Lily',
  'Wolfhook',
  'Valberry',
  'Cecilia',
  'Windwheel Aster',
  'Philanemo Mushroom',
  'Jueyun Chili',
  'Noctilucous Jade',
  'Silk Flower',
  'Glaze Lily',
  'Qingxin',
  'Starconch',
  'Violetgrass',
  'Small Lamp Grass',
  'Dandelion Seed',
  'Cor Lapis',
  'Onikabuto',
  'Sakura Bloom',
  'Crystal Marrow',
  'Dendrobium',
  'Naku Weed',
  'Sea Ganoderma',
  'Sango Pearl',
  'Amakumo Fruit',
  'Fluorescent Fungus',
]
const dummyAscensionCommonName: AscensionCommonMaterial[] = [
  'Slime Condensate',
  'Slime Secretions',
  'Slime Concentrate',
  'Damaged Mask',
  'Stained Mask',
  'Ominous Mask',
  'Divining Scroll',
  'Sealed Scroll',
  'Forbidden Curse Scroll',
  'Firm Arrowhead',
  'Sharp Arrowhead',
  'Weathered Arrowhead',
  "Recruit's Insignia",
  "Sergeant's Insignia",
  "Lieutenant's Insignia",
  'Treasure Hoarder Insignia',
  'Silver Raven Insignia',
  'Golden Raven Insignia',
  'Whopperflower Nectar',
  'Shinmmering Nectar',
  'Energy Nectar',
  'Old Handguard',
  'Kageuchi Handguard',
  'Famed Handguard',
  'Spectral Husk',
  'Spectral Heart',
  'Spectral Nucleus',
  'Heavy Horn',
  'Black Bronze Horn',
  'Black Crystal Horn',
  'Dead Ley Line Branch',
  'Dead Ley Line Leaves',
  'Ley Line Sprout',
  'Chaos Device',
  'Chaos Circuit',
  'Chaos Core',
  'Mist Grass Pollen',
  'Mist Grass',
  'Mist Grass Wick',
  "Hunter's Sacrificial Knife",
  "Agent's Sacrificial Knife",
  "Inspector's Sacrificial Knife",
  'Fragile Bone Shard',
  'Sturdy Bone Shard',
  'Fossilized Bone Shard',
  'Chaos Gear',
  'Chaos Axis',
  'Chaos Oculus',
  'Dismal Prism',
  'Crystal Prism',
  'Polarizing Prism',
  'Concealed Claw',
  'Concealed Unguis',
  'Concealed Talon',
]

export function getItems() {
  const talentCrown: ITalentCrown[] = []
  talentCrownMap.forEach(value => talentCrown.push(value))
  const talentBook: ITalentBook[] = []
  talentBookMap.forEach(value => talentBook.push(value))
  const talentBossMaterial: ITalentBossMaterial[] = []
  talentBossMaterialMap.forEach(value => talentBossMaterial.push(value))
  const ascensionCommonMaterial: IAscensionCommonMaterial[] = []
  ascensionCommonMaterialMap.forEach(value =>
    ascensionCommonMaterial.push(value),
  )
  const ascensionBossMaterial: IAscensionBossMaterial[] = []
  ascensionBossMaterialMap.forEach(value => ascensionBossMaterial.push(value))
  const ascensionGem: IAscensionGem[] = []
  ascensionGemMap.forEach(value => ascensionGem.push(value))
  const ascensionLocalSpecialty: ILocalSpecialty[] = []
  ascensionLocalSpecialtyMap.forEach(value =>
    ascensionLocalSpecialty.push(value),
  )

  const itemsArray: ItemTypes = [
    {
      name: 'Crown',
      items: talentCrown,
    },
    {
      name: 'Talent Book',
      items: talentBook,
    },
    {
      name: 'Talent Boss Material',
      items: talentBossMaterial,
    },
    {
      name: 'Ascension Gem',
      items: ascensionGem,
    },
    {
      name: 'Ascension Boss Material',
      items: ascensionBossMaterial,
    },
    {
      name: 'Local Specialty',
      items: ascensionLocalSpecialty,
    },
    {
      name: 'Ascension Common Material',
      items: ascensionCommonMaterial,
    },
  ]

  return itemsArray
}

function getUpdatedUserItem(
  category:
    | 'talentCrown'
    | 'talentBook'
    | 'talentBoss'
    | 'ascensionGem'
    | 'ascensionBoss'
    | 'ascensionCommon'
    | 'ascensionLocalSpecialty',
  userItem: Prisma.JsonValue,
  items: ItemTypes,
) {
  let newUpdatedItem:
    | ITalentCrown[]
    | ITalentBook[]
    | ITalentBossMaterial[]
    | IAscensionGem[]
    | IAscensionBossMaterial[]
    | IAscensionCommonMaterial[]
    | ILocalSpecialty[] = items[6].items
  let dummy:
    | TalentCrown[]
    | TalentBook[]
    | TalentBossMaterial[]
    | AscensionGem[]
    | AscensionBossMaterial[]
    | AscensionCommonMaterial[]
    | LocalSpecialty[] = dummyAscensionCommonName

  switch (category) {
    case 'talentCrown':
      newUpdatedItem = items[0].items
      dummy = dummyTalentCrownName
      break
    case 'talentBook':
      newUpdatedItem = items[1].items
      dummy = dummyTalentBookName
      break
    case 'talentBoss':
      newUpdatedItem = items[2].items
      dummy = dummyTalentBossName
      break
    case 'ascensionGem':
      newUpdatedItem = items[3].items
      dummy = dummyAscensionGemName
      break
    case 'ascensionBoss':
      newUpdatedItem = items[4].items
      dummy = dummyAscensionBossName
      break
    case 'ascensionLocalSpecialty':
      newUpdatedItem = items[5].items
      dummy = dummyAscensionLocalSpecialtyName
      break
    case 'ascensionCommon':
    default:
      newUpdatedItem = items[6].items
      dummy = dummyAscensionCommonName
      break
  }

  const userIt = userItem as {
    [K in
      | AscensionCommonMaterial
      | AscensionBossMaterial
      | AscensionGem
      | LocalSpecialty
      | TalentCrown
      | TalentBook
      | TalentBossMaterial]?: number
  }[]

  let iterationNumber = 0

  userIt.forEach(v => {
    dummy.forEach(name => {
      if (iterationNumber === userIt.length) {
        return
      }
      if (v[name] !== undefined) {
        const index = newUpdatedItem.findIndex(item => item.name === name)
        if (index !== -1) {
          newUpdatedItem[index].count = v[name] ?? 0
          iterationNumber++
        }
      }
    })
  })

  return newUpdatedItem
}

export function getUpdatedUserItems(
  userItem: Item,
  items: ItemTypes,
): ItemTypes {
  const itemsHolders = items

  if (userItem.talentCrown) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    itemsHolders['0'].items = getUpdatedUserItem(
      'talentCrown',
      userItem.talentCrown,
      items,
    )
  }

  if (userItem.talentBook) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    itemsHolders['1'].items = getUpdatedUserItem(
      'talentBook',
      userItem.talentBook,
      items,
    )
  }
  if (userItem.talentBoss) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    itemsHolders['2'].items = getUpdatedUserItem(
      'talentBoss',
      userItem.talentBoss,
      items,
    )
  }
  if (userItem.ascensionGem) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    itemsHolders['3'].items = getUpdatedUserItem(
      'ascensionGem',
      userItem.ascensionGem,
      items,
    )
  }
  if (userItem.ascensionBoss) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    itemsHolders['4'].items = getUpdatedUserItem(
      'ascensionBoss',
      userItem.ascensionBoss,
      items,
    )
  }
  if (userItem.ascensionLocalSpecialty) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    itemsHolders['5'].items = getUpdatedUserItem(
      'ascensionLocalSpecialty',
      userItem.ascensionLocalSpecialty,
      items,
    )
  }
  if (userItem.ascensionCommon) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    itemsHolders['6'].items = getUpdatedUserItem(
      'ascensionCommon',
      userItem.ascensionCommon,
      items,
    )
  }

  return itemsHolders
}

export async function upsertTalentCrown(
  userId: string,
  userItem: Item | null,
  name: string,
  count: number,
) {
  if (!userItem) {
    return db.item.create({
      data: {
        userId,
        talentCrown: [{ [name]: count }],
      },
    })
  }

  const talentCrown = getUpdatedItemArray('talentCrown', userItem, name, count)

  return db.item.update({
    where: {
      userId,
    },
    data: {
      talentCrown,
    },
  })
}

export async function upsertTalentBook(
  userId: string,
  userItem: Item | null,
  name: string,
  count: number,
) {
  if (!userItem) {
    return db.item.create({
      data: {
        userId,
        talentBook: [{ [name]: count }],
      },
    })
  }

  const talentBook = getUpdatedItemArray('talentBook', userItem, name, count)

  return db.item.update({
    where: {
      userId,
    },
    data: {
      talentBook,
    },
  })
}

export async function upsertTalentBossMaterial(
  userId: string,
  userItem: Item | null,
  name: string,
  count: number,
) {
  if (!userItem) {
    return db.item.create({
      data: {
        userId,
        talentBoss: [{ [name]: count }],
      },
    })
  }

  const talentBoss = getUpdatedItemArray('talentBoss', userItem, name, count)

  return db.item.update({
    where: {
      userId,
    },
    data: {
      talentBoss,
    },
  })
}

export async function upsertAscensionGem(
  userId: string,
  userItem: Item | null,
  name: string,
  count: number,
) {
  if (!userItem) {
    return db.item.create({
      data: {
        userId,
        ascensionGem: [{ [name]: count }],
      },
    })
  }

  const ascensionGem = getUpdatedItemArray(
    'ascensionGem',
    userItem,
    name,
    count,
  )

  return db.item.update({
    where: {
      userId,
    },
    data: {
      ascensionGem,
    },
  })
}

export async function upsertAscensionBossMaterial(
  userId: string,
  userItem: Item | null,
  name: string,
  count: number,
) {
  if (!userItem) {
    return db.item.create({
      data: {
        userId,
        ascensionBoss: [{ [name]: count }],
      },
    })
  }

  const ascensionBoss = getUpdatedItemArray(
    'ascensionBoss',
    userItem,
    name,
    count,
  )

  return db.item.update({
    where: {
      userId,
    },
    data: {
      ascensionBoss,
    },
  })
}

export async function upsertLocalSpecialty(
  userId: string,
  userItem: Item | null,
  name: string,
  count: number,
) {
  if (!userItem) {
    return db.item.create({
      data: {
        userId,
        ascensionLocalSpecialty: [{ [name]: count }],
      },
    })
  }

  const ascensionLocalSpecialty = getUpdatedItemArray(
    'ascensionLocalSpecialty',
    userItem,
    name,
    count,
  )

  return db.item.update({
    where: {
      userId,
    },
    data: {
      ascensionLocalSpecialty,
    },
  })
}

export async function upsertAscensionCommonMaterial(
  userId: string,
  userItem: Item | null,
  name: string,
  count: number,
) {
  if (!userItem) {
    return db.item.create({
      data: {
        userId,
        ascensionCommon: [{ [name]: count }],
      },
    })
  }

  const ascensionCommon = getUpdatedItemArray(
    'ascensionCommon',
    userItem,
    name,
    count,
  )

  return db.item.update({
    where: {
      userId,
    },
    data: {
      ascensionCommon,
    },
  })
}

function getUpdatedItemArray(
  category:
    | 'talentCrown'
    | 'talentBook'
    | 'talentBoss'
    | 'ascensionGem'
    | 'ascensionBoss'
    | 'ascensionCommon'
    | 'ascensionLocalSpecialty',
  userItem: Item,
  name: string,
  count: number,
) {
  const nameTyped = name as
    | AscensionCommonMaterial
    | AscensionBossMaterial
    | AscensionGem
    | LocalSpecialty
    | TalentCrown
    | TalentBook
    | TalentBossMaterial

  const oldArray = userItem[category] as
    | {
        [K in
          | AscensionCommonMaterial
          | AscensionBossMaterial
          | AscensionGem
          | LocalSpecialty
          | TalentCrown
          | TalentBook
          | TalentBossMaterial]?: number
      }[]
    | null

  console.log(oldArray)

  if (oldArray) {
    const newArray = oldArray.filter(item => item[nameTyped] === undefined)
    newArray.push({ [nameTyped]: count })
    return newArray
  }

  return [{ [nameTyped]: count }]
}
