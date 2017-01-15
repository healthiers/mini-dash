/**
 * Returns a new object with only the keys that satisfy predicate
 * @param {Object} object An arbitrary object
 * @param {Function} predicate A predicate (value, key, object) -> boolean
 * @returns {Object} A new object, guaranteed to only have keys that satisfy predicate
 * 
 * @memberof module:mini-dash
 */
function pickBy(object, predicate) {
  var result = {}
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      var value = object[key]
      if (predicate(value, key, object)) {
        result[key] = object[key]
      }
    }
  }
  return result
}

module.exports = pickBy
module.exports.default = pickBy
