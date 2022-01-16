import fs from 'fs/promises'
import path from 'path'

import type { DayOfWeek, IFarmable } from '~/types/farmable'

const farmablesPath = path.join(__dirname, '../app/data/farmable')

export async function getFarmable(name: string): Promise<IFarmable> {
  const filepath = path.join(farmablesPath, `${name}.json`)
  const data = await fs.readFile(filepath, 'utf8')
  const farmable = JSON.parse(data) as IFarmable
  return farmable
}

export async function getFarmables(): Promise<IFarmable[]> {
  const files = await fs.readdir(farmablesPath)
  const filesWithoutExtension = files.map(file => file.replace('.json', ''))
  const farmables = await Promise.all(filesWithoutExtension.map(getFarmable))
  return farmables
}

export function getFileName(day: DayOfWeek) {
  switch (day) {
    case 'Monday':
    case 'Thursday':
      return 'group_1'
    case 'Tuesday':
    case 'Friday':
      return 'group_2'
    case 'Wednesday':
    case 'Saturday':
      return 'group_3'
    default:
      return 'group_full'
  }
}
