var extend = require('./index')

describe('extend()', function () {

  it('should have "default" exported', function () {
    expect(extend.default).toBe(extend)
  })

  it('should return empty object when no arguments given', function () {
    expect(extend()).toEqual({})
  })

  it('should return empty object when single empty object given', function () {
    expect(extend({})).toEqual({})
  })

  it('should return empty object when multiple empty objects given', function () {
    expect(extend({}, {}, {})).toEqual({})
  })

  it('should return the union of properties', function () {
    expect(extend({ a: 1 }, { b: 2 }, { c: 3 })).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should have the rightmost property', function () {
    expect(extend({ a: 1 }, { a: 2 }, { a: 3 })).toEqual({ a: 3 })
  })

  it('should not mutate any inputs', function () {
    var first = { a: 1 }
    var second = { b: 2 }
    var third = { c: 3 }

    expect(extend(first, second, third)).toEqual({ a: 1, b: 2, c: 3 })

    expect(first).toEqual({ a: 1 })
    expect(second).toEqual({ b: 2 })
    expect(third).toEqual({ c: 3 })
  })
})
