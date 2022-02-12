import invariant from 'tiny-invariant'

import CharacterMap, { getCharacters } from '~/model/Character/Character.server'
import { ICharacterData } from '~/model/Character/CharacterType'
import {
  AscensionMaterialType,
  getCharacterMaterial,
  getTravelerMaterial,
  TalentMaterialType,
} from '~/model/Character/Material.server'
import {
  bookGroupMap,
  commonGroupMap,
  gemGroupMap,
} from '~/model/Item/Group.server'
import { db } from '~/services/db.server'

export async function getUserTrackedCharacter(userId: string) {
  const characters = await db.character.findMany({
    where: {
      userId,
      tracked: true,
    },
    select: {
      name: true,
      ascension: true,
      talent: true,
    },
  })

  if (characters.length === 0) {
    return []
  }

  const characterData = characters.map(character => {
    const characterLookup = CharacterMap.get(character.name)
    invariant(characterLookup, `Character ${character.name} not found`)
    const common = commonGroupMap.get(characterLookup.material.common)
    const gem = gemGroupMap.get(characterLookup.material.ascensionGem)
    const talentBook = bookGroupMap.get(characterLookup.material.talentBook[0])
    invariant(
      common,
      `Unknown common material: ${characterLookup.material.common}`,
    )
    invariant(
      gem,
      `Unknown ascension gem material: ${characterLookup.material.ascensionGem}`,
    )
    invariant(
      talentBook,
      `Unknown talent book material: ${characterLookup.material.talentBook[0]}`,
    )

    return {
      ...characters,
      material: {
        ...characterLookup.material,
        common,
        ascensionGem: gem,
        talentBook,
      },
    }
  })

  return characterData
}

export async function getUserCharactersData(userId: string) {
  const userCharacters = await db.character.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      name: true,
      level: true,
      ascension: true,
      deleted: true,
      tracked: true,
    },
  })

  const characters = getCharacters()

  if (userCharacters.length === 0) {
    return characters.map(character => {
      return {
        name: character.name,
        vision: character.vision,
      }
    }) as ICharacterData[]
  }

  return characters.map(character => {
    const userCharacter = userCharacters.find(c => c.name === character.name)
    if (!userCharacter) {
      return {
        name: character.name,
        vision: character.vision,
      }
    }
    return {
      characterUserId: userCharacter.id,
      level: userCharacter.level,
      ascension: userCharacter.ascension,
      ownership: !userCharacter.deleted,
      tracked: userCharacter.tracked,
      name: character.name,
      vision: character.vision,
    }
  }) as ICharacterData[]
}

export async function getUserCharacterItem(
  userId: string,
  name: string,
  skipDbCheck: boolean,
) {
  const character = CharacterMap.get(name)

  if (!character) {
    return undefined
  }

  let material: {
    ascension: AscensionMaterialType[]
    talent: {
      normal: TalentMaterialType[]
      skill: TalentMaterialType[]
      burst: TalentMaterialType[]
    }
  }

  if (character.name.includes('Traveler')) {
    if (character.vision === 'Geo') {
      material = getTravelerMaterial('Geo')
    } else if (character.vision === 'Electro') {
      material = getTravelerMaterial('Electro')
    } else {
      material = getTravelerMaterial('Anemo')
    }
  } else {
    material = getCharacterMaterial(character.material)
  }

  if (skipDbCheck) {
    return {
      name: character.name,
      fullMaterial: material,
      cutMaterial: undefined,
    }
  }

  const userCharacter = await db.character.findFirst({
    where: {
      name: character.name,
      userId,
    },
    select: {
      ascension: true,
      talent: true,
    },
  })

  if (!userCharacter) {
    return {
      name: character.name,
      fullMaterial: material,
      cutMaterial: undefined,
    }
  }

  const cutMaterial = {
    ascension: material.ascension.slice(userCharacter.ascension),
    talent: {
      normal: material.talent.normal.slice(userCharacter.talent[0] - 1),
      skill: material.talent.skill.slice(userCharacter.talent[1] - 1),
      burst: material.talent.burst.slice(userCharacter.talent[2] - 1),
    },
  }

  return {
    name: character.name,
    fullMaterial: material,
    cutMaterial,
  }
}

export async function getUserCharacter(userId: string, name: string) {
  const character = await db.character.findFirst({
    where: {
      userId,
      name,
      deleted: false,
    },
    select: {
      id: true,
      name: true,
      level: true,
      ascension: true,
      talent: true,
    },
  })

  if (!character) {
    return null
  }

  return {
    name: character.name,
    id: character.id,
    progression: {
      level: character.level,
      ascension: character.ascension,
      talent: character.talent as [number, number, number],
    },
  }
}

export async function createOrUpdateCharacterOwnership(
  userId: string,
  name: string,
  id?: string,
  deleted?: boolean,
) {
  await db.character.upsert({
    where: {
      id,
    },
    create: {
      name,
      level: 1,
      ascension: 0,
      talent: [1, 1, 1],
      userId,
    },
    update: {
      deleted,
    },
  })
}

export async function createOrUpdateTracked(
  userId: string,
  name: string,
  tracked: boolean,
  id?: string,
) {
  await db.character.upsert({
    where: {
      id,
    },
    create: {
      name,
      level: 1,
      ascension: 0,
      talent: [1, 1, 1],
      userId,
      tracked,
    },
    update: {
      tracked,
    },
  })
}

export async function createOrUpdateCharacter(
  userId: string,
  name: string,
  level: number,
  ascension: number,
  talent: [number, number, number],
  id?: string,
) {
  await db.character.upsert({
    where: {
      id,
    },
    create: {
      name,
      level,
      ascension,
      talent,
      userId,
    },
    update: {
      level,
      ascension,
      talent,
    },
  })
}
