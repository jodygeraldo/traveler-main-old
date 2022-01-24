import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { Link } from 'remix'

import type { ICharacter, ITraveler } from '~/types/character'
import { stringToKebab, stringToLowerSnake } from '~/utils/string'

interface Props {
  character: ITraveler | ICharacter
}

const backgoundColor: Record<ICharacter['rarity'], string> = {
  4: 'bg-rarity-four',
  5: 'bg-rarity-five',
  aloy: 'bg-rarity-aloy',
}

const hoverRingColor: Record<ICharacter['rarity'], string> = {
  4: 'hover:ring hover:ring-rarity-four-dark',
  5: 'hover:ring hover:ring-rarity-five-dark',
  aloy: 'hover:ring hover:ring-rarity-aloy-dark',
}

const lastnameOnlyIfTooLong = (name: string) => {
  const nameSplit = name.split(' ')

  if (nameSplit.length === 1) return name

  return name.length < 10 ? name : nameSplit[1]
}

const CharacterItem: FC<Props> = ({ character }) => {
  return (
    <Link
      prefetch="intent"
      to={`/characters/${stringToKebab(character.name)}`}
      className={clsx(
        'w-20',
        !character.own && 'opacity-50',
        hoverRingColor[character.rarity],
      )}
    >
      <div className="flex flex-col ">
        <div className={clsx('rounded-t-sm', backgoundColor[character.rarity])}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-full"
            src={`/assets/images/characters/close/${stringToLowerSnake(
              character.name,
            )}.png`}
            alt={`${character.name} image`}
          />
        </div>
        <div className="bg-primary-400 rounded-b-md py-1">
          <h3 className="text-primary-900 text-sm font-semibold text-center">
            {lastnameOnlyIfTooLong(character.name)}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default CharacterItem
