/**
 * Calls transform with each value of the given object
 * @param {Object} object An arbitrary object
 * @param {Function} transform A transform which takes the value, the key and the object as argument.
 * @returns {Object} The transformed object.
 * 
 * @memberof module:mini-dash
 */
function mapValues(object, transform) {
  var result = {}
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      var value = object[key]
      result[key] = transform(value, key, object)
    }
  }
  return result
}

module.exports = mapValues
module.exports.default = mapValues
