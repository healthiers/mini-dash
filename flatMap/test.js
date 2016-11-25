var flatMap = require('./index')

describe('flatMap()', function () {

  function toOneTwoThree() { return [1, 2, 3] }
  function twice(e) { return [e, e] }
  function threeTimes(e) { return [e, e, e] }
  function children(e) { return e.children }

  it('should have "default" exported', function () {
    expect(flatMap.default).toBe(flatMap)
  })

  it('should return empty array', function () {
    expect(flatMap([], toOneTwoThree)).toEqual([])
  })

  it('should return [1, 2, 3]', function () {
    expect(flatMap([1], toOneTwoThree)).toEqual([1, 2, 3])
  })

  it('should return [1, 2, 3] x 3', function () {
    expect(flatMap([1, 2, 3], toOneTwoThree)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3])
  })

  it('should return [1, 1, 2, 2, 3, 3]', function () {
    expect(flatMap([1, 2, 3], twice)).toEqual([1, 1, 2, 2, 3, 3])
  })

  it('should return [1, 1, 1, 2, 2, 2, 3, 3, 3]', function () {
    expect(flatMap([1, 2, 3], threeTimes)).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3])
  })

  it('should return objects children', function () {
    var array = [
      { name: 'a', children: [1, 2, 3] },
      { name: 'b', children: [4, 5] },
      { name: 'c', children: [6, 7, 8, 9] }
    ]
    expect(flatMap(array, children)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
