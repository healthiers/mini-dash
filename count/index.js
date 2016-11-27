/**
 * Counts the elements in array that match predicate
 * @param {Array} array An array
 * @param {Function} predicate An element -> Boolean predicate
 * @returns {Number} The number of elements matching predicate in array
 * 
 * @memberof module:mini-dash
 */
function count(array, predicate) {
  var result = 0
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result++
    }
  }
  return result
}

module.exports = count
module.exports.default = count