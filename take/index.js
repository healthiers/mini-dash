/**
 * Returns a new array with the first count elements from array
 * @param {Array} array An arbitrary array
 * @param {Number} count The number of elements to take from the beginning of array
 * @returns {Boolean} A new array with the first count elements from array
 * 
 * @memberof module:mini-dash
 */
function take(array, count) {
  var result = []
  var _itCt = count < array.length ? count : array.length
  for (var i = 0; i < _itCt; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = take
module.exports.default = take
