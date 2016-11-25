function extend(/*arguments*/) {
  var result = {}
  for (var i = 0; i < arguments.length; i++) {
    var object = arguments[i]
    var keys = Object.keys(object)
    for (var j = 0; j < keys.length; j++) {
      var key = keys[j]
      result[key] = object[key]
    }
  }
  return result
}

module.exports = extend
module.exports.default = extend
