/**
 * Returns a new object without the elements that satisfy predicate
 * @param {Object} object An arbitrary object
 * @param {Function} predicate A predicate (value, key, object) -> Boolean
 * @returns {Object} A new object, guaranteed not to have elements that satisfy predicate
 * 
 * @memberof module:mini-dash
 */
function omitBy(object, predicate) {
  var keys = Object.keys(object)
  var result = {}
  for (var i = 0, _kLength = keys.length; i < _kLength; i++) {
    var key = keys[i]
    var value = object[key]
    if (!predicate(value, key, object)) {
      result[key] = object[key]
    }
  }
  return result
}

module.exports = omitBy
module.exports.default = omitBy
