import { TodoType } from '@prisma/client'

import { db } from '~/services/db.server'

export async function getUserTodo(
  userId: string,
  type: TodoType,
  expire: Date,
) {
  return db.todo.findFirst({
    where: {
      userId,
      type,
      expire,
    },
    select: {
      completed: true,
    },
  })
}

export async function updateUserTodo(
  userId: string,
  type: TodoType,
  expire: Date,
  todo: string[],
) {
  const userTodo = await db.todo.findFirst({
    where: {
      userId,
      type,
      expire,
    },
    select: {
      id: true,
    },
  })

  await db.todo.upsert({
    where: {
      id: userTodo ? userTodo.id : '',
    },
    create: {
      userId,
      type,
      completed: todo,
      expire,
    },
    update: {
      completed: todo,
    },
  })
}
