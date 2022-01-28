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

import type { CharacterName, ICharacter } from '~/types/character'
import { characterName as characterNameHelper } from '~/utils/db/character.server'
import { stringToCapitalized } from '~/utils/string'

export const loader: LoaderFunction = async ({ params }) => {
  const { name } = params as RouteParams['/characters/:name']

  const parsedName = stringToCapitalized(name) as CharacterName

  const characterName = characterNameHelper.includes(parsedName)
  if (!characterName) {
    throw json('Character not found', { status: 404 })
  }

  return json<CharacterName>(parsedName, { status: 200 })
}

export default function CharacterPage() {
  const name = useLoaderData<CharacterName>()
  const characterData = useOutletContext<ICharacter[]>()

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
