/* eslint-disable init-declarations */
var UNDEFINED

/**
 * Finds the first matching element in the array
 * @param {Array} array An arbitrary array
 * @param {Function} predicate A predicate function to check against each element until it returns a truthy value
 * @returns {any} The first matching element or undefined if none found
 * 
 * @memberof module:mini-dash
 */
function find(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i]
    if (predicate(item)) {
      return item
    }
  }
  return UNDEFINED
}

module.exports = find
module.exports.default = find
