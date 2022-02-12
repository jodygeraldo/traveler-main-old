import { json, LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import SectionContainer from '~/components/SectionContainer'
import CharacterMap from '~/model/Character/Character.server'
import { ICharacter } from '~/model/Character/CharacterType'

interface LoaderData {
  character: ICharacter
}
export const loader: LoaderFunction = ({ params }) => {
  const { characterName } = params
  invariant(characterName, 'characterName is required')

  const character = CharacterMap.get(characterName)
  if (!character) {
    throw json(
      { message: `Character ${characterName} not found` },
      { status: 404 },
    )
  }

  return json<LoaderData>({ character }, { status: 200 })
}

export default function CharacterDetailIndex() {
  const { character } = useLoaderData<LoaderData>()

  return (
    <SectionContainer title={`${character.name} data`} hideTitle>
      <h1 className="text-7xl">{character.name}</h1>
    </SectionContainer>
  )
}
