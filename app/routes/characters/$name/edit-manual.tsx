import { ActionFunction, redirect, useOutletContext } from 'remix'
import { route, RouteParams } from 'routes-gen'
import invariant from 'tiny-invariant'

import CharacterLevelManual from '~/components/Character/CharacterLevel/CharacterLevelManual/CharacterLevelManual'
import { ICharacter, ITraveler } from '~/types/character'
import { requireUserSession } from '~/utils/auth.server'
import {
  parseTalentToNumberArray,
  setUserCharacter,
} from '~/utils/character.server'
import { getFormHackMessage } from '~/utils/message'

export const action: ActionFunction = async ({ request, params }) => {
  const user = await requireUserSession(request)

  const { name } = params as RouteParams['/characters/:name/edit-manual']

  const formData = await request.formData()
  const characterName = formData.get('name')
  const level = formData.get('level')
  const ascension = formData.get('ascension')
  const talentNormal = formData.get('talent-normal')
  const talentSkill = formData.get('talent-skill')
  const talentBurst = formData.get('talent-burst')
  const talentAnemoNormal = formData.get('anemo-talent-normal')
  const talentAnemoSkill = formData.get('anemo-talent-skill')
  const talentAnemoburst = formData.get('anemo-talent-burst')
  const talentGeoNormal = formData.get('geo-talent-normal')
  const talentGeoSkill = formData.get('geo-talent-skill')
  const talentGeoBurst = formData.get('geo-talent-burst')
  const talentElectroNormal = formData.get('electro-talent-normal')
  const talentElectroSkill = formData.get('electro-talent-skill')
  const talentElectroBurst = formData.get('electro-talent-burst')

  invariant(typeof characterName === 'string', getFormHackMessage())
  invariant(typeof level === 'string', getFormHackMessage())
  invariant(typeof ascension === 'string', getFormHackMessage())

  let talent: [number, number, number] | ITraveler['level']['talent']

  if (characterName === 'Traveler') {
    invariant(typeof talentAnemoNormal === 'string', getFormHackMessage())
    invariant(typeof talentAnemoSkill === 'string', getFormHackMessage())
    invariant(typeof talentAnemoburst === 'string', getFormHackMessage())
    invariant(typeof talentGeoNormal === 'string', getFormHackMessage())
    invariant(typeof talentGeoSkill === 'string', getFormHackMessage())
    invariant(typeof talentGeoBurst === 'string', getFormHackMessage())
    invariant(typeof talentElectroNormal === 'string', getFormHackMessage())
    invariant(typeof talentElectroSkill === 'string', getFormHackMessage())
    invariant(typeof talentElectroBurst === 'string', getFormHackMessage())

    talent = {
      anemo: parseTalentToNumberArray(
        talentAnemoNormal,
        talentAnemoSkill,
        talentAnemoburst,
      ),
      geo: parseTalentToNumberArray(
        talentGeoNormal,
        talentGeoSkill,
        talentGeoBurst,
      ),
      electro: parseTalentToNumberArray(
        talentElectroNormal,
        talentElectroSkill,
        talentElectroBurst,
      ),
    }
  } else {
    invariant(typeof talentNormal === 'string', getFormHackMessage())
    invariant(typeof talentSkill === 'string', getFormHackMessage())
    invariant(typeof talentBurst === 'string', getFormHackMessage())

    talent = parseTalentToNumberArray(talentNormal, talentSkill, talentBurst)
  }

  await setUserCharacter(
    characterName,
    Number(level),
    Number(ascension),
    talent,
    user.id,
  )

  return redirect(route('/characters/:name', { name }))
}

export default function CharacterEditManualRoute() {
  const { character, level } = useOutletContext<{
    character: ICharacter | ITraveler
    level: ICharacter['level'] | ITraveler['level']
  }>()

  return <CharacterLevelManual character={character} level={level} />
}
