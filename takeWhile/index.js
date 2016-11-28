/**
 * Returns a new array with the first elements, while they satisfy predicate
 * @param {Array} array An arbitrary array
 * @param {Function} predicate A predicate returning truthy values for desired 
 * elements, falsy otherwise
 * @returns {Boolean} A new array with the first elements satisfying predicate
 * 
 * @memberof module:mini-dash
 */
function takeWhile(array, predicate) {
  var result = []
  var i = 0
  var _aLength = array.length
  while (i < _aLength && predicate(array[i])) {
    var element = array[i++]
    result.push(element)
  }
  return result
}

module.exports = takeWhile
module.exports.default = takeWhile
