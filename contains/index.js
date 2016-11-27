/**
 * Checks if there are any elements in array that match predicate
 * @param {Array} array An array
 * @param {Function} predicate An element -> Boolean predicate
 * @returns {Boolean} true, if array has an element for which predicate returns true, false otherwise
 * 
 * @memberof module:mini-dash
 */
function contains(array, predicate) {
  for (var i = 0, _aLength = array.length; i < _aLength; i++) {
    var item = array[i]
    if (predicate(item)) {
      return true
    }
  }
  return false
}

module.exports = contains
module.exports.default = contains
