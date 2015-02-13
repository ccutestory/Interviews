var Memoize = require('../lib/pascals-triangle/pascals-triangle-memoize');

describe('Pascals Triangle Memoize', function () {

  describe('when n = 0', function() {

    it('should return an array containing 1', function() {
    	var triangle = new Memoize();
    	var expectedResult = [1];
    	var result = triangle.calculate(0);
    	expect(result).toEqual(expectedResult);
    });
  });

  describe('when n = 1', function() {

    it('should return an array containing 1', function() {
    	var triangle = new Memoize();
    	var expectedResult = [1, 1];
    	var result = triangle.calculate(1);
    	expect(result).toEqual(expectedResult);
    });
  });

  describe('with arbitrary values', function() {

    it('should return the correct array when n=5', function() {
    	var triangle = new Memoize();
    	var expectedResult = [1, 5, 10, 10, 5, 1];
    	var result = triangle.calculate(5);
    	expect(result).toEqual(expectedResult);
    });

    it('should return the correct array when n=7', function() {
    	var triangle = new Memoize();
    	var expectedResult = [1, 7, 21, 35, 35, 21 , 7, 1 ];
    	var result = triangle.calculate(7);
    	expect(result).toEqual(expectedResult);
    });

    it('should be able to calculate large numbers', function() {
    	var triangle = new Memoize();
    	var result = triangle.calculate(56);
    	expect(result instanceof Array).toBe(true);
    	expect(result.length).toBe(57)
    });
  });

  describe('memoization', function() {
      var triangle = new Memoize();
      var result = triangle.calculate(3);

    it('should return the cached value', function() {
      spyOn(triangle, 'searchMemoizeObject').and.callThrough();
      triangle.calculate(3);
      expect(triangle.searchMemoizeObject).toReturn(result);
    });

    it('should calculate unknown values', function() {
      spyOn(triangle, 'searchMemoizeObject')
      var result = triangle.calculate(7);
      expect(triangle.searchMemoizeObject).toReturn(false);
    });

    it('should add new values to object', function() {
      //check 
      var result = triangle.calculate(56);
      expect(result instanceof Array).toBe(true);
      expect(result.length).toBe(57)
    });
  });
});