import { ActionFunction, json, Link, useOutletContext } from 'remix'
import invariant from 'tiny-invariant'

import CharacterView from '~/components/Character/CharacterView'
import { ICharacter, ITraveler } from '~/types/character'
import { authenticator } from '~/utils/auth.server'
import {
  addUserCharacterOwnership,
  updateUserCharacterOwnership,
} from '~/utils/db/character.server'
import { getFormHackMessage } from '~/utils/message'

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const formData = await request.formData()
  const name = formData.get('name')
  const newOwnStatus = formData.get('toggle-own')
  const id = formData.get('id')
  invariant(typeof id === 'string', getFormHackMessage())
  invariant(typeof name === 'string', getFormHackMessage())
  invariant(typeof newOwnStatus === 'string', getFormHackMessage())

  if (id === 'NEW') {
    await addUserCharacterOwnership(user.id, name)

    return json(null, { status: 201 })
  }

  await updateUserCharacterOwnership(id, !(newOwnStatus === 'true'))

  return json(null, { status: 201 })
}

export default function CharacterRoute() {
  const character = useOutletContext<ICharacter | ITraveler>()

  return (
    <div>
      <CharacterView character={character} />
      {character.own ? (
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