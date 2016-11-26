function tail(array) {
  var result = []
  for (var i = 1; i < array.length; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = tail
module.exports.default = tail
