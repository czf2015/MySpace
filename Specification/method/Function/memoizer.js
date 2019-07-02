function memoizer(memo, formula) {
	return function recur(n) {
		let result = memo[n];
		if (typeof result !== 'number') {
			result = formula(recur, n);
			memo[n] = result;
		}
		return result;
	}
} 

//示例
let fibonacci = memoizer([0, 1], function (recur, n) {
	return recur(n-1) + recur(n-2);
});
fibonacci(100);

let factorial = memoizer([1, 1], function (recur, n) {
	return n * recur(n-1);
});
factorial(100);