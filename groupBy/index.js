/**
 * Creates an object composed of keys generated from the results of running each element of array thru selector. 
 * The order of grouped values is determined by the order they occur in array. The corresponding value of each key is an 
 * array of elements responsible for generating the key.
 * @param {Array} array An arbitrary array
 * @param {Function} selector A function responsible for creating the returned objects keys
 * @returns {any} An object where keys are results of selector values are arrays containing elements of the input array
 * 
 * @memberof module:mini-dash
 */
function groupBy(array, selector) {
  var result = {}
  for (var i = 0; i < array.length; i++) {
    var value = array[i]
    var key = selector(value)
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(value)
  }
  return result
}

module.exports = groupBy
module.exports.default = groupBy
