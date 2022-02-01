import { db } from '~/services/db.server'
import { ICharacter } from '~/types/character'

export async function getUserCharacterOwnership(userId: string) {
  const characterNames = await db.character.findMany({
    where: {
      userId,
      deleted: false,
    },
    select: {
      name: true,
    },
  })

  return characterNames.map(character => character.name)
}

export async function getUserCharacters(userId: string) {
  const userCharacters = await db.character.findMany({
    where: {
      userId,
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

  return userCharacters
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

  return character
}

export async function addUserCharacterOwnership(userId: string, name: string) {
  await db.character.create({
    data: {
      name,
      level: 1,
      ascension: 0,
      talent: [1, 1, 1],
      userId,
    },
  })
}

export async function updateUserCharacterOwnership(
  id: string,
  deleted: boolean,
) {
  await db.character.update({
    where: {
      id,
    },
    data: {
      deleted,
    },
  })
}

export async function addUserCharacter(
  userId: string,
  name: string,
  level: number,
  ascension: number,
  talent: ICharacter['progression']['talent'],
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
  talent: ICharacter['progression']['talent'],
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
