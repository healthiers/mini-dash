var chunk = require('./index')

describe('chunk()', function () {
  it('should have "default" exported', function() {
    expect(chunk.default).toBe(chunk)
  })

  it('should return an empty array if empty given', function() {
    expect(chunk([], 0)).toEqual([])
    expect(chunk([], 2)).toEqual([])
    expect(chunk([], 5)).toEqual([])
  })

  it('should properly chunk with no leftovers', function() {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]])
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  })

  it('should properly chunk with leftovers', function() {
    expect(chunk([1], 2)).toEqual([[1]])
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]])
    expect(chunk([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]])
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 5)).toEqual([[1, 2, 3, 4, 5], [6, 7, 8]])
  })
})
