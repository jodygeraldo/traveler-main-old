import type { LoaderFunction } from 'remix'
import { useCatch, useMatches, useParams } from 'remix'

import CharacterView from '~/components/Character/CharacterView'
import { ICharacter } from '~/types/character'
import { getCharacters } from '~/utils/character.server'

export const loader: LoaderFunction = async ({ params }) => {
  const { name } = params
  const character = (await getCharacters()).find(
    c => c.path.replace('/', '') === name,
  )
  if (!character) {
    throw new Response('Character not found', { status: 404 })
  }

  return null
}

export default function CharacterRoute() {
  const characters = useMatches().find(m => m.pathname === '/character')?.data
    .characters as ICharacter[]

  const params = useParams()
  const character = characters.find(
    c => c.path.replace('/', '') === params.name,
  )
  if (!character) {
    throw new Error('This should not ever thrown')
  }

  return (
    <div>
      <CharacterView character={character} />
      <img src={`../assets/images/characters/${character.image.full}`} alt="" />
      <img
        src={`../assets/images/elements/${character.vision.toLowerCase()}.png`}
        alt="Pyro Vision"
      />
      <img
        src={`../assets/images/weapon_types/${character.weapon_type.toLowerCase()}.png`}
        alt="Sword Weapon Type"
      />
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  const params = useParams()

  if (caught.status === 404) {
    return <div>Character with name "{params.name}" not found</div>
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`)
}
