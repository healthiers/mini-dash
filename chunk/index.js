function chunk(array, chunkSize) {
  var result = []
  var i = 0
  var wholeChunks = (array.length / chunkSize) | 0

  // First get the whole chunks
  for (var j = 0; j < wholeChunks; j++) {
    var chunkArray = []
    for (var k = 0; k < chunkSize; k++) {
      chunkArray.push(array[i])
      i++
    }
    result.push(chunkArray)
  }

  if (i < array.length) {
    var lastChunkArray = []
    for (; i < array.length; i++) {
      lastChunkArray.push(array[i])
    }
    result.push(lastChunkArray)
  }

  return result
}

module.exports = chunk
module.exports.default = chunk
