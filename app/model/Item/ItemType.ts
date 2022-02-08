import { ta } from 'date-fns/locale'

export type Crown = 'Crown of Insight'

export type TalentBookGroup =
  | 'Freedom'
  | 'Prosperity'
  | 'Transience'
  | 'Elegance'
  | 'Resistance'
  | 'Diligence'
  | 'Ballad'
  | 'Gold'
  | 'Light'

export type TalentBook =
  | 'Teachings of Freedom'
  | 'Guide of Freedom'
  | 'Philosophies of Freedom'
  | 'Teachings of Prosperity'
  | 'Guide of Prosperity'
  | 'Philosophies of Prosperity'
  | 'Teachings of Transience'
  | 'Guide of Transience'
  | 'Philosophies of Transience'
  | 'Teachings of Elegance'
  | 'Guide of Elegance'
  | 'Philosophies of Elegance'
  | 'Teachings of Resistance'
  | 'Guide of Resistance'
  | 'Philosophies of Resistance'
  | 'Teachings of Diligence'
  | 'Guide of Diligence'
  | 'Philosophies of Diligence'
  | 'Teachings of Ballad'
  | 'Guide of Ballad'
  | 'Philosophies of Ballad'
  | 'Teachings of Gold'
  | 'Guide of Gold'
  | 'Philosophies of Gold'
  | 'Teachings of Light'
  | 'Guide of Light'
  | 'Philosophies of Light'

export type TalentBossMaterialGroup =
  | 'Confront Stormterror'
  | 'Wolf of the North'
  | 'Enter the Golden House'
  | 'Beneath the Dragon-Queller'
  | 'Narukami Island: Tenshukaku'

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

export type AscensionGemGroup =
  | 'Brilliant Diamond'
  | 'Agnidus Agate'
  | 'Varunada Lazurite'
  | 'Vajrada Amethyst'
  | 'Vayuda Turquoise'
  | 'Shivada Jade'
  | 'Prithiva Topaz'

export type AscensionGem =
  | 'Brilliant Diamond Sliver'
  | 'Brilliant Diamond Fragment'
  | 'Brilliant Diamond Chunk'
  | 'Brilliant Diamond Gemstone'
  | 'Agnidus Agate Sliver'
  | 'Agnidus Agate Fragment'
  | 'Agnidus Agate Chunk'
  | 'Agnidus Agate Gemstone'
  | 'Varunada Lazurite Sliver'
  | 'Varunada Lazurite Fragment'
  | 'Varunada Lazurite Chunk'
  | 'Varunada Lazurite Gemstone'
  | 'Vajrada Amethyst Sliver'
  | 'Vajrada Amethyst Fragment'
  | 'Vajrada Amethyst Chunk'
  | 'Vajrada Amethyst Gemstone'
  | 'Vayuda Turquoise Sliver'
  | 'Vayuda Turquoise Fragment'
  | 'Vayuda Turquoise Chunk'
  | 'Vayuda Turquoise Gemstone'
  | 'Shivada Jade Sliver'
  | 'Shivada Jade Fragment'
  | 'Shivada Jade Chunk'
  | 'Shivada Jade Gemstone'
  | 'Prithiva Topaz Sliver'
  | 'Prithiva Topaz Fragment'
  | 'Prithiva Topaz Chunk'
  | 'Prithiva Topaz Gemstone'

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
  | 'Violetgrass'
  | 'Small Lamp Grass'
  | 'Dandelion Seed'
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

export type CommonMaterialGroup =
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

export type CommonMaterial =
  | 'Slime Condensate'
  | 'Slime Secretions'
  | 'Slime Concentrate'
  | 'Damaged Mask'
  | 'Stained Mask'
  | 'Ominous Mask'
  | 'Divining Scroll'
  | 'Sealed Scroll'
  | 'Forbidden Curse Scroll'
  | 'Firm Arrowhead'
  | 'Sharp Arrowhead'
  | 'Weathered Arrowhead'
  | "Recruit's Insignia"
  | "Sergeant's Insignia"
  | "Lieutenant's Insignia"
  | 'Treasure Hoarder Insignia'
  | 'Silver Raven Insignia'
  | 'Golden Raven Insignia'
  | 'Whopperflower Nectar'
  | 'Shimmering Nectar'
  | 'Energy Nectar'
  | 'Old Handguard'
  | 'Kageuchi Handguard'
  | 'Famed Handguard'
  | 'Spectral Husk'
  | 'Spectral Heart'
  | 'Spectral Nucleus'
  | 'Heavy Horn'
  | 'Black Bronze Horn'
  | 'Black Crystal Horn'
  | 'Dead Ley Line Branch'
  | 'Dead Ley Line Leaves'
  | 'Ley Line Sprout'
  | 'Chaos Device'
  | 'Chaos Circuit'
  | 'Chaos Core'
  | 'Mist Grass Pollen'
  | 'Mist Grass'
  | 'Mist Grass Wick'
  | "Hunter's Sacrificial Knife"
  | "Agent's Sacrificial Knife"
  | "Inspector's Sacrificial Knife"
  | 'Fragile Bone Shard'
  | 'Sturdy Bone Shard'
  | 'Fossilized Bone Shard'
  | 'Chaos Gear'
  | 'Chaos Axis'
  | 'Chaos Oculus'
  | 'Dismal Prism'
  | 'Crystal Prism'
  | 'Polarizing Prism'
  | 'Concealed Claw'
  | 'Concealed Unguis'
  | 'Concealed Talon'

export interface ICrown {
  name: Crown
  rarity: 1 | 2 | 3 | 4 | 5
  count?: number
}

export interface ITalentBook {
  name: TalentBook
  rarity: 1 | 2 | 3 | 4 | 5
  group: TalentBookGroup
  count?: number
}

export interface ITalentBossMaterial {
  name: TalentBossMaterial
  rarity: 1 | 2 | 3 | 4 | 5
  group: TalentBossMaterialGroup
  count?: number
}

export interface IAscensionGem {
  name: AscensionGem
  rarity: 1 | 2 | 3 | 4 | 5
  group: AscensionGemGroup
  count?: number
}

export interface IAscensionBossMaterial {
  name: AscensionBossMaterial
  rarity: 1 | 2 | 3 | 4 | 5
  count?: number
}

export interface ICommonMaterial {
  name: CommonMaterial
  rarity: 1 | 2 | 3 | 4 | 5
  group: CommonMaterialGroup
  count?: number
}

export interface ILocalSpecialty {
  name: LocalSpecialty

  rarity: 1 | 2 | 3 | 4 | 5
  count?: number
}

export type ItemCategory =
  | 'Crown'
  | 'Talent Book'
  | 'Talent Boss Material'
  | 'Ascension Gem'
  | 'Ascension Boss Material'
  | 'Local Specialty'
  | 'Common Material'

export type ItemTypes = {
  common: {
    name: 'Common Material'
    items: ICommonMaterial[]
  }
  talentBoss: {
    name: 'Talent Boss Material'
    items: ITalentBossMaterial[]
  }
  ascensionBoss: {
    name: 'Ascension Boss Material'
    items: IAscensionBossMaterial[]
  }
  ascensionGem: {
    name: 'Ascension Gem'
    items: IAscensionGem[]
  }
  talentBook: {
    name: 'Talent Book'
    items: ITalentBook[]
  }
  crown: {
    name: 'Crown'
    items: ICrown[]
  }
  localSpecialty: {
    name: 'Local Specialty'
    items: ILocalSpecialty[]
  }
}

export interface IAscensionTotal {
  mora: number
  gem: {
    sliver: number
    fragment: number
    chunk: number
    gemstone: number
  }
  localSpecialty: number
  common: {
    first: number
    second: number
    third: number
  }
  boss: number
}

export interface ITalentTotal {
  mora: {
    talentNormal: number
    talentSkill: number
    talentBurst: number
  }
  common: {
    talentNormal: {
      first: number
      second: number
      third: number
    }
    talentSkill: {
      first: number
      second: number
      third: number
    }
    talentBurst: {
      first: number
      second: number
      third: number
    }
  }
  book: {
    talentNormal: {
      teachings: number
      guide: number
      philosophies: number
    }
    talentSkill: {
      teachings: number
      guide: number
      philosophies: number
    }
    talentBurst: {
      teachings: number
      guide: number
      philosophies: number
    }
  }
  boss: {
    talentNormal: number
    talentSkill: number
    talentBurst: number
  }
  crown: {
    talentNormal: number
    talentSkill: number
    talentBurst: number
  }
}
