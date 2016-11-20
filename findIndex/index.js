function findIndex(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i]
    if (predicate(item)) {
      return i
    }
  }
  return -1
}

module.exports = findIndex
module.exports.default = findIndex
