import {
  json,
  LoaderFunction,
  Outlet,
  useCatch,
  useLoaderData,
  useOutletContext,
  useParams,
} from 'remix'
import invariant from 'tiny-invariant'

import { characters } from '~/data/characters.server'
import type { CharacterName, ICharacter, ITraveler } from '~/types/character'
import { requireUserSession } from '~/utils/auth.server'
import {
  getUserCharacter,
  getUserCharacterOwnership,
} from '~/utils/character.server'
import { stringToCapitalized } from '~/utils/string'

type LoaderData = {
  name: CharacterName
  level?: ICharacter['level'] | ITraveler['level']
}
export const loader: LoaderFunction = async ({ request, params }) => {
  const { name } = params
  invariant(typeof name === 'string', 'params is empty')

  const user = await requireUserSession(request)

  const character = characters.get(stringToCapitalized(name) as CharacterName)
  if (!character) {
    throw json('Character not found', { status: 404 })
  }

  const og7character: Array<CharacterName> = [
    'Traveler',
    'Amber',
    'Noelle',
    'Lisa',
    'Kaeya',
    'Barbara',
    'Xiangling',
  ]
  const ownershipData = await getUserCharacterOwnership(user.id)

  if (!ownershipData) {
    return json({ name: character.name }, { status: 200 })
  }

  if (
    !og7character.includes(character.name) &&
    !ownershipData.includes(character.name)
  ) {
    return json({ name: character.name }, { status: 200 })
  }

  const characterData = await getUserCharacter(character.name, user.id)

  if (!characterData) {
    if (character.name === 'Traveler') {
      return json<LoaderData>(
        { name: character.name, level: character.level },
        { status: 200 },
      )
    }

    return json<LoaderData>(
      {
        name: character.name,
        level: {
          character: 1,
          ascension: 0,
          talent: [1, 1, 1],
        },
      },
      { status: 200 },
    )
  }

  if (character.name === 'Traveler') {
    return json<LoaderData>(
      {
        name: character.name,
        level: {
          character: characterData.level,
          ascension: characterData.ascension,
          talent: {
            anemo: characterData.talent_anemo,
            geo: characterData.talent_geo,
            electro: characterData.talent_electro,
          },
        },
      },
      { status: 200 },
    )
  }

  return json<LoaderData>(
    {
      name: character.name,
      level: {
        character: characterData.level,
        ascension: characterData.ascension,
        talent: characterData.talent,
      },
    },
    { status: 200 },
  )
}

export default function CharacterPage() {
  const { name, level } = useLoaderData<LoaderData>()
  const characterData = useOutletContext<Array<ITraveler | ICharacter>>()

  const character = characterData.find(c => c.name === name)
  invariant(character, 'This should never throw')

  return <Outlet context={{ character, level }} />
}

export function CatchBoundary() {
  const caught = useCatch()
  const params = useParams()

  if (caught.status === 404) {
    return <div>Character with name "{params.name}" not found</div>
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`)
}
