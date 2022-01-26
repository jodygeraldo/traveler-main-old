import { Prisma } from '@prisma/client'

import characterMap from '~/data/characters.server'
import { ICharacter, ITraveler } from '~/types/character'

import { db } from './db.server'

export function parseTalentToNumberArray(
  talentNormal: string | number = 1,
  talentSkill: string | number = 1,
  talentBurst: string | number = 1,
): [number, number, number] {
  return [Number(talentNormal), Number(talentSkill), Number(talentBurst)]
}

export function getCharacters() {
  const result: (ITraveler | ICharacter)[] = []
  characterMap.forEach(value => result.push(value))
  return result
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

export async function addUserCharacterOwnership(userId: string, name: string) {
  await db.character.create({
    data: {
      name,
      level: 1,
      ascension: 0,
      talent: 'NEW',
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
  talent: ICharacter['level']['talent'] | ITraveler['level']['talent'],
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
  talent: ICharacter['level']['talent'] | ITraveler['level']['talent'],
) {
  await db.character.update({
    where: {
      id,
    },
    data: {
      level: +level,
      ascension: +ascension,
      talent,
    },
  })
}

export function getUpdatedCharacters(
  userCharacters: {
    level: number
    talent: Prisma.JsonValue
    id: string
    name: string
    ascension: number
  }[],
  characters: (ITraveler | ICharacter)[],
) {
  const updatedCharacters = characters

  userCharacters.forEach(character => {
    const index = updatedCharacters.findIndex(c => c.name === character.name)
    if (index === -1) return
    updatedCharacters[index].dbId = character.id
    updatedCharacters[index].own = true
    updatedCharacters[index].level.character = character.level
    updatedCharacters[index].level.ascension = character.ascension
    if (character.talent !== 'NEW') {
      updatedCharacters[index].level.talent = character.talent as
        | ITraveler['level']['talent']
        | ICharacter['level']['talent']
    }
  })

  return updatedCharacters
}
