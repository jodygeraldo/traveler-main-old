import { GenshinRegion } from './general'

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
  | 'TalentCrown'
  | 'TalentBook'
  | 'TalentBossMaterial'
  | 'AscensionGem'
  | 'AscensionBossMaterial'
  | 'LocalSpecialty'
  | 'AscensionCommonMaterial'

export interface ITalentCrown {
  id: number
  name: 'Crown of Insight'
}

export interface ITalentBook {
  id: number
  name: TalentBook
  region: GenshinRegion
}

export interface ITalentBossMaterial {
  id: number
  name: TalentBossMaterial
  region: GenshinRegion
}

export interface IAscensionGem {
  id: number
  name: AscensionGem
}

export interface IAscensionBossMaterial {
  id: number
  name: AscensionBossMaterial
  region: GenshinRegion
}

export interface IAscensionCommonMaterial {
  id: number
  name: AscensionCommonMaterial
  isElite: boolean
}

export interface ILocalSpecialty {
  id: number
  name: LocalSpecialty
  region: GenshinRegion
}

export type ItemType =
  | {
      name: 'Crown of Insight'
      material: ITalentCrown[]
    }
  | {
      name: 'Talent Book'
      material: ITalentBook[]
    }
  | {
      name: 'Talent Boss Material'
      material: ITalentBossMaterial[]
    }
  | {
      name: 'Ascension Gem'
      material: IAscensionGem[]
    }
  | {
      name: 'Ascension Boss Material'
      material: IAscensionBossMaterial[]
    }
  | {
      name: 'Local Specialty'
      material: ILocalSpecialty[]
    }
  | {
      name: 'Ascension Common Material'
      material: IAscensionCommonMaterial[]
    }
