// In this exercise, we will be printing multiplication tables to the console.

// Multiplication Table
// We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

const multiplicationTable = function (maxValue) {
	let table = "";
	for (let i = 1; i <= maxValue; i++) {
		for (let j = 1; j <= maxValue; j++) {
			table += i * j + " ";
		}
		table += "\n";
	}
	return table;
};

// Output
// 1

// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25

// 1 2 3 4 5 6 7 8 9 10
// 2 4 6 8 10 12 14 16 18 20
// 3 6 9 12 15 18 21 24 27 30
// 4 8 12 16 20 24 28 32 36 40
// 5 10 15 20 25 30 35 40 45 50
// 6 12 18 24 30 36 42 48 54 60
// 7 14 21 28 35 42 49 56 63 70
// 8 16 24 32 40 48 56 64 72 80
// 9 18 27 36 45 54 63 72 81 90
// 10 20 30 40 50 60 70 80 90 100

// The function multiplicationTable takes in a single parameter maxValue
// which is the highest value of the multiplication table.
// It returns the multiplication table as a string.

// The function uses two nested for loops to iterate through
// all the values from 1 to maxValue. For each pair of values (i and j),
// it multiplies them and adds the result to the table string, followed by a space.
// After each row is complete, it adds a newline character to start a new row.

// Finally, the function returns the table string which contains
// the complete multiplication table. The console.log statements
// at the end of the code call the function for maxValue values of 1, 5, and 10,
// respectively.
