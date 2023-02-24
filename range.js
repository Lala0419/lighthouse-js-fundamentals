const range = function (start, end, step) {
	result = [];
	if (
		start > end ||
		step <= 0 ||
		start === undefined ||
		end === undefined ||
		step === undefined
	) {
		return result;
	} else {
		for (let i = start; i <= end; i += step) {
			result.push(i);
		}
		return result;
	}
};

console.log(range(0, 10, 2)); //[0, 2, 4, 6, 8, 10]
console.log(range(10, 30, 5)); //[(10, 15, 20, 25, 30)]
console.log(range(-5, 2, 3)); //[(-5, -2, 1)];
