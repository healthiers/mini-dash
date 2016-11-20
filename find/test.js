var find = require('./index')

describe('find()', function () {

  function isTruthy(e) { return e }
  function isA(e) { return e === 'a' }
  function isActive(e) { return e.active }

  it('should have "default" exported', function () {
    expect(find.default).toBe(find)
  })

  it('should return undefined for empty', function () {
    expect(find([], isTruthy)).toEqual(undefined)
  })

  it('should return undefined for missing element', function () {
    expect(find([false, 0, undefined], isTruthy)).toEqual(undefined)
  })

  it('should find "a"', function () {
    expect(find(['c', 'd', 'a', 'b'], isA)).toEqual('a')
  })

  it('should find by property', function () {
    var elements = [
      { name: 'a', active: false },
      { name: 'b' },
      { name: 'c', active: true },
      { name: 'd', active: true }
    ]
    expect(find(elements, isActive)).toEqual({ name: 'c', active: true })
  })
})
