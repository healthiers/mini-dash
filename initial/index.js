function initial(array) {
  var result = []
  for (var i = 0; i < array.length - 1; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = initial
module.exports.default = initial
