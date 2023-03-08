// The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:

// [[1, 2], [2, 3]]
// The first will be the value to repeat, the second will be the amount of times to repeat that value.

// Input
// const repeatNumbers = function(data) {
//   // Put your solution here
// };

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
// Expected Output
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292

const repeatNumbers = function (data) {
	let result = "";
	for (let i = 0; i < data.length; i++) {
		let value = data[i][0];
		let mul = data[i][1];
		for (let j = 0; j < mul; j++) {
			result += value;
		}
		if (i < data.length - 1) {
			//tricky here. was able to know nested loop was needed
			result += ", ";
		}
	}
	return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
	repeatNumbers([
		[1, 2],
		[2, 3],
	])
);
console.log(
	repeatNumbers([
		[10, 4],
		[34, 6],
		[92, 2],
	])
);

// 1111111111
// 11, 222
// 10101010, 343434343434, 9292
