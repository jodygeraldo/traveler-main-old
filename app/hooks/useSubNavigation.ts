import { useLocation } from 'remix'

/**
 * @returns [currentPath, basePath]
 *
 * @example
 * pathname = '/handbook/weekly'
 * pathDeep = 1 => '/handbook'
 * pathDeep = 2 => '/handbook/weekly'
 *
 */
export function useBasePathname(pathDeep: number = 1) {
  const { pathname } = useLocation()

  return [
    pathname,
    pathname
      .split('/')
      .splice(0, pathDeep + 1)
      .join('/'),
  ]
}

export default function useSubNavigation(
  pathDeep: number = 1,
  indexPathname: string,
  subPathnames: { name: string; urlPathname: string; searchParams?: string }[],
) {
  const [pathname, basePathname] = useBasePathname(pathDeep)

  const subPathnameArray = subPathnames.map(
    ({ name, urlPathname, searchParams }) => {
      return {
        name,
        to: `${basePathname}/${urlPathname}${searchParams ?? ''}`,
        active: pathname === `${basePathname}/${urlPathname}`,
      }
    },
  )
  const indexPathnameArray = [
    {
      name: indexPathname,
      to: '.',
      active: pathname === basePathname,
    },
  ]

  return indexPathnameArray.concat(subPathnameArray)
}
