import { TodoTypeEnum } from '~/types/todo'

import {
  getTodoRepo,
  setTodoTTL,
  updateTodoIndex,
} from './redis/redis-todo-schema.server'
import { setUserData } from './user.server'

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

  await setUserData({ data_id: type, value: id }, userId)

  return id
}

export async function setUserTodo(
  type: TodoTypeEnum,
  userId: string,
  name: string,
  expire: number,
  dataId = '',
) {
  const repository = await getTodoRepo(type)

  const userTodo = await repository.fetch(dataId)
  if (!userTodo.user_id) {
    const id = await addUserTodo(type, name, expire, userId)
    return id
  }

  userTodo.complete.push(name)
  await repository.save(userTodo)

  await setTodoTTL(type, dataId, expire)
  return null
}

export async function removeUserTodoEntry(
  type: TodoTypeEnum,
  name: string,
  expire: number,
  dataId = '',
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
  await repository.save(userTodo)

  await setTodoTTL(type, dataId, expire)
  return null
}
