var zip = require('./index')

describe('zip()', function () {
  it('should have "default" exported', function () {
    expect(zip.default).toBe(zip)
  })

  it('should return empty array on no args', function () {
    expect(zip()).toEqual([])
  })

  it('should return empty array if empty arrays given', function () {
    expect(zip([])).toEqual([])
    expect(zip([], [])).toEqual([])
    expect(zip([], [], [])).toEqual([])
    expect(zip([], [], [], [], [], [])).toEqual([])
  })

  it('should return zipped arrays on equal length arrays', function () {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]])
    expect(zip([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b']])
    expect(zip([1, 2, 3], ['a', 'b', 'c'], ['foo', 'bar', true])).toEqual([[1, 'a', 'foo'], [2, 'b', 'bar'], [3, 'c', true]])
  })

  it('should fill nonexisting elements with undefined on non-equal length arrays', function () {
    expect(zip([1, 2], ['a'])).toEqual([[1, 'a']])
    expect(zip([1, 2, 3], ['a', 'b', 'c', 'd'], ['foo', 'bar'])).toEqual([[1, 'a', 'foo'], [2, 'b', 'bar']])
  })

  it('should not modify original array', function () {
    var a = [1, 2, 3]
    var b = [4, 5, 6]
    var c = [7, 8, 9]

    zip(a, b, c)

    expect(a).toEqual([1, 2, 3])
    expect(b).toEqual([4, 5, 6])
    expect(c).toEqual([7, 8, 9])
  })
})
