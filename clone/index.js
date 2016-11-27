/**
 * Shallow clones the given object
 * @param {Object} object An arbitrary object
 * @returns {Object} A new object with the same properties as the input, but with different identity
 * 
 * @memberof module:mini-dash
 */
function clone(object) {
  var keys = Object.keys(object)
  var result = {}
  for (var i = 0, _kLength = keys.length; i < _kLength; i++) {
    var key = keys[i]
    result[key] = object[key]
  }
  return result
}

module.exports = clone
module.exports.default = clone
