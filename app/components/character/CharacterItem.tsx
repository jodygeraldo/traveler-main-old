import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { Link } from 'remix'
import { route } from 'routes-gen'

import type { ICharacterDetail } from '~/types/character'
import { stringToKebab, stringToLowerSnake } from '~/utils/string'

interface Props {
  character: ICharacterDetail
}

const backgoundColor: Record<ICharacterDetail['rarity'], string> = {
  4: 'bg-item-4',
  5: 'bg-item-5',
}

const clampName = (name: string) => {
  const nameSplit = name.split(' ')
  if (nameSplit.length === 1) return name

  return nameSplit[0].length < 10 && nameSplit[1].length < 10
    ? name
    : nameSplit[1].length < 10
    ? nameSplit[1]
    : nameSplit[0]
}

const CharacterItem: FC<Props> = ({ character }) => {
  return (
    <Link
      prefetch="intent"
      to={route('/character/:name', { name: stringToKebab(character.name) })}
      className={clsx('w-20 rounded-md', !character.ownership && 'opacity-50')}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col "
      >
        <div
          className={clsx(
            'rounded-t-md bg-cover',
            character.name === 'Aloy'
              ? 'bg-rarity-aloy'
              : backgoundColor[character.rarity],
          )}
        >
          <motion.img
            width={80}
            height={80}
            className="h-5/6"
            src={`/assets/images/characters/close/${stringToLowerSnake(
              character.name,
            )}.png`}
            alt={`${character.name} image`}
          />
        </div>
        <div className="bg-primary-400 py-1">
          <h3 className="text-primary-900 [width: fit-content] text-center text-sm font-semibold">
            {clampName(character.name)}
          </h3>
        </div>
      </motion.div>
    </Link>
  )
}

export default CharacterItem
