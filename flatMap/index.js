function flatMap(array, mapper) {
  var result = []
  for (var i = 0; i < array.length; i++) {
    var item = array[i]
    var mappedArray = mapper(item)
    for (var j = 0; j < mappedArray.length; j++) {
      var mappedArrayItem = mappedArray[j]
      result.push(mappedArrayItem)
    }
  }
  return result
}

module.exports = flatMap
module.exports.default = flatMap
