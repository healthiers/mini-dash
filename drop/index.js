/**
 * Returns an array without the last count elements
 * @param {Array} array An array
 * @param {Number} count The number of initial elements to be omited from the array
 * @returns {Array} An array without the first count elements
 * 
 * @memberof module:mini-dash
 */
function drop(array, count) {
  var result = []
  for (var i = count, _aLength = array.length; i < _aLength; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = drop
module.exports.default = drop
