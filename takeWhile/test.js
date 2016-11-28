var takeWhile = require('./index')

describe('takeWhile()', function () {
  function alwaysTrue() { return true }
  function alwaysFalse() { return false }
  function lessThan3(e) { return e < 3 }

  it('should have "default" exported', function () {
    expect(takeWhile.default).toBe(takeWhile)
  })

  it('should take the whole array with alwaysTrue predicate', function () {
    expect(takeWhile([], alwaysTrue)).toEqual([])
    expect(takeWhile([1, 2, 3], alwaysTrue)).toEqual([1, 2, 3])
    expect(takeWhile(['a', 'b', 'c', 'd'], alwaysTrue)).toEqual(['a', 'b', 'c', 'd'])
  })

  it('should be empty with alwaysFalse predicate', function () {
    expect(takeWhile([], alwaysFalse)).toEqual([])
    expect(takeWhile([1, 2, 3], alwaysFalse)).toEqual([])
    expect(takeWhile(['a', 'b', 'c', 'd'], alwaysFalse)).toEqual([])
  })

  it('should take < 3 elements', function () {
    expect(takeWhile([0, 2, 1, 3, 4, 5], lessThan3)).toEqual([0, 2, 1])
  })
})
