 /**
 * Performs the element -> Array transformation on each element and returns a concatenated result of the transformation results.
 * @param {Array} array An array
 * @param {Function} transform An element -> Array transformation
 * @returns {Array} A new array composed of the result of transform called on each element of the input array
 * 
 * @memberof module:mini-dash
 */
function flatMap(array, transform) {
  var result = []
  for (var i = 0; i < array.length; i++) {
    var item = array[i]
    var mappedArray = transform(item)
    for (var j = 0; j < mappedArray.length; j++) {
      var mappedArrayItem = mappedArray[j]
      result.push(mappedArrayItem)
    }
  }
  return result
}

module.exports = flatMap
module.exports.default = flatMap
