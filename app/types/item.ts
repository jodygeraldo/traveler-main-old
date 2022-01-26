import { GenshinRegion } from './general'

export type TalentCrown = 'Crown of Insight'

export type TalentBook =
  | 'Freedom'
  | 'Prosperity'
  | 'Transience'
  | 'Elegance'
  | 'Resistance'
  | 'Diligence'
  | 'Ballad'
  | 'Gold'
  | 'Light'

export type TalentBossMaterial =
  | "Dvalin's Plume"
  | "Dvalin's Claw"
  | "Dvalin's Sigh"
  | 'Tail of Boreas'
  | 'Ring of Boreas'
  | 'Spirit Locket of Boreas'
  | 'Tusk of Monoceros Caeli'
  | 'Shard of a Foul Legacy'
  | 'Shadow of the Warrior'
  | "Dragon Lord's Crown"
  | 'Bloodjade Branch'
  | 'Gilded Scale'
  | 'Molten Moment'
  | 'Ashen Heart'
  | 'Hellfire Butterfly'

export type AscensionGem =
  | 'Brilliant Diamond'
  | 'Agnidus Agate'
  | 'Varunada Lazurite'
  | 'Vajrada Amethyst'
  | 'Vayuda Turquoise'
  | 'Shivada Jade'
  | 'Prithiva Topaz'

export type AscensionBossMaterial =
  | 'Hurricane Seed'
  | 'Lightning Prism'
  | 'Basalt Pillar'
  | 'Hoarfrost Core'
  | 'Everflame Seed'
  | 'Cleansing Heart'
  | 'Juvenile Jade'
  | 'Crystalline Bloom'
  | 'Marionette Core'
  | 'Perpetual Heart'
  | 'Smoldering Pearl'
  | 'Dew of Repudiation'
  | 'Storm Beads'
  | 'Riftborn Regalia'
  | "Dragonheir's False Fin"

export type LocalSpecialty =
  | 'Calla Lily'
  | 'Wolfhook'
  | 'Valberry'
  | 'Cecilia'
  | 'Windwheel Aster'
  | 'Philanemo Mushroom'
  | 'Jueyun Chili'
  | 'Noctilucous Jade'
  | 'Silk Flower'
  | 'Glaze Lily'
  | 'Qingxin'
  | 'Starconch'
  | 'Violet Grass'
  | 'Small Lamp Grass'
  | 'Dandelion'
  | 'Cor Lapis'
  | 'Onikabuto'
  | 'Sakura Bloom'
  | 'Crystal Marrow'
  | 'Dendrobium'
  | 'Naku Weed'
  | 'Sea Ganoderma'
  | 'Sango Pearl'
  | 'Amakumo Fruit'
  | 'Fluorescent Fungus'

export type AscensionCommonMaterial =
  | 'Slime'
  | 'Hilichurl Masks'
  | 'Samachurl Scrolls'
  | 'Hilichurl Arrowheads'
  | 'Fatui Insignia'
  | 'Treasure Hoarder Insignias'
  | 'Whopperflower Nectar'
  | 'Nobushi Handguards'
  | 'Spectral Cores'
  | 'Hilichurl Horns'
  | 'Ley Lines'
  | 'Chaos Parts'
  | 'Mist Grass'
  | 'Sacrificial Knifes'
  | 'Bone Shards'
  | 'Sentinel Chaos Parts'
  | 'Prisms'
  | 'Concealed Rifthound Claws'

export type ItemCategory =
  | 'Talent Crown'
  | 'Talent Book'
  | 'Talent Boss Material'
  | 'Ascension Gem'
  | 'Ascension Boss Material'
  | 'Local Specialty'
  | 'Ascension Common Material'

export interface ITalentCrown {
  name: 'Crown of Insight'
  count?: number
}

export interface ITalentBook {
  name: TalentBook
  region: GenshinRegion
  count?: number
}

export interface ITalentBossMaterial {
  name: TalentBossMaterial
  region: GenshinRegion
  count?: number
}

export interface IAscensionGem {
  name: AscensionGem
  count?: number
}

export interface IAscensionBossMaterial {
  name: AscensionBossMaterial
  region: GenshinRegion
  count?: number
}

export interface IAscensionCommonMaterial {
  name: AscensionCommonMaterial
  isElite: boolean
  count?: number
}

export interface ILocalSpecialty {
  name: LocalSpecialty
  region: GenshinRegion
  count?: number
}

export type ItemTypes = {
  talentCrown: ITalentCrown[]
  talentBook: ITalentBook[]
  talentBossMaterial: ITalentBossMaterial[]
  ascensionGem: IAscensionGem[]
  ascensionLocalSpecialty: ILocalSpecialty[]
  ascensionCommonMaterial: IAscensionCommonMaterial[]
  ascensionBossMaterial: IAscensionBossMaterial[]
}
