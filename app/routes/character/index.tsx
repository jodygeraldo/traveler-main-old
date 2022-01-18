import { ActionFunction, LoaderFunction, redirect, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import CharacterLevel from '~/components/Character/CharacterLevel/CharacterLevel'
import CharacterLevelManual from '~/components/Character/CharacterLevel/CharacterLevelManual/CharacterLevelManual'
import CharacterView from '~/components/Character/CharacterView'
import { CharacterActionTypeEnum, ITraveler } from '~/types/character'
import { supabaseStrategy } from '~/utils/auth.server'
import {
  getCharacter,
  getUserCharacter,
  setUserCharacter,
} from '~/utils/character.server'
import { getFormHackMessage } from '~/utils/message'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const $action = formData.get('_action')
  const name = formData.get('character-name')
  const level = formData.get('character-level')
  const ascension = formData.get('character-ascension')
  const talentAnemoNormal = formData.get('anemo-talent-normal')
  const talentAnemoSkill = formData.get('anemo-talent-skill')
  const talentAnemoBurst = formData.get('anemo-talent-burst')
  const talentGeoNormal = formData.get('geo-talent-normal')
  const talentGeoSkill = formData.get('geo-talent-skill')
  const talentGeoBurst = formData.get('geo-talent-burst')
  const talentElectroNormal = formData.get('electro-talent-normal')
  const talentElectroSkill = formData.get('electro-talent-skill')
  const talentElectroBurst = formData.get('electro-talent-burst')

  const user = {
    id: 'user2',
    // Todo get this from the session
    travelerDataId: '01FSM3XZQ142DAKMZB1HPA1FB0',
  }

  invariant(typeof $action === 'string', getFormHackMessage())
  invariant(typeof name === 'string', getFormHackMessage())
  invariant(typeof level === 'string', getFormHackMessage())
  invariant(typeof ascension === 'string', getFormHackMessage())

  switch ($action as CharacterActionTypeEnum) {
    case CharacterActionTypeEnum.Munual: {
      invariant(typeof talentAnemoNormal === 'string', getFormHackMessage())
      invariant(typeof talentAnemoSkill === 'string', getFormHackMessage())
      invariant(typeof talentAnemoBurst === 'string', getFormHackMessage())
      invariant(typeof talentGeoNormal === 'string', getFormHackMessage())
      invariant(typeof talentGeoSkill === 'string', getFormHackMessage())
      invariant(typeof talentGeoBurst === 'string', getFormHackMessage())
      invariant(typeof talentElectroNormal === 'string', getFormHackMessage())
      invariant(typeof talentElectroSkill === 'string', getFormHackMessage())
      invariant(typeof talentElectroBurst === 'string', getFormHackMessage())

      const id = await setUserCharacter(
        name,
        +level,
        +ascension,
        {
          anemo: [+talentAnemoNormal, +talentAnemoSkill, +talentAnemoBurst],
          geo: [+talentGeoNormal, +talentGeoSkill, +talentGeoBurst],
          electro: [
            +talentElectroNormal,
            +talentElectroSkill,
            +talentElectroBurst,
          ],
        },
        user.id,
        user.travelerDataId,
      )

      if (!id) {
        return redirect(request.url)
      }

      // TODO: put ID in user session
      return redirect(request.url, { headers: { 'Set-Cookie': '' } })
    }
    case CharacterActionTypeEnum.Automatic: {
      break
    }

    default: {
      return null
    }
  }
}

type LoaderData = {
  character: ITraveler
}
export const loader: LoaderFunction = async ({ request }) => {
  const session = await supabaseStrategy.checkSession(request, {
    failureRedirect: '/login',
  })
  invariant(typeof session.user?.id === 'string', 'This should never throw')

  const character = await getCharacter('traveler')

  character.level = {
    character: 1,
    ascension: 0,
    talent: {
      anemo: [1, 1, 1],
      geo: [1, 1, 1],
      electro: [1, 1, 1],
    },
  }

  const characterData = await getUserCharacter(character.name, session.user.id)

  if (!characterData) return { character }

  const { level, ascension, talent_anemo, talent_geo, talent_electro } =
    characterData

  character.level = {
    character: level,
    ascension,
    talent: {
      anemo: talent_anemo,
      geo: talent_geo,
      electro: talent_electro,
    },
  }

  return { character }
}

export default function CharacterDefaultRoute() {
  const { character } = useLoaderData<LoaderData>()

  return (
    <div className="px-6">
      <CharacterView character={character} />

      <CharacterLevelManual level={character.level} name={character.name} />
      {/* <CharacterLevel level={character.level} name={character.name}  /> */}

      <div className="flex">
        <img
          src={`../assets/images/characters/${character.image.full}`}
          alt=""
        />
        <img
          src={`../assets/images/characters/${character.image.fullFemale}`}
          alt=""
        />
      </div>

      {/* <img
        src={`../assets/images/elements/${character.vision.toLowerCase()}.png`}
        alt="Pyro Vision"
      /> */}
      <img
        src={`../assets/images/weapon_types/${character.weapon_type.toLowerCase()}.png`}
        alt="Sword Weapon Type"
      />
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  )
}
