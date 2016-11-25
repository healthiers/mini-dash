var isArray = require('./index')

describe('isArray()', function () {
  it('should have "default" exported', function () {
    expect(isArray.default).toBe(isArray)
  })

  it('should pass for empty array', function () {
    expect(isArray([])).toBe(true)
  })

  it('should pass for non-empty array', function () {
    expect(isArray([1, 2, 3])).toBe(true)
  })

  it('should not pass for null', function () {
    expect(isArray(null)).toBe(false)
  })

  it('should not pass for undefined', function () {
    /* eslint-disable no-undefined */
    expect(isArray(undefined)).toBe(false)
  })

  it('should not pass for number', function () {
    expect(isArray(3)).toBe(false)
  })

  it('should not pass for string', function () {
    expect(isArray('foo')).toBe(false)
  })

  it('should not pass for boolean', function () {
    expect(isArray(true)).toBe(false)
  })

  it('should not pass for empty object', function () {
    expect(isArray({})).toBe(false)
  })

  it('should not pass for object', function () {
    expect(isArray({ a: 1, b: 2 })).toBe(false)
  })

  it('should not pass for object with numeric keys', function () {
    expect(isArray({ 0: 'foobar', 1: 'foo', 2: 'bar' })).toBe(false)
  })

  it('should not pass for a function', function () {
    expect(isArray(function () { /* empty */ })).toBe(false)
  })
})
