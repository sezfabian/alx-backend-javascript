const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('correctly adds two numbers', () => {
    assert.strictEqual(calculateNumber(1.0, -2.0), -1);
  });

  it('correctly adds two negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, -2), -3);
  });

  it('correctly adds two positive numbers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('correctly adds two floating point numbers', () => {
    assert.strictEqual(calculateNumber(1.7, 3.2), 5);
  });

  it('correctly adds two large positive numbers', () => {
    assert.strictEqual(calculateNumber(10000000, 20000000), 30000000);
  });

  it('correctly rounds up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('correctly rounds up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('correctly rounds down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});