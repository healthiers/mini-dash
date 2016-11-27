/**
 * Returns a new array containing the unique elements of array. Uniqueness is
 * determined by equalityFn.
 * 
 * @param {Array} array An arbitrary array.
 * @param {Function} equalityFn A two argument method, which should return 
 * true in case the two arguments are considered equal, false otherwise.
 * @returns {Array} The new array of grouped elements.
 * 
 * @memberof module:mini-dash
 */
function uniqBy(array, equalityFn) {
  var result = []
  for(var i = 0, _aLength = array.length; i < _aLength; i++) {
    var element = array[i]
    var isUnique = true
    
    for(var j = 0, _rLength = result.length; j < _rLength; j++) {
      var resultElement = result[j]
      if(equalityFn(element, resultElement)) {
        isUnique = false
        break
      }
    }
    
    if(isUnique) {
      result.push(element)
    }
  }
  return result
}

module.exports = uniqBy
module.exports.default = uniqBy
