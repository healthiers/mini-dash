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
