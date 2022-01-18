import {
  ActionFunction,
  LoaderFunction,
  redirect,
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
import {
  getCharacters,
  getUserCharacter,
  removeUserCharacterOwnershipEntry,
  setUserCharacterOwnership,
} from '~/utils/character.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const $action = formData.get('_action')
  const characterName = formData.get('name')
  const characterOwnership = formData.get('owned')
  const name = formData.get('name')
  const level = formData.get('level')
  const ascension = formData.get('ascension')
  const talentNormal = formData.get('talent-normal')
  const talentSkill = formData.get('talent-skill')
  const talentBurst = formData.get('talent-burst')

  const user = {
    id: 'user2',
    // Todo get this from the session
    ownershipDataId: '01FSHGGW48KBXHMW0TZ47CZK35',
    characterDataId: '',
  }

  invariant(
    typeof $action === 'string',
    "This is shouldn't happen if you don't hack the form",
  )

  switch ($action as CharacterActionTypeEnum) {
    case CharacterActionTypeEnum.Ownership:
      invariant(
        typeof characterName === 'string',
        'What you just did is not right',
      )
      invariant(
        typeof characterOwnership === 'string',
        'What you just did is not right',
      )
      if (characterOwnership === 'true') {
        const id = await setUserCharacterOwnership(
          characterName,
          user.id,
          user.ownershipDataId,
        )
        // Todo set new session to header
        return redirect(request.url, { headers: { 'Set-Cookie': '' } })
      } else {
        const id = await removeUserCharacterOwnershipEntry(
          characterName,
          user.ownershipDataId,
        )
        // Todo set new session to header
        return redirect(request.url, { headers: { 'Set-Cookie': '' } })
      }

    default:
      return null
  }
}

type LoaderData = {
  level: ICharacter['level']
}
export const loader: LoaderFunction = async ({ params }) => {
  const { name } = params
  const character = (await getCharacters()).find(
    c => c.path.replace('/', '') === name,
  )
  if (!character) {
    throw new Response('Character not found', { status: 404 })
  }

  // Todo get this from session
  const userId = 'user2'
  const characterData = await getUserCharacter(userId, character.name)

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
          <CharacterLevelManual level={level} />
          <CharacterLevel level={level} />
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
