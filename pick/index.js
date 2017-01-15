/**
 * Returns a new object with only the keys listed in keys
 * @param {Object} object An arbitrary value
 * @param {Array} keys An array of strings (keys in object)
 * @returns {Object} A new object, guaranteed to only have keys listed in keys
 * 
 * @memberof module:mini-dash
 */
function pick(object, keys) {
  var result = {}
  for (var key in object) {
    if (object.hasOwnProperty(key) && keys.indexOf(key) >= 0) {
      result[key] = object[key]
    }
  }
  return result
}

module.exports = pick
module.exports.default = pick
