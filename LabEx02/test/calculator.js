const { expect } = require('chai');
const calculator = require('../app/calculator');

describe('Calculator Tests', () => {
  
  describe('Add', () => {
    it('Return 7 for add(5, 2)', () => {
      const result = calculator.add(5, 2);
      expect(result).to.equal(7);
    });

    it('Fail when add(5, 2) expects 8', () => {
      const result = calculator.add(5, 2);
      expect(result).to.not.equal(8);
    });
  });

  describe('Subtract', () => {
    it('Return 3 for sub(5, 2)', () => {
      const result = calculator.sub(5, 2);
      expect(result).to.equal(3);
    });

    it('Fail when sub(5, 2) expects 5', () => {
      const result = calculator.sub(5, 2);
      expect(result).to.not.equal(5);
    });
  });

  describe('Multiply', () => {
    it('Return 10 for mul(5, 2)', () => {
      const result = calculator.mul(5, 2);
      expect(result).to.equal(10);
    });

    it('Fail when mul(5, 2) expects 12', () => {
      const result = calculator.mul(5, 2);
      expect(result).to.not.equal(12);
    });
  });

  describe('Divide', () => {
    it('Return 5 for div(10, 2)', () => {
      const result = calculator.div(10, 2);
      expect(result).to.equal(5);
    });

    it('Fail when div(10, 2) expects 2', () => {
      const result = calculator.div(10, 2);
      expect(result).to.not.equal(2);
    });
  });

});
