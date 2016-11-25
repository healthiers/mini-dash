var groupBy = require('./index')

describe('groupBy()', function () {
  function even(e) { return e % 2 === 0 }
  function odd(e) { return e % 2 !== 0 }
  function hobby(e) { return e.hobby }

  it('should have "default" exported', function () {
    expect(groupBy.default).toBe(groupBy)
  })

  it('should return empty object for empty array', function () {
    expect(groupBy([], odd)).toEqual({})
  })

  it('should groupBy even/odd element', function () {
    expect(groupBy([0, 1, 2, 3, 4, 5], even)).toEqual({
      'true': [0, 2, 4],
      'false': [1, 3, 5]
    })
  })

  it('should groupBy odd/even element', function () {
    expect(groupBy([0, 1, 2, 3, 4], odd)).toEqual({
      'true': [1, 3],
      'false': [0, 2, 4]
    })
  })

  it('should groupBy hobby', function () {
    var users = [
      { name: 'A', hobby: 'music' },
      { name: 'B', hobby: 'sport' },
      { name: 'C', hobby: 'music' },
      { name: 'D', hobby: 'programming' },
      { name: 'E', hobby: 'sport' },
    ]
    expect(groupBy(users, hobby)).toEqual({
      'music': [{ name: 'A', hobby: 'music' }, { name: 'C', hobby: 'music' }],
      'sport': [{ name: 'B', hobby: 'sport' }, { name: 'E', hobby: 'sport' }],
      'programming': [{ name: 'D', hobby: 'programming' }]
    })
  })

  it('should not mutate the original array', function () {
    var array = [0, 1, 2, 3, 4]
    groupBy([0, 1, 2, 3, 4], odd)
    expect(array).toEqual([0, 1, 2, 3, 4])
  })
})
