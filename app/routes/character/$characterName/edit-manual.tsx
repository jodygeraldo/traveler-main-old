import {
  ActionFunction,
  Form,
  redirect,
  useMatches,
  useOutletContext,
} from 'remix'
import { route } from 'routes-gen'
import invariant from 'tiny-invariant'

import CharacterLevelManual from '~/components/Character/CharacterLevelManual/CharacterLevelManual'
import CharacterLevelTalentManual from '~/components/Character/CharacterLevelManual/CharacterLevelTalentManual'
import SectionHeading from '~/components/UI/Heading/SectionHeading'
import { requireUserId } from '~/services/auth.server'
import { ICharacter, ICharacterDetail } from '~/types/character'
import {
  addUserCharacter,
  updateUserCharacter,
} from '~/utils/db/character.server'
import { getFormHackMessage } from '~/utils/message'

export const action: ActionFunction = async ({ request, params }) => {
  const { characterName } = params
  invariant(
    typeof characterName === 'string',
    'There is something wrong with the route params',
  )

  const userId = await requireUserId(request)

  const formData = await request.formData()
  const id = formData.get('id')
  const name = formData.get('name')
  const level = formData.get('level')
  const ascension = formData.get('ascension')
  const tNormal = formData.get('talent-normal')
  const tSkill = formData.get('talent-skill')
  const tBurst = formData.get('talent-burst')

  invariant(typeof name === 'string', getFormHackMessage())
  invariant(typeof level === 'string', getFormHackMessage())
  invariant(typeof ascension === 'string', getFormHackMessage())
  invariant(typeof tNormal === 'string', getFormHackMessage())
  invariant(typeof tSkill === 'string', getFormHackMessage())
  invariant(typeof tBurst === 'string', getFormHackMessage())

  const talent: [number, number, number] = [+tNormal, +tSkill, +tBurst]

  if (id === null) {
    await addUserCharacter(userId, characterName, +level, +ascension, talent)
  } else {
    invariant(typeof id === 'string', 'Data not sync properly')
    await updateUserCharacter(id, +level, +ascension, talent)
  }

  return redirect(route('/character/:characterName', { characterName }))
}

export default function CharacterEditManualRoute() {
  const { progression, id } = useMatches().find(
    match => match.id === 'routes/character/$characterName',
  )?.data as { progression: ICharacter['progression']; id?: string }
  const character = useOutletContext<ICharacterDetail>()

  return (
    <Form method="post">
      <div>
        <SectionHeading title="Ascension" />
        <CharacterLevelManual
          character={character}
          progression={progression}
          id={id}
        />
      </div>
      <div>
        <SectionHeading title="Talent" />
        <CharacterLevelTalentManual talent={progression.talent} />
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Confirm
      </button>
    </Form>
  )
}
