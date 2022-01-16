import type { LoaderFunction } from 'remix'
import { useLoaderData } from 'remix'

import CharacterView from '~/components/character/CharacterView'
import type { ITraveler } from '~/types/character'
import { getCharacter } from '~/utils/character.server'

export interface LoaderData {
  character: ITraveler
}

export const loader: LoaderFunction = async () => {
  const character = await getCharacter('traveler')

  return { character }
}

export default function CharacterDefaultRoute() {
  const { character } = useLoaderData<LoaderData>()

  return (
    <div>
      <CharacterView character={character} />
      <div className="flex">
        <img
          src={`../assets/images/characters/${character.image.fullMale}`}
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
