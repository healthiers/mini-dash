/**
 * Returns a map having the transformation result of selector as keys, and the number of the same transformation result as value
 * @param {Array} array An array
 * @param {Function} selector An element -> any transformation. Note, that the return type should be a vaild object key
 * @returns {Object} A map having the transformation result of selector as keys, and the number of the same transformation result as value
 * 
 * @memberof module:mini-dash
 */
function countBy(array, selector) {
  var result = {}
  for (var i = 0; i < array.length; i++) {
    var value = array[i]
    var key = selector(value)
    if (!result[key]) {
      result[key] = 0
    }
    result[key] = result[key] + 1
  }
  return result
}

module.exports = countBy
module.exports.default = countBy
