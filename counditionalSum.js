const conditionalSum = function (values, condition) {
	//make empty variables for even and odd
	//for loop
	//separate the array between even and odd
	//compare with the condition value
	let even = [];
	let odd = [];
	for (let i = 0; i < values.length; i++) {
		if (values[i] % 2 === 0) {
			// console.log(values[i])
			even.push(values[i]);
			// console.log(even)
		} else if (values[i] % 2 === 1) {
			odd.push(values[i]);
		}
	}
	// console.log(even, odd);

	let result = 0;
	if (condition === "even") {
		for (i = 0; i < even.length; i++) {
			result += even[i];
		}
	} else if (condition === "odd") {
		for (i = 0; i < odd.length; i++) {
			result += odd[i];
		}
	}
	return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); //144
console.log(conditionalSum([], "odd")); //0

//or more efficient way

const conditionalSum2 = function (values, condition) {
	let sum = 0;

	for (let i = 0; i < values.length; i++) {
		if (condition === "even" && values[i] % 2 === 0) {
			sum += values[i];
		} else if (condition === "odd" && values[i] % 2 !== 0) {
			sum += values[i];
		}
	}

	return sum;
};

console.log(conditionalSum2([1, 2, 3, 4, 5], "even")); //6
console.log(conditionalSum2([1, 2, 3, 4, 5], "odd")); //9
console.log(conditionalSum2([13, 88, 12, 44, 99], "even")); //144
console.log(conditionalSum2([], "odd")); //0
