/**
 * Returns a new array with the last elements from array until they satisfy
 * predicate
 * @param {Array} array An arbitrary array
 * @param {Function} predicate A predicate returning truthy value for desired
 * elements, falsy otherwise
 * @returns {Array} A new array with the last matching elements of array
 * 
 * @memberof module:mini-dash
 */
function takeRightWhile(array, predicate) {
  var result = []
  var i = array.length - 1
  while (i >= 0 && predicate(array[i], i, array)) {
    var element = array[i--]
    result.unshift(element)
  }
  return result
}

module.exports = takeRightWhile
module.exports.default = takeRightWhile
