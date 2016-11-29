/**
 * Returns an array without the first elements while they satisfy predicate
 * @param {Array} array An array
 * @param {Function} predicate The predicate returning truthy for undesired 
 * elements, falsy otherwise
 * @returns {Array} An array without the first count elements
 * 
 * @memberof module:mini-dash
 */
function dropWhile(array, predicate) {
  var i = 0
  var _aLength = array.length

  while (i < _aLength && predicate(array[i], i, array)) {
    i++
  }

  var result = []
  for (; i < _aLength; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = dropWhile
module.exports.default = dropWhile
