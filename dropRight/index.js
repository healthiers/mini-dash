/**
 * Returns an array without the last count elements
 * @param {Array} array An array
 * @param {Number} count The number of tailing elements to be omited from the array
 * @returns {Array} An array without the last count elements
 * 
 * @memberof module:mini-dash
 */
function dropRight(array, count) {
  var result = []
  for (var i = 0, _itCt = array.length - count; i < _itCt; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = dropRight
module.exports.default = dropRight
