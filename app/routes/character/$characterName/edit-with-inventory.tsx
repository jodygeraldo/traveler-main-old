import {
  json,
  Link,
  LoaderFunction,
  Outlet,
  useCatch,
  useMatches,
  useOutletContext,
  useParams,
} from 'remix'
import { route } from 'routes-gen'
import invariant from 'tiny-invariant'

import CharactersMap from '~/services/data/characters/character-progression.server'
import { ICharacterDetail } from '~/types/character'

export const loader: LoaderFunction = ({ params }) => {
  const { characterName } = params
  invariant(
    typeof characterName === 'string',
    'There is something wrong with the route params',
  )

  console.log(characterName)

  if (!CharactersMap.has(characterName)) {
    throw json('Character not found', { status: 404 })
  }

  return 'ok'
}

export default function CharacterEditWithInventoryPage() {
  const { characterName } = useParams()
  invariant(characterName, 'There is something wrong with the route params')

  const character = useOutletContext<ICharacterDetail>()

  return (
    <div>
      <div className="mb-6 flex gap-5">
        <Link
          to={route('/character/:characterName/edit-with-inventory', {
            characterName,
          })}
        >
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
      <Outlet context={character} />
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
