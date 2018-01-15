module.exports = function(value) {
  value = replaceAll(value, 'á', 'a')
  value = replaceAll(value, 'é', 'e')
  value = replaceAll(value, 'í', 'i')
  value = replaceAll(value, 'ó', 'o')
  value = replaceAll(value, 'ú', 'u')
  value = replaceAll(value, 'ñ', 'n')
  value = replaceAll(value, 'ü', 'u')
  return value
}

function replaceAll(target, search, replacement) {
  return target.split(search).join(replacement)
}
