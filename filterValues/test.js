var filterValues = require('./index')

describe('filterValues()', function () {

  function alwaysTrue() { return true }
  function not1(value) { return value !== 1 }
  function notBKey(value, key) { return key !== 'b' }

  it('should have "default" exported', function () {
    expect(filterValues.default).toBe(filterValues)
  })

  it('should return empty object when empty object given', function () {
    expect(filterValues({}, alwaysTrue)).toEqual({})
  })

  it('should filter by value', function () {
    expect(filterValues({ a: 1, b: 2, c: 3 }, not1)).toEqual({ b: 2, c: 3 })
  })

  it('should filter by key', function () {
    expect(filterValues({ a: 1, b: 2, c: 3 }, notBKey)).toEqual({ a: 1, c: 3 })
  })

  it('should not modify the original', function () {
    const object = { a: 1, b: 2, c: 3 }
    expect(filterValues(object, notBKey)).not.toBe(object)
    expect(object).toEqual({ a: 1, b: 2, c: 3 })
  })
})
