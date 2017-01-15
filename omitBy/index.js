/**
 * Returns a new object without the elements that satisfy predicate
 * @param {Object} object An arbitrary object
 * @param {Function} predicate A predicate (value, key, object) -> Boolean
 * @returns {Object} A new object, guaranteed not to have elements that satisfy predicate
 * 
 * @memberof module:mini-dash
 */
function omitBy(object, predicate) {
  var result = {}
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      var value = object[key]
      if (!predicate(value, key, object)) {
        result[key] = object[key]
      }
    }
  }
  return result
}

module.exports = omitBy
module.exports.default = omitBy
