import { Entity, Schema } from 'redis-om'

// * Todo schema
export interface DailyTodo {
  user_id: string
  complete: string[]
}
export class DailyTodo extends Entity {}
export const dailyTodoSchema = new Schema(DailyTodo, {
  user_id: { type: 'string' },
  complete: { type: 'array' },
})

export interface WeeklyTodo {
  user_id: string
  complete: string[]
}
export class WeeklyTodo extends Entity {}
export const weeklyTodoSchema = new Schema(WeeklyTodo, {
  user_id: { type: 'string' },
  complete: { type: 'array' },
})

export interface OthersTodo {
  user_id: string
  complete: string[]
}
export class OthersTodo extends Entity {}
export const othersTodoSchema = new Schema(OthersTodo, {
  user_id: { type: 'string' },
  complete: { type: 'array' },
})

// *  Character Schema
export interface CharacterOwnership {
  user_id: string
  characters: string[]
}

export class CharacterOwnership extends Entity {}

export const characterOwnershipSchema = new Schema(CharacterOwnership, {
  user_id: { type: 'string' },
  characters: { type: 'array' },
})

export interface Character {
  user_id: string
  name: string
  character_level: number
  character_ascension: number
  character_talent: [number, number, number]
}

export class Character extends Entity {}

export const characterSchema = new Schema(Character, {
  user_id: { type: 'string' },
  name: { type: 'string' },
  character_level: { type: 'number' },
  character_ascension: { type: 'number' },
  character_talent: { type: 'array' },
})

export interface Traveler {
  user_id: string
  name: string
  character_level: number
  character_ascension: number
  character_talent_anemo: [number, number, number]
  character_talent_geo: [number, number, number]
  character_talent_electro: [number, number, number]
}

export class Traveler extends Entity {}

export const travelerSchema = new Schema(Character, {
  user_id: { type: 'string' },
  name: { type: 'string' },
  character_level: { type: 'number' },
  character_ascension: { type: 'number' },
  character_talent_anemo: { type: 'array' },
  character_talent_geo: { type: 'array' },
  character_talent_electro: { type: 'array' },
})
