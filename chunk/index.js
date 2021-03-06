/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 * @param {Array} array An array
 * @param {number} chunkSize An arbitrary chunkSize
 * @returns {Array} A new array composed of the chunks of the input array
 * 
 * @memberof module:mini-dash
 */
function chunk(array, chunkSize) {
  var result = []
  var i = 0
  var _wholeChunks = array.length / chunkSize | 0

  for (var j = 0; j < _wholeChunks; j++) {
    var chunkArray = []
    for (var k = 0; k < chunkSize; k++) {
      chunkArray.push(array[i])
      i++
    }
    result.push(chunkArray)
  }

  if (i < array.length) {
    var lastChunkArray = []
    for (var _aLength = array.length; i < _aLength; i++) {
      lastChunkArray.push(array[i])
    }
    result.push(lastChunkArray)
  }

  return result
}

module.exports = chunk
module.exports.default = chunk
