var dropWhile = require('./index')

describe('dropWhile()', function () {
  function alwaysTrue() { return true }
  function alwaysFalse() { return false }
  function lessThan3(e) { return e < 3 }

  it('should have "default" exported', function () {
    expect(dropWhile.default).toBe(dropWhile)
  })

  it('should return empty array on empty array', function () {
    expect(dropWhile([], alwaysTrue)).toEqual([])
  })

  it('should return skip all the elements when alwaysTrue used', function () {
    expect(dropWhile([1, 2, 3], alwaysTrue)).toEqual([])
    expect(dropWhile([10, 2, 3, 4], alwaysTrue)).toEqual([])
  })

  it('should return keep all the elements when alwaysFalse used', function () {
    expect(dropWhile([1, 2, 3], alwaysFalse)).toEqual([1, 2, 3])
    expect(dropWhile([10, 2, 3, 4], alwaysFalse)).toEqual([10, 2, 3, 4])
  })

  it('should skip the first elements while they satisfy lessThan3', function () {
    expect(dropWhile([1, 2, 3], lessThan3)).toEqual([3])
    expect(dropWhile([2, 3, 4], lessThan3)).toEqual([3, 4])
    expect(dropWhile([1, 2, 1, 2, 8, 9], lessThan3)).toEqual([8, 9])
  })

  it('should not modify original array', function () {
    var array = [1, 2, 3]
    dropWhile(array, alwaysTrue)
    expect(array).toEqual([1, 2, 3])
  })
})
