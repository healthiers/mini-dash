var count = require('./index')

describe('count()', function () {
  function even(e) { return e % 2 === 0 }
  function odd(e) { return e % 2 !== 0 }
  function alwaysTrue() { return true }
  function neverTrue() { return false }
  
  it('should have "default" exported', function () {
    expect(count.default).toBe(count)
  })

  it('should return 0 for empty array', function () {
    expect(count([], alwaysTrue)).toEqual(0)
  })

  it('should count even element', function () {
    expect(count([0, 1, 2, 3, 4, 5], even)).toEqual(3)
  })
  
  it('should count odd element', function () {
    expect(count([0, 1, 2, 3, 4], odd)).toEqual(2)
  })

  it('should be equal to arrays length', function () {
    expect(count([0, 1, 2, 3, 4, 5], alwaysTrue)).toEqual(6)
  })

  it('should return 0 for always false predicate', function () {
    expect(count([0, 1, 2, 3, 4, 5], neverTrue)).toEqual(0)
  })
})
