/**
 * !!! THIS WHOLE UTILS FUNCTION IS A FUCKING MISTAKE
 * !!! FIND A BETTER WAY TO DO THIS SHIT LATER ON
 */

import { Item, Prisma } from '@prisma/client'

import {
  AscensionBossMaterial,
  AscensionGem,
  CommonMaterial,
  Crown,
  IAscensionBossMaterial,
  IAscensionGem,
  ICommonMaterial,
  ICrown,
  ILocalSpecialty,
  ITalentBook,
  ITalentBossMaterial,
  ItemTypes,
  LocalSpecialty,
  TalentBook,
  TalentBossMaterial,
} from '~/model/Item/ItemType'
import { db } from '~/services/db.server'

const dummyCrownName: Crown[] = ['Crown of Insight']
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
const dummyLocalSpecialtyName: LocalSpecialty[] = [
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
const dummyCommonName: CommonMaterial[] = [
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
  'Shimmering Nectar',
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

export async function getUserItems(userId: string) {
  return db.item.findUnique({
    where: {
      userId,
    },
  })
}

function getUpdatedUserItem(
  category:
    | 'common'
    | 'talentBoss'
    | 'ascensionBoss'
    | 'ascensionGem'
    | 'talentBook'
    | 'crown'
    | 'localSpecialty',
  userItem: Prisma.JsonValue,
  items: ItemTypes,
) {
  let newUpdatedItem:
    | ICrown[]
    | ITalentBook[]
    | ITalentBossMaterial[]
    | IAscensionGem[]
    | IAscensionBossMaterial[]
    | ICommonMaterial[]
    | ILocalSpecialty[] = items.common.items
  let dummy:
    | Crown[]
    | TalentBook[]
    | TalentBossMaterial[]
    | AscensionGem[]
    | AscensionBossMaterial[]
    | CommonMaterial[]
    | LocalSpecialty[] = dummyCommonName

  switch (category) {
    case 'common':
      newUpdatedItem = items.common.items
      dummy = dummyCommonName
      break
    case 'talentBoss':
      newUpdatedItem = items.talentBoss.items
      dummy = dummyTalentBossName
      break
    case 'ascensionBoss':
      newUpdatedItem = items.ascensionBoss.items
      dummy = dummyAscensionBossName
      break
    case 'ascensionGem':
      newUpdatedItem = items.ascensionGem.items
      dummy = dummyAscensionGemName
      break
    case 'talentBook':
      newUpdatedItem = items.talentBook.items
      dummy = dummyTalentBookName
      break
    case 'crown':
      newUpdatedItem = items.crown.items
      dummy = dummyCrownName
      break
    case 'localSpecialty':
    default:
      newUpdatedItem = items.localSpecialty.items
      dummy = dummyLocalSpecialtyName
      break
  }

  const userIt = userItem as {
    [K in
      | CommonMaterial
      | AscensionBossMaterial
      | AscensionGem
      | LocalSpecialty
      | Crown
      | TalentBook
      | TalentBossMaterial]?: number
  }[]

  userIt.forEach(v => {
    dummy.forEach(name => {
      if (v[name] !== undefined) {
        const index = newUpdatedItem.findIndex(item => item.name === name)
        if (index !== -1) {
          newUpdatedItem[index].count = v[name] ?? 0
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
  const updatedItems: ItemTypes = items

  if (userItem.common) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    // eslint-disable-next-line
    updatedItems.common.items = getUpdatedUserItem(
      'common',
      userItem.common,
      items,
    )
  }

  if (userItem.talentBoss) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    // eslint-disable-next-line
    updatedItems.talentBoss.items = getUpdatedUserItem(
      'talentBoss',
      userItem.talentBoss,
      items,
    )
  }
  if (userItem.ascensionBoss) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    // eslint-disable-next-line
    updatedItems.ascensionBoss.items = getUpdatedUserItem(
      'ascensionBoss',
      userItem.ascensionBoss,
      items,
    )
  }
  if (userItem.ascensionGem) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    // eslint-disable-next-line
    updatedItems.ascensionGem.items = getUpdatedUserItem(
      'ascensionGem',
      userItem.ascensionGem,
      items,
    )
  }
  if (userItem.talentBook) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    // eslint-disable-next-line
    updatedItems.talentBook.items = getUpdatedUserItem(
      'talentBook',
      userItem.talentBook,
      items,
    )
  }
  if (userItem.crown) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    // eslint-disable-next-line
    updatedItems.crown.items = getUpdatedUserItem(
      'crown',
      userItem.crown,
      items,
    )
  }
  if (userItem.localSpecialty) {
    // I MAKE SURE THIS IS RETURN THE SAME ARRAY
    // @ts-ignore
    // eslint-disable-next-line
    updatedItems.localSpecialty.items = getUpdatedUserItem(
      'localSpecialty',
      userItem.localSpecialty,
      items,
    )
  }

  return updatedItems
}

export async function upsertCrown(userId: string, name: string, count: number) {
  const userItem = await getUserItems(userId)

  if (!userItem) {
    return db.item.create({
      data: {
        userId,
        crown: [{ [name]: count }],
      },
    })
  }

  const crown = getUpdatedItemArray('crown', userItem, name, count)

  return db.item.update({
    where: {
      userId,
    },
    data: {
      crown,
    },
  })
}

export async function upsertTalentBook(
  userId: string,
  name: string,
  count: number,
) {
  const userItem = await getUserItems(userId)

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
  name: string,
  count: number,
) {
  const userItem = await getUserItems(userId)

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
  name: string,
  count: number,
) {
  const userItem = await getUserItems(userId)

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
  name: string,
  count: number,
) {
  const userItem = await getUserItems(userId)

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
  name: string,
  count: number,
) {
  const userItem = await getUserItems(userId)

  if (!userItem) {
    return db.item.create({
      data: {
        userId,
        localSpecialty: [{ [name]: count }],
      },
    })
  }

  const localSpecialty = getUpdatedItemArray(
    'localSpecialty',
    userItem,
    name,
    count,
  )

  return db.item.update({
    where: {
      userId,
    },
    data: {
      localSpecialty,
    },
  })
}

export async function upsertCommonMaterial(
  userId: string,
  name: string,
  count: number,
) {
  const userItem = await getUserItems(userId)

  if (!userItem) {
    return db.item.create({
      data: {
        userId,
        common: [{ [name]: count }],
      },
    })
  }

  const common = getUpdatedItemArray('common', userItem, name, count)

  return db.item.update({
    where: {
      userId,
    },
    data: {
      common,
    },
  })
}

function getUpdatedItemArray(
  category:
    | 'common'
    | 'talentBoss'
    | 'ascensionBoss'
    | 'ascensionGem'
    | 'talentBook'
    | 'crown'
    | 'localSpecialty',
  userItem: Item,
  name: string,
  count: number,
) {
  const nameTyped = name as
    | CommonMaterial
    | AscensionBossMaterial
    | AscensionGem
    | LocalSpecialty
    | Crown
    | TalentBook
    | TalentBossMaterial

  const oldArray = userItem[category] as
    | {
        [K in
          | CommonMaterial
          | AscensionBossMaterial
          | AscensionGem
          | LocalSpecialty
          | Crown
          | TalentBook
          | TalentBossMaterial]?: number
      }[]
    | null

  if (oldArray) {
    const newArray = oldArray.filter(item => item[nameTyped] === undefined)
    newArray.push({ [nameTyped]: count })
    return newArray
  }

  return [{ [nameTyped]: count }]
}
