var PascalTriangleMemoize = (function() {

	function PascalTriangleMemoize() {
		this.memoizeObject = {}
	}

	PascalTriangleMemoize.prototype.searchMemoizeObject = function(key, value) {
		if(this.memoizeObject.key !== undefined) {
			return this.memoizeObject.key;
		}
		else {
			this.memoizeObject.key = value;
			return false;
		}
	}

	PascalTriangleMemoize.prototype.calculate = function(n) {
		var currRow = [];
		var prevRow = [];

		if(this.searchMemoizeObject(n) !== false) {
			return this.searchMemoizeObject(n);
		}

		if( n === 0 ) {
			return [1];
		}
		if( n === 1 ) {
			return [1, 1];
		}
		currRow.push(1);
		prevRow = this.calculate(n - 1);
		for(var i = 1; i < prevRow.length; i++) {
			currRow[i] = prevRow[i-1] + prevRow[i];
		}
		currRow.push(1);
		this.searchMemoizeObject(n, currRow)
		return currRow;
	};

return PascalTriangleMemoize;
})();

module.exports = PascalTriangleMemoize;