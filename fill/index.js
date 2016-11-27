/**
 * Calls supplier count times, and fills an array with the results
 * @param {Number} count The amount of elements of the returned array
 * @param {Function} supplier The supplier of elements, will be called count times
 * @returns {Array} The array counstructed from the results of count calls to supplier
 * 
 * @memberof module:mini-dash
 */
function fill(count, supplier) {
  var result = []
  for (var i = 0; i < count; i++) {
    var element = supplier()
    result.push(element)
  }
  return result
}

module.exports = fill
module.exports.default = fill
