import { ActionFunction, json, LoaderFunction, useLoaderData } from 'remix'
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
import { parseStringFormData } from '~/utils/http'
import type { User } from '~/utils/redis/redis-user-schema.server'
import { getDataId, getUserData } from '~/utils/user.server'
import { commitSession, getUserDataSession } from '~/utils/user-data.server'

export const action: ActionFunction = async ({ request }) => {
  const session = await supabaseStrategy.checkSession(request, {
    failureRedirect: '/login',
  })
  invariant(typeof session.user?.id === 'string', 'This should never throw')

  interface formPostData {
    _action: CharacterActionTypeEnum
    characterName: string
    characterLevel: string
    characterAscension: string
    anemoTalentNormal: string
    anemoTalentSkill: string
    anemoTalentBurst: string
    geoTalentNormal: string
    geoTalentSkill: string
    geoTalentBurst: string
    electroTalentNormal: string
    electroTalentSkill: string
    electroTalentBurst: string
  }

  const data = (await parseStringFormData(request)) as formPostData
  const anemoTalent: [number, number, number] = [
    +data.anemoTalentNormal,
    +data.anemoTalentSkill,
    +data.anemoTalentBurst,
  ]
  const geoTalent: [number, number, number] = [
    +data.geoTalentNormal,
    +data.geoTalentSkill,
    +data.geoTalentBurst,
  ]
  const electroTalent: [number, number, number] = [
    +data.electroTalentNormal,
    +data.electroTalentSkill,
    +data.electroTalentBurst,
  ]

  const userDataSession = await getUserDataSession(request)
  const userDataIds = userDataSession.get('userData') as User['data_ids']
  const travelerDataId = getDataId(userDataIds, data.characterName)

  switch (data._action) {
    case CharacterActionTypeEnum.Munual: {
      const id = await setUserCharacter(
        data.characterName,
        +data.characterLevel,
        +data.characterAscension,
        {
          anemo: anemoTalent,
          geo: geoTalent,
          electro: electroTalent,
        },
        session.user.id,
        travelerDataId,
      )

      if (!id) {
        return json(null, { status: 200 })
      }

      const userData = await getUserData(session.user.id)
      userDataSession.set('userData', userData)

      return json(request.url, {
        status: 201,
        headers: { 'Set-Cookie': await commitSession(userDataSession) },
      })
    }
    case CharacterActionTypeEnum.Automatic: {
      break
    }

    default: {
      return json(null, { status: 204 })
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
