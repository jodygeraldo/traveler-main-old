import { ActionFunction, redirect, useOutletContext } from 'remix'
import { route, RouteParams } from 'routes-gen'
import invariant from 'tiny-invariant'

import CharacterLevelManual from '~/components/Character/CharacterLevel/CharacterLevelManual/CharacterLevelManual'
import { requireUserId } from '~/services/auth.server'
import { ICharacter } from '~/types/character'
import {
  addUserCharacter,
  updateUserCharacter,
} from '~/utils/db/character.server'
import { getFormHackMessage } from '~/utils/message'

export const action: ActionFunction = async ({ request, params }) => {
  const { name } = params as RouteParams['/character/:name/edit-manual']

  const userId = await requireUserId(request)

  const formData = await request.formData()
  const id = formData.get('id')
  const characterName = formData.get('name')
  const level = formData.get('level')
  const ascension = formData.get('ascension')
  const tNormal = formData.get('talent-normal')
  const tSkill = formData.get('talent-skill')
  const tBurst = formData.get('talent-burst')

  invariant(typeof id === 'string', 'Data not sync properly')
  invariant(typeof characterName === 'string', getFormHackMessage())
  invariant(typeof level === 'string', getFormHackMessage())
  invariant(typeof ascension === 'string', getFormHackMessage())
  invariant(typeof tNormal === 'string', getFormHackMessage())
  invariant(typeof tSkill === 'string', getFormHackMessage())
  invariant(typeof tBurst === 'string', getFormHackMessage())

  const talent: [number, number, number] = [+tNormal, +tSkill, +tBurst]

  if (id === 'NEW') {
    await addUserCharacter(userId, name, +level, +ascension, talent)

    return redirect(route('/character/:name', { name }))
  }

  await updateUserCharacter(id, +level, +ascension, talent)

  return redirect(route('/character/:name', { name }))
}

export default function CharacterEditManualRoute() {
  const character = useOutletContext<ICharacter>()

  return <CharacterLevelManual character={character} />
}
