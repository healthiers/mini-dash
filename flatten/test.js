var flatten = require('./index')

describe('flatten()', function () {
  it('should have "default" exported', function () {
    expect(flatten.default).toBe(flatten)
  })

  it('should return empty array', function () {
    expect(flatten([])).toEqual([])
  })

  it('should flatten uniform length arrays', function () {
    expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3])
  })

  it('should return different lenth arrays', function () {
    expect(flatten([[1, 2, 3], [4], [5, 6]])).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should throw when items are not arrays', function () {
    expect(function () { flatten([[1], null, '']) }).toThrow()
  })

  it('should character array', function () {
    expect(flatten(['foo', 'bar'])).toEqual(['f', 'o', 'o', 'b', 'a', 'r'])
  })

  it('should not modify original array', function () {
    var array = [[1, 2, 3], [4], [5, 6]]
    var flattened = flatten(array)

    expect(flattened).toEqual([1, 2, 3, 4, 5, 6])
    expect(array).toEqual([[1, 2, 3], [4], [5, 6]])
  })
})
