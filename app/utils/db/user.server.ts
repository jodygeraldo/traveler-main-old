import { Server } from '@prisma/client'
import bcrypt from 'bcryptjs'
import invariant from 'tiny-invariant'

import { db } from '~/services/db.server'

export async function login(username: string, password: string) {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
      server: true,
      passwordHash: true,
    },
  })

  if (!user) {
    throw new Error('Invalid username or password')
  }

  const valid = await bcrypt.compare(password, user.passwordHash)

  if (!valid) {
    throw new Error('Invalid username or password')
  }

  return {
    id: user.id,
    server: user.server,
  }
}

export async function signup(
  username: string,
  password: string,
  server: Server,
) {
  const exist = await db.user.findUnique({ where: { username } })

  invariant(!exist, 'Username already exists')

  const user = await db.user.create({
    data: {
      username,
      passwordHash: await bcrypt.hash(password, 10),
      server,
    },
    select: {
      id: true,
      server: true,
    },
  })

  return user
}
