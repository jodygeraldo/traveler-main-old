import { PaperClipIcon } from '@heroicons/react/outline'
import { json, LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import CharacterDetail from '~/components/Character/CharacterDetail'
import CharacterDetailItems from '~/components/Character/CharacterDetailItem'
import SectionContainer from '~/components/SectionContainer'
import CharacterMap from '~/model/Character/Character.server'
import { ICharacter } from '~/model/Character/CharacterType'
import { requireUserId } from '~/services/auth.server'
import { getUserCharacter } from '~/utils/db/character.server'
import { toLowerSnake } from '~/utils/string'

interface LoaderData {
  character: ICharacter
}
export const loader: LoaderFunction = async ({ params, request }) => {
  const { characterName } = params
  invariant(characterName, 'characterName is required')

  const character = CharacterMap.get(characterName)
  if (!character) {
    throw json(
      { message: `Character ${characterName} not found` },
      { status: 404 },
    )
  }

  const userId = await requireUserId(request)
  const userCharacter = await getUserCharacter(userId, character.name)
  character.progression = userCharacter?.progression

  return json<LoaderData>({ character }, { status: 200 })
}

export default function CharacterDetailIndex() {
  const { character } = useLoaderData<LoaderData>()

  return (
    <SectionContainer title={`${character.name} Details`}>
      <CharacterDetail name={character.name}>
        <CharacterDetailItems character={character} />
      </CharacterDetail>
    </SectionContainer>
  )
}
