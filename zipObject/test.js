var zipObject = require('./index')

describe('zipObject()', function () {
  it('should have "default" exported', function () {
    expect(zipObject.default).toBe(zipObject)
  })

  it('should return empty object for 2 empty arrays', function () {
    expect(zipObject([], [])).toEqual({})
  })

  it('should return an object with the correct keys', function () {
    expect(zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 })
    expect(zipObject([1, 2], ['a', 'b'])).toEqual({ '1': 'a', '2': 'b' })
  })

  it('should have undefined values, when values is shorter', function () {
    /* eslint-disable no-undefined */
    expect(zipObject(['a', 'b', 'c'], [1])).toEqual({ a: 1, b: undefined, c: undefined })
  })

  it('should skip values for which there are no keys', function () {
    expect(zipObject(['a', 'b'], [1, 2, 3, 4])).toEqual({ a: 1, b: 2 })
  })

  it('should not modify original arrays', function () {
    var keys = ['a', 'b', 'c']
    var values = [1, 2, 3]

    zipObject(keys, values)

    expect(keys).toEqual(['a', 'b', 'c'])
    expect(values).toEqual([1, 2, 3])
  })
})
