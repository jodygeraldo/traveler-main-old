import fs from 'fs/promises'
import path from 'path'
import { Repository, Schema } from 'redis-om'

import type {
  CharacterTypeEnum,
  ICharacter,
  ITraveler,
} from '~/types/character'

import { redisOmConnect } from './redis.server'
import {
  Character,
  CharacterOwnership,
  characterOwnershipSchema,
  characterSchema,
  Traveler,
  travelerSchema,
} from './redis-schema.server'

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

const schema: Record<CharacterTypeEnum, Schema<Character | Traveler>> = {
  TRAVELER: travelerSchema,
  CHARACTER: characterSchema,
}

const schemaKey: Record<CharacterTypeEnum, 'Traveler' | 'Character'> = {
  TRAVELER: 'Traveler',
  CHARACTER: 'Character',
}

const getCharacterOwnershipRepo = async () =>
  new Repository(characterOwnershipSchema, await redisOmConnect())

async function updateCharacterOwnershipIndex() {
  const repository = await getCharacterOwnershipRepo()
  await repository.dropIndex()
  await repository.createIndex()
}

const getCharacterRepo = async (type: CharacterTypeEnum) =>
  new Repository(schema[type], await redisOmConnect())

async function updateCharacterIndex(type: CharacterTypeEnum) {
  const repository = await getCharacterRepo(type)
  await repository.dropIndex()
  await repository.createIndex()
}

export async function getUserCharacter(
  type: CharacterTypeEnum,
  userId: string,
): Promise<Character | Traveler | null> {
  const repository = await getCharacterRepo(type)
  const character = await repository
    .search()
    .where('user_id')
    .equal(userId)
    .first()
  return character
}

export async function getUserCharacterOwnership(
  userId: string,
): Promise<string[] | null> {
  const repository = await getCharacterOwnershipRepo()
  const characterOwnership = await repository
    .search()
    .where('user_id')
    .equal(userId)
    .first()
  return characterOwnership.characters
}

export async function addUserCharacterOwnership(userId: string, name: string) {
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
    const id = await addUserCharacterOwnership(userId, name)
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
    throw new Error(
      'You should refresh the page, your todo data not sync properly with the server',
    )
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
