import { Entity, Repository, Schema } from 'redis-om'

import { redisOmConnect } from '../redis.server'

/*
 * Character Ownership Schema
 */
interface CharacterOwnership {
  user_id: string
  characters: string[]
}

class CharacterOwnership extends Entity {}

const characterOwnershipSchema = new Schema(CharacterOwnership, {
  user_id: { type: 'string' },
  characters: { type: 'array' },
})

export const getCharacterOwnershipRepo = async () =>
  new Repository(characterOwnershipSchema, await redisOmConnect())

export async function updateCharacterOwnershipIndex() {
  const repository = await getCharacterOwnershipRepo()
  await repository.dropIndex()
  await repository.createIndex()
}

/*
 * Character Schema
 */
interface Character {
  user_id: string
  name: string
  character_level: number
  character_ascension: number
  character_talent: [number, number, number]
  character_talent_anemo: [number, number, number]
  character_talent_geo: [number, number, number]
  character_talent_electro: [number, number, number]
}

class Character extends Entity {}

const characterSchema = new Schema(Character, {
  user_id: { type: 'string' },
  name: { type: 'string' },
  character_level: { type: 'number' },
  character_ascension: { type: 'number' },
  character_talent: { type: 'array' },
  character_talent_anemo: { type: 'array' },
  character_talent_geo: { type: 'array' },
  character_talent_electro: { type: 'array' },
})

export const getCharacterRepo = async () =>
  new Repository(characterSchema, await redisOmConnect())

export async function updateCharacterIndex() {
  const repository = await getCharacterRepo()
  await repository.dropIndex()
  await repository.createIndex()
}
