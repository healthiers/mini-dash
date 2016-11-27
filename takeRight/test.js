var takeRight = require('./index')

describe('takeRight()', function () {
  it('should have "default" exported', function () {
    expect(takeRight.default).toBe(takeRight)
  })

  it('should return empty array on empty array', function () {
    expect(takeRight([], 1)).toEqual([])
    expect(takeRight([], 3)).toEqual([])
    expect(takeRight([], 100)).toEqual([])
  })

  it('should return take the first n items on non empty arrays', function () {
    expect(takeRight([1, 2, 3], 1)).toEqual([3])
    expect(takeRight([10, 2, 3, 4], 3)).toEqual([2, 3, 4])
    expect(takeRight([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([8, 9])
  })

  it('should return all elements if n >= array.length', function () {
    expect(takeRight([1, 2, 3], 3)).toEqual([1, 2, 3])
    expect(takeRight([10, 2, 3, 4], 10)).toEqual([10, 2, 3, 4])
    expect(takeRight([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should not modify original array', function () {
    var array = [1, 2, 3]
    takeRight(array, 2)
    expect(array).toEqual([1, 2, 3])
  })
})
