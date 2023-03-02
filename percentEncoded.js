const urlEncode = function (text) {
	let result = "";
	let split = text.split("");
	// console.log(split)
	for (elm of split) {
		if (elm === " ") {
			elm = "20%";
			// console.log(elm)
		}
		result += elm;
	}
	return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure

//or

const urlEncode2 = function (text) {
	let encoded = "";
	for (let i = 0; i < text.length; i++) {
		if (text[i] === " ") {
			encoded += "%20";
		} else {
			encoded += text[i];
		}
	}
	return encoded;
};

console.log(urlEncode2("Lighthouse Labs"));
console.log(urlEncode2(" Lighthouse Labs "));
console.log(urlEncode2("blue is greener than purple for sure"));

// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure
