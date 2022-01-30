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
import { route } from 'routes-gen'
import invariant from 'tiny-invariant'

import { requireUserId } from '~/services/auth.server'
import type { CharacterName, ICharacter } from '~/types/character'
import { ItemTypes } from '~/types/item'
import { characterName as characterNameHelper } from '~/utils/db/character.server'
import {
  getItems,
  getUpdatedUserItems,
  getUserItems,
} from '~/utils/db/item.server'
import { stringToCapitalized } from '~/utils/string'

interface LoaderData {
  name: CharacterName
  userItem?: ItemTypes
}
export const loader: LoaderFunction = async ({ params, request }) => {
  const userId = await requireUserId(request)
  const { name } = params
  invariant(
    typeof name === 'string',
    'There is something wrong with the route params',
  )

  const parsedName = stringToCapitalized(name) as CharacterName

  const characterName = characterNameHelper.includes(parsedName)
  if (!characterName) {
    throw json('Character not found', { status: 404 })
  }

  const userItem = await getUserItems(userId)

  if (!userItem) {
    return json<LoaderData>({ name: parsedName }, { status: 200 })
  }
  const items = getItems()

  const updatedItems = getUpdatedUserItems(userItem, items)

  return json<LoaderData>(
    { name: parsedName, userItem: updatedItems },
    { status: 200 },
  )
}

export default function CharacterPage() {
  const { name } = useLoaderData<LoaderData>()
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

export const unstable_shouldReload: ShouldReloadFunction = ({
  params,
  submission,
}) => {
  invariant(params.name, 'This have to exist')
  return !!submission && submission.method !== 'GET'
}
