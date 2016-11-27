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
  var _minLength = arguments[0] ? arguments[0].length : 0
  var _argLength = arguments.length
  
  for (var i = 0; i < _argLength; i++) {
    if (arguments[i].length < _minLength) {
      _minLength = arguments[i].length
    }
  }

  var result = []

  for (var j = 0; j < _minLength; j++) {
    var zippedArray = []
    for (var k = 0; k < _argLength; k++) {
      var array = arguments[k]
      zippedArray.push(array[j])
    }
    result.push(zippedArray)
  }

  return result
}

module.exports = zip
module.exports.default = zip
