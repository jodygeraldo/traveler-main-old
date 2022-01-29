import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { Link } from 'remix'
import { route } from 'routes-gen'

import type { ICharacter } from '~/types/character'
import { stringToKebab, stringToLowerSnake } from '~/utils/string'

interface Props {
  character: ICharacter
}

const backgoundColor: Record<ICharacter['rarity'], string> = {
  4: 'bg-rarity-four',
  5: 'bg-rarity-five',
  aloy: 'bg-rarity-aloy',
}

const hoverRingColor: Record<ICharacter['rarity'], string> = {
  4: 'hover:ring-rarity-four-dark',
  5: 'hover:ring-rarity-five-dark',
  aloy: 'hover:ring-rarity-aloy-dark',
}

const lastnameOnlyIfTooLong = (name: string) => {
  const nameSplit = name.split(' ')

  return name.length < 10 ? name : nameSplit[1]
}

const CharacterItem: FC<Props> = ({ character }) => {
  return (
    <Link
      prefetch="intent"
      to={route('/character/:name', { name: stringToKebab(character.name) })}
      className={clsx(
        'w-20 rounded-md hover:ring-4',
        !character.ownership && 'opacity-50',
        hoverRingColor[character.rarity],
      )}
    >
      <div className="flex flex-col ">
        <div className={clsx('rounded-t-md', backgoundColor[character.rarity])}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            width={80}
            height={80}
            src={`/assets/images/characters/close/${stringToLowerSnake(
              character.name,
            )}.png`}
            alt={`${character.name} image`}
          />
        </div>
        <div className="bg-primary-400 rounded-b-md py-1">
          <h3 className="text-primary-900 text-center text-sm font-semibold">
            {lastnameOnlyIfTooLong(character.name)}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default CharacterItem
