import { addDays, differenceInSeconds, getDay, nextMonday, set } from 'date-fns'
import { getTimezoneOffset, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'

import { DayOfWeek } from '~/types/farmable'

type Region = 'EU' | 'NA' | 'AS'

function getCurrentTime(region: Region) {
  const regionTz: Record<Region, string> = {
    NA: 'EST',
    EU: 'CET',
    AS: 'Asia/Singapore',
  }

  return utcToZonedTime(new Date(), regionTz[region])
}

export function getDailyResetTime(region: Region) {
  const time = getCurrentTime(region)
  const nextReset = set(time, {
    hours: 4,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  })
  const diffSec = differenceInSeconds(nextReset, time)
  if (diffSec <= 0) {
    return differenceInSeconds(addDays(nextReset, 1), time)
  }
  return diffSec
}

export function getWeeklyResetTime(region: Region) {
  const time = getCurrentTime(region)
  const nextMondayTime = nextMonday(time)
  const nextReset = set(nextMondayTime, {
    hours: 4,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  })
  const diffSec = differenceInSeconds(nextReset, time)
  if (diffSec <= 0) {
    return differenceInSeconds(addDays(nextReset, 7), time)
  }
  return diffSec
}

export function getCurrentDay(region: Region) {
  const time = getCurrentTime(region)

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
