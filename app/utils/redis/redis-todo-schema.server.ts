import { Entity, Repository, Schema } from 'redis-om'

import { TodoTypeEnum } from '~/types/todo'

import { redisOmConnect } from '../redis.server'

/*
 * Daily Todo Schema
 */
export interface DailyTodo {
  user_id: string
  complete: string[]
}

export class DailyTodo extends Entity {}

export const dailyTodoSchema = new Schema(DailyTodo, {
  user_id: { type: 'string' },
  complete: { type: 'array' },
})

/*
 * Weekly Todo Schema
 */
export interface WeeklyTodo {
  user_id: string
  complete: string[]
}

export class WeeklyTodo extends Entity {}

export const weeklyTodoSchema = new Schema(WeeklyTodo, {
  user_id: { type: 'string' },
  complete: { type: 'array' },
})

/*
 * Others Todo Schema
 */
export interface OthersTodo {
  user_id: string
  complete: string[]
}

export class OthersTodo extends Entity {}

export const othersTodoSchema = new Schema(OthersTodo, {
  user_id: { type: 'string' },
  complete: { type: 'array' },
})

const todoSchema: Record<
  TodoTypeEnum,
  Schema<DailyTodo | WeeklyTodo | OthersTodo>
> = {
  DAILY: dailyTodoSchema,
  WEEKLY: weeklyTodoSchema,
  OTHERS: othersTodoSchema,
}

const todoSchemaKey: Record<
  TodoTypeEnum,
  'DailyTodo' | 'WeeklyTodo' | 'OthersTodo'
> = {
  DAILY: 'DailyTodo',
  WEEKLY: 'WeeklyTodo',
  OTHERS: 'OthersTodo',
}

/*
 * Todo Helper Functions
 */
export async function getTodoRepo(type: TodoTypeEnum) {
  const client = await redisOmConnect()
  return new Repository(todoSchema[type], client)
}

export async function setTodoTTL(
  type: TodoTypeEnum,
  id: string,
  expire: number,
) {
  const client = await redisOmConnect()
  await client.execute(['EXPIRE', `${todoSchemaKey[type]}:${id}`, expire])
}

export async function updateTodoIndex(type: TodoTypeEnum) {
  const repository = await getTodoRepo(type)
  await repository.dropIndex()
  await repository.createIndex()
}
