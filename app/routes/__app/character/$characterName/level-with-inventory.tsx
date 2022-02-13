import { useEffect } from 'react'
import {
  ActionFunction,
  Form,
  json,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'remix'
import invariant from 'tiny-invariant'

import SectionContainer from '~/components/SectionContainer'
import CharacterMap from '~/model/Character/Character.server'
import {
  AscensionMaterialType,
  ICharacter,
  TalentMaterialType,
} from '~/model/Character/CharacterType'
import {
  SumAscension,
  sumAscensionMaterial,
  SumTalent,
  sumTalentMaterial,
} from '~/model/Character/MaterialSum'
import {
  bookGroupMap,
  commonGroupMap,
  gemGroupMap,
} from '~/model/Item/Group.server'
import {
  AscensionBossMaterial,
  AscensionGem,
  CommonMaterial,
  LocalSpecialty,
  TalentBook,
  TalentBossMaterial,
} from '~/model/Item/ItemType'
import { requireUserId } from '~/services/auth.server'
import {
  createOrUpdateCharacter,
  getUserCharacterItem,
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

interface Material {
  ascension: AscensionMaterialType[]
  talent: {
    normal: TalentMaterialType[]
    skill: TalentMaterialType[]
    burst: TalentMaterialType[]
  }
}

interface MaterialList {
  ascension: {
    gem: [AscensionGem, AscensionGem, AscensionGem, AscensionGem]
    localSpecialty: LocalSpecialty
    common: [CommonMaterial, CommonMaterial, CommonMaterial]
    boss?: AscensionBossMaterial
  }
  talent: {
    common: [CommonMaterial, CommonMaterial, CommonMaterial]
    book: [
      [TalentBook, TalentBook, TalentBook],
      [TalentBook, TalentBook, TalentBook],
      [TalentBook, TalentBook, TalentBook],
    ]
    boss: TalentBossMaterial
    crown: 'Crown of Insight'
  }
}

interface LoaderData {
  id?: string
  name: string
  progression?: ICharacter['progression']
  material: Material
  materialList: MaterialList
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

  const userCharacter = await getUserCharacterItem(userId, characterName, false)
  if (!userCharacter) {
    throw json(
      { message: `Character not found with name ${characterName}` },
      404,
    )
  }

  const common = commonGroupMap.get(character.material.common)
  const gem = gemGroupMap.get(character.material.ascensionGem)
  const talentBook1 = bookGroupMap.get(character.material.talentBook[0])

  invariant(common, 'common material not found')
  invariant(gem, 'gem material not found')
  invariant(talentBook1, 'talentBook1 material not found')

  const materialList: MaterialList = {
    ascension: {
      gem,
      localSpecialty: character.material.localSpecialty,
      common,
      boss: character.material.ascensionBoss,
    },
    talent: {
      common,
      book: [talentBook1, talentBook1, talentBook1],
      boss: character.material.talentBoss,
      crown: character.material.crown,
    },
  }
  if (character.material.talentBook.length > 1) {
    const talentBook2 = bookGroupMap.get(character.material.talentBook[1])
    const talentBook3 = bookGroupMap.get(character.material.talentBook[2])
    invariant(talentBook2, 'talentBook2 material not found')
    invariant(talentBook3, 'talentBook3 material not found')

    if (character.material.talentCommon) {
      const talentCommon = commonGroupMap.get(character.material.talentCommon)
      invariant(talentCommon, 'talentCommon material not found')
      materialList.talent.common = talentCommon
    }

    materialList.talent.book = [talentBook1, talentBook2, talentBook3]
  }

  return json<LoaderData>({
    id: userCharacter.id,
    name: character.name,
    progression: userCharacter.progression,
    material: userCharacter.cutMaterial ?? userCharacter.fullMaterial,
    materialList,
  })
}

export default function CharacterLevelWithInventory() {
  const { id, name, progression, material, materialList } =
    useLoaderData<LoaderData>()

  useEffect(() => {
    const sumAscension = sumAscensionMaterial(material.ascension)
    const sumTalent = sumTalentMaterial(material.talent)

    console.log(sumAscension)
    console.log(materialList.ascension)
    console.log(sumTalent)
    console.log(materialList.talent)
  }, [])

  return (
    <SectionContainer title={`${name} Level Up With Inventory`}>
      <Form method="post" className="space-y-8 divide-y divide-gray-200">
        <input type="hidden" name="id" value={id ?? 'NEW'} />
      </Form>
    </SectionContainer>
  )
}
