var takeRightWhile = require('./index')

describe('takeRightWhile()', function () {
  function alwaysTrue() { return true }
  function alwaysFalse() { return false }
  function gt1(e) { return e > 1 }

  it('should have "default" exported', function () {
    expect(takeRightWhile.default).toBe(takeRightWhile)
  })

  it('should take the whole array with alwaysTrue predicate', function () {
    expect(takeRightWhile([], alwaysTrue)).toEqual([])
    expect(takeRightWhile([1, 2, 3], alwaysTrue)).toEqual([1, 2, 3])
    expect(takeRightWhile(['a', 'b', 'c', 'd'], alwaysTrue)).toEqual(['a', 'b', 'c', 'd'])
  })

  it('should be empty with alwaysFalse predicate', function () {
    expect(takeRightWhile([], alwaysFalse)).toEqual([])
    expect(takeRightWhile([1, 2, 3], alwaysFalse)).toEqual([])
    expect(takeRightWhile(['a', 'b', 'c', 'd'], alwaysFalse)).toEqual([])
  })

  it('should take > 1 elements', function () {
    expect(takeRightWhile([0, 2, 1, 3, 4, 5], gt1)).toEqual([3, 4, 5])
  })
})
