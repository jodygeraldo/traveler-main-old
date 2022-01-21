import { TodoTypeEnum } from '~/types/todo'

import { getUserRepo, updateUserIndex } from './redis/redis-user-schema.server'

export async function getUserData(userId: string) {
  const repository = await getUserRepo()
  const userData = await repository.search().where('id').equal(userId).first()
  return userData.data_ids
}

export async function initUserData(userId: string) {
  const repository = await getUserRepo()
  const userData = repository.createEntity()
  userData.id = userId
  userData.data_ids = [`user:${userId}`]

  await repository.save(userData)
  await updateUserIndex()
}

export async function setUserData(
  data: { data_id: string; value: string },
  userId: string,
) {
  const repository = await getUserRepo()
  const userData = await repository.search().where('id').equal(userId).first()
  console.log(userData)
  const existIn = userData.data_ids.findIndex(
    dataId => dataId.split(':')[0] === data.data_id,
  )
  if (existIn === -1) {
    userData.data_ids.push(`${data.data_id}:${data.value}`)
  } else {
    userData.data_ids[existIn] = `${data.data_id}:${data.value}`
  }
  await repository.save(userData)
}

export function getDataId(userDataIds: string[], find: string) {
  const index = userDataIds.findIndex(
    // get the identifier before the separator
    // DAILY:01FSXPQQN9N0A32EMVCFKFPV29
    // [0]DAILY
    dataId => dataId.split(':')[0] === find,
  )

  // return the value after the separator
  // DAILY:01FSXPQQN9N0A32EMVCFKFPV29
  // [1]01FSXPQQN9N0A32EMVCFKFPV29
  return index === -1 ? undefined : userDataIds[index].split(':')[1]
}
