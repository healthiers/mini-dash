/**
 * Returns a new array containing all elements but the first from array
 * @param {Array} array An arbitrary array
 * @returns {Boolean} A new array without the first element. Empty if array.length < 2
 * 
 * @memberof module:mini-dash
 */
function tail(array) {
  var result = []
  for (var i = 1; i < array.length; i++) {
    var element = array[i]
    result.push(element)
  }
  return result
}

module.exports = tail
module.exports.default = tail
