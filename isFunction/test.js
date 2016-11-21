var isFunction = require('./index')

describe('isFunction()', function () {
  it('should have "default" exported', function () {
    expect(isFunction.default).toBe(isFunction)
  })

  it('should pass for no-arg function', function () {
    expect(isFunction(function () { })).toBe(true)
  })

  it('should pass for named no-arg function', function () {
    function foo() { }
    expect(isFunction(foo)).toBe(true)
  })

  it('should pass for var no-arg function', function () {
    var foo = function () { }
    expect(isFunction(foo)).toBe(true)
  })

  it('should pass for named var no-arg function', function () {
    var foo = function foo() { }
    expect(isFunction(foo)).toBe(true)
  })

  it('should pass for function with args', function () {
    expect(isFunction(function (arg1, arg2) { })).toBe(true)
  })

  it('should pass for function returned by function', function () {
    function fnCreator() {
      return function returnFoo() {
        return 'foo'
      }
    }
    expect(isFunction(fnCreator())).toBe(true)
    expect(isFunction(fnCreator())).toBe(true)
  })

  it('should not pass for string', function () {
    expect(isFunction('foo')).toBe(false)
  })

  it('should not pass for empty array', function () {
    expect(isFunction([])).toBe(false)
  })

  it('should not pass for non-empty array', function () {
    expect(isFunction([1, 2, 3])).toBe(false)
  })

  it('should not pass for null', function () {
    expect(isFunction(null)).toBe(false)
  })

  it('should not pass for undefined', function () {
    expect(isFunction(undefined)).toBe(false)
  })

  it('should not pass for number', function () {
    expect(isFunction(3)).toBe(false)
  })

  it('should not pass for boolean', function () {
    expect(isFunction(true)).toBe(false)
  })

  it('should not pass for empty object', function () {
    expect(isFunction({})).toBe(false)
  })

  it('should not pass for object', function () {
    expect(isFunction({ a: 1, b: 2 })).toBe(false)
  })

  it('should not pass for object with numeric keys', function () {
    expect(isFunction({ 0: 'foobar', 1: 'foo', 2: 'bar' })).toBe(false)
  })
})
