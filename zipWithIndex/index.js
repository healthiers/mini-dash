/**
 * Creates an array of tuples (arrays with 2 elements) from array.
 * In each tuple the frist element will be the appropriate element in array,
 * the second it's index in array
 * 
 * @param {Array} array An arbitrary array
 * @returns {Array} The new array of [element, index] tuples
 * 
 * @memberof module:mini-dash
 */
function zipWithIndex(array) {
  var result = []
  for (var i = 0, _aLength = array.length; i < _aLength; i++) {
    var element = array[i]
    result.push([element, i])
  }
  return result
}

module.exports = zipWithIndex
module.exports.default = zipWithIndex
