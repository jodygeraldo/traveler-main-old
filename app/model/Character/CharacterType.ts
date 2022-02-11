import {
  AscensionBossMaterial,
  AscensionGemGroup,
  CommonMaterialGroup,
  Crown,
  LocalSpecialty,
  TalentBookGroup,
  TalentBossMaterial,
} from '~/model/Item/ItemType'

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

export type CharacterVision =
  | 'Anemo'
  | 'Cryo'
  | 'Dendro'
  | 'Electro'
  | 'Geo'
  | 'Hydro'
  | 'Pyro'

export type CharacterWeapon =
  | 'Bow'
  | 'Catalyst'
  | 'Claymore'
  | 'Polearm'
  | 'Sword'

export interface ICharacter extends ICharacterData {
  progression?: {
    level: number
    ascension: number
    talent: [number, number, number]
  }
  rarity: 4 | 5
  weapon: CharacterWeapon
  material: {
    crown: Crown
    common: CommonMaterialGroup
    talentBook: TalentBookGroup[]
    talentBoss: TalentBossMaterial
    talentCommon?: CommonMaterialGroup
    ascensionGem: AscensionGemGroup
    ascensionBoss?: AscensionBossMaterial
    localSpecialty: LocalSpecialty
  }
}

export interface ICharacterData {
  name: CharacterName
  vision: CharacterVision
  level?: number
  ascension?: number
  ownership?: boolean
  tracked?: boolean
  characterUserId?: string
}
