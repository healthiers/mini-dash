var contains = require('./index')

describe('contains()', function () {

  function isTruthy(e) { return e }
  function isA(e) { return e === 'a' }
  function isActive(e) { return e.active }

  it('should have "default" exported', function () {
    expect(contains.default).toBe(contains)
  })

  it('should return false for empty', function () {
    expect(contains([], isTruthy)).toBe(false)
  })

  it('should return false for missing element', function () {
    expect(contains([false, 0, undefined], isTruthy)).toBe(false)
  })

  it('should return true for "a"', function () {
    expect(contains(['c', 'd', 'a', 'b'], isA)).toBe(true)
  })

  it('should find by property', function () {
    var elements = [
      { name: 'a', active: false },
      { name: 'b' },
      { name: 'c', active: true },
      { name: 'd', active: true }
    ]
    expect(contains(elements, isActive)).toBe(true)
  })
})
