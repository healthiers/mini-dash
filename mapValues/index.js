/**
 * Calls transform with each value of the given object
 * @param {Object} input An arbitrary object
 * @param {Function} transform A transform which takes the value, the key and the object as argument.
 * @returns {Object} The transformed object.
 * 
 * @memberof module:mini-dash
 */
function merge(input, transform) {
  var result = {}
  var keys = Object.keys(input)

  for (var i = 0, _kLength = keys.length; i < _kLength; i++) {
    var key = keys[i]
    var value = input[key]
    result[key] = transform(value, key, input)
  }
  
  return result
}

module.exports = merge
module.exports.default = merge
