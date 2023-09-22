const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('correctly adds two numbers', () => {
    assert.equal(calculateNumber(1, -2), -1);
  });

  it('correctly adds two negative numbers', () => {
    assert.equal(calculateNumber(-1, -2), -3);
  });

  it('correctly adds two positive numbers', () => {
    assert.equal(calculateNumber(1, 2), 3);
  });

  it('correctly adds two floating point numbers', () => {
    assert.equal(calculateNumber(1.7, 3.2), 5);
  });

  it('correctly adds two large positive numbers', () => {
    assert.equal(calculateNumber(10000000, 20000000), 30000000);
  });
});