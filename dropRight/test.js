var dropRight = require('./index')

describe('dropRight()', function () {
  it('should have "default" exported', function () {
    expect(dropRight.default).toBe(dropRight)
  })

  it('should return empty array on empty array', function () {
    expect(dropRight([], 1)).toEqual([])
    expect(dropRight([], 3)).toEqual([])
    expect(dropRight([], 100)).toEqual([])
  })

  it('should return skip the last n items on non empty arrays', function () {
    expect(dropRight([1, 2, 3], 1)).toEqual([1, 2])
    expect(dropRight([10, 2, 3, 4], 3)).toEqual([10])
    expect(dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('should return empty if n >= array.length', function () {
    expect(dropRight([1, 2, 3], 3)).toEqual([])
    expect(dropRight([10, 2, 3, 4], 10)).toEqual([])
    expect(dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toEqual([])
  })

  it('should not modify original array', function () {
    var array = [1, 2, 3]
    dropRight(array, 2)
    expect(array).toEqual([1, 2, 3])
  })
})
