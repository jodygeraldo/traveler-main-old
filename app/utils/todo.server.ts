import { TodoTypeEnum } from '~/types/todo'

import {
  DailyTodo,
  getTodoRepo,
  OthersTodo,
  setTodoTTL,
  updateTodoIndex,
  WeeklyTodo,
} from './redis/redis-todo-schema.server'

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

async function getUserTodoEntity(type: TodoTypeEnum, userId: string) {
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

  return userTodos
}

async function addUserTodo(
  type: TodoTypeEnum,
  name: string,
  expire: number,
  userId: string,
) {
  const repository = await getTodoRepo(type)
  await updateTodoIndex(type)

  const userTodo = repository.createEntity()
  userTodo.user_id = userId
  userTodo.complete = [name]

  const id = await repository.save(userTodo)
  await setTodoTTL(type, id, expire)
}

export async function setUserTodo(
  type: TodoTypeEnum,
  name: string,
  expire: number,
  userId: string,
) {
  const repository = await getTodoRepo(type)
  const userTodo = await getUserTodoEntity(type, userId)

  if (!userTodo) {
    await addUserTodo(type, name, expire, userId)
    return
  }

  userTodo.complete.push(name)
  const id = await repository.save(userTodo)

  await setTodoTTL(type, id, expire)
}

export async function removeUserTodoEntry(
  type: TodoTypeEnum,
  name: string,
  expire: number,
  userId: string,
) {
  const repository = await getTodoRepo(type)
  const userTodo = await getUserTodoEntity(type, userId)

  // this is possible
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!userTodo) {
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
}
