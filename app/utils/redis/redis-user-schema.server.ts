import { Entity, Repository, Schema } from 'redis-om'

import { redisOmConnect } from '../redis.server'

/*
 * User Schema
 */
interface User {
  id: string
  data_ids: Array<{ data_id: string; value: string }>
}

class User extends Entity {}

const userSchema = new Schema(User, {
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
