function take(array, count) {
  var result = []
  var iterations = count < array.length ? count : array.length
  for (var i = 0; i < iterations; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = take
module.exports.default = take
