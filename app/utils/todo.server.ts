import { Repository, Schema } from 'redis-om'

import { TodoTypeEnum } from '~/types/todo'

import { redisOmConnect } from './redis.server'
import {
  DailyTodo,
  dailyTodoSchema,
  OthersTodo,
  othersTodoSchema,
  WeeklyTodo,
  weeklyTodoSchema,
} from './redis-schema.server'

const schema: Record<
  TodoTypeEnum,
  Schema<DailyTodo | WeeklyTodo | OthersTodo>
> = {
  DAILY: dailyTodoSchema,
  WEEKLY: weeklyTodoSchema,
  OTHERS: othersTodoSchema,
}

const schemaKey: Record<
  TodoTypeEnum,
  'DailyTodo' | 'WeeklyTodo' | 'OthersTodo'
> = {
  DAILY: 'DailyTodo',
  WEEKLY: 'WeeklyTodo',
  OTHERS: 'OthersTodo',
}

async function getTodoRepo(type: TodoTypeEnum) {
  const client = await redisOmConnect()
  return new Repository(schema[type], client)
}

async function setTodoTTL(type: TodoTypeEnum, id: string, expire: number) {
  const client = await redisOmConnect()
  await client.execute(['EXPIRE', `${schemaKey[type]}:${id}`, expire])
}

async function updateIndex(type: TodoTypeEnum) {
  const repository = await getTodoRepo(type)
  await repository.dropIndex()
  await repository.createIndex()
}

export async function getUserTodo(type: TodoTypeEnum, userId: string) {
  const repository = await getTodoRepo(type)
  const userTodos = await repository
    .search()
    .where('user_id')
    .equal(userId)
    .first()

  // this is possible if the search function doesn't find the given userId
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!userTodos) {
    return null
  }

  return userTodos.complete
}

export async function addUserTodo(
  type: TodoTypeEnum,
  userId: string,
  name: string,
  expire: number,
) {
  const repository = await getTodoRepo(type)
  await updateIndex(type)

  const userTodo = repository.createEntity()
  userTodo.user_id = userId
  userTodo.complete = [name]

  const id = await repository.save(userTodo)
  await setTodoTTL(type, id, expire)
  return id
}

export async function setUserTodo(
  type: TodoTypeEnum,
  dataId: string,
  userId: string,
  name: string,
  expire: number,
) {
  const repository = await getTodoRepo(type)

  const userTodo = await repository.fetch(dataId)
  if (!userTodo.user_id) {
    const id = await addUserTodo(type, userId, name, expire)
    return id
  }

  userTodo.complete.push(name)
  const id = await repository.save(userTodo)

  await setTodoTTL(type, id, expire)
  return id
}

export async function removeUserTodoEntry(
  type: TodoTypeEnum,
  dataId: string,
  name: string,
  expire: number,
) {
  const repository = await getTodoRepo(type)
  const userTodo = await repository.fetch(dataId)
  if (!userTodo.user_id) {
    throw new Error(
      'You should refresh the page, your todo data not sync properly with the server',
    )
  }

  const indexOfTodoName = userTodo.complete.indexOf(name)
  if (indexOfTodoName === -1) {
    throw new Error(
      'You should refresh the page, your todo data not sync properly with the server',
    )
  }

  userTodo.complete.splice(indexOfTodoName, 1)
  const id = await repository.save(userTodo)

  await setTodoTTL(type, id, expire)
  return id
}
