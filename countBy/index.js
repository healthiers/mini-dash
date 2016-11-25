function countBy(array, selector) {
  var result = {}
  for (var i = 0; i < array.length; i++) {
    var value = array[i]
    var key = selector(value)
    if (!result[key]) {
      result[key] = 0
    }
    result[key] = result[key] + 1
  }
  return result
}

module.exports = countBy
module.exports.default = countBy
