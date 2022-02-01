import {
  json,
  Link,
  LoaderFunction,
  Outlet,
  useCatch,
  useLoaderData,
  useMatches,
  useOutletContext,
  useParams,
} from 'remix'
import { route } from 'routes-gen'
import invariant from 'tiny-invariant'

import { CharacterName, ICharacter } from '~/types/character'
import { ItemTypes } from '~/types/item'
import { characterName as characterNameHelper } from '~/utils/db/character.server'
import { stringToCapitalized } from '~/utils/string'

export const loader: LoaderFunction = ({ params }) => {
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

  return json<CharacterName>(parsedName, { status: 200 })
}

export default function CharacterEditWithInventoryPage() {
  const name = useLoaderData<CharacterName>()
  const userItem = useMatches().filter(
    match => match.id === 'routes/character/$name',
  )[0].data.userItem as ItemTypes | undefined

  const character = useOutletContext<ICharacter>()

  return (
    <div>
      <div className="mb-6 flex gap-5">
        <Link to={route('/character/:name/edit-with-inventory', { name })}>
          <button className="rounded-lg bg-gray-800 py-2 px-4 font-bold text-white hover:bg-gray-900">
            Back
          </button>
        </Link>
        <Link to="items">
          <button className="rounded-lg bg-gray-800 py-2 px-4 font-bold text-white hover:bg-gray-900">
            Items Table
          </button>
        </Link>
      </div>
      <Outlet context={{ character, userItem }} />
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
