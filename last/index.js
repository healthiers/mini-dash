/**
 * Returns the last element of array
 * @param {Array} array An arbitrary array
 * @returns {any} The last element of array or undefined if array is empty
 * 
 * @memberof module:mini-dash
 */
function last(array) {
  return array[array.length - 1]
}

module.exports = last
module.exports.default = last
