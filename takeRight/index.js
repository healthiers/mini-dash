/**
 * Returns a new array with the last count elements from array
 * @param {Array} array An arbitrary array
 * @param {Number} count The number of elements to take from the end of array
 * @returns {Boolean} A new array with the last count elements from array
 * 
 * @memberof module:mini-dash
 */
function takeRight(array, count) {
  var result = []
  var _start = array.length - count < 0 ? 0 : array.length - count
  for (var i = _start, _aLenght = array.length; i < _aLenght; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = takeRight
module.exports.default = takeRight
