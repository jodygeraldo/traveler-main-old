import { getCharacters } from '~/model/Character/Character.server'
import { ICharacterData } from '~/model/Character/CharacterType'
import { db } from '~/services/db.server'

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

export async function addUserCharacter(
  userId: string,
  name: string,
  level: number,
  ascension: number,
  talent: [number, number, number],
) {
  await db.character.create({
    data: {
      userId,
      name,
      level,
      ascension,
      talent,
    },
  })
}

export async function updateUserCharacter(
  id: string,
  level: number,
  ascension: number,
  talent: [number, number, number],
) {
  await db.character.update({
    where: {
      id,
    },
    data: {
      level,
      ascension,
      talent,
    },
  })
}
