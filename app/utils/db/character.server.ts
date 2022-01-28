import charactersAnemoMap from '~/services/data/characters/character-anemo.server'
import charactersCryoMap from '~/services/data/characters/character-cryo.server'
import charactersDendroMap from '~/services/data/characters/character-dendro.server'
import charactersElectroMap from '~/services/data/characters/character-electro.server'
import charactersGeoMap from '~/services/data/characters/character-geo.server'
import charactersHydroMap from '~/services/data/characters/character-hydro.server'
import charactersPyroMap from '~/services/data/characters/character-pyro.server'
import { db } from '~/services/db.server'
import { CharacterName, ICharacter } from '~/types/character'

export function getCharacters() {
  const characters: ICharacter[] = []
  charactersAnemoMap.forEach(value => characters.push(value))
  charactersCryoMap.forEach(value => characters.push(value))
  charactersDendroMap.forEach(value => characters.push(value))
  charactersElectroMap.forEach(value => characters.push(value))
  charactersGeoMap.forEach(value => characters.push(value))
  charactersHydroMap.forEach(value => characters.push(value))
  charactersPyroMap.forEach(value => characters.push(value))

  return characters.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })
}

export async function getUserCharacters(userId: string) {
  const userCharacters = await db.character.findMany({
    where: {
      userId,
      deleted: false,
    },
    select: {
      id: true,
      name: true,
      level: true,
      ascension: true,
      talent: true,
    },
  })

  return userCharacters
}

export async function addUserCharacterOwnership(userId: string, name: string) {
  await db.character.create({
    data: {
      name,
      level: 1,
      ascension: 0,
      talent: [1, 1, 1],
      userId,
    },
  })
}

export async function updateUserCharacterOwnership(
  id: string,
  deleted: boolean,
) {
  await db.character.update({
    where: {
      id,
    },
    data: {
      deleted,
    },
  })
}

export async function addUserCharacter(
  userId: string,
  name: string,
  level: number,
  ascension: number,
  talent: ICharacter['progression']['talent'],
) {
  await db.character.create({
    data: {
      userId,
      name,
      level,
      ascension,
      talent,
    },
  })
}

export async function updateUserCharacter(
  id: string,
  level: number,
  ascension: number,
  talent: ICharacter['progression']['talent'],
) {
  await db.character.update({
    where: {
      id,
    },
    data: {
      level,
      ascension,
      talent,
    },
  })
}

export function getUpdatedCharacters(
  userCharacters: {
    level: number
    talent: [number, number, number]
    id: string
    name: string
    ascension: number
  }[],
  characters: ICharacter[],
) {
  const updatedCharacters = characters

  userCharacters.forEach(character => {
    const index = updatedCharacters.findIndex(c => c.name === character.name)
    if (index === -1) return
    updatedCharacters[index].id = character.id
    updatedCharacters[index].ownership = true
    updatedCharacters[index].progression.level = character.level
    updatedCharacters[index].progression.ascension = character.ascension
    updatedCharacters[index].progression.talent = character.talent
  })

  return updatedCharacters
}

export const characterName: CharacterName[] = [
  'Albedo',
  'Aloy',
  'Amber',
  'Arataki Itto',
  'Barbara',
  'Beidou',
  'Bennett',
  'Chongyun',
  'Diluc',
  'Diona',
  'Eula',
  'Fischl',
  'Ganyu',
  'Gorou',
  'Hu Tao',
  'Jean',
  'Kaedehara Kazuha',
  'Kaeya',
  'Kamisato Ayaka',
  'Keqing',
  'Klee',
  'Kujou Sara',
  'Lisa',
  'Mona',
  'Ningguang',
  'Noelle',
  'Qiqi',
  'Raiden Shogun',
  'Razor',
  'Rosaria',
  'Sangonomiya Kokomi',
  'Sayu',
  'Shenhe',
  'Sucrose',
  'Tartaglia',
  'Thoma',
  'Traveler Anemo',
  'Traveler Geo',
  'Traveler Electro',
  'Venti',
  'Xiangling',
  'Xiao',
  'Xingqiu',
  'Xinyan',
  'Yanfei',
  'Yoimiya',
  'Yun Jin',
  'Zhongli',
]
