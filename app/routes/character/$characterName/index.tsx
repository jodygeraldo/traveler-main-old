import { ActionFunction, json, Link, useMatches, useOutletContext } from 'remix'
import invariant from 'tiny-invariant'

import CharacterView from '~/components/Character/CharacterView'
import { requireUserId } from '~/services/auth.server'
import { ICharacter, ICharacterDetail } from '~/types/character'
import {
  addUserCharacterOwnership,
  updateUserCharacterOwnership,
} from '~/utils/db/character.server'
import { getFormHackMessage } from '~/utils/message'

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

export default function CharacterRoute() {
  const { progression, id } = useMatches().find(
    match => match.id === 'routes/character/$characterName',
  )?.data as { progression: ICharacter['progression']; id?: string }
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
