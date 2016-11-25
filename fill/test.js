var fill = require('./index')

describe('fill()', function () {
  function produceOne() { return 1 }
  function counter(start) {
    var count = start
    return function () {
      return count++
    }
  }

  it('should have "default" exported', function () {
    expect(fill.default).toBe(fill)
  })

  it('should return empty array on 0 count', function () {
    expect(fill(0, produceOne)).toEqual([])
  })

  it('should fill the array with 3 ones', function () {
    expect(fill(3, produceOne)).toEqual([1, 1, 1])
  })

  it('should produce numbers from 1 to 5', function () {
    expect(fill(5, counter(1))).toEqual([1, 2, 3, 4, 5])
  })
})
