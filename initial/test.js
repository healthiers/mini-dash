var initial = require('./index')

describe('initial()', function () {
  it('should have "default" exported', function () {
    expect(initial.default).toBe(initial)
  })

  it('should return empty array on empty array', function () {
    expect(initial([])).toEqual([])
  })

  it('should return but the first element on non empty arrays', function () {
    expect(initial([1, 2, 3])).toEqual([2, 3])
    expect(initial([10, 2, 3, 4])).toEqual([2, 3, 4])
    expect(initial([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should not modify original array', function () {
    var array = [1, 2, 3]
    initial(array)
    expect(array).toEqual([1, 2, 3])
  })
})
