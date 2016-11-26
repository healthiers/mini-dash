var drop = require('./index')

describe('drop()', function () {
  it('should have "default" exported', function () {
    expect(drop.default).toBe(drop)
  })

  it('should return empty array on empty array', function () {
    expect(drop([], 1)).toEqual([])
    expect(drop([], 3)).toEqual([])
    expect(drop([], 100)).toEqual([])
  })

  it('should return skip the first n items on non empty arrays', function () {
    expect(drop([1, 2, 3], 1)).toEqual([2, 3])
    expect(drop([10, 2, 3, 4], 3)).toEqual([4])
    expect(drop([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([3, 4, 5, 6, 7, 8, 9])
  })

  it('should return empty if n >= array.length', function () {
    expect(drop([1, 2, 3], 3)).toEqual([])
    expect(drop([10, 2, 3, 4], 10)).toEqual([])
    expect(drop([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toEqual([])
  })

  it('should not modify original array', function () {
    var array = [1, 2, 3]
    drop(array, 2)
    expect(array).toEqual([1, 2, 3])
  })
})
