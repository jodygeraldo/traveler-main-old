import {
  AscensionBossMaterial,
  AscensionGem,
  CommonMaterial,
  LocalSpecialty,
  TalentBook,
  TalentBossMaterial,
} from './item'

export type CharacterName =
  | 'Albedo'
  | 'Aloy'
  | 'Amber'
  | 'Arataki Itto'
  | 'Barbara'
  | 'Beidou'
  | 'Bennett'
  | 'Chongyun'
  | 'Diluc'
  | 'Diona'
  | 'Eula'
  | 'Fischl'
  | 'Ganyu'
  | 'Gorou'
  | 'Hu Tao'
  | 'Jean'
  | 'Kaedehara Kazuha'
  | 'Kaeya'
  | 'Kamisato Ayaka'
  | 'Keqing'
  | 'Klee'
  | 'Kujou Sara'
  | 'Lisa'
  | 'Mona'
  | 'Ningguang'
  | 'Noelle'
  | 'Qiqi'
  | 'Raiden Shogun'
  | 'Razor'
  | 'Rosaria'
  | 'Sangonomiya Kokomi'
  | 'Sayu'
  | 'Shenhe'
  | 'Sucrose'
  | 'Tartaglia'
  | 'Thoma'
  | 'Traveler'
  | 'Traveler Anemo'
  | 'Traveler Geo'
  | 'Traveler Electro'
  | 'Traveler Dendro'
  | 'Traveler Pyro'
  | 'Traveler Cryo'
  | 'Traveler Hydro'
  | 'Venti'
  | 'Xiangling'
  | 'Xiao'
  | 'Xingqiu'
  | 'Xinyan'
  | 'Yanfei'
  | 'Yoimiya'
  | 'Yun Jin'
  | 'Zhongli'

export type Vision =
  | 'Anemo'
  | 'Cryo'
  | 'Dendro'
  | 'Electro'
  | 'Geo'
  | 'Hydro'
  | 'Pyro'

export type WeaponType = 'Bow' | 'Catalyst' | 'Claymore' | 'Polearm' | 'Sword'

export interface IAscensionMaterial {
  number?: { name: ''; amount: number }
  mora: { name: 'Mora'; amount: number }
  gem: { name: AscensionGem; amount: number }
  localSpecialty: { name: LocalSpecialty; amount: number }
  common: { name: CommonMaterial; amount: number }
  boss?: { name: AscensionBossMaterial; amount: number }
}

export type AscensionType = [
  IAscensionMaterial,
  IAscensionMaterial,
  IAscensionMaterial,
  IAscensionMaterial,
  IAscensionMaterial,
  IAscensionMaterial,
]

export interface ITalentMaterial {
  number?: { name: ''; amount: number }
  mora: { name: 'Mora'; amount: number }
  common: { name: CommonMaterial; amount: number }
  book: { name: TalentBook; amount: number }
  boss?: { name: TalentBossMaterial; amount: number }
  crown?: { name: 'Crown of Insight'; amount: number }
}

export type TalentType = [
  ITalentMaterial,
  ITalentMaterial,
  ITalentMaterial,
  ITalentMaterial,
  ITalentMaterial,
  ITalentMaterial,
  ITalentMaterial,
  ITalentMaterial,
  ITalentMaterial,
]

export interface ICharacter {
  name: CharacterName
  vision: Vision
  rarity: 4 | 5 | 'aloy'
  weaponType: WeaponType
  material: {
    ascension: AscensionType
    talent:
      | TalentType
      | { normal: TalentType; skill: TalentType; burst: TalentType }
  }
  id?: string
  ownership?: boolean
  progression: {
    level: number
    ascension: number
    talent: [number, number, number]
  }
}
