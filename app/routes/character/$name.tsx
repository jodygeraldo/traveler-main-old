import {
  ActionFunction,
  json,
  LoaderFunction,
  useCatch,
  useLoaderData,
  useMatches,
  useParams,
} from 'remix'
import invariant from 'tiny-invariant'

import CharacterLevel from '~/components/Character/CharacterLevel/CharacterLevel'
import CharacterLevelManual from '~/components/Character/CharacterLevel/CharacterLevelManual/CharacterLevelManual'
import CharacterView from '~/components/Character/CharacterView'
import {
  CharacterActionTypeEnum,
  ICharacter,
  ITraveler,
} from '~/types/character'
import { supabaseStrategy } from '~/utils/auth.server'
import {
  getCharacters,
  getUserCharacter,
  removeUserCharacterOwnershipEntry,
  setUserCharacter,
  setUserCharacterOwnership,
} from '~/utils/character.server'
import { getFormHackMessage } from '~/utils/message'
import { User } from '~/utils/redis/redis-user-schema.server'
import { getDataId, getUserData } from '~/utils/user.server'
import { commitSession, getUserDataSession } from '~/utils/user-data.server'

export const action: ActionFunction = async ({ request }) => {
  const session = await supabaseStrategy.checkSession(request, {
    failureRedirect: '/login',
  })
  invariant(typeof session.user?.id === 'string', 'This should never throw')
  const userId = session.user.id

  const formData = await request.formData()
  const _action = formData.get('_action')
  const name = formData.get('character-name')
  const level = formData.get('character-level')
  const ascension = formData.get('character-ascension')
  const ownership = formData.get('owned')
  const talentNormal = formData.get('talent-normal')
  const talentSkill = formData.get('talent-skill')
  const talentBurst = formData.get('talent-burst')

  const userDataSession = await getUserDataSession(request)
  const userDataIds = userDataSession.get('userData') as User['data_ids']

  invariant(
    typeof _action === 'string',
    "This is shouldn't happen if you don't hack the form",
  )
  invariant(typeof name === 'string', getFormHackMessage())

  switch (_action as CharacterActionTypeEnum) {
    case CharacterActionTypeEnum.Ownership: {
      invariant(typeof ownership === 'string', getFormHackMessage())

      const ownershipDataId = getDataId(userDataIds, 'characterOwnership')
      if (ownership === 'true') {
        const id = await setUserCharacterOwnership(
          name,
          userId,
          ownershipDataId,
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

      // this is should have never happened unless data not synced properly with the database
      // TODO: throw some error here IDK what for now
      if (!ownershipDataId) {
        return json(null, { status: 400 })
      }

      await removeUserCharacterOwnershipEntry(name, ownershipDataId)

      return json(null, { status: 200 })
    }
    case CharacterActionTypeEnum.Munual: {
      invariant(typeof level === 'string', getFormHackMessage())
      invariant(typeof ascension === 'string', getFormHackMessage())
      invariant(typeof talentNormal === 'string', getFormHackMessage())
      invariant(typeof talentSkill === 'string', getFormHackMessage())
      invariant(typeof talentBurst === 'string', getFormHackMessage())

      const characterDataId = getDataId(userDataIds, name)

      const talent: [number, number, number] = [
        +talentNormal,
        +talentSkill,
        +talentBurst,
      ]

      const id = await setUserCharacter(
        name,
        +level,
        +ascension,
        talent,
        session.user.id,
        characterDataId,
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

    default:
      return json(null, { status: 204 })
  }
}

type LoaderData = {
  level: ICharacter['level']
}
export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await supabaseStrategy.checkSession(request, {
    failureRedirect: '/login',
  })
  invariant(typeof session.user?.id === 'string', 'This should never throw')

  const { name } = params
  const character = (await getCharacters()).find(
    c => c.path.replace('/', '') === name,
  )
  if (!character) {
    throw new Response('Character not found', { status: 404 })
  }

  const characterData = await getUserCharacter(character.name, session.user.id)

  // Todo get this from db
  const level = {
    character: 1,
    ascension: 0,
    talent: [1, 1, 1],
  }

  if (!characterData) return { level }

  return {
    level: {
      character: characterData.level,
      ascension: characterData.ascension,
      talent: characterData.talent,
    },
  }
}

export default function CharacterRoute() {
  const { level } = useLoaderData<LoaderData>()
  const characters = useMatches().find(m => m.pathname === '/character')?.data
    .characters as Array<ITraveler | ICharacter>

  const params = useParams()
  const character = characters.find(
    c => c.path.replace('/', '') === params.name,
  )
  if (!character) {
    throw new Error('This should not ever thrown')
  }

  return (
    <div>
      <CharacterView character={character} />
      {/* Should hide this until characters is owned */}
      {character.owned ? (
        <>
          <CharacterLevelManual level={level} name={character.name} />
          <CharacterLevel level={level} name={character.name} />
        </>
      ) : null}
      <img src={`../assets/images/characters/${character.image.full}`} alt="" />
      <img
        src={`../assets/images/elements/${character.vision.toLowerCase()}.png`}
        alt="Pyro Vision"
      />
      <img
        src={`../assets/images/weapon_types/${character.weapon_type.toLowerCase()}.png`}
        alt="Sword Weapon Type"
      />
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  const params = useParams()

  if (caught.status === 404) {
    return <div>Character with name "{params.name}" not found</div>
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`)
}
