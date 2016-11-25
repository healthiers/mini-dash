var isString = require('./index')

describe('isString()', function () {
  it('should have "default" exported', function () {
    expect(isString.default).toBe(isString)
  })

  it('should pass for empty string', function () {
    expect(isString('')).toBe(true)
  })

  it('should pass for non-empty string', function () {
    expect(isString('foo bar foobar')).toBe(true)
  })

  it('should not pass for empty array', function () {
    expect(isString([])).toBe(false)
  })

  it('should not pass for non-empty array', function () {
    expect(isString([1, 2, 3])).toBe(false)
  })

  it('should not pass for null', function () {
    expect(isString(null)).toBe(false)
  })

  it('should not pass for undefined', function () {
    /* eslint-disable no-undefined */
    expect(isString(undefined)).toBe(false)
  })

  it('should not pass for number', function () {
    expect(isString(3)).toBe(false)
  })

  it('should not pass for boolean', function () {
    expect(isString(true)).toBe(false)
  })

  it('should not pass for empty object', function () {
    expect(isString({})).toBe(false)
  })

  it('should not pass for object', function () {
    expect(isString({ a: 1, b: 2 })).toBe(false)
  })

  it('should not pass for object with numeric keys', function () {
    expect(isString({ 0: 'foobar', 1: 'foo', 2: 'bar' })).toBe(false)
  })

  it('should not pass for a function', function () {
    expect(isString(function () { /* empty */ })).toBe(false)
  })
})
