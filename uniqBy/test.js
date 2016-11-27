var uniqBy = require('./index')

describe('uniqBy()', function () {

  function strictEqual(a, b) { return a === b }
  function byName(a, b) { return a.name === b.name }

  it('should have "default" exported', function () {
    expect(uniqBy.default).toBe(uniqBy)
  })

  it('should return empty array on no args', function () {
    expect(uniqBy([], strictEqual)).toEqual([])
  })

  it('should work on primitive types', function () {
    expect(uniqBy([1, 2, 3, 4, 1, 2, 1, 4, 5], strictEqual)).toEqual([1, 2, 3, 4, 5])
    expect(uniqBy([true, true, false, true, true], strictEqual)).toEqual([true, false])
    expect(uniqBy(['a', 'b', 'a', 'c', 'b'], strictEqual)).toEqual(['a', 'b', 'c'])
  })

  it('should work on complex types', function () {
    var ted = { name: 'Ted', age: 25 }
    var bruno = { name: 'Bruno', age: 21 }
    var ted2 = { name: 'Ted', age: 30 }
    var julia = { name: 'Julia', age: 27 }
    var julia2 = { name: 'Julia', age: 22 }

    expect(uniqBy([ted, bruno, ted2, julia, julia2], byName)).toEqual([ted, bruno, julia])
  })

  it('should not modify original array', function () {
    var a = [1, 2, 3, 4, 1, 2, 1, 4, 5]
    uniqBy(a, strictEqual)
    expect(a).toEqual([1, 2, 3, 4, 1, 2, 1, 4, 5])
  })
})
