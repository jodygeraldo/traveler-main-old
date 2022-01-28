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
  | 'Anemo Traveler'
  | 'Geo Traveler'
  | 'Electro Traveler'
  | 'Dendro Traveler'
  | 'Pyro Traveler'
  | 'Cryo Traveler'
  | 'Hydro Traveler'
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
  mora: number
  gem: { name: AscensionGem; count: number }
  localSpecialty: { name: LocalSpecialty; count: number }
  common: { name: CommonMaterial; count: number }
  boss?: { name: AscensionBossMaterial; count: number }
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
  mora: number
  common: { name: CommonMaterial; count: number }
  book: { name: TalentBook; count: number }
  boss?: { name: TalentBossMaterial; count: number }
  crown?: number
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
