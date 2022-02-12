import invariant from 'tiny-invariant'

import {
  AscensionBossMaterial,
  AscensionGem,
  CommonMaterial,
  Crown,
  LocalSpecialty,
  TalentBook,
  TalentBossMaterial,
} from '~/model/Item/ItemType'

import { bookGroupMap, commonGroupMap, gemGroupMap } from '../Item/Group.server'
import { CharacterVision, ICharacter } from './CharacterType'

export type AscensionMaterialType =
  | [
      {
        name: 'Level'
        amount: number
      },
      {
        name: 'Mora'
        amount: number
      },
      {
        name: AscensionGem
        amount: number
      },
      {
        name: LocalSpecialty
        amount: number
      },
      {
        name: CommonMaterial
        amount: number
      },
    ]
  | [
      {
        name: 'Level'
        amount: number
      },
      {
        name: 'Mora'
        amount: number
      },
      {
        name: AscensionGem
        amount: number
      },
      {
        name: LocalSpecialty
        amount: number
      },
      {
        name: CommonMaterial
        amount: number
      },
      {
        name: AscensionBossMaterial
        amount: number
      },
    ]

export type TalentMaterialType =
  | [
      {
        name: 'Level'
        amount: number
      },
      {
        name: 'Mora'
        amount: number
      },
      {
        name: CommonMaterial
        amount: number
      },
      {
        name: TalentBook
        amount: number
      },
    ]
  | [
      {
        name: 'Level'
        amount: number
      },
      {
        name: 'Mora'
        amount: number
      },
      {
        name: CommonMaterial
        amount: number
      },
      {
        name: TalentBook
        amount: number
      },
      {
        name: TalentBossMaterial
        amount: number
      },
    ]
  | [
      {
        name: 'Level'
        amount: number
      },
      {
        name: 'Mora'
        amount: number
      },
      {
        name: CommonMaterial
        amount: number
      },
      {
        name: TalentBook
        amount: number
      },
      {
        name: TalentBossMaterial
        amount: number
      },
      {
        name: Crown
        amount: number
      },
    ]

export function getCharacterMaterial(material: ICharacter['material']): {
  ascension: AscensionMaterialType[]
  talent: {
    normal: TalentMaterialType[]
    skill: TalentMaterialType[]
    burst: TalentMaterialType[]
  }
} {
  const common = commonGroupMap.get(material.common)
  const gem = gemGroupMap.get(material.ascensionGem)
  const talentBook = bookGroupMap.get(material.talentBook[0])
  invariant(common, `Unknown common material: ${material.common}`)
  invariant(gem, `Unknown ascension gem material: ${material.ascensionGem}`)
  invariant(
    talentBook,
    `Unknown talent book material: ${material.talentBook[0]}`,
  )

  const ascension: AscensionMaterialType[] = [
    [
      { name: 'Level', amount: 1 },
      { name: 'Mora', amount: 20_000 },
      { name: gem[0], amount: 1 },
      { name: material.localSpecialty, amount: 3 },
      { name: common[0], amount: 3 },
    ],

    [
      { name: 'Level', amount: 2 },
      { name: 'Mora', amount: 40_000 },
      { name: gem[1], amount: 3 },
      { name: material.localSpecialty, amount: 10 },
      { name: common[0], amount: 15 },
      { name: material.ascensionBoss!, amount: 2 },
    ],

    [
      { name: 'Level', amount: 3 },
      { name: 'Mora', amount: 60_000 },
      { name: gem[1], amount: 6 },
      { name: material.localSpecialty, amount: 20 },
      { name: common[1], amount: 12 },
      { name: material.ascensionBoss!, amount: 4 },
    ],

    [
      { name: 'Level', amount: 4 },
      { name: 'Mora', amount: 80_000 },
      { name: gem[2], amount: 3 },
      { name: material.localSpecialty, amount: 30 },
      { name: common[1], amount: 18 },
      { name: material.ascensionBoss!, amount: 8 },
    ],

    [
      { name: 'Level', amount: 5 },
      { name: 'Mora', amount: 100_000 },
      { name: gem[2], amount: 6 },
      { name: material.localSpecialty, amount: 45 },
      { name: common[2], amount: 12 },
      { name: material.ascensionBoss!, amount: 12 },
    ],

    [
      { name: 'Level', amount: 6 },
      { name: 'Mora', amount: 120_000 },
      { name: gem[3], amount: 6 },
      { name: material.localSpecialty, amount: 60 },
      { name: common[2], amount: 24 },
      { name: material.ascensionBoss!, amount: 20 },
    ],
  ]

  const talent: TalentMaterialType[] = [
    [
      { name: 'Level', amount: 2 },
      { name: 'Mora', amount: 12_500 },
      { name: common[0], amount: 3 },
      { name: talentBook[0], amount: 3 },
    ],
    [
      { name: 'Level', amount: 3 },
      { name: 'Mora', amount: 17_500 },
      { name: common[1], amount: 3 },
      { name: talentBook[1], amount: 2 },
    ],
    [
      { name: 'Level', amount: 4 },
      { name: 'Mora', amount: 25_000 },
      { name: common[1], amount: 4 },
      { name: talentBook[1], amount: 4 },
    ],
    [
      { name: 'Level', amount: 5 },
      { name: 'Mora', amount: 30_000 },
      { name: common[1], amount: 6 },
      { name: talentBook[1], amount: 6 },
    ],
    [
      { name: 'Level', amount: 6 },
      { name: 'Mora', amount: 37_500 },
      { name: common[1], amount: 9 },
      { name: talentBook[1], amount: 9 },
    ],
    [
      { name: 'Level', amount: 7 },
      { name: 'Mora', amount: 120_000 },
      { name: common[2], amount: 4 },
      { name: talentBook[2], amount: 4 },
      { name: material.talentBoss, amount: 1 },
    ],
    [
      { name: 'Level', amount: 8 },
      { name: 'Mora', amount: 260_000 },
      { name: common[2], amount: 6 },
      { name: talentBook[2], amount: 6 },
      { name: material.talentBoss, amount: 1 },
    ],
    [
      { name: 'Level', amount: 9 },
      { name: 'Mora', amount: 450_000 },
      { name: common[2], amount: 9 },
      { name: talentBook[2], amount: 12 },
      { name: material.talentBoss, amount: 2 },
    ],
    [
      { name: 'Level', amount: 10 },
      { name: 'Mora', amount: 700_000 },
      { name: common[2], amount: 12 },
      { name: talentBook[2], amount: 16 },
      { name: material.talentBoss, amount: 2 },
      { name: material.crown, amount: 1 },
    ],
  ]

  return {
    ascension,
    talent: {
      normal: talent,
      skill: talent,
      burst: talent,
    },
  }
}

const travelerAscension: AscensionMaterialType[] = [
  [
    { name: 'Level', amount: 1 },
    { name: 'Mora', amount: 20_000 },
    { name: 'Brilliant Diamond Sliver', amount: 1 },
    { name: 'Windwheel Aster', amount: 3 },
    { name: 'Damaged Mask', amount: 3 },
  ],
  [
    { name: 'Level', amount: 2 },
    { name: 'Mora', amount: 40_000 },
    { name: 'Brilliant Diamond Fragment', amount: 3 },
    { name: 'Windwheel Aster', amount: 10 },
    { name: 'Damaged Mask', amount: 15 },
  ],
  [
    { name: 'Level', amount: 3 },
    { name: 'Mora', amount: 60_000 },
    { name: 'Brilliant Diamond Fragment', amount: 6 },
    { name: 'Windwheel Aster', amount: 20 },
    { name: 'Stained Mask', amount: 12 },
  ],
  [
    { name: 'Level', amount: 4 },
    { name: 'Mora', amount: 80_000 },
    { name: 'Brilliant Diamond Chunk', amount: 3 },
    { name: 'Windwheel Aster', amount: 30 },
    { name: 'Stained Mask', amount: 18 },
  ],
  [
    { name: 'Level', amount: 5 },
    { name: 'Mora', amount: 100_000 },
    { name: 'Brilliant Diamond Chunk', amount: 6 },
    { name: 'Windwheel Aster', amount: 45 },
    { name: 'Ominous Mask', amount: 12 },
  ],
  [
    { name: 'Level', amount: 6 },
    { name: 'Mora', amount: 120_000 },
    { name: 'Brilliant Diamond Gemstone', amount: 6 },
    { name: 'Windwheel Aster', amount: 60 },
    { name: 'Ominous Mask', amount: 24 },
  ],
]

const travelerAnemoTalent: TalentMaterialType[] = [
  [
    { name: 'Level', amount: 2 },
    { name: 'Mora', amount: 12_500 },
    { name: 'Divining Scroll', amount: 3 },
    { name: 'Teachings of Freedom', amount: 3 },
  ],
  [
    { name: 'Level', amount: 3 },
    { name: 'Mora', amount: 17_500 },
    { name: 'Sealed Scroll', amount: 3 },
    { name: 'Guide of Resistance', amount: 2 },
  ],
  [
    { name: 'Level', amount: 4 },
    { name: 'Mora', amount: 25_000 },
    { name: 'Sealed Scroll', amount: 4 },
    { name: 'Guide of Ballad', amount: 4 },
  ],
  [
    { name: 'Level', amount: 5 },
    { name: 'Mora', amount: 30_000 },
    { name: 'Sealed Scroll', amount: 6 },
    { name: 'Guide of Freedom', amount: 6 },
  ],
  [
    { name: 'Level', amount: 6 },
    { name: 'Mora', amount: 37_500 },
    { name: 'Sealed Scroll', amount: 9 },
    { name: 'Guide of Resistance', amount: 9 },
  ],
  [
    { name: 'Level', amount: 7 },
    { name: 'Mora', amount: 120_000 },
    { name: 'Forbidden Curse Scroll', amount: 4 },
    { name: 'Philosophies of Ballad', amount: 4 },
    { name: "Dvalin's Sigh", amount: 1 },
  ],
  [
    { name: 'Level', amount: 8 },
    { name: 'Mora', amount: 260_000 },
    { name: 'Forbidden Curse Scroll', amount: 6 },
    { name: 'Philosophies of Freedom', amount: 6 },
    { name: "Dvalin's Sigh", amount: 1 },
  ],
  [
    { name: 'Level', amount: 9 },
    { name: 'Mora', amount: 450_000 },
    { name: 'Forbidden Curse Scroll', amount: 9 },
    { name: 'Philosophies of Resistance', amount: 12 },
    { name: "Dvalin's Sigh", amount: 2 },
  ],
  [
    { name: 'Level', amount: 10 },
    { name: 'Mora', amount: 700_000 },
    { name: 'Forbidden Curse Scroll', amount: 12 },
    { name: 'Philosophies of Ballad', amount: 16 },
    { name: "Dvalin's Sigh", amount: 2 },
    { name: 'Crown of Insight', amount: 1 },
  ],
]

const travelerGeoTalent: {
  normal: TalentMaterialType[]
  skill: TalentMaterialType[]
  burst: TalentMaterialType[]
} = {
  normal: [
    [
      { name: 'Level', amount: 2 },
      { name: 'Mora', amount: 12_500 },
      { name: 'Divining Scroll', amount: 3 },
      { name: 'Teachings of Freedom', amount: 3 },
    ],
    [
      { name: 'Level', amount: 3 },
      { name: 'Mora', amount: 17_500 },
      { name: 'Sealed Scroll', amount: 3 },
      { name: 'Guide of Resistance', amount: 2 },
    ],
    [
      { name: 'Level', amount: 4 },
      { name: 'Mora', amount: 25_000 },
      { name: 'Sealed Scroll', amount: 4 },
      { name: 'Guide of Ballad', amount: 4 },
    ],
    [
      { name: 'Level', amount: 5 },
      { name: 'Mora', amount: 30_000 },
      { name: 'Sealed Scroll', amount: 6 },
      { name: 'Guide of Freedom', amount: 6 },
    ],
    [
      { name: 'Level', amount: 6 },
      { name: 'Mora', amount: 37_500 },
      { name: 'Sealed Scroll', amount: 9 },
      { name: 'Guide of Resistance', amount: 9 },
    ],
    [
      { name: 'Level', amount: 7 },
      { name: 'Mora', amount: 120_000 },
      { name: 'Forbidden Curse Scroll', amount: 4 },
      { name: 'Philosophies of Ballad', amount: 4 },
      { name: "Dvalin's Sigh", amount: 1 },
    ],
    [
      { name: 'Level', amount: 8 },
      { name: 'Mora', amount: 260_000 },
      { name: 'Forbidden Curse Scroll', amount: 6 },
      { name: 'Philosophies of Freedom', amount: 6 },
      { name: "Dvalin's Sigh", amount: 1 },
    ],
    [
      { name: 'Level', amount: 9 },
      { name: 'Mora', amount: 450_000 },
      { name: 'Forbidden Curse Scroll', amount: 9 },
      { name: 'Philosophies of Resistance', amount: 12 },
      { name: "Dvalin's Sigh", amount: 2 },
    ],
    [
      { name: 'Level', amount: 10 },
      { name: 'Mora', amount: 700_000 },
      { name: 'Forbidden Curse Scroll', amount: 12 },
      { name: 'Philosophies of Ballad', amount: 16 },
      { name: "Dvalin's Sigh", amount: 2 },
      { name: 'Crown of Insight', amount: 1 },
    ],
  ],
  skill: [
    [
      { name: 'Level', amount: 2 },
      { name: 'Mora', amount: 12_500 },
      { name: 'Firm Arrowhead', amount: 3 },
      { name: 'Teachings of Prosperity', amount: 3 },
    ],
    [
      { name: 'Level', amount: 3 },
      { name: 'Mora', amount: 17_500 },
      { name: 'Sharp Arrowhead', amount: 3 },
      { name: 'Guide of Diligence', amount: 2 },
    ],
    [
      { name: 'Level', amount: 4 },
      { name: 'Mora', amount: 25_000 },
      { name: 'Sharp Arrowhead', amount: 4 },
      { name: 'Guide of Gold', amount: 4 },
    ],
    [
      { name: 'Level', amount: 5 },
      { name: 'Mora', amount: 30_000 },
      { name: 'Sharp Arrowhead', amount: 6 },
      { name: 'Guide of Prosperity', amount: 6 },
    ],
    [
      { name: 'Level', amount: 6 },
      { name: 'Mora', amount: 37_500 },
      { name: 'Sharp Arrowhead', amount: 9 },
      { name: 'Guide of Diligence', amount: 9 },
    ],
    [
      { name: 'Level', amount: 7 },
      { name: 'Mora', amount: 120_000 },
      { name: 'Weathered Arrowhead', amount: 4 },
      { name: 'Philosophies of Gold', amount: 4 },
      { name: 'Tail of Boreas', amount: 1 },
    ],
    [
      { name: 'Level', amount: 8 },
      { name: 'Mora', amount: 260_000 },
      { name: 'Weathered Arrowhead', amount: 6 },
      { name: 'Philosophies of Prosperity', amount: 6 },
      { name: 'Tail of Boreas', amount: 1 },
    ],
    [
      { name: 'Level', amount: 9 },
      { name: 'Mora', amount: 450_000 },
      { name: 'Weathered Arrowhead', amount: 9 },
      { name: 'Philosophies of Diligence', amount: 12 },
      { name: 'Tail of Boreas', amount: 2 },
    ],
    [
      { name: 'Level', amount: 10 },
      { name: 'Mora', amount: 700_000 },
      { name: 'Weathered Arrowhead', amount: 12 },
      { name: 'Philosophies of Gold', amount: 16 },
      { name: 'Tail of Boreas', amount: 2 },
      { name: 'Crown of Insight', amount: 1 },
    ],
  ],
  burst: [
    [
      { name: 'Level', amount: 2 },
      { name: 'Mora', amount: 12_500 },
      { name: 'Firm Arrowhead', amount: 3 },
      { name: 'Teachings of Prosperity', amount: 3 },
    ],
    [
      { name: 'Level', amount: 3 },
      { name: 'Mora', amount: 17_500 },
      { name: 'Sharp Arrowhead', amount: 3 },
      { name: 'Guide of Diligence', amount: 2 },
    ],
    [
      { name: 'Level', amount: 4 },
      { name: 'Mora', amount: 25_000 },
      { name: 'Sharp Arrowhead', amount: 4 },
      { name: 'Guide of Gold', amount: 4 },
    ],
    [
      { name: 'Level', amount: 5 },
      { name: 'Mora', amount: 30_000 },
      { name: 'Sharp Arrowhead', amount: 6 },
      { name: 'Guide of Prosperity', amount: 6 },
    ],
    [
      { name: 'Level', amount: 6 },
      { name: 'Mora', amount: 37_500 },
      { name: 'Sharp Arrowhead', amount: 9 },
      { name: 'Guide of Diligence', amount: 9 },
    ],
    [
      { name: 'Level', amount: 7 },
      { name: 'Mora', amount: 120_000 },
      { name: 'Weathered Arrowhead', amount: 4 },
      { name: 'Philosophies of Gold', amount: 4 },
      { name: 'Tail of Boreas', amount: 1 },
    ],
    [
      { name: 'Level', amount: 8 },
      { name: 'Mora', amount: 260_000 },
      { name: 'Weathered Arrowhead', amount: 6 },
      { name: 'Philosophies of Prosperity', amount: 6 },
      { name: 'Tail of Boreas', amount: 1 },
    ],
    [
      { name: 'Level', amount: 9 },
      { name: 'Mora', amount: 450_000 },
      { name: 'Weathered Arrowhead', amount: 9 },
      { name: 'Philosophies of Diligence', amount: 12 },
      { name: 'Tail of Boreas', amount: 2 },
    ],
    [
      { name: 'Level', amount: 10 },
      { name: 'Mora', amount: 700_000 },
      { name: 'Weathered Arrowhead', amount: 12 },
      { name: 'Philosophies of Gold', amount: 16 },
      { name: 'Tail of Boreas', amount: 2 },
      { name: 'Crown of Insight', amount: 1 },
    ],
  ],
}

const travelerElectroTalent: TalentMaterialType[] = [
  [
    { name: 'Level', amount: 2 },
    { name: 'Mora', amount: 12_500 },
    { name: 'Old Handguard', amount: 3 },
    { name: 'Teachings of Transience', amount: 3 },
  ],
  [
    { name: 'Level', amount: 3 },
    { name: 'Mora', amount: 17_500 },
    { name: 'Kageuchi Handguard', amount: 3 },
    { name: 'Guide of Elegance', amount: 2 },
  ],
  [
    { name: 'Level', amount: 4 },
    { name: 'Mora', amount: 25_000 },
    { name: 'Kageuchi Handguard', amount: 4 },
    { name: 'Guide of Light', amount: 4 },
  ],
  [
    { name: 'Level', amount: 5 },
    { name: 'Mora', amount: 30_000 },
    { name: 'Kageuchi Handguard', amount: 6 },
    { name: 'Guide of Transience', amount: 6 },
  ],
  [
    { name: 'Level', amount: 6 },
    { name: 'Mora', amount: 37_500 },
    { name: 'Kageuchi Handguard', amount: 9 },
    { name: 'Guide of Elegance', amount: 9 },
  ],
  [
    { name: 'Level', amount: 7 },
    { name: 'Mora', amount: 120_000 },
    { name: 'Famed Handguard', amount: 4 },
    { name: 'Philosophies of Light', amount: 4 },
    { name: "Dragon Lord's Crown", amount: 1 },
  ],
  [
    { name: 'Level', amount: 8 },
    { name: 'Mora', amount: 260_000 },
    { name: 'Famed Handguard', amount: 6 },
    { name: 'Philosophies of Transience', amount: 6 },
    { name: "Dragon Lord's Crown", amount: 1 },
  ],
  [
    { name: 'Level', amount: 9 },
    { name: 'Mora', amount: 450_000 },
    { name: 'Famed Handguard', amount: 9 },
    { name: 'Philosophies of Elegance', amount: 12 },
    { name: "Dragon Lord's Crown", amount: 2 },
  ],
  [
    { name: 'Level', amount: 10 },
    { name: 'Mora', amount: 700_000 },
    { name: 'Famed Handguard', amount: 12 },
    { name: 'Philosophies of Light', amount: 16 },
    { name: "Dragon Lord's Crown", amount: 2 },
    { name: 'Crown of Insight', amount: 1 },
  ],
]

export function getTravelerMaterial(vision: CharacterVision): {
  ascension: AscensionMaterialType[]
  talent: {
    normal: TalentMaterialType[]
    skill: TalentMaterialType[]
    burst: TalentMaterialType[]
  }
} {
  switch (vision) {
    case 'Anemo':
      return {
        ascension: travelerAscension,
        talent: {
          normal: travelerAnemoTalent,
          skill: travelerAnemoTalent,
          burst: travelerAnemoTalent,
        },
      }
    case 'Geo':
      return {
        ascension: travelerAscension,
        talent: travelerGeoTalent,
      }
    case 'Electro':
      return {
        ascension: travelerAscension,
        talent: {
          normal: travelerElectroTalent,
          skill: travelerElectroTalent,
          burst: travelerElectroTalent,
        },
      }
    default:
      return {
        ascension: travelerAscension,
        talent: {
          normal: travelerAnemoTalent,
          skill: travelerAnemoTalent,
          burst: travelerAnemoTalent,
        },
      }
  }
}
