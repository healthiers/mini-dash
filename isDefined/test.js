var isDefined = require('./index')

describe('isDefined()', function () {
  it('should have "default" exported', function () {
    expect(isDefined.default).toBe(isDefined)
  })

  it('should not pass for null', function () {
    expect(isDefined(null)).toBe(false)
  })

  it('should not pass for undefined', function () {
    /* eslint-disable no-undefined */
    expect(isDefined(undefined)).toBe(false)
  })

  it('should pass for empty array', function () {
    expect(isDefined([])).toBe(true)
  })

  it('should pass for non-empty array', function () {
    expect(isDefined([1, 2, 3])).toBe(true)
  })

  it('should pass for 0', function () {
    expect(isDefined(3)).toBe(true)
  })

  it('should pass for number', function () {
    expect(isDefined(3)).toBe(true)
  })

  it('should pass empty for string', function () {
    expect(isDefined('')).toBe(true)
  })

  it('should pass for non-empty string', function () {
    expect(isDefined('foo')).toBe(true)
  })

  it('should pass for boolean', function () {
    expect(isDefined(true)).toBe(true)
    expect(isDefined(false)).toBe(true)
  })

  it('should pass for empty object', function () {
    expect(isDefined({})).toBe(true)
  })

  it('should pass for non-empty object', function () {
    expect(isDefined({ a: 1, b: 2 })).toBe(true)
  })

  it('should pass for a function', function () {
    expect(isDefined(function () { /* empty */ })).toBe(true)
  })
})
