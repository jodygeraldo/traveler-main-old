import {
  ActionFunction,
  Form,
  json,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'remix'
import invariant from 'tiny-invariant'

import CharacterLevelUpForm from '~/components/Character/CharacterLevelUpForm'
import SectionContainer from '~/components/SectionContainer'
import CharacterMap from '~/model/Character/Character.server'
import { ICharacter } from '~/model/Character/CharacterType'
import { requireUserId } from '~/services/auth.server'
import {
  createOrUpdateCharacter,
  getUserCharacter,
} from '~/utils/db/character.server'

export const action: ActionFunction = async ({ params, request }) => {
  const { characterName } = params
  invariant(
    typeof characterName === 'string',
    'There is something wrong with the route params',
  )

  const character = CharacterMap.get(characterName)

  if (!character) {
    throw json(
      { message: `Character with name ${characterName} doesn't exist` },
      422,
    )
  }

  const userId = await requireUserId(request)

  const formData = await request.formData()
  const id = formData.get('id')
  const level = formData.get('level')
  const ascension = formData.get('ascension')
  const normal = formData.get('normal')
  const skill = formData.get('skill')
  const burst = formData.get('burst')

  invariant(typeof id === 'string', 'id is required')
  invariant(typeof level === 'string', 'level is required')
  invariant(typeof ascension === 'string', 'ascension is required')
  invariant(typeof normal === 'string', 'normal is required')
  invariant(typeof skill === 'string', 'skill is required')
  invariant(typeof burst === 'string', 'burst is required')

  await createOrUpdateCharacter(
    userId,
    character.name,
    +level,
    +ascension,
    [+normal, +skill, +burst],
    id,
  )

  return redirect(`/character/${characterName}`)
}

interface LoaderData {
  id?: string
  name: string
  progression?: ICharacter['progression']
}
export const loader: LoaderFunction = async ({ params, request }) => {
  const { characterName } = params
  invariant(
    typeof characterName === 'string',
    'There is something wrong with the route params',
  )

  const character = CharacterMap.get(characterName)

  if (!character) {
    throw json(
      { message: `Character with name ${characterName} not found` },
      404,
    )
  }

  const userId = await requireUserId(request)
  const userCharacter = await getUserCharacter(userId, character.name)

  return json<LoaderData>({
    id: userCharacter?.id,
    name: character.name,
    progression: userCharacter?.progression,
  })
}

export default function CharacterLevelUp() {
  const { id, name, progression } = useLoaderData<LoaderData>()

  return (
    <SectionContainer title={`${name} Manual Level Up`}>
      <Form method="post" className="space-y-8 divide-y divide-gray-200">
        <input type="hidden" name="id" value={id ?? 'NEW'} />
        <CharacterLevelUpForm progression={progression} />
      </Form>
    </SectionContainer>
  )
}
