function clone(object) {
  var keys = Object.keys(object)
  var result = {}
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    result[key] = object[key]
  }
  return result
}

module.exports = clone
module.exports.default = clone
