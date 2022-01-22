import { FarmableType, FarmDayTypeEnum } from '~/types/farmable'

const farmable = new Map<FarmDayTypeEnum, FarmableType>()

farmable.set(FarmDayTypeEnum.MT, [
  {
    name: 'Freedom',
    characters: [
      'Aloy',
      'Amber',
      'Barbara',
      'Diona',
      'Klee',
      'Sucrose',
      'Tartaglia',
      'Anemo Traveler',
    ],
  },
  {
    name: 'Prosperity',
    characters: [
      'Keqing',
      'Ningguang',
      'Qiqi',
      'Shenhe',
      'Geo Traveler',
      'Xiao',
    ],
  },
  {
    name: 'Transience',
    characters: ['Sangonomiya Kokomi', 'Thoma', 'Electro Traveler', 'Yoimiya'],
  },
])

farmable.set(FarmDayTypeEnum.TF, [
  {
    name: 'Elegance',
    characters: ['Arataki Itto', 'Kamisato Ayaka', 'Kujou Sara'],
  },
  {
    name: 'Resistance',
    characters: ['Bennett', 'Diluc', 'Eula', 'Jean', 'Mona', 'Noelle', 'Razor'],
  },
  {
    name: 'Diligence',
    characters: [
      'Chongyun',
      'Ganyu',
      'Hu Tao',
      'Kaedehara Kazuha',
      'Xiangling',
      'Yun Jin',
    ],
  },
])

farmable.set(FarmDayTypeEnum.WS, [
  {
    name: 'Ballad',
    characters: ['Albedo', 'Fischl', 'Kaeya', 'Lisa', 'Rosaria', 'Venti'],
  },
  {
    name: 'Gold',
    characters: ['Beidou', 'Xingqiu', 'Xinyan', 'Yanfei', 'Zhongli'],
  },
  {
    name: 'Light',
    characters: ['Gorou', 'Raiden Shogun', 'Sayu'],
  },
])

function getFarmables() {
  const result: FarmableType = []
  farmable.forEach(value => value.map(v => result.push(v)))
  return result
}

export { farmable, getFarmables }
