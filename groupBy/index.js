function groupBy(array, selector) {
  var result = {}
  for (var i = 0; i < array.length; i++) {
    var value = array[i]
    var key = selector(value)
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(value)
  }
  return result
}

module.exports = groupBy
module.exports.default = groupBy
