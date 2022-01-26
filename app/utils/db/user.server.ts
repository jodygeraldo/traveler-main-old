import bcrypt from 'bcryptjs'
import invariant from 'tiny-invariant'

import { db } from './db.server'

export async function login(username: string, password: string) {
  const user = await db.user.findUnique({
    where: {
      username,
    },
  })

  invariant(user, 'Invalid username or password')

  const valid = await bcrypt.compare(password, user.passwordHash)

  invariant(valid, 'Invalid username or password')

  return user
}

export async function signup(
  username: string,
  password: string,
  server: string,
) {
  const exist = await db.user.findUnique({ where: { username } })

  invariant(!exist, 'Username already exists')

  const user = await db.user.create({
    data: {
      username,
      passwordHash: await bcrypt.hash(password, 10),
      server,
    },
  })

  return user
}
