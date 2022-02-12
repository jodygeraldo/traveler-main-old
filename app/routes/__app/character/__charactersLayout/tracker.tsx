import { LoaderFunction, useLoaderData } from 'remix'

import CharacterTrackerEmpty from '~/components/Character/CharacterTrackerEmpty'
import SectionContainer from '~/components/SectionContainer'
import { requireUserId } from '~/services/auth.server'
import { getUserTrackedCharacter } from '~/utils/db/character.server'

interface LoaderData {
  characters: {
    name: string
    ascension: number
    talent: number[]
    // material: {
    //   crown: 'Crown of Insight'
    //   common: CommonMaterialGroup
    //   talentBook: TalentBookGroup[]
    //   talentBoss: TalentBossMaterial
    //   talentCommon?: CommonMaterialGroup
    //   ascensionGem: AscensionGemGroup
    //   ascensionBoss?: AscensionBossMaterial
    //   localSpecialty: LocalSpecialty
    // }
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  const trackedCharacters = await getUserTrackedCharacter(userId)
  console.log(trackedCharacters)

  return null
}

export default function CharacterTrackerPage() {
  const { characters } = useLoaderData<LoaderData>()

  return (
    <SectionContainer title="Character Tracker">
      <CharacterTrackerEmpty />
    </SectionContainer>
  )
}
