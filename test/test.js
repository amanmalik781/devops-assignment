var assert = require('assert');
var calculateFactorial = require('../src/index');

describe('Factorial Calculation', function () {
    it('should return 1 for factorial of 0', function () {
        assert.strictEqual(calculateFactorial(0), 1);
    });

    it('should return 1 for factorial of 1', function () {
        assert.strictEqual(calculateFactorial(1), 1);
    });

    it('should return the correct factorial for other numbers', function () {
        assert.strictEqual(calculateFactorial(5), 120);
        assert.strictEqual(calculateFactorial(8), 40320);
        // Add more test cases as needed
    });
});
