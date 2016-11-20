function find(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i]
    if (predicate(item)) {
      return item
    }
  }
}

module.exports = find
module.exports.default = find
