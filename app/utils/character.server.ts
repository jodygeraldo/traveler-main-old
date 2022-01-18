import fs from 'fs/promises'
import path from 'path'

import type { ICharacter, ITraveler } from '~/types/character'

import {
  getCharacterOwnershipRepo,
  getCharacterRepo,
  updateCharacterIndex,
  updateCharacterOwnershipIndex,
} from './redis/redis-character-schema.server'

/*
 * CHARACTER JSON READ FUNCTIONS *
 */
const charactersPath = path.join(__dirname, '../app/data/character')

export async function getCharacter(
  name: string,
): Promise<ICharacter | ITraveler> {
  const filepath = path.join(charactersPath, `${name}.json`)
  const data = await fs.readFile(filepath, 'utf8')
  const character = JSON.parse(data) as ICharacter
  return character
}

export async function getCharacters(): Promise<Array<ITraveler | ICharacter>> {
  const files = await fs.readdir(charactersPath)
  const filesWithoutExtension = files.map(file => file.replace('.json', ''))
  const characters = await Promise.all(filesWithoutExtension.map(getCharacter))
  return characters
}

// export async function getCharactersRedis() {
//   const client = await redisConnect()
//   const characters = await client.json.get('characters')
//   await redisQuit()
//   return characters
// }

/*
 * CHARACTER FUNCTIONS *
 */
export async function getUserCharacter(name: string, userId: string) {
  const repository = await getCharacterRepo()
  const character = await repository
    .search()
    .where('user_id')
    .equal(userId)
    .and('name')
    .equal(name)
    .first()

  // this is possible if the search function doesn't find the given userId
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!character) return null

  const characterData = {
    name: character.name,
    level: character.character_level,
    ascension: character.character_ascension,
    talent: character.character_talent,
    talent_anemo: character.character_talent_anemo,
    talent_geo: character.character_talent_geo,
    talent_electro: character.character_talent_electro,
  }
  return characterData
}

export async function addUserCharacter(
  name: string,
  level: number,
  ascension: number,
  talent:
    | [number, number, number]
    | {
        anemo: [number, number, number]
        geo: [number, number, number]
        electro: [number, number, number]
      },
  userId: string,
) {
  const repository = await getCharacterRepo()
  await updateCharacterIndex()

  const userCharacter = repository.createEntity()
  userCharacter.user_id = userId
  userCharacter.name = name
  userCharacter.character_level = level
  userCharacter.character_ascension = ascension
  if (Array.isArray(talent)) {
    userCharacter.character_talent = talent
  } else {
    userCharacter.character_talent_anemo = talent.anemo
    userCharacter.character_talent_geo = talent.geo
    userCharacter.character_talent_electro = talent.electro
  }

  const id = await repository.save(userCharacter)
  return id
}

export async function setUserCharacter(
  name: string,
  level: number,
  ascension: number,
  talent:
    | [number, number, number]
    | {
        anemo: [number, number, number]
        geo: [number, number, number]
        electro: [number, number, number]
      },
  userId: string,
  dataId?: string,
) {
  const repository = await getCharacterRepo()

  if (!dataId) {
    const id = await addUserCharacter(name, level, ascension, talent, userId)
    return id
  }

  const userCharacter = await repository.fetch(dataId)
  userCharacter.character_level = level
  userCharacter.character_ascension = ascension
  if (Array.isArray(talent)) {
    userCharacter.character_talent = talent
  } else {
    userCharacter.character_talent_anemo = talent.anemo
    userCharacter.character_talent_geo = talent.geo
    userCharacter.character_talent_electro = talent.electro
  }
  const id = await repository.save(userCharacter)
  return id
}

/*
 * CHARACTER OWNERSHIP FUNCTIONS *
 */
export async function getUserCharacterOwnership(userId: string) {
  const repository = await getCharacterOwnershipRepo()
  const characterOwnership = await repository
    .search()
    .where('user_id')
    .equal(userId)
    .first()

  // this is possible if the search function doesn't find the given userId
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!characterOwnership) return null
  return characterOwnership.characters
}

export async function addUserCharacterOwnership(name: string, userId: string) {
  const repository = await getCharacterOwnershipRepo()
  await updateCharacterOwnershipIndex()

  const userCharacterOwnership = repository.createEntity()
  userCharacterOwnership.user_id = userId
  userCharacterOwnership.characters = [name]

  const id = await repository.save(userCharacterOwnership)
  return id
}

export async function setUserCharacterOwnership(
  name: string,
  userId: string,
  dataId?: string,
) {
  const repository = await getCharacterOwnershipRepo()

  if (!dataId) {
    const id = await addUserCharacterOwnership(name, userId)
    return id
  }

  const userCharacterOwnership = await repository.fetch(dataId)
  userCharacterOwnership.characters.push(name)
  const id = await repository.save(userCharacterOwnership)
  return id
}

export async function removeUserCharacterOwnershipEntry(
  name: string,
  dataId: string,
) {
  const repository = await getCharacterOwnershipRepo()
  const userCharacterOwnership = await repository.fetch(dataId)
  if (!userCharacterOwnership.user_id) {
    throw new Error('This is should never happen, contact me if you see this!')
  }

  const indexOfName = userCharacterOwnership.characters.indexOf(name)
  if (indexOfName === -1) {
    throw new Error(
      'You should refresh the page, your todo data not sync properly with the server',
    )
  }

  userCharacterOwnership.characters.splice(indexOfName, 1)
  const id = await repository.save(userCharacterOwnership)
  return id
}
