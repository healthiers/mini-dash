var dropRightWhile = require('./index')

describe('dropRightWhile()', function () {
  function alwaysTrue() { return true }
  function alwaysFalse() { return false }
  function lessThan3(e) { return e < 3 }

  it('should have "default" exported', function () {
    expect(dropRightWhile.default).toBe(dropRightWhile)
  })

  it('should return empty array on empty array', function () {
    expect(dropRightWhile([], alwaysTrue)).toEqual([])
  })

  it('should return skip all the elements when alwaysTrue used', function () {
    expect(dropRightWhile([1, 2, 3], alwaysTrue)).toEqual([])
    expect(dropRightWhile([10, 2, 3, 4], alwaysTrue)).toEqual([])
  })

  it('should return keep all the elements when alwaysFalse used', function () {
    expect(dropRightWhile([1, 2, 3], alwaysFalse)).toEqual([1, 2, 3])
    expect(dropRightWhile([10, 2, 3, 4], alwaysFalse)).toEqual([10, 2, 3, 4])
  })

  it('should skip the last elements while they satisfy lessThan3', function () {
    expect(dropRightWhile([1, 2, 3, 1, 0, 1], lessThan3)).toEqual([1, 2, 3])
    expect(dropRightWhile([3, 4, 0, 1], lessThan3)).toEqual([3, 4])
    expect(dropRightWhile([8, 9, 1, 2, 1, 2], lessThan3)).toEqual([8, 9])
  })

  it('should not modify original array', function () {
    var array = [1, 2, 3]
    dropRightWhile(array, alwaysTrue)
    expect(array).toEqual([1, 2, 3])
  })
})
