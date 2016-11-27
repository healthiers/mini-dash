var head = require('./index')

describe('head()', function () {
  it('should have "default" exported', function () {
    expect(head.default).toBe(head)
  })

  it('should return undefined on empty array', function () {
    /* eslint-disable no-undefined */
    expect(head([])).toEqual(undefined)
  })

  it('should return the first element on non empty arrays', function () {
    expect(head([1, 2, 3])).toEqual(3)
    expect(head([10, 2, 3, 4])).toEqual(4)
    expect(head([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(9)
  })

  it('should not modify original array', function () {
    var array = [1, 2, 3]
    head(array)
    expect(array).toEqual([1, 2, 3])
  })
})
