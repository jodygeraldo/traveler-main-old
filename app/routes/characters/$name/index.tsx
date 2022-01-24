import { ActionFunction, json, Link, useOutletContext } from 'remix'
import invariant from 'tiny-invariant'

import CharacterView from '~/components/Character/CharacterView'
import { ICharacter, ITraveler } from '~/types/character'
import { requireUserSession } from '~/utils/auth.server'
import {
  removeUserCharacterOwnershipEntry,
  setUserCharacterOwnership,
} from '~/utils/character.server'
import { getFormHackMessage } from '~/utils/message'

export const action: ActionFunction = async ({ request }) => {
  const user = await requireUserSession(request)

  const formData = await request.formData()
  const name = formData.get('name')
  const own = formData.get('own')
  invariant(typeof name === 'string', getFormHackMessage())
  invariant(typeof own === 'string', getFormHackMessage())

  if (own === 'true') {
    await setUserCharacterOwnership(name, user.id)
  } else {
    await removeUserCharacterOwnershipEntry(name, user.id)
  }

  return json(null, { status: 201 })
}

export default function CharacterEditManualRoute() {
  const { character, level } = useOutletContext<{
    character: ICharacter | ITraveler
    level: ICharacter['level'] | ITraveler['level']
  }>()

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
