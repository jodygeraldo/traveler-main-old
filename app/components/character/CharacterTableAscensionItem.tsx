import Tooltip from '~/components/Primitive/Tooltip'
import { AscensionMaterialType } from '~/model/Character/Material.server'
import { toLowerSnake } from '~/utils/string'

type CharacterTableAscensionItemProps = {
  items: AscensionMaterialType
}

export default function CharacterTableAscensionItem({
  items,
}: CharacterTableAscensionItemProps) {
  return (
    <tr>
      {items.map(({ name, amount }) => (
        <td
          key={name}
          className="whitespace-nowrap px-6 py-4 text-sm text-gray-900"
        >
          <div className="flex items-center gap-2">
            {name === 'Level' || name === 'Mora' ? null : (
              <Tooltip content={name}>
                <img
                  className="h-6 w-6"
                  width={24}
                  height={24}
                  src={`/images/items/${toLowerSnake(name)}.png`}
                  alt={`${name}`}
                />
              </Tooltip>
            )}
            <p className="tabular-nums">
              {new Intl.NumberFormat().format(amount)}
            </p>
          </div>
        </td>
      ))}
    </tr>
  )
}
