import { CommonMaterialMap } from '../Item/Item'
import { AscensionMaterialType, TalentMaterialType } from './CharacterType'

function sumAscensionMora(material: AscensionMaterialType[]) {
  return material.reduce((acc, cur) => acc + cur[1].amount, 0)
}

function sumAscensionGem(material: AscensionMaterialType[]) {
  const sliver = material.reduce((acc, cur) => {
    if (cur[2].name.includes('Sliver')) {
      return acc + cur[2].amount
    }
    return acc + 0
  }, 0)
  const fragment = material.reduce((acc, cur) => {
    if (cur[2].name.includes('Fragment')) {
      return acc + cur[2].amount
    }
    return acc + 0
  }, 0)
  const chunk = material.reduce((acc, cur) => {
    if (cur[2].name.includes('Chunk')) {
      return acc + cur[2].amount
    }
    return acc + 0
  }, 0)
  const gemstone = material.reduce((acc, cur) => {
    if (cur[2].name.includes('Gemstone')) {
      return acc + cur[2].amount
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

function sumAscensionLocalSpecialty(material: AscensionMaterialType[]) {
  return material.reduce((acc, cur) => acc + cur[3].amount, 0)
}

function sumAscensionCommon(material: AscensionMaterialType[]) {
  return {
    first: material.reduce((acc, cur) => {
      if (CommonMaterialMap.get(cur[4].name)?.rarity === 1) {
        return acc + cur[4].amount
      }

      return acc + 0
    }, 0),
    second: material.reduce((acc, cur) => {
      if (CommonMaterialMap.get(cur[4].name)?.rarity === 2) {
        return acc + cur[4].amount
      }
      return acc + 0
    }, 0),
    third: material.reduce((acc, cur) => {
      if (CommonMaterialMap.get(cur[4].name)?.rarity === 3) {
        return acc + cur[4].amount
      }
      return acc + 0
    }, 0),
  }
}

function sumAscensionBoss(material: AscensionMaterialType[]) {
  return material.reduce((acc, cur) => acc + (cur[5]?.amount ?? 0), 0)
}

interface Material {
  normal: TalentMaterialType[]
  skill: TalentMaterialType[]
  burst: TalentMaterialType[]
}

function sumTalentMora(material: Material) {
  return {
    normal: material.normal.reduce((acc, cur) => acc + cur[1].amount, 0),
    skill: material.skill.reduce((acc, cur) => acc + cur[1].amount, 0),
    burst: material.burst.reduce((acc, cur) => acc + cur[1].amount, 0),
    total:
      material.normal.reduce((acc, cur) => acc + cur[1].amount, 0) +
      material.skill.reduce((acc, cur) => acc + cur[1].amount, 0) +
      material.burst.reduce((acc, cur) => acc + cur[1].amount, 0),
  }
}

function sumTalentCommon(material: TalentMaterialType[]) {
  return {
    first: material.reduce((acc, cur) => {
      if (CommonMaterialMap.get(cur[2].name)?.rarity === 1) {
        return acc + cur[2].amount
      }
      return acc + 0
    }, 0),
    second: material.reduce((acc, cur) => {
      if (CommonMaterialMap.get(cur[2].name)?.rarity === 2) {
        return acc + cur[2].amount
      }
      return acc + 0
    }, 0),
    third: material.reduce((acc, cur) => {
      if (CommonMaterialMap.get(cur[2].name)?.rarity === 3) {
        return acc + cur[2].amount
      }
      return acc + 0
    }, 0),
  }
}

function sumTalentCommonFull(material: Material) {
  const normal = sumTalentCommon(material.normal)
  const skill = sumTalentCommon(material.skill)
  const burst = sumTalentCommon(material.burst)
  return {
    normal,
    skill,
    burst,
    total: {
      first: normal.first + skill.first + burst.first,
      second: normal.second + skill.second + burst.second,
      third: normal.third + skill.third + burst.third,
    },
  }
}

function sumTalentBook(talent: TalentMaterialType[]) {
  const teachings = talent.reduce((acc, cur) => {
    if (cur[3].name.includes('Teachings')) {
      return acc + cur[3].amount
    }
    return acc + 0
  }, 0)

  const guide = talent.reduce((acc, cur) => {
    if (cur[3].name.includes('Guide')) {
      return acc + cur[3].amount
    }
    return acc + 0
  }, 0)

  const philosophies = talent.reduce((acc, cur) => {
    if (cur[3].name.includes('Philosophies')) {
      return acc + cur[3].amount
    }
    return acc + 0
  }, 0)

  return {
    teachings,
    guide,
    philosophies,
  }
}

function sumTalentBookFull(material: Material) {
  const normal = sumTalentBook(material.normal)
  const skill = sumTalentBook(material.skill)
  const burst = sumTalentBook(material.burst)
  return {
    normal,
    skill,
    burst,
    total: {
      teachings: normal.teachings + skill.teachings + burst.teachings,
      guide: normal.guide + skill.guide + burst.guide,
      philosophies:
        normal.philosophies + skill.philosophies + burst.philosophies,
    },
  }
}

function sumTalentBoss(material: Material) {
  return {
    normal: material.normal.reduce(
      (acc, cur) => acc + (cur[4]?.amount ?? 0),
      0,
    ),
    skill: material.skill.reduce((acc, cur) => acc + (cur[4]?.amount ?? 0), 0),
    burst: material.burst.reduce((acc, cur) => acc + (cur[4]?.amount ?? 0), 0),
    total:
      material.normal.reduce((acc, cur) => acc + (cur[4]?.amount ?? 0), 0) +
      material.skill.reduce((acc, cur) => acc + (cur[4]?.amount ?? 0), 0) +
      material.burst.reduce((acc, cur) => acc + (cur[4]?.amount ?? 0), 0),
  }
}

function sumTalentCrown(material: Material) {
  return {
    normal: material.normal.reduce(
      (acc, cur) => acc + (cur[5]?.amount ?? 0),
      0,
    ),
    skill: material.skill.reduce((acc, cur) => acc + (cur[5]?.amount ?? 0), 0),
    burst: material.burst.reduce((acc, cur) => acc + (cur[5]?.amount ?? 0), 0),
    total:
      material.normal.reduce((acc, cur) => acc + (cur[5]?.amount ?? 0), 0) +
      material.skill.reduce((acc, cur) => acc + (cur[5]?.amount ?? 0), 0) +
      material.burst.reduce((acc, cur) => acc + (cur[5]?.amount ?? 0), 0),
  }
}

export interface SumAscension {
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

export function sumAscensionMaterial(
  ascensionMaterial: AscensionMaterialType[],
): SumAscension {
  return {
    mora: sumAscensionMora(ascensionMaterial),
    gem: sumAscensionGem(ascensionMaterial),
    localSpecialty: sumAscensionLocalSpecialty(ascensionMaterial),
    common: sumAscensionCommon(ascensionMaterial),
    boss: sumAscensionBoss(ascensionMaterial),
  }
}

export interface SumTalent {
  mora: {
    normal: number
    skill: number
    burst: number
    total: number
  }
  common: {
    normal: {
      first: number
      second: number
      third: number
    }
    skill: {
      first: number
      second: number
      third: number
    }
    burst: {
      first: number
      second: number
      third: number
    }
    total: {
      first: number
      second: number
      third: number
    }
  }
  book: {
    normal: {
      teachings: number
      guide: number
      philosophies: number
    }
    skill: {
      teachings: number
      guide: number
      philosophies: number
    }
    burst: {
      teachings: number
      guide: number
      philosophies: number
    }
    total: {
      teachings: number
      guide: number
      philosophies: number
    }
  }
  boss: {
    normal: number
    skill: number
    burst: number
    total: number
  }
  crown: {
    normal: number
    skill: number
    burst: number
    total: number
  }
}

export function sumTalentMaterial(talentMaterial: Material): SumTalent {
  return {
    mora: sumTalentMora(talentMaterial),
    common: sumTalentCommonFull(talentMaterial),
    book: sumTalentBookFull(talentMaterial),
    boss: sumTalentBoss(talentMaterial),
    crown: sumTalentCrown(talentMaterial),
  }
}
