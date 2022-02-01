import {
  json,
  LoaderFunction,
  Outlet,
  ShouldReloadFunction,
  useCatch,
  useOutletContext,
  useParams,
} from 'remix'
import invariant from 'tiny-invariant'

import { requireUserId } from '~/services/auth.server'
import CharactersLookupMap from '~/services/data/characters/character-lookup.server'
import type { ICharacter, ICharacterDetail } from '~/types/character'
import { ItemTypes } from '~/types/item'
import { getUserCharacter } from '~/utils/db/character.server'
import {
  getItems,
  getUpdatedUserItems,
  getUserItems,
} from '~/utils/db/item.server'
import { stringToCapitalized } from '~/utils/string'

interface LoaderData {
  userItems?: ItemTypes
  progression: ICharacter['progression']
  id?: string
}
export const loader: LoaderFunction = async ({ params, request }) => {
  const userId = await requireUserId(request)
  const { characterName } = params
  invariant(
    typeof characterName === 'string',
    'There is something wrong with the route params',
  )

  if (!CharactersLookupMap.has(characterName)) {
    throw json('Character not found', { status: 404 })
  }

  const userItem = await getUserItems(userId)
  const items = getItems()
  let userItems: ItemTypes | undefined
  if (userItem) {
    userItems = getUpdatedUserItems(userItem, items)
  }

  const userCharacter = await getUserCharacter(
    userId,
    stringToCapitalized(characterName),
  )

  if (userCharacter) {
    return json<LoaderData>({
      userItems,
      progression: {
        level: userCharacter.level,
        ascension: userCharacter.ascension,
        talent: userCharacter.talent as [number, number, number],
      },
      id: userCharacter.id,
    })
  } else {
    return json<LoaderData>(
      {
        userItems,
        progression: {
          level: 1,
          ascension: 0,
          talent: [1, 1, 1],
        },
      },
      { status: 200 },
    )
  }
}

export default function CharacterPage() {
  const { characterName } = useParams()
  invariant(characterName, 'There is something wrong with the route params')

  const characters = useOutletContext<ICharacterDetail[]>()
  const character = characters.find(
    c => c.name === stringToCapitalized(characterName),
  )
  invariant(character, `couldn't find matching character name ${characterName}`)

  return <Outlet context={character} />
}

export function CatchBoundary() {
  const caught = useCatch()
  const params = useParams()

  if (caught.status === 404) {
    return <div>Character with name "{params.name}" not found</div>
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`)
}

export const unstable_shouldReload: ShouldReloadFunction = ({
  params,
  submission,
}) => {
  invariant(params.characterName, 'This have to exist')
  return !!submission && submission.method !== 'GET'
}
