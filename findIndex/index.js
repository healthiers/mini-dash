/**
 * Finds the index of the first matching element in the array
 * @param {Array} array An arbitrary array
 * @param {Function} predicate A predicate function to check against each element until it returns a truthy value
 * @returns {any} The index of the first matching element or undefined if none found
 * 
 * @memberof module:mini-dash
 */
function findIndex(array, predicate) {
  for (var i = 0, _aLength = array.length; i < _aLength; i++) {
    var item = array[i]
    if (predicate(item, i, array)) {
      return i
    }
  }
  return -1
}

module.exports = findIndex
module.exports.default = findIndex
