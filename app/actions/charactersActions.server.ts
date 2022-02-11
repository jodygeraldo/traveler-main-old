import { ActionFunction, json } from 'remix'
import invariant from 'tiny-invariant'

import { Actions } from '~/actions/actions'
import CharacterMap from '~/model/Character/Character.server'
import { requireUserId } from '~/services/auth.server'
import {
  createOrUpdateCharacterOwnership,
  createOrUpdateTracked,
} from '~/utils/db/character.server'
import { toLowerKebabCase } from '~/utils/string'

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  const formData = await request.formData()
  const actions = formData.get('_action')
  invariant(typeof actions === 'string', 'actions is required')
  const name = formData.get('name')
  const id = formData.get('id')

  switch (actions) {
    case Actions.UNMARK_OWNED:
    case Actions.MARK_OWNED: {
      invariant(typeof name === 'string', 'name is required')

      let newId: string
      if (typeof id === 'string') {
        newId = id
      } else {
        newId = ''
      }

      const character = CharacterMap.get(toLowerKebabCase(name))
      if (!character) {
        throw json('Requested character name is not found', { status: 400 })
      }

      await createOrUpdateCharacterOwnership(
        userId,
        name,
        newId,
        actions === Actions.UNMARK_OWNED,
      )

      return json(null, {
        status: 201,
      })
    }
    case Actions.MARK_TRACKED:
    case Actions.UNMARK_TRACKED: {
      invariant(typeof name === 'string', 'name is required')
      invariant(typeof id === 'string', 'id is required')
      const character = CharacterMap.get(toLowerKebabCase(name))
      if (!character) {
        throw json('Requested character name is not found', { status: 400 })
      }
      await createOrUpdateTracked(
        userId,
        name,
        actions === Actions.MARK_TRACKED,
        id,
      )

      return json(null, {
        status: 201,
      })
    }
    default:
      return json(null, { status: 204 })
  }
}
