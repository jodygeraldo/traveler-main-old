import { FarmableType, FarmDayTypeEnum } from '~/types/farmable'

const farmable = new Map<FarmDayTypeEnum, FarmableType>()

farmable.set(FarmDayTypeEnum.MT, [
  {
    name: 'Philosophies of Freedom',
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
    name: 'Philosophies of Prosperity',
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
    name: 'Philosophies of Transience',
    characters: ['Sangonomiya Kokomi', 'Thoma', 'Electro Traveler', 'Yoimiya'],
  },
])

farmable.set(FarmDayTypeEnum.TF, [
  {
    name: 'Philosophies of Elegance',
    characters: ['Arataki Itto', 'Kamisato Ayaka', 'Kujou Sara'],
  },
  {
    name: 'Philosophies of Resistance',
    characters: ['Bennett', 'Diluc', 'Eula', 'Jean', 'Mona', 'Noelle', 'Razor'],
  },
  {
    name: 'Philosophies of Diligence',
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
    name: 'Philosophies of Ballad',
    characters: ['Albedo', 'Fischl', 'Kaeya', 'Lisa', 'Rosaria', 'Venti'],
  },
  {
    name: 'Philosophies of Gold',
    characters: ['Beidou', 'Xingqiu', 'Xinyan', 'Yanfei', 'Zhongli'],
  },
  {
    name: 'Philosophies of Light',
    characters: ['Gorou', 'Raiden Shogun', 'Sayu'],
  },
])

function getFarmables() {
  const result: FarmableType = []
  farmable.forEach(value => value.map(v => result.push(v)))
  return result
}

export { farmable, getFarmables }
