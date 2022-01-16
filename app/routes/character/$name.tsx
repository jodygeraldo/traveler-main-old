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
import { ICharacter, ITraveler } from '~/types/character'
import {
  getCharacters,
  removeUserCharacterOwnershipEntry,
  setUserCharacterOwnership,
} from '~/utils/character.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const markCharacter = formData.get('mark-character') === 'true'
  const characterName = formData.get('name')

  const user = {
    id: 'user2',
    // Todo get this from the session
    prevDataIdMarkCharacter: '01FSHGGW48KBXHMW0TZ47CZK35',
  }

  if (formData.has('mark-character') && markCharacter) {
    invariant(characterName, 'This is cannot be null')
    // Todo set this id to the session
    const id = setUserCharacterOwnership(
      characterName as string,
      user.id,
      user.prevDataIdMarkCharacter,
    )
  } else if (formData.has('mark-character') && !markCharacter) {
    invariant(characterName, 'This is cannot be null')
    // Todo update this id to the session (?)
    const id = removeUserCharacterOwnershipEntry(
      characterName as string,
      user.prevDataIdMarkCharacter,
    )
  }

  return redirect(request.url)
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

  const level = {
    character: 90,
    ascension: 6,
    talent: [10, 13, 13],
  }

  return { level }
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
