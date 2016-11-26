function drop(array, count) {
  var result = []
  for (var i = count; i < array.length; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = drop
module.exports.default = drop
