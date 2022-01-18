import { TodoTypeEnum } from '~/types/todo'

import { getUserRepo, updateUserIndex } from './redis/redis-user-schema.server'

export async function getUserData(userId: string) {
  const repository = await getUserRepo()
  const userData = await repository.search().where('id').equal(userId).first()
  return userData.data_ids
}

export async function initUserData(userId: string) {
  console.log('THIS IS SHOULD BE CALLED + INIT USER DATA')
  const repository = await getUserRepo()
  const userData = repository.createEntity()
  userData.id = userId
  userData.data_ids = []

  await repository.save(userData)
  await updateUserIndex()
}

export async function setUserData(
  data: { data_id: string; value: string },
  userId: string,
  type?: TodoTypeEnum,
) {
  const repository = await getUserRepo()
  const userData = await repository.fetch(userId)
  const existIn = userData.data_ids.findIndex(dataId => dataId.data_id === type)
  if (existIn === -1) {
    userData.data_ids.push(data)
  } else {
    userData.data_ids[existIn].value = data.value
  }
  await repository.save(userData)
}
