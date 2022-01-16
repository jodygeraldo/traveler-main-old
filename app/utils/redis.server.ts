import { createClient } from 'redis'
import { Client } from 'redis-om'

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

let redisOmClient: Client

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var __redisClient: Client | undefined
}

export async function redisOmConnect() {
  if (process.env.NODE_ENV === 'production') {
    redisOmClient = new Client()
    await redisOmClient.open(REDIS_URL)
  } else {
    if (!global.__redisClient) {
      global.__redisClient = new Client()
      await global.__redisClient.open(REDIS_URL)
    }
    redisOmClient = global.__redisClient
  }

  return redisOmClient
}
