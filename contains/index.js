function contains(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i]
    if (predicate(item)) {
      return true
    }
  }
  return false
}

module.exports = contains
module.exports.default = contains
