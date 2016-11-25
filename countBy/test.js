var countBy = require('./index')

describe('countBy()', function () {
  function even(e) { return e % 2 === 0 }
  function odd(e) { return e % 2 !== 0 }
  function hobby(e) { return e.hobby }

  it('should have "default" exported', function () {
    expect(countBy.default).toBe(countBy)
  })

  it('should return empty object for empty array', function () {
    expect(countBy([], odd)).toEqual({})
  })

  it('should groupBy even/odd element', function () {
    expect(countBy([0, 1, 2, 3, 4, 5], even)).toEqual({
      'true': 3,
      'false': 3
    })
  })

  it('should groupBy odd/even element', function () {
    expect(countBy([0, 1, 2, 3, 4], odd)).toEqual({
      'true': 2,
      'false': 3
    })
  })

  it('should groupBy hobby', function () {
    var users = [
      { name: 'A', hobby: 'music' },
      { name: 'B', hobby: 'sport' },
      { name: 'C', hobby: 'music' },
      { name: 'D', hobby: 'programming' },
      { name: 'E', hobby: 'sport' },
      { name: 'F', hobby: 'sport' },
    ]
    expect(countBy(users, hobby)).toEqual({
      'music': 2,
      'sport': 3,
      'programming':1
    })
  })

  it('should not mutate the original array', function () {
    var array = [0, 1, 2, 3, 4]
    countBy([0, 1, 2, 3, 4], odd)
    expect(array).toEqual([0, 1, 2, 3, 4])
  })
})
