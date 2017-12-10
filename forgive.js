module.exports = function(value) {
  value = value.replace('á', 'a')
  value = value.replace('é', 'e')
  value = value.replace('í', 'i')
  value = value.replace('ó', 'o')
  value = value.replace('ú', 'u')
  value = value.replace('ñ', 'n')
  value = value.replace('ü', 'u')
  return value
}
