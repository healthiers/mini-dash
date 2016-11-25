var countBy = require('./index')

describe('countBy()', function () {
  function even(e) { return e % 2 === 0 }
  function odd(e) { return e % 2 !== 0 }
  function alwaysTrue(e) { return true }
  function neverTrue(e) { return false }
  
  it('should have "default" exported', function () {
    expect(countBy.default).toBe(countBy)
  })
})
