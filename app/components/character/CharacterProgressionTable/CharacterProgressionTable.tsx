import { FC } from 'react'

import { stringToLowerSnake } from '~/utils/string'

type Props = {
  cols: string[]
  footerItem?: Array<{ name: string; amount: number | string }[]>
}

const CharacterProgressionTable: FC<Props> = ({
  cols,
  children,
  footerItem,
}) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {cols.map(col => (
                    <th
                      key={col}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{children}</tbody>
              {footerItem ? (
                <tfoot className="bg-gray-50">
                  <tr>
                    {footerItem.map(item =>
                      item.length > 1 ? (
                        <td
                          key={item[0].name}
                          className="space-y-1 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
                        >
                          {item.map(({ name, amount }) =>
                            typeof amount === 'number' &&
                            amount === 0 ? null : (
                              <div className="flex items-center gap-2">
                                {name === '' ? null : (
                                  <img
                                    className="h-6 w-6"
                                    width={24}
                                    height={24}
                                    src={`/assets/images/items/${stringToLowerSnake(
                                      name,
                                    )}.png`}
                                    alt={`${name} Icon`}
                                  />
                                )}
                                <p className="font-semibold tabular-nums">
                                  {typeof amount === 'string'
                                    ? amount
                                    : new Intl.NumberFormat().format(amount)
                                        .length > 3
                                    ? `${new Intl.NumberFormat()
                                        .format(amount)
                                        .slice(0, -4)}k`
                                    : new Intl.NumberFormat().format(amount)}
                                </p>
                              </div>
                            ),
                          )}
                        </td>
                      ) : (
                        item.map(({ name, amount }) =>
                          item.length === 1 ? (
                            <td
                              key={name}
                              className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
                            >
                              <div className="flex items-center gap-2">
                                {name === '' ? null : (
                                  <img
                                    className="h-6 w-6"
                                    width={24}
                                    height={24}
                                    src={`/assets/images/items/${stringToLowerSnake(
                                      name,
                                    )}.png`}
                                    alt={`${name} Icon`}
                                  />
                                )}
                                <p className="font-semibold tabular-nums">
                                  {typeof amount === 'string'
                                    ? amount
                                    : new Intl.NumberFormat().format(amount)
                                        .length > 3
                                    ? `${new Intl.NumberFormat()
                                        .format(amount)
                                        .slice(0, -4)}K`
                                    : new Intl.NumberFormat().format(amount)}
                                </p>
                              </div>
                            </td>
                          ) : null,
                        )
                      ),
                    )}
                  </tr>
                </tfoot>
              ) : null}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterProgressionTable
