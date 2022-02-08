import { Server } from '@prisma/client'
import {
  addDays,
  differenceInMilliseconds,
  getDay,
  nextMonday,
  set,
} from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

import { DayOfWeek } from '~/types/farmable'

function getCurrentTime(server: Server) {
  const regionTz: Record<Server, string> = {
    America: 'EST',
    Europe: 'CET',
    Asia: 'Asia/Singapore',
  }

  return utcToZonedTime(new Date(), regionTz[server])
}

export function getDailyResetTime(server: Server) {
  const time = getCurrentTime(server)
  let nextReset = set(time, {
    hours: 4,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  })

  if (time > nextReset) {
    nextReset = addDays(nextReset, 1)
  }

  return {
    resetDate: nextReset,
    diffInMil: differenceInMilliseconds(nextReset, time),
  }
}

export function getWeeklyResetTime(server: Server) {
  const time = getCurrentTime(server)
  const nextMondayTime = nextMonday(time)
  let nextReset = set(nextMondayTime, {
    hours: 4,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  })

  if (time > nextReset) {
    nextReset = addDays(nextReset, 7)
  }

  return {
    resetDate: nextReset,
    diffInMil: differenceInMilliseconds(nextReset, time),
  }
}

export function getCurrentDay(server: Server) {
  const time = getCurrentTime(server)

  const day = getDay(time)
  let dayInAplha: DayOfWeek
  switch (day) {
    case 0:
      dayInAplha = 'Sunday'
      break
    case 1:
      dayInAplha = 'Monday'
      break
    case 2:
      dayInAplha = 'Tuesday'
      break
    case 3:
      dayInAplha = 'Wednesday'
      break
    case 4:
      dayInAplha = 'Thursday'
      break
    case 5:
      dayInAplha = 'Friday'
      break
    default:
      dayInAplha = 'Saturday'
      break
  }
  return dayInAplha
}
