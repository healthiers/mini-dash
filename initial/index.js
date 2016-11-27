/**
 * Returns a new array containing all elements of array except the last
 * @param {Array} array An arbitrary array
 * @returns {Array} An array with all of the input arrays elements except the last.
 * 
 * @memberof module:mini-dash
 */
function initial(array) {
  var result = []
  for (var i = 0, _itCt = array.length - 1; i < _itCt; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = initial
module.exports.default = initial
