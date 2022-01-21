import { Entity, Repository, Schema } from 'redis-om'

import { redisOmConnect } from '../redis.server'

export interface User {
  id: string
  data_ids: string[]
}

export class User extends Entity {}

export const userSchema = new Schema(User, {
  id: { type: 'string' },
  data_ids: { type: 'array' },
})

export const getUserRepo = async () =>
  new Repository(userSchema, await redisOmConnect())

export async function updateUserIndex() {
  const repository = await getUserRepo()
  await repository.dropIndex()
  await repository.createIndex()
}
