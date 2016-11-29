/**
 * Returns a new object with only the keys listed in keys
 * @param {Object} object An arbitrary value
 * @param {Array} keys An array of strings (keys in object)
 * @returns {Object} A new object, guaranteed to only have keys listed in keys
 * 
 * @memberof module:mini-dash
 */
function pick(object, keys) {
  var existingKeys = Object.keys(object)
  var result = {}
  for (var i = 0, _ekLength = existingKeys.length; i < _ekLength; i++) {
    var key = existingKeys[i]
    if (keys.indexOf(key) >= 0) {
      result[key] = object[key]
    }
  }
  return result
}

module.exports = pick
module.exports.default = pick
