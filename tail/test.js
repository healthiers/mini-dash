var tail = require('./index')

describe('tail()', function () {
  it('should have "default" exported', function () {
    expect(tail.default).toBe(tail)
  })

  it('should return empty array on empty array', function () {
    expect(tail([])).toEqual([])
  })

  it('should return but the first element on non empty arrays', function () {
    expect(tail([1, 2, 3])).toEqual([2, 3])
    expect(tail([10, 2, 3, 4])).toEqual([2, 3, 4])
    expect(tail([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should not modify original array', function () {
    var array = [1, 2, 3]
    tail(array)
    expect(array).toEqual([1, 2, 3])
  })
})
