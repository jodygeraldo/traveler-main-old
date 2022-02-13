import { json, LoaderFunction, useLoaderData, useTransition } from 'remix'
import invariant from 'tiny-invariant'

import CharacterItemButtonGroup from '~/components/Character/CharacterItemButtonGroup'
import CharacterItemTable from '~/components/Character/CharacterTable'
import CharacterTableAscensionItem from '~/components/Character/CharacterTableAscensionItem'
import CharacterTableTalentItem from '~/components/Character/CharacterTableTalentItem'
import SectionContainer from '~/components/SectionContainer'
import {
  AscensionMaterialType,
  TalentMaterialType,
} from '~/model/Character/CharacterType'
import { requireUserId } from '~/services/auth.server'
import { getUserCharacterItem } from '~/utils/db/character.server'

interface Material {
  ascension: AscensionMaterialType[]
  talent: {
    normal: TalentMaterialType[]
    skill: TalentMaterialType[]
    burst: TalentMaterialType[]
  }
}

interface LoaderData {
  name: string
  ascensionHeader: string[]
  fullMaterial: Material
  cutMaterial?: Material
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const userId = await requireUserId(request)
  const { characterName } = params
  invariant(characterName, 'characterName is required')

  const searchParams = new URL(request.url).searchParams
  const showFull = searchParams.get('all') === 'on'

  const characterItem = await getUserCharacterItem(
    userId,
    characterName,
    showFull,
  )
  if (!characterItem) {
    throw json(
      { message: `Character not found with name ${characterName}` },
      404,
    )
  }

  const { name, fullMaterial, cutMaterial } = characterItem

  const ascensionHeader = [
    'Level',
    'Mora',
    'Gem',
    'Local Specialty',
    'Common',
    'Boss',
  ]
  if (name.includes('Traveler')) {
    ascensionHeader.pop()
  }

  return json({
    name,
    ascensionHeader,
    fullMaterial,
    cutMaterial,
  })
}

export default function CharacterDetailItems() {
  const { name, ascensionHeader, fullMaterial, cutMaterial } =
    useLoaderData<LoaderData>()

  const transition = useTransition()

  const usedMaterial = cutMaterial ?? fullMaterial
  const optimisticMaterial =
    transition.submission?.formData.get('all') === 'on'
      ? fullMaterial
      : usedMaterial
  const talentHeader = ['Level', 'Common', 'Mora', 'Book', 'Boss', 'Crown']

  return (
    <>
      <SectionContainer title="Display Setting" hideTitle>
        <CharacterItemButtonGroup name={name} />
      </SectionContainer>
      {optimisticMaterial.ascension.length > 0 ? (
        <SectionContainer title={`${name} Ascension`}>
          <CharacterItemTable headers={ascensionHeader}>
            {optimisticMaterial.ascension.map((item, idx) => (
              <CharacterTableAscensionItem
                key={`${item[2].name}${idx}`}
                items={item}
              />
            ))}
          </CharacterItemTable>
          {/* <CharacterDetailItem /> */}
        </SectionContainer>
      ) : null}
      {optimisticMaterial.talent.normal.length > 0 ? (
        <SectionContainer title="Normal Attack Talent">
          <CharacterItemTable headers={talentHeader}>
            {optimisticMaterial.talent.normal.map((item, idx) => (
              <CharacterTableTalentItem
                key={`${item[2].name}${idx}`}
                items={item}
              />
            ))}
          </CharacterItemTable>
        </SectionContainer>
      ) : null}
      {optimisticMaterial.talent.skill.length > 0 ? (
        <SectionContainer title="Elemental Skill Talent">
          <CharacterItemTable headers={talentHeader}>
            {optimisticMaterial.talent.skill.map((item, idx) => (
              <CharacterTableTalentItem
                key={`${item[3].name}${idx}`}
                items={item}
              />
            ))}
          </CharacterItemTable>
        </SectionContainer>
      ) : null}
      {optimisticMaterial.talent.burst.length > 0 ? (
        <SectionContainer title="Elemental Burst Talent">
          <CharacterItemTable headers={talentHeader}>
            {optimisticMaterial.talent.burst.map((item, idx) => (
              <CharacterTableTalentItem
                key={`${item[1].name}${idx}`}
                items={item}
              />
            ))}
          </CharacterItemTable>
        </SectionContainer>
      ) : null}
    </>
  )
}
