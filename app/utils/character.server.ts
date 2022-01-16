import fs from 'fs/promises'
import path from 'path'
import { Entity, Repository, Schema } from 'redis-om'

import type { CharacterTypeEnum, ICharacter } from '~/types/character'

import { redisConnect, redisOmConnect, redisQuit } from './redis.server'

const charactersPath = path.join(__dirname, '../app/data/character')

export async function getCharacter(name: string): Promise<ICharacter> {
  const filepath = path.join(charactersPath, `${name}.json`)
  const data = await fs.readFile(filepath, 'utf8')
  const character = JSON.parse(data) as ICharacter
  return character
}

export async function getCharacters(): Promise<ICharacter[]> {
  const files = await fs.readdir(charactersPath)
  const filesWithoutExtension = files.map(file => file.replace('.json', ''))
  const characters = await Promise.all(filesWithoutExtension.map(getCharacter))
  return characters
}

export async function getCharactersRedis() {
  const client = await redisConnect()
  const characters = await client.json.get('characters')
  await redisQuit()
  return characters
}

interface Character {
  userId: string
  name: string
  character_level: number
  character_ascension: number
  character_talent: [number, number, number]
}

class Character extends Entity {}

const characterSchema = new Schema(
  Character,
  {
    userId: { type: 'string' },
    name: { type: 'string' },
    character_level: { type: 'number' },
    character_ascension: { type: 'number' },
    character_talent: { type: 'array' },
  },
  { dataStructure: 'JSON' },
)

interface Traveler {
  userId: string
  name: string
  character_level: number
  character_ascension: number
  character_talent_anemo: [number, number, number]
  character_talent_geo: [number, number, number]
  character_talent_electro: [number, number, number]
}

class Traveler extends Entity {}

const travelerSchema = new Schema(
  Character,
  {
    userId: { type: 'string' },
    name: { type: 'string' },
    character_level: { type: 'number' },
    character_ascension: { type: 'number' },
    character_talent_anemo: { type: 'array' },
    character_talent_geo: { type: 'array' },
    character_talent_electro: { type: 'array' },
  },
  { dataStructure: 'JSON' },
)

const schema: Record<CharacterTypeEnum, Schema<Character | Traveler>> = {
  TRAVELER: travelerSchema,
  OTHERS: characterSchema,
}

const schemaKey: Record<CharacterTypeEnum, 'Traveler' | 'Character'> = {
  TRAVELER: 'Traveler',
  OTHERS: 'Character',
}

export async function getUserTodoCompletion(
  type: CharacterTypeEnum,
  userId: string,
): Promise<Entity | null> {
  const client = await redisOmConnect()
  const repository = new Repository(schema[type], client)
  const character = await repository
    .search()
    .where('userId')
    .equal(userId)
    .first()
  return character
}
