export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, g) => (g as string).toUpperCase())
}

export function toLowerKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

export function toLowerSnake(str: string): string {
  // remove all single quote
  str = str.replace(/'/g, '')

  return str.replace(/ /g, '_').toLowerCase()
}

export function toCapitalize(str: string): string {
  // replace all non-alphanumeric characters with space
  str = str.replace(/[^a-zA-Z0-9]/g, ' ')

  return str.replace(/ /g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase())
}
