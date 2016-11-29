/**
 * Returns a new object with only the keys that satisfy predicate
 * @param {Object} object An arbitrary object
 * @param {Function} predicate A predicate (value, key, object) -> boolean
 * @returns {Object} A new object, guaranteed to only have keys that satisfy predicate
 * 
 * @memberof module:mini-dash
 */
function pickBy(object, predicate) {
  var keys = Object.keys(object)
  var result = {}
  for (var i = 0, _kLength = keys.length; i < _kLength; i++) {
    var key = keys[i]
    var value = object[key]
    if (predicate(value, key, object)) {
      result[key] = object[key]
    }
  }
  return result
}

module.exports = pickBy
module.exports.default = pickBy
