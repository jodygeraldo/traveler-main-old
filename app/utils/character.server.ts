import { commonMaterialMap } from '~/services/data/items'
import {
  AscensionType,
  IAscensionMaterial,
  ICharacter,
  ITalentMaterial,
  TalentType,
} from '~/types/character'

function addNumberingToArray<T extends Object>(arr: T[], offset: number) {
  return arr.map((rest, idx) => {
    const number: IAscensionMaterial['number'] = {
      name: '',
      amount: idx + offset,
    }

    return {
      number,
      ...rest,
    }
  })
}

export function getAscensionMaterial(
  ascension: AscensionType,
  ascensionLevel: number = 0,
  toAscensionLevel: number = 6,
) {
  return addNumberingToArray(ascension, 1).slice(
    ascensionLevel,
    toAscensionLevel,
  ) as IAscensionMaterial[]
}

export function getTalentMaterial(
  talent:
    | TalentType
    | {
        normal: TalentType
        skill: TalentType
        burst: TalentType
      },
  talentLevel: [number, number, number] = [1, 1, 1],
  toTalentLevel: [number, number, number] = [10, 10, 10],
) {
  let talentNormal: ITalentMaterial[],
    talentSkill: ITalentMaterial[],
    talentBurst: ITalentMaterial[]

  if (Array.isArray(talent)) {
    talentNormal = addNumberingToArray(talent, 2).slice(
      talentLevel[0] - 1,
      toTalentLevel[0] - 1,
    )

    talentSkill = addNumberingToArray(talent, 2).slice(
      talentLevel[1] - 1,
      toTalentLevel[1] - 1,
    )

    talentBurst = addNumberingToArray(talent, 2).slice(
      talentLevel[2] - 1,
      toTalentLevel[2] - 1,
    )
  } else {
    talentNormal = addNumberingToArray(talent.normal, 2).slice(
      talentLevel[0] - 1,
      toTalentLevel[0] - 1,
    )
    talentSkill = addNumberingToArray(talent.skill, 2).slice(
      talentLevel[1] - 1,
      toTalentLevel[1] - 1,
    )
    talentBurst = addNumberingToArray(talent.burst, 2).slice(
      talentLevel[2] - 1,
      toTalentLevel[2] - 1,
    )
  }

  return {
    talentNormal,
    talentSkill,
    talentBurst,
  }
}

export function sumAscensionMora(ascension: IAscensionMaterial[]) {
  return ascension.reduce((acc, cur) => acc + cur.mora.amount, 0)
}

export function sumAscensionGem(ascension: IAscensionMaterial[]) {
  const sliver = ascension.reduce((acc, cur) => {
    if (cur.gem.name.includes('Sliver')) {
      return acc + cur.gem.amount
    }
    return acc + 0
  }, 0)
  const fragment = ascension.reduce((acc, cur) => {
    if (cur.gem.name.includes('Fragment')) {
      return acc + cur.gem.amount
    }
    return acc + 0
  }, 0)
  const chunk = ascension.reduce((acc, cur) => {
    if (cur.gem.name.includes('Chunk')) {
      return acc + cur.gem.amount
    }
    return acc + 0
  }, 0)
  const gemstone = ascension.reduce((acc, cur) => {
    if (cur.gem.name.includes('Gemstone')) {
      return acc + cur.gem.amount
    }
    return acc + 0
  }, 0)

  return {
    sliver,
    fragment,
    chunk,
    gemstone,
  }
}

export function sumAscensionLocalSpecialty(ascension: IAscensionMaterial[]) {
  return ascension.reduce((acc, cur) => acc + cur.localSpecialty.amount, 0)
}

export function sumAscensionCommon(ascension: IAscensionMaterial[]) {
  return {
    first: ascension.reduce((acc, cur) => {
      if (commonMaterialMap.get(cur.common.name)?.rarity === 1) {
        return acc + cur.common.amount
      }

      return acc + 0
    }, 0),
    second: ascension.reduce((acc, cur) => {
      if (commonMaterialMap.get(cur.common.name)?.rarity === 2) {
        return acc + cur.common.amount
      }
      return acc + 0
    }, 0),
    third: ascension.reduce((acc, cur) => {
      if (commonMaterialMap.get(cur.common.name)?.rarity === 3) {
        return acc + cur.common.amount
      }
      return acc + 0
    }, 0),
  }
}

export function sumAscensionBoss(ascension: IAscensionMaterial[]) {
  return ascension.reduce((acc, cur) => acc + (cur.boss?.amount ?? 0), 0)
}

export function sumTalentMora(talent: {
  talentNormal: ITalentMaterial[]
  talentSkill: ITalentMaterial[]
  talentBurst: ITalentMaterial[]
}) {
  return {
    talentNormal: talent.talentNormal.reduce(
      (acc, cur) => acc + cur.mora.amount,
      0,
    ),
    talentSkill: talent.talentSkill.reduce(
      (acc, cur) => acc + cur.mora.amount,
      0,
    ),
    talentBurst: talent.talentBurst.reduce(
      (acc, cur) => acc + cur.mora.amount,
      0,
    ),
    total:
      talent.talentNormal.reduce((acc, cur) => acc + cur.mora.amount, 0) +
      talent.talentSkill.reduce((acc, cur) => acc + cur.mora.amount, 0) +
      talent.talentBurst.reduce((acc, cur) => acc + cur.mora.amount, 0),
  }
}

export function sumTalentCommon(talent: {
  talentNormal: ITalentMaterial[]
  talentSkill: ITalentMaterial[]
  talentBurst: ITalentMaterial[]
}) {
  const tNormal = sumTalentCommonHelper(talent.talentNormal)
  const tSkill = sumTalentCommonHelper(talent.talentSkill)
  const tBurst = sumTalentCommonHelper(talent.talentBurst)
  return {
    talentNormal: tNormal,
    talentSkill: tSkill,
    talentBurst: tBurst,
    total: {
      first: tNormal.first + tSkill.first + tBurst.first,
      second: tNormal.second + tSkill.second + tBurst.second,
      third: tNormal.third + tSkill.third + tBurst.third,
    },
  }
}

export function sumTalentBook(talent: {
  talentNormal: ITalentMaterial[]
  talentSkill: ITalentMaterial[]
  talentBurst: ITalentMaterial[]
}) {
  const tNormal = sumTalentBookHelper(talent.talentNormal)
  const tSkill = sumTalentBookHelper(talent.talentSkill)
  const tBurst = sumTalentBookHelper(talent.talentBurst)
  return {
    talentNormal: tNormal,
    talentSkill: tSkill,
    talentBurst: tBurst,
    total: {
      teachings: tNormal.teachings + tSkill.teachings + tBurst.teachings,
      guide: tNormal.guide + tSkill.guide + tBurst.guide,
      philosophies:
        tNormal.philosophies + tSkill.philosophies + tBurst.philosophies,
    },
  }
}

export function sumTalentBoss(talent: {
  talentNormal: ITalentMaterial[]
  talentSkill: ITalentMaterial[]
  talentBurst: ITalentMaterial[]
}) {
  return {
    talentNormal: talent.talentNormal.reduce(
      (acc, cur) => acc + (cur.boss?.amount ?? 0),
      0,
    ),
    talentSkill: talent.talentSkill.reduce(
      (acc, cur) => acc + (cur.boss?.amount ?? 0),
      0,
    ),
    talentBurst: talent.talentBurst.reduce(
      (acc, cur) => acc + (cur.boss?.amount ?? 0),
      0,
    ),
    total:
      talent.talentNormal.reduce(
        (acc, cur) => acc + (cur.boss?.amount ?? 0),
        0,
      ) +
      talent.talentSkill.reduce(
        (acc, cur) => acc + (cur.boss?.amount ?? 0),
        0,
      ) +
      talent.talentBurst.reduce((acc, cur) => acc + (cur.boss?.amount ?? 0), 0),
  }
}

export function sumTalentCrown(talent: {
  talentNormal: ITalentMaterial[]
  talentSkill: ITalentMaterial[]
  talentBurst: ITalentMaterial[]
}) {
  return {
    talentNormal: talent.talentNormal.reduce(
      (acc, cur) => acc + (cur.crown?.amount ?? 0),
      0,
    ),
    talentSkill: talent.talentSkill.reduce(
      (acc, cur) => acc + (cur.crown?.amount ?? 0),
      0,
    ),
    talentBurst: talent.talentBurst.reduce(
      (acc, cur) => acc + (cur.crown?.amount ?? 0),
      0,
    ),
    total:
      talent.talentNormal.reduce(
        (acc, cur) => acc + (cur.crown?.amount ?? 0),
        0,
      ) +
      talent.talentSkill.reduce(
        (acc, cur) => acc + (cur.crown?.amount ?? 0),
        0,
      ) +
      talent.talentBurst.reduce(
        (acc, cur) => acc + (cur.crown?.amount ?? 0),
        0,
      ),
  }
}

function sumTalentCommonHelper(talent: ITalentMaterial[]) {
  const first = talent.reduce((acc, cur) => {
    if (commonMaterialMap.get(cur.common.name)?.rarity === 1) {
      return acc + cur.common.amount
    }
    return acc + 0
  }, 0)

  const second = talent.reduce((acc, cur) => {
    if (commonMaterialMap.get(cur.common.name)?.rarity === 2) {
      return acc + cur.common.amount
    }
    return acc + 0
  }, 0)

  const third = talent.reduce((acc, cur) => {
    if (commonMaterialMap.get(cur.common.name)?.rarity === 3) {
      return acc + cur.common.amount
    }
    return acc + 0
  }, 0)

  return {
    first,
    second,
    third,
  }
}

function sumTalentBookHelper(talent: ITalentMaterial[]) {
  const teachings = talent.reduce((acc, cur) => {
    if (cur.book.name.includes('Teachings')) {
      return acc + cur.book.amount
    }
    return acc + 0
  }, 0)

  const guide = talent.reduce((acc, cur) => {
    if (cur.book.name.includes('Guide')) {
      return acc + cur.book.amount
    }
    return acc + 0
  }, 0)

  const philosophies = talent.reduce((acc, cur) => {
    if (cur.book.name.includes('Philosophies')) {
      return acc + cur.book.amount
    }
    return acc + 0
  }, 0)

  return {
    teachings,
    guide,
    philosophies,
  }
}

export function getAscensionTableFooter(
  character: ICharacter,
  total: {
    ascensionMora: number
    ascensionGem: {
      sliver: number
      fragment: number
      chunk: number
      gemstone: number
    }
    ascensionLocalSpecialty: number
    ascensionCommon: {
      first: number
      second: number
      third: number
    }
    ascensionBoss: number
  },
) {
  return [
    [{ name: '', amount: 'Total' }],
    [{ name: 'mora', amount: total.ascensionMora }],
    [
      {
        name: character.material.ascension[0].gem.name,
        amount: total.ascensionGem.sliver,
      },
      {
        name: character.material.ascension[1].gem.name,
        amount: total.ascensionGem.fragment,
      },
      {
        name: character.material.ascension[4].gem.name,
        amount: total.ascensionGem.chunk,
      },
      {
        name: character.material.ascension[5].gem.name,
        amount: total.ascensionGem.gemstone,
      },
    ],
    [
      {
        name: character.material.ascension[0].localSpecialty.name,
        amount: total.ascensionLocalSpecialty,
      },
    ],
    [
      {
        name: character.material.ascension[0].common.name,
        amount: total.ascensionCommon.first,
      },
      {
        name: character.material.ascension[3].common.name,
        amount: total.ascensionCommon.second,
      },
      {
        name: character.material.ascension[5].common.name,
        amount: total.ascensionCommon.third,
      },
    ],
    [
      {
        name: character.material.ascension[5].boss?.name ?? '',
        amount: total.ascensionBoss,
      },
    ],
  ]
}

export function getTalentTableFooter(
  character: ICharacter,
  total: {
    talentMora: number
    talentCommon: {
      first: number
      second: number
      third: number
    }
    talentBook: {
      teachings: number
      guide: number
      philosophies: number
    }
    talentBoss: number
    talentCrown: number
  },
  type: 'normal' | 'skill' | 'burst',
) {
  let footer: Array<{ name: string; amount: number | string }[]>
  if (Array.isArray(character.material.talent)) {
    footer = [
      [{ name: '', amount: 'Total' }],
      [{ name: 'mora', amount: total.talentMora }],
      [
        {
          name: character.material.talent[0].common.name,
          amount: total.talentCommon.first,
        },
        {
          name: character.material.talent[3].common.name,
          amount: total.talentCommon.second,
        },
        {
          name: character.material.talent[5].common.name,
          amount: total.talentCommon.third,
        },
      ],
      [
        {
          name: character.material.talent[0].book.name,
          amount: total.talentBook.teachings,
        },
        {
          name: character.material.talent[1].book.name,
          amount: total.talentBook.guide,
        },
        {
          name: character.material.talent[5].book.name,
          amount: total.talentBook.philosophies,
        },
      ],
      [
        {
          name: character.material.talent[5].boss?.name ?? '',
          amount: total.talentBoss,
        },
      ],
      [
        {
          name: character.material.talent[8].crown?.name ?? '',
          amount: total.talentCrown,
        },
      ],
    ]
  } else {
    footer = [
      [{ name: '', amount: 'Total' }],
      [{ name: 'mora', amount: total.talentMora }],
      [
        {
          name: character.material.talent[type][0].common.name,
          amount: total.talentCommon.first,
        },
        {
          name: character.material.talent[type][3].common.name,
          amount: total.talentCommon.second,
        },
        {
          name: character.material.talent[type][5].common.name,
          amount: total.talentCommon.third,
        },
      ],
      [
        {
          name: character.material.talent[type][0].book.name,
          amount: total.talentBook.teachings,
        },
        {
          name: character.material.talent[type][1].book.name,
          amount: total.talentBook.guide,
        },
        {
          name: character.material.talent[type][5].book.name,
          amount: total.talentBook.philosophies,
        },
      ],
      [
        {
          name: character.material.talent[type][5].boss?.name ?? '',
          amount: total.talentBoss,
        },
      ],
      [
        {
          name: character.material.talent[type][8].crown?.name ?? '',
          amount: total.talentCrown,
        },
      ],
    ]
  }

  return footer
}
