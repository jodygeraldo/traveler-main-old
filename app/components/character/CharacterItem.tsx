import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { NavLink } from 'remix'

import type { ICharacter } from '~/types/character'

interface Props {
  character: ICharacter
}

const backgoundColor: Record<ICharacter['rarity'], string> = {
  4: 'bg-rarity-four',
  5: 'bg-rarity-five',
  aloy: 'bg-rarity-aloy',
}

const ringColor: Record<ICharacter['rarity'], string> = {
  4: 'ring ring-rarity-four-dark',
  5: 'ring ring-rarity-five-dark',
  aloy: 'ring ring-rarity-aloy-dark',
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
    <NavLink
      prefetch="intent"
      to={`/character${character.path}`}
      className={({ isActive }) =>
        clsx(
          'flex flex-1 flex-col rounded transition-all',
          hoverRingColor[character.rarity],
          isActive && ringColor[character.rarity],
        )
      }
    >
      <div
        className={clsx(
          'inline-block rounded-t-sm',
          backgoundColor[character.rarity],
        )}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full"
          src={`../assets/images/characters/${character.image.close}`}
          alt=""
        />
      </div>
      <div className="bg-primary-400 rounded-b-md py-1">
        <h3 className="text-primary-900 text-sm xl:text-base font-semibold text-center">
          {lastnameOnlyIfTooLong(character.name)}
        </h3>
      </div>
    </NavLink>
  )
}

export default CharacterItem
