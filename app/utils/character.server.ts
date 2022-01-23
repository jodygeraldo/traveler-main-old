import {
  getCharacterOwnershipRepo,
  getCharacterRepo,
  updateCharacterIndex,
  updateCharacterOwnershipIndex,
} from './redis/redis-character-schema.server'
import { setUserData } from './user.server'

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

  await setUserData({ data_id: name, value: id }, userId)

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
  await repository.save(userCharacter)
  return null
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

  await setUserData({ data_id: 'characterOwnership', value: id }, userId)

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
  await repository.save(userCharacterOwnership)
  return null
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
  await repository.save(userCharacterOwnership)
}

/*
 * CHARACTER UTIL FUNCTIONS *
 */
export function parseTalentToNumberArray(
  talentNormal: string | number = 1,
  talentSkill: string | number = 1,
  talentBurst: string | number = 1,
): [number, number, number] {
  return [Number(talentNormal), Number(talentSkill), Number(talentBurst)]
}
