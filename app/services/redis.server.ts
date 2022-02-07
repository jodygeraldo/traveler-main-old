import { createClient } from 'redis'

// setup this in .env later
const REDIS_USERNAME = 'default'
const REDIS_PASSWORD = 'a2rEJ3WSh88Yo95eNO5aeFMjNdTazwPe'
const REDIS_HOST = 'redis-11384.c295.ap-southeast-1-1.ec2.cloud.redislabs.com'
const REDIS_PORT = 11384
const REDIS_URL = `redis://${REDIS_USERNAME}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`

const client = createClient({ url: REDIS_URL })

export async function redisConnect() {
  client.on('error', err => console.log('Redis Client Error', err))

  if (!client.isOpen) {
    await client.connect()
  }

  return client
}

export async function redisQuit() {
  await client.quit()
}

export async function redisDisconnect() {
  await client.disconnect()
}
