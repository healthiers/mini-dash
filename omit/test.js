var omit = require('./index')

describe('omit()', function () {
  it('should have "default" exported', () => {
    expect(omit.default).toBe(omit)
  });

  it('should omit single field', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['a'])).toEqual({ b: 2, c: 3 })
  });

  it('should omit multiple fields', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ b: 2 })
  });

  it('should omit all fields', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'b', 'c',])).toEqual({})
  });

  it('should not mutate original object', () => {
    var object = { a: 1, b: 2, c: 3 }
    expect(omit(object, ['a', 'b'])).toEqual({ c: 3 })
    expect(object).toEqual({ a: 1, b: 2, c: 3 })
  });
});
