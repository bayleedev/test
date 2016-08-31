function replace (name) {
  return name
    .replace(/ /g, '-')
    .replace(/+/g, 'p')
    .replace(/[^a-z0-9-]+/g, '')
}
