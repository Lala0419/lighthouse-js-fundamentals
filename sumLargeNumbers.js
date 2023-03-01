// Put your solution here
//solution 1
//without array methods nor -infinity
const sumLargestNumbers = function (data) {
	// Initialize two variables to hold the two largest numbers
	let largest = data[0];
	let secondLargest = data[1];

	// If the second number is larger than the first, swap them
	if (secondLargest > largest) {
		[largest, secondLargest] = [secondLargest, largest];
	}

	// Loop through the rest of the array and update the largest and second largest variables as needed
	for (let i = 2; i < data.length; i++) {
		const num = data[i];
		if (num > largest) {
			secondLargest = largest;
			largest = num;
		} else if (num > secondLargest) {
			secondLargest = num;
		}
	}

	// Return the sum of the two largest numbers
	return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

//splution 2
// If we use -Infinity as the initial value for max1 and max2, we can be sure that any number in the array will be greater than both of them, and so the loop will correctly find the two largest numbers.

// Here's an example implementation using -Infinity:

const sumLargestNumbers2 = function (data) {
	let max1 = -Infinity;
	let max2 = -Infinity;

	for (let i = 0; i < data.length; i++) {
		if (data[i] > max1) {
			max2 = max1;
			max1 = data[i];
		} else if (data[i] > max2) {
			max2 = data[i];
		}
	}

	return max1 + max2;
};

console.log(sumLargestNumbers2([1, 10])); // Expected output: 11
console.log(sumLargestNumbers2([1, 2, 3])); // Expected output: 5
console.log(sumLargestNumbers2([10, 4, 34, 6, 92, 2])); // Expected output: 126

// In this implementation, we start with max1 and max2 set to -Infinity, and then update them as we iterate through the array. This solution should work correctly in all cases, but may not be as readable as the previous ones.
