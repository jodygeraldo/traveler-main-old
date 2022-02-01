import CharacterAnemoMap from '~/services/data/characters/character-anemo.server'
import CharactersCryoMap from '~/services/data/characters/character-cryo.server'
import charactersDendroMap from '~/services/data/characters/character-dendro.server'
import CharactersElectroMap from '~/services/data/characters/character-electro.server'
import CharactersGeoMap from '~/services/data/characters/character-geo.server'
import CharactersHydroMap from '~/services/data/characters/character-hydro.server'
import CharactersPyroMap from '~/services/data/characters/character-pyro.server'
import { CharacterName, ICharacter } from '~/types/character'

const CharactersMap = new Map<CharacterName, ICharacter>([
  ...CharacterAnemoMap,
  ...CharactersCryoMap,
  ...charactersDendroMap,
  ...CharactersElectroMap,
  ...CharactersGeoMap,
  ...CharactersHydroMap,
  ...CharactersPyroMap,
])

export default CharactersMap
