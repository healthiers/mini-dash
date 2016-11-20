var findIndex = require('./index')

describe('findIndex()', function () {

  function isTruthy(e) { return e }
  function isA(e) { return e === 'a' }
  function isActive(e) { return e.active }

  it('should have "default" exported', () => {
    expect(findIndex.default).toBe(findIndex)
  });

  it('should return -1 for empty', () => {
    expect(findIndex([], isTruthy)).toBe(-1)
  });

  it('should return -1 for missing element', () => {
    expect(findIndex([false, 0, undefined], isTruthy)).toBe(-1)
  });

  it('should find "a"s index', () => {
    expect(findIndex(['c', 'd', 'a', 'b'], isA)).toBe(2)
  });

  it('should find by property', () => {
    var elements = [
      { name: 'a', active: false },
      { name: 'b' },
      { name: 'c', active: true },
      { name: 'd', active: true }
    ]
    expect(findIndex(elements, isActive)).toBe(2)
  });
});
