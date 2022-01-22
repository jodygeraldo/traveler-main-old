import {
  AscensionBossMaterial,
  AscensionCommonMaterial,
  AscensionGem,
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

export interface ICharacter {
  name: CharacterName
  vision: Vision
  rarity: 4 | 5 | 'aloy'
  weapon_type: WeaponType
  materials: {
    talent: {
      book: TalentBook
      boss: TalentBossMaterial
    }
    ascension: {
      material: AscensionGem
      boss: AscensionBossMaterial
      local: LocalSpecialty
      common: AscensionCommonMaterial
    }
  }
  path: string
  own: boolean
  level?: {
    character: number
    ascension: number
    talent: [number, number, number]
  }
}

export interface ITraveler {
  name: 'Traveler'
  vision: Vision[]
  rarity: 5
  weapon_type: WeaponType
  materials: {
    talent: {
      anemo: {
        book: 'Freedom'
        boss: "Dvalin's Sigh"
      }
      geo: {
        book: 'Prosperity'
        boss: 'Tail of Boreas'
      }
      electro: {
        book: 'Transience'
        boss: "Dragon Lord's Crown"
      }
    }
    ascension: {
      material: 'Brilliant Diamond'
      local: 'Windwheel Aster'
      common: 'Hilichurl Mask'
    }
  }
  path: string
  own: boolean
  level?: {
    character: number
    ascension: number
    talent: {
      anemo: [number, number, number]
      geo: [number, number, number]
      electro: [number, number, number]
    }
  }
}

export enum CharacterActionTypeEnum {
  Ownership = 'OWNERSHIP',
  Munual = 'MUNUAL',
  Automatic = 'AUTOMATIC',
}
