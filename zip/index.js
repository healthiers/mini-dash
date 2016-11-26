function zip(/* arrays */) {
  // max length array
  var minLength = arguments[0] ? arguments[0].length : 0
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length < minLength) {
      minLength = arguments[i].length
    }
  }

  var result = []

  for (var j = 0; j < minLength; j++) {
    var zippedArray = []
    for (var k = 0; k < arguments.length; k++) {
      var array = arguments[k]
      zippedArray.push(array[j])
    }
    result.push(zippedArray)
  }

  return result
}

module.exports = zip
module.exports.default = zip
