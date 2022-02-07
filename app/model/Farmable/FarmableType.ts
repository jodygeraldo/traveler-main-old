import { CharacterName } from '~/model/Character/CharacterType'
import { TalentBookGroup } from '~/types/item'

export enum FarmDayTypeEnum {
  MT = 'MondayThursday',
  TF = 'TuesdayFriday',
  WS = 'WednesdaySaturday',
}

interface Character {
  name: CharacterName
  rarity: 4 | 5
}

export interface IFarmable {
  name: TalentBookGroup
  characters: Character[]
}
