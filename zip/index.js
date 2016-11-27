/**
 * Creates an array of grouped elements, the first of which contains 
 * the first elements of the given arrays, the second of which contains 
 * the second elements of the given arrays, and so on.
 * 
 * @param {...Array} arrays An arbitrary amount of arrays
 * @returns {Array} The new array of grouped elements.
 * 
 * @memberof module:mini-dash
 */
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
