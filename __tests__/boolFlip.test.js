// boolFlip.test.js

const {BoolFlip} = require('../index');

describe('BoolFlip', () => {
  it('should return a boolean value', () => {
    const result = BoolFlip();
    expect(typeof result).toBe('boolean');
  });

  it('should return true or false', () => {
    const results = new Set();
    for (let i = 0; i < 1000; i++) {
      results.add(BoolFlip());
    }
    expect(results.has(true)).toBe(true);
    expect(results.has(false)).toBe(true);
  });
});