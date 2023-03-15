//gist.github.com/Lala0419/a8f82924856d9b21876d08262242b6b2

// Talking Calendar
// We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

// Input
// const talkingCalendar = function(date) {
// Your code here
// };

https: console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
// Output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987

const talkingCalendar = function (date) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const [year, month, day] = date.split("/").map(Number);
	console.log([year, month, day]); // output: [2017, 12, 2]
	const suffix = getSuffix(day);

	return `${months[month - 1]} ${day}${suffix}, ${year}`;
};

const getSuffix = function (day) {
	if (day >= 11 && day <= 13) {
		return "th";
	}
	const lastDigit = day % 10;
	switch (lastDigit) {
		case 1:
			return "st";
		case 2:
			return "nd";
		case 3:
			return "rd";
		default:
			return "th";
	}
};

// The talkingCalendar function takes a date string as input and returns
// a new string with the date in human readable format.

// First, we define an array of month names, which we'll use later
// to convert the numeric month to its corresponding name.

// Then, we split the date string into year, month, and day components
// using split('/') and map each component to a number using map(Number).

// Next, we call the getSuffix function to determine the suffix to use for
// the day (e.g., "st" for 1st, "nd" for 2nd, "rd" for 3rd, and "th" for all other days).

// Finally, we use template literals to combine the month name, day, suffix,
// and year into a new string that we return.

// The getSuffix function takes a day number as input and returns a string
// with the appropriate suffix for that day. We handle the special cases
// of 11th, 12th, and 13th, which all use the "th" suffix. For all other days,
// we take the last digit of the day using the modulo operator (day % 10)
// and use a switch statement to determine the appropriate suffix.

// why -1 ?

// In the talkingCalendar function, we use months[month - 1]
// to get the name of the month from the months array.

// The reason we subtract 1 from the month variable is because
// JavaScript's Date object uses a zero-based index for the months,
// meaning January is month 0, February is month 1, and so on.

// In our months array, however, we have listed the months starting
// from January as the first element, which is month 1. So to get the correct
// month name from our months array, we need to subtract 1 from the month variable
// that we extracted from the date string.

// For example, if the date string is "2017/12/02", the month variable will be 12.
// By subtracting 1, we get 11, which is the index of the "December" element in our months array.
// This allows us to correctly format the output string with the name of the month.
// @Lala0419
