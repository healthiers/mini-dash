var zipWithIndex = require('./index')

describe('zipWithIndex()', function () {
  it('should have "default" exported', function () {
    expect(zipWithIndex.default).toBe(zipWithIndex)
  })

  it('should return empty array for empty array', function () {
    expect(zipWithIndex([])).toEqual([])
  })

  it('should return an array of tuples if non-empty arrays given', function () {
    expect(zipWithIndex([1, 2, 3])).toEqual([[1, 0], [2, 1], [3, 2]])
    expect(zipWithIndex(['a', 'b'])).toEqual([['a', 0], ['b', 1]])
  })

  it('should not modify original array', function () {
    var a = [1, 2, 3]

    zipWithIndex(a)

    expect(a).toEqual([1, 2, 3])
  })
})
