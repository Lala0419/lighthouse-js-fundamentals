const numberOfVowels = function (data) {
	let arr = [];
	for (i = 0; i < data.length; i++) {
		if (
			data[i] === "a" ||
			data[i] === "i" ||
			data[i] === "u" ||
			data[i] === "e" ||
			data[i] === "o"
		) {
			arr.push(data[i]);
		}
	}
	return arr.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

//or

const numberOfVowels2 = function (data) {
	const vowels = ["a", "e", "i", "o", "u"];
	let count = 0;
	for (let i = 0; i < data.length; i++) {
		if (vowels.includes(data[i].toLowerCase())) {
			count++;
		}
	}
	return count;
};

console.log(numberOfVowels2("orange")); // output: 3
console.log(numberOfVowels2("lighthouse labs")); // output: 5
console.log(numberOfVowels2("aeiou")); // output: 5
