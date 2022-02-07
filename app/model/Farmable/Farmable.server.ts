import { FarmDayTypeEnum, IFarmable } from './FarmableType'

const FarmableMap = new Map<FarmDayTypeEnum, IFarmable[]>()

FarmableMap.set(FarmDayTypeEnum.MT, [
  {
    name: 'Freedom',
    characters: [
      { name: 'Aloy', rarity: 5 },
      { name: 'Amber', rarity: 4 },
      { name: 'Barbara', rarity: 4 },
      { name: 'Diona', rarity: 4 },
      { name: 'Klee', rarity: 5 },
      { name: 'Sucrose', rarity: 4 },
      { name: 'Tartaglia', rarity: 5 },
      { name: 'Traveler Anemo', rarity: 5 },
    ],
  },
  {
    name: 'Prosperity',
    characters: [
      { name: 'Keqing', rarity: 5 },
      { name: 'Ningguang', rarity: 4 },
      { name: 'Qiqi', rarity: 5 },
      { name: 'Shenhe', rarity: 5 },
      { name: 'Traveler Geo', rarity: 5 },
      { name: 'Xiao', rarity: 5 },
    ],
  },
  {
    name: 'Transience',
    characters: [
      { name: 'Sangonomiya Kokomi', rarity: 5 },
      { name: 'Thoma', rarity: 4 },
      { name: 'Traveler Electro', rarity: 5 },
      { name: 'Yoimiya', rarity: 5 },
    ],
  },
])

FarmableMap.set(FarmDayTypeEnum.TF, [
  {
    name: 'Elegance',
    characters: [
      { name: 'Arataki Itto', rarity: 5 },
      { name: 'Kamisato Ayaka', rarity: 5 },
      { name: 'Kujou Sara', rarity: 4 },
    ],
  },
  {
    name: 'Resistance',
    characters: [
      { name: 'Bennett', rarity: 4 },
      { name: 'Diluc', rarity: 5 },
      { name: 'Eula', rarity: 5 },
      { name: 'Jean', rarity: 5 },
      { name: 'Mona', rarity: 5 },
      { name: 'Noelle', rarity: 4 },
      { name: 'Razor', rarity: 4 },
    ],
  },
  {
    name: 'Diligence',
    characters: [
      { name: 'Chongyun', rarity: 4 },
      { name: 'Ganyu', rarity: 5 },
      { name: 'Hu Tao', rarity: 5 },
      { name: 'Kaedehara Kazuha', rarity: 5 },
      { name: 'Xiangling', rarity: 4 },
      { name: 'Yun Jin', rarity: 4 },
    ],
  },
])

FarmableMap.set(FarmDayTypeEnum.WS, [
  {
    name: 'Ballad',
    characters: [
      { name: 'Albedo', rarity: 5 },
      { name: 'Fischl', rarity: 4 },
      { name: 'Kaeya', rarity: 4 },
      { name: 'Lisa', rarity: 4 },
      { name: 'Rosaria', rarity: 4 },
      { name: 'Venti', rarity: 5 },
    ],
  },
  {
    name: 'Gold',
    characters: [
      { name: 'Beidou', rarity: 4 },
      { name: 'Xingqiu', rarity: 4 },
      { name: 'Xinyan', rarity: 4 },
      { name: 'Yanfei', rarity: 4 },
      { name: 'Zhongli', rarity: 5 },
    ],
  },
  {
    name: 'Light',
    characters: [
      { name: 'Gorou', rarity: 4 },
      { name: 'Raiden Shogun', rarity: 5 },
      { name: 'Sayu', rarity: 4 },
    ],
  },
])

export function getFarmables() {
  const result: IFarmable[] = []
  FarmableMap.forEach(value => value.map(v => result.push(v)))
  return result
}

export default FarmableMap
