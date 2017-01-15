/**
 * Shallow clones the given object
 * @param {Object} object An arbitrary object
 * @returns {Object} A new object with the same properties as the input, but with different identity
 * 
 * @memberof module:mini-dash
 */
function clone(object) {
  var result = {}
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      result[key] = object[key]
    }
  }
  return result
}

module.exports = clone
module.exports.default = clone
