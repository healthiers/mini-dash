/* eslint-disable init-declarations */
var UNDEFINED

function find(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i]
    if (predicate(item)) {
      return item
    }
  }
  return UNDEFINED
}

module.exports = find
module.exports.default = find
