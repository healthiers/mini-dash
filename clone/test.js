var clone = require('./index')

describe('clone()', function () {
  it('should have "default" exported', () => {
    expect(clone.default).toBe(clone)
  });

  it('should return an empty object if empty given', () => {
    expect(clone({})).toEqual({})
  });

  it('should return an object with the same properties', () => {
    expect(clone({ a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2, c: 3 })
  });

  it('should return an object with nested properties', () => {
    expect(clone({ a: 1, b: { foo: 'bar' }, c: { bar: 'foo' } }))
      .toEqual({ a: 1, b: { foo: 'bar' }, c: { bar: 'foo' } })
  });

  it('should not mutate the original object', () => {
    var object = { a: 1, b: 2, c: 3 }
    var result = clone(object)
    
    expect(result).toEqual(object)
    expect(result).not.toBe(object)
  });

  it('should shallow clone', () => {
    var object = { a: 1, b: { foo: 'bar' }, c: { bar: 'foo' } }
    var result = clone(object)
    
    expect(result).toEqual(object)
    expect(result).not.toBe(object)
    expect(result.b).toBe(object.b)
    expect(result.c).toBe(object.c)
  });
});
