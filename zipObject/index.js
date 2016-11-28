/**
 * Creates an array of tuples (arrays with 2 elements) from array.
 * In each tuple the frist element will be the appropriate element in array,
 * the second it's index in array
 * 
 * @param {Array} keys An arbitrary array
 * @param {Array} values An arbitrary array
 * @returns {Array} The new array of [element, index] tuples
 * 
 * @memberof module:mini-dash
 */
function zipObject(keys, values) {
  var result = {}
  for (var i = 0, _kLength = keys.length; i < _kLength; i++) {
    var key = keys[i]
    var value = values[i]
    result[key] = value
  }
  return result
}

module.exports = zipObject
module.exports.default = zipObject
