import { useEffect, useState } from 'react'
import { useOutletContext } from 'remix'

import CharacterProgressionItem from '~/components/Character/CharacterProgressionTable/CharacterProgressionItem'
import CharacterProgressionTable from '~/components/Character/CharacterProgressionTable/CharacterProgressionTable'
import SwitchLabelDescriptionLeft from '~/components/UI/Form/Switch'
import SectionHeading from '~/components/UI/Heading/SectionHeading'
import {
  ascensionGemMap,
  ascensionLocalSpecialtyMap,
  commonMaterialMap,
} from '~/services/data/items'
import { ICharacter } from '~/types/character'
import {
  getAscensionMaterial,
  getAscensionTableFooter,
  getTalentMaterial,
  getTalentTableFooter,
  sumAscensionBoss,
  sumAscensionCommon,
  sumAscensionGem,
  sumAscensionLocalSpecialty,
  sumAscensionMora,
  sumTalentBook,
  sumTalentBoss,
  sumTalentCommon,
  sumTalentCrown,
  sumTalentMora,
} from '~/utils/character'

export default function EditWithInventoryItemsRoute() {
  const { character } = useOutletContext<{
    character: ICharacter
  }>()
  const [showAllItem, setShowAllItem] = useState(true)
  const [ascensionLevel, setAscensionLevel] = useState<number | undefined>(
    undefined,
  )
  const [talentLevel, setTalentLevel] = useState<
    [number, number, number] | undefined
  >(undefined)

  const material = {
    ascension: getAscensionMaterial(
      character.material.ascension,
      ascensionLevel,
    ),
    talent: getTalentMaterial(character.material.talent, talentLevel),
  }

  const total = {
    ascensionMora: sumAscensionMora(material.ascension),
    ascensionGem: sumAscensionGem(material.ascension),
    ascensionLocalSpecialty: sumAscensionLocalSpecialty(material.ascension),
    ascensionCommon: sumAscensionCommon(material.ascension),
    ascensionBoss: sumAscensionBoss(material.ascension),
    talentMora: sumTalentMora(material.talent),
    talentCommon: sumTalentCommon(material.talent),
    talentBook: sumTalentBook(material.talent),
    talentBoss: sumTalentBoss(material.talent),
    talentCrown: sumTalentCrown(material.talent),
  }

  useEffect(() => {
    if (showAllItem) {
      setAscensionLevel(undefined)
      setTalentLevel(undefined)
    } else {
      setAscensionLevel(character.progression.ascension)
      setTalentLevel(character.progression.talent)
    }
  }, [showAllItem])

  const ascensionFooter = getAscensionTableFooter(character, total)
  const talentNormalFooter = getTalentTableFooter(
    character,
    {
      talentMora: total.talentMora.talentNormal,
      talentCommon: total.talentCommon.talentNormal,
      talentBook: total.talentBook.talentNormal,
      talentBoss: total.talentBoss.talentNormal,
      talentCrown: total.talentCrown.talentNormal,
    },
    'normal',
  )
  const talentSkillFooter = getTalentTableFooter(
    character,
    {
      talentMora: total.talentMora.talentSkill,
      talentCommon: total.talentCommon.talentSkill,
      talentBook: total.talentBook.talentSkill,
      talentBoss: total.talentBoss.talentSkill,
      talentCrown: total.talentCrown.talentSkill,
    },
    'skill',
  )
  const talentBurstFooter = getTalentTableFooter(
    character,
    {
      talentMora: total.talentMora.talentBurst,
      talentCommon: total.talentCommon.talentBurst,
      talentBook: total.talentBook.talentBurst,
      talentBoss: total.talentBoss.talentBurst,
      talentCrown: total.talentCrown.talentBurst,
    },
    'burst',
  )

  const ascensionHeaderTable = [
    `Level`,
    `Mora`,
    `Gem (${
      ascensionGemMap.get(character.material.ascension[0].gem.name)?.group
    })`,
    `Local Specialty (${character.material.ascension[0].localSpecialty.name})`,
    `Common (${
      commonMaterialMap.get(character.material.ascension[0].common.name)?.group
    })`,
    `Boss (${character.material.ascension[1].boss?.name})`,
  ]

  if (character.name.includes('Traveler')) {
    ascensionHeaderTable.pop()
    ascensionFooter.pop()
  }

  return (
    <>
      <div className="xl:flex xl:items-center xl:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl">
            {`${character.name} Items Table`}
          </h2>
        </div>

        <div className="mt-4 flex xl:mt-0">
          <SwitchLabelDescriptionLeft
            enabled={showAllItem}
            setEnabled={setShowAllItem}
            label="Show all items"
            description="disable this to show only next level items"
          />
        </div>
      </div>

      <div className="mt-5 w-full space-y-5">
        {material.ascension.length > 0 ? (
          <>
            <SectionHeading title="Ascension Level" />
            <CharacterProgressionTable
              cols={ascensionHeaderTable}
              footerItem={ascensionFooter}
            >
              {material.ascension.map((ascension, idx) => (
                <CharacterProgressionItem
                  key={`${idx}-asc`}
                  items={ascension}
                />
              ))}
            </CharacterProgressionTable>
          </>
        ) : null}

        {material.talent.talentNormal.length > 0 ? (
          <>
            <SectionHeading title="Normal Attack Talent Level" />
            <CharacterProgressionTable
              cols={['Level', 'Mora', 'Common', 'Book', 'Boss', 'Crown']}
              footerItem={talentNormalFooter}
            >
              {material.talent.talentNormal.map((talent, idx) => (
                <CharacterProgressionItem key={`${idx}-tn`} items={talent} />
              ))}
            </CharacterProgressionTable>
          </>
        ) : null}
        {material.talent.talentSkill.length > 0 ? (
          <>
            <SectionHeading title="Elemental Skill Talent Level" />
            <CharacterProgressionTable
              cols={['Level', 'Mora', 'Common', 'Book', 'Boss', 'Crown']}
              footerItem={talentSkillFooter}
            >
              {material.talent.talentSkill.map((talent, idx) => (
                <CharacterProgressionItem key={`${idx}-ts`} items={talent} />
              ))}
            </CharacterProgressionTable>
          </>
        ) : null}

        {material.talent.talentBurst.length > 0 ? (
          <>
            <SectionHeading title="Elemental Burst Talent Level" />
            <CharacterProgressionTable
              cols={['Level', 'Mora', 'Common', 'Book', 'Boss', 'Crown']}
              footerItem={talentBurstFooter}
            >
              {material.talent.talentBurst.map((talent, idx) => (
                <CharacterProgressionItem key={`${idx}-tb`} items={talent} />
              ))}
            </CharacterProgressionTable>
          </>
        ) : null}
      </div>
    </>
  )
}
