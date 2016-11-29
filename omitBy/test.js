var omitBy = require('./index')

describe('omitBy()', function () {
  function alwaysTrue() { return true }
  function alwaysFalse() { return false }
  function keyIsA(value, key) { return key === 'a' }
  function valueIs3(value) { return value === 3 }

  it('should have "default" exported', function () {
    expect(omitBy.default).toBe(omitBy)
  })

  it('should omit all fields', function () {
    expect(omitBy({ a: 1, b: 2, c: 3 }, alwaysTrue)).toEqual({})
  })

  it('should omit no fields', function () {
    expect(omitBy({ a: 1, b: 2, c: 3 }, alwaysFalse)).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should omit key "a"', function () {
    expect(omitBy({ a: 1, b: 2, c: 3 }, keyIsA)).toEqual({ b: 2, c: 3 })
  })

  it('should omit value 3', function () {
    expect(omitBy({ a: 1, b: 2, c: 3 }, valueIs3)).toEqual({ a: 1, b: 2 })
  })

  it('should not mutate original object', function () {
    var object = { a: 1, b: 2, c: 3 }
    omitBy(object, alwaysTrue)
    expect(object).toEqual({ a: 1, b: 2, c: 3 })
  })
})
