var mapValues = require('./index')

describe('mapValues()', function () {

  function identity(value) { return value }
  function multiplyBy2(value) { return value * 2 }

  it('should have "default" exported', function () {
    expect(mapValues.default).toBe(mapValues)
  })

  it('should return empty object when empty object given', function () {
    expect(mapValues({}, identity)).toEqual({})
  })

  it('should map the values properly', function () {
    expect(mapValues({ a: 1, b: 2, c: 3 }, multiplyBy2)).toEqual({ a: 2, b: 4, c: 6 })
  })

  it('should have the same values but different identity', function () {
    const object = { a: 1, b: 2, c: 3 }
    expect(mapValues(object, identity)).toEqual(object)
  })
})
