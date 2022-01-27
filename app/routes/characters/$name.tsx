import {
  json,
  LoaderFunction,
  Outlet,
  ShouldReloadFunction,
  useCatch,
  useLoaderData,
  useOutletContext,
  useParams,
} from 'remix'
import { RouteParams } from 'routes-gen'
import invariant from 'tiny-invariant'

import characterMap from '~/data/characters.server'
import type { CharacterName, ICharacter, ITraveler } from '~/types/character'
import { stringToCapitalized } from '~/utils/string'

export const loader: LoaderFunction = async ({ params }) => {
  const { name } = params as RouteParams['/characters/:name']

  const character = characterMap.get(stringToCapitalized(name) as CharacterName)
  if (!character) {
    throw json('Character not found', { status: 404 })
  }

  return json<CharacterName>(character.name, { status: 200 })
}

export default function CharacterPage() {
  const name = useLoaderData<CharacterName>()
  const characterData = useOutletContext<Array<ITraveler | ICharacter>>()

  const character = characterData.find(c => c.name === name)
  invariant(character, 'This should never throw')

  return <Outlet context={character} />
}

export function CatchBoundary() {
  const caught = useCatch()
  const params = useParams()

  if (caught.status === 404) {
    return <div>Character with name "{params.name}" not found</div>
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`)
}

export const unstable_shouldReload: ShouldReloadFunction = () => {
  return false
}
