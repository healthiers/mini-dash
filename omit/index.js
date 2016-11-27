/**
 * Returns a new object without the keys listed in the array keys
 * @param {Object} object An arbitrary value
 * @param {Array} keys An array of strings (possible keys in object)
 * @returns {Object} A new object, guaranteed not to have any keys listed in keys
 * 
 * @memberof module:mini-dash
 */
function omit(object, keys) {
  var existingKeys = Object.keys(object)
  var result = {}
  for (var i = 0; i < existingKeys.length; i++) {
    var key = existingKeys[i]
    if (keys.indexOf(key) < 0) {
      result[key] = object[key]
    }
  }
  return result
}

module.exports = omit
module.exports.default = omit
