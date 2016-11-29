var pickBy = require('./index')

describe('pickBy()', function () {
  function alwaysTrue() { return true }
  function alwaysFalse() { return false }
  function keyIsA(value, key) { return key === 'a' }
  function valueIs3(value) { return value === 3 }

  it('should have "default" exported', function () {
    expect(pickBy.default).toBe(pickBy)
  })

  it('should pick all fields', function () {
    expect(pickBy({ a: 1, b: 2, c: 3 }, alwaysTrue)).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should pick no fields', function () {
    expect(pickBy({ a: 1, b: 2, c: 3 }, alwaysFalse)).toEqual({})
  })

  it('should pick "a" keyed value', function () {
    expect(pickBy({ a: 1, b: 2, c: 3 }, keyIsA)).toEqual({ a: 1 })
  })

  it('should pick value 3', function () {
    expect(pickBy({ a: 1, b: 2, c: 3 }, valueIs3)).toEqual({ c: 3 })
  })

  it('should not mutate original object', function () {
    var object = { a: 1, b: 2, c: 3 }
    pickBy(object, alwaysTrue)
    expect(object).toEqual({ a: 1, b: 2, c: 3 })
  })
})
