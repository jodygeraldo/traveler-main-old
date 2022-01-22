export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, g) => (g as string).toUpperCase())
}

export function stringToLowerSnake(str: string): string {
  return str.replace(/ /g, '_').toLowerCase()
}

export function stringToCapitalized(str: string): string {
  // replace all non-alphanumeric characters with space
  str = str.replace(/[^a-zA-Z0-9]/g, ' ')

  return str.replace(/ /g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase())
}
