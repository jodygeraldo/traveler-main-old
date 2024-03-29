import invariant from 'tiny-invariant'

import { kebabToCamel } from './string'

export const CACHE_CONTROL = {
  /**
   * max-age=3
   *
   * Enough time for link prefetching to be effective, but short enough that if
   * they hover w/o visiting, we don't cache stale data for a later click
   */
  safePrefetch: 'max-age=3',

  /**
   * "no-cache, max-age=0, must-revalidate"
   *
   * Don't want this cached even if it gets prefetched
   */
  none: 'no-cache, max-age=0, must-revalidate',
}

export async function parseStringFormData<T>(
  request: Request,
): Promise<T | {}> {
  const formData = await request.formData()
  const obj: { [key: string]: string | undefined } = {}
  for (const [key, val] of formData.entries()) {
    invariant(typeof val === 'string', `expected string in for ${key}`)
    obj[kebabToCamel(key)] = val
  }
  return obj
}
