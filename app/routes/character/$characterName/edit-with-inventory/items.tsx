import { useEffect, useState } from 'react'
import {
  json,
  LoaderFunction,
  useLoaderData,
  useOutletContext,
  useSubmit,
} from 'remix'
import invariant from 'tiny-invariant'

import CharacterProgressionItem from '~/components/Character/CharacterProgressionTable/CharacterProgressionItem'
import CharacterProgressionTable from '~/components/Character/CharacterProgressionTable/CharacterProgressionTable'
import SwitchLabelDescriptionLeft from '~/components/UI/Form/Switch'
import SectionHeading from '~/components/UI/Heading/SectionHeading'
import { requireUserId } from '~/services/auth.server'
import CharactersLookupMap from '~/services/data/characters/character-lookup.server'
import CharactersMap from '~/services/data/characters/character-progression.server'
import {
  IAscensionMaterial,
  ICharacterDetail,
  ITalentMaterial,
} from '~/types/character'
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
} from '~/utils/character.server'
import { getUserCharacter } from '~/utils/db/character.server'
import { stringToCapitalized } from '~/utils/string'

type Footer = {
  name: string
  amount: string | number
}[][]

interface LoaderData {
  material: {
    ascension: IAscensionMaterial[]
    talent: {
      talentNormal: ITalentMaterial[]
      talentSkill: ITalentMaterial[]
      talentBurst: ITalentMaterial[]
    }
  }
  ascensionHeaderTable: string[]
  ascensionFooter: Footer
  talentNormalFooter: Footer
  talentSkillFooter: Footer
  talentBurstFooter: Footer
}
export const loader: LoaderFunction = async ({ request, params }) => {
  // TODO: Cache the showAll data
  const showAllParam = new URL(request.url).searchParams.get('showAll')
  const showAll = showAllParam === null ? true : showAllParam === 'true'

  const { characterName } = params
  invariant(
    typeof characterName === 'string',
    'There is something wrong with the route params',
  )

  const userId = await requireUserId(request)

  const character = CharactersMap.get(characterName)
  const characterDetail = CharactersLookupMap.get(characterName)
  if (!character || !characterDetail) {
    throw json('Character not found', { status: 404 })
  }

  let ascensionStart: number, talentStart: [number, number, number]

  if (showAll) {
    ascensionStart = 0
    talentStart = [1, 1, 1]
  } else {
    const userCharacter = await getUserCharacter(
      userId,
      stringToCapitalized(characterName),
    )
    ascensionStart = userCharacter?.progression.ascension ?? 0
    talentStart = userCharacter?.progression.talent ?? [1, 1, 1]
  }

  const material = {
    ascension: getAscensionMaterial(
      character.material.ascension,
      ascensionStart,
    ),
    talent: getTalentMaterial(character.material.talent, talentStart),
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
    `Gem (${characterDetail.material.ascensionGem})`,
    `Local Specialty (${characterDetail.material.localSpecialty})`,
    `Common (${characterDetail.material.common})`,
    `Boss (${characterDetail.material.ascensionBoss})`,
  ]

  if (character.name.includes('Traveler')) {
    ascensionHeaderTable.pop()
    ascensionFooter.pop()
  }

  return json<LoaderData>(
    {
      material,
      ascensionHeaderTable,
      ascensionFooter,
      talentNormalFooter,
      talentSkillFooter,
      talentBurstFooter,
    },
    { status: 200 },
  )
}

export default function EditWithInventoryItemsRoute() {
  const {
    material,
    ascensionHeaderTable,
    ascensionFooter,
    talentNormalFooter,
    talentSkillFooter,
    talentBurstFooter,
  } = useLoaderData<LoaderData>()
  const character = useOutletContext<ICharacterDetail>()

  const [showAllItem, setShowAllItem] = useState(true)
  const [initialRender, setInitialRender] = useState(true)

  const submit = useSubmit()

  function handleSubmit() {
    submit({ showAll: `${showAllItem}` }, { method: 'get', replace: true })
  }

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false)
      return
    }
    handleSubmit()
  }, [showAllItem])

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
