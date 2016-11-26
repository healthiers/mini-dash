var take = require('./index')

describe('take()', function () {
  it('should have "default" exported', function () {
    expect(take.default).toBe(take)
  })

  it('should return empty array on empty array', function () {
    expect(take([], 1)).toEqual([])
    expect(take([], 3)).toEqual([])
    expect(take([], 100)).toEqual([])
  })

  it('should return take the first n items on non empty arrays', function () {
    expect(take([1, 2, 3], 1)).toEqual([1])
    expect(take([10, 2, 3, 4], 3)).toEqual([10, 2, 3])
    expect(take([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([1, 2])
  })
 
  it('should return all elements if n >= array.length', function () {
    expect(take([1, 2, 3], 3)).toEqual([1, 2, 3])
    expect(take([10, 2, 3, 4], 10)).toEqual([10, 2, 3, 4])
    expect(take([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should not modify original array', function () {
    var array = [1, 2, 3]
    take(array, 2)
    expect(array).toEqual([1, 2, 3])
  })
})
