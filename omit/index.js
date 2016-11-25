function omit(object, keys) {
  var existingKeys = Object.keys(object)
  var result = {}
  for (var i = 0; i < existingKeys.length; i++) {
    var key = existingKeys[i]
    if (keys.indexOf(key) < 0) {
      result[key] = object[key]
    }
  }
  return result
}

module.exports = omit
module.exports.default = omit
