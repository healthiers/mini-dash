/**
 * Creates a new object with only the values that passed the test of the given predicate
 * @param {Object} object An arbitrary object
 * @param {Function} predicate A predicate which takes the value, the key and the object as argument.
 * @returns {Object} The filtered object.
 * 
 * @memberof module:mini-dash
 */
function filterValues(object, predicate) {
  var result = {}
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      var value = object[key]
      if (predicate(value, key, object)) {
        result[key] = value
      }
    }
  }
  return result
}

module.exports = filterValues
module.exports.default = filterValues
