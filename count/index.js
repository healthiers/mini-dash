function count(array, predicate) {
  var result = 0
  for (var i = 0; i < array.length; i++) {
    if(predicate(array[i])) {
      result++
    }
  }
  return result
}

module.exports = count
module.exports.default = count
