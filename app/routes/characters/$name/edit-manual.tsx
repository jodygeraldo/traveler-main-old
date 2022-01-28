import { ActionFunction, json, redirect, useOutletContext } from 'remix'
import { route, RouteParams } from 'routes-gen'
import invariant from 'tiny-invariant'

import CharacterLevelManual from '~/components/Character/CharacterLevel/CharacterLevelManual/CharacterLevelManual'
import { authenticator } from '~/services/auth.server'
import { ICharacter, ITraveler } from '~/types/character'
import {
  addUserCharacter,
  parseTalentToNumberArray,
  updateUserCharacter,
} from '~/utils/db/character.server'
import { getFormHackMessage } from '~/utils/message'

export const action: ActionFunction = async ({ request, params }) => {
  const { name } = params as RouteParams['/characters/:name/edit-manual']

  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const formData = await request.formData()
  const id = formData.get('id')
  const characterName = formData.get('name')
  const level = formData.get('level')
  const ascension = formData.get('ascension')
  const tNormal = formData.get('talent-normal')
  const tSkill = formData.get('talent-skill')
  const tBurst = formData.get('talent-burst')
  const tAnemoNormal = formData.get('anemo-talent-normal')
  const tAnemoSkill = formData.get('anemo-talent-skill')
  const tAnemoburst = formData.get('anemo-talent-burst')
  const tGeoNormal = formData.get('geo-talent-normal')
  const tGeoSkill = formData.get('geo-talent-skill')
  const tGeoBurst = formData.get('geo-talent-burst')
  const tElectroNormal = formData.get('electro-talent-normal')
  const tElectroSkill = formData.get('electro-talent-skill')
  const tElectroBurst = formData.get('electro-talent-burst')

  invariant(typeof id === 'string', 'Data not sync properly')
  invariant(typeof characterName === 'string', getFormHackMessage())
  invariant(typeof level === 'string', getFormHackMessage())
  invariant(typeof ascension === 'string', getFormHackMessage())

  let talent: [number, number, number] | ITraveler['level']['talent']

  if (characterName === 'Traveler') {
    invariant(typeof tAnemoNormal === 'string', getFormHackMessage())
    invariant(typeof tAnemoSkill === 'string', getFormHackMessage())
    invariant(typeof tAnemoburst === 'string', getFormHackMessage())
    invariant(typeof tGeoNormal === 'string', getFormHackMessage())
    invariant(typeof tGeoSkill === 'string', getFormHackMessage())
    invariant(typeof tGeoBurst === 'string', getFormHackMessage())
    invariant(typeof tElectroNormal === 'string', getFormHackMessage())
    invariant(typeof tElectroSkill === 'string', getFormHackMessage())
    invariant(typeof tElectroBurst === 'string', getFormHackMessage())

    talent = {
      anemo: parseTalentToNumberArray(tAnemoNormal, tAnemoSkill, tAnemoburst),
      geo: parseTalentToNumberArray(tGeoNormal, tGeoSkill, tGeoBurst),
      electro: parseTalentToNumberArray(
        tElectroNormal,
        tElectroSkill,
        tElectroBurst,
      ),
    }
  } else {
    invariant(typeof tNormal === 'string', getFormHackMessage())
    invariant(typeof tSkill === 'string', getFormHackMessage())
    invariant(typeof tBurst === 'string', getFormHackMessage())

    talent = parseTalentToNumberArray(tNormal, tSkill, tBurst)
  }

  if (id === 'NEW') {
    await addUserCharacter(user.id, name, +level, +ascension, talent)

    return redirect(route('/characters/:name', { name }))
  }

  await updateUserCharacter(id, +level, +ascension, talent)

  return redirect(route('/characters/:name', { name }))
}

export default function CharacterEditManualRoute() {
  const character = useOutletContext<ICharacter | ITraveler>()

  return <CharacterLevelManual character={character} />
}
