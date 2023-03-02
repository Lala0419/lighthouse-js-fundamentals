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
