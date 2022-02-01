import {
  ActionFunction,
  json,
  Link,
  LoaderFunction,
  useLoaderData,
  useOutletContext,
} from 'remix'
import invariant from 'tiny-invariant'

import CharacterView from '~/components/Character/CharacterView'
import { requireUserId } from '~/services/auth.server'
import { ICharacter, ICharacterDetail } from '~/types/character'
import {
  addUserCharacterOwnership,
  getUserCharacter,
  updateUserCharacterOwnership,
} from '~/utils/db/character.server'
import { getFormHackMessage } from '~/utils/message'
import { stringToCapitalized } from '~/utils/string'

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  const formData = await request.formData()
  const id = formData.get('id')
  const name = formData.get('name')
  const newOwnStatus = formData.get('toggle-own')
  invariant(typeof name === 'string', getFormHackMessage())
  invariant(typeof newOwnStatus === 'string', getFormHackMessage())

  if (id) {
    invariant(typeof id === 'string', getFormHackMessage())
    await updateUserCharacterOwnership(id, !(newOwnStatus === 'true'))
  } else {
    await addUserCharacterOwnership(userId, name)
  }

  return json(null, { status: 201 })
}

interface LoaderData {
  progression: ICharacter['progression']
  id?: string
}
export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request)
  const { characterName } = params
  invariant(
    typeof characterName === 'string',
    'There is something wrong with the route params',
  )

  const userCharacter = await getUserCharacter(
    userId,
    stringToCapitalized(characterName),
  )

  if (userCharacter) {
    return json<LoaderData>({
      progression: {
        level: userCharacter.level,
        ascension: userCharacter.ascension,
        talent: userCharacter.talent as [number, number, number],
      },
      id: userCharacter.id,
    })
  } else {
    return json<LoaderData>(
      {
        progression: {
          level: 1,
          ascension: 0,
          talent: [1, 1, 1],
        },
      },
      { status: 200 },
    )
  }
}

export default function CharacterRoute() {
  const { progression, id } = useLoaderData<LoaderData>()
  const character = useOutletContext<ICharacterDetail>()

  return (
    <div>
      <CharacterView character={character} progression={progression} id={id} />
      {character.ownership ? (
        <div className="flex gap-4">
          <Link to="edit-manual">
            <button>Edit Manual</button>
          </Link>
          <Link to="edit-with-inventory">
            <button>Edit With Inventory</button>
          </Link>
        </div>
      ) : null}
    </div>
  )
}
