/**
 * Returns an array without the last elements while they satisfy predicate
 * @param {Array} array An array
 * @param {Function} predicate The predicate returning truthy for undesired 
 * elements, falsy otherwise
 * @returns {Array} An array without the last elements satisfying predicate
 * 
 * @memberof module:mini-dash
 */
function dropRightWhile(array, predicate) {
  var _lastIdx = array.length - 1

  while (_lastIdx >= 0 && predicate(array[_lastIdx], _lastIdx, array)) {
    _lastIdx--
  }

  var result = []
  for (var i = 0; i <= _lastIdx; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = dropRightWhile
module.exports.default = dropRightWhile
