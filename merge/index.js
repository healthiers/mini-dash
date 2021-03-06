/**
 * Returns a merged object from the given arguments
 * @param {...Object} input An arbitrary amount of objects
 * @returns {Object} A merged object from the given arguments
 * 
 * @memberof module:mini-dash
 */
function merge(/*arguments*/) {
  var result = {}
  for (var i = 0, _argLength = arguments.length; i < _argLength; i++) {
    var object = arguments[i]
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        result[key] = object[key]
      }
    }
  }
  return result
}

module.exports = merge
module.exports.default = merge
