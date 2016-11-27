/**
 * Flattens array one level (array has to be an array of arrays)
 * @param {Array} array An arbitrary array of arrays
 * @returns {any} The flat array
 * 
 * @memberof module:mini-dash
 */
function flatten(array) {
  var result = []
  for (var i = 0; i < array.length; i++) {
    var subArray = array[i]
    for (var j = 0; j < subArray.length; j++) {
      var item = subArray[j]
      result.push(item)
    }
  }
  return result
}

module.exports = flatten
module.exports.default = flatten