var isObject = require('./index')

describe('isObject()', function () {
  it('should have "default" exported', function () {
    expect(isObject.default).toBe(isObject)
  })

  it('should pass for empty array', function () {
    expect(isObject([])).toBe(true)
  })

  it('should pass for non-empty array', function () {
    expect(isObject([1, 2, 3])).toBe(true)
  })

  it('should pass for empty object', function () {
    expect(isObject({})).toBe(true)
  })

  it('should pass for object', function () {
    expect(isObject({ a: 1, b: 2 })).toBe(true)
  })

  it('should pass for object with numeric keys', function () {
    expect(isObject({ 0: 'foobar', 1: 'foo', 2: 'bar' })).toBe(true)
  })

  it('should not pass for string', function () {
    expect(isObject('foo')).toBe(false)
  })

  it('should not pass for null', function () {
    expect(isObject(null)).toBe(false)
  })

  it('should not pass for undefined', function () {
    expect(isObject(undefined)).toBe(false)
  })

  it('should not pass for number', function () {
    expect(isObject(3)).toBe(false)
  })

  it('should not pass for boolean', function () {
    expect(isObject(true)).toBe(false)
  })

  it('should not pass for a function', function () {
    expect(isObject(function () { })).toBe(false)
  })
})
