import { json, LoaderFunction, useLoaderData } from 'remix'

import CharacterGrid from '~/components/Character/CharacterGrid'
import CharacterGridItem from '~/components/Character/CharacterGridItem'
import CharacterList from '~/components/Character/CharacterList'
import CharacterListItem from '~/components/Character/CharacterListItem'
import SectionContainer from '~/components/SectionContainer'
import ViewButtonGroup from '~/components/ViewButtonGroup'
import { userViewPrefs } from '~/cookies'
import useOptimisticView from '~/hooks/useOptimisticView'
import { ICharacterData } from '~/model/Character/CharacterType'
import { requireUserId } from '~/services/auth.server'
import { getUserCharactersData } from '~/utils/db/character.server'
import { getUpdatedUserPref } from '~/utils/user-pref.server'

export { action } from '~/actions/charactersActions.server'

interface LoaderData {
  characters: ICharacterData[]
  view: 'grid' | 'list'
}

export const loader: LoaderFunction = async ({ request }) => {
  const { userPref, view } = await getUpdatedUserPref(request, 'character')

  const userId = await requireUserId(request)

  const characters = await getUserCharactersData(userId)

  return json<LoaderData>(
    { characters, view },
    {
      status: 200,
      headers: {
        'Set-Cookie': await userViewPrefs.serialize(userPref),
      },
    },
  )
}

export default function CharacterIndex() {
  const { characters, view } = useLoaderData<LoaderData>()

  const optimisticView = useOptimisticView(view)

  return (
    <SectionContainer title="Character List">
      <ViewButtonGroup />
      {optimisticView === 'list' ? (
        <CharacterList>
          {characters.map(character => (
            <CharacterListItem key={character.name} character={character} />
          ))}
        </CharacterList>
      ) : (
        <CharacterGrid>
          {characters.map(character => (
            <CharacterGridItem key={character.name} character={character} />
          ))}
        </CharacterGrid>
      )}
    </SectionContainer>
  )
}
