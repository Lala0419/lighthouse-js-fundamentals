// Case Maker
// We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

// Input
// const camelCase = function(input) {
//   // Your code here
// };

// console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));
// Output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious
// Instruction

const camelCase = function (input) {
	let arr = input.split(" ");
	let string = "";
	console.log(arr);
	for (i = 1; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	} //アレイの中の1つ1つエレメント　is, a, string
	string = arr.join("");
	// for(let i =0; i < input.length; i++){
	//   if(i==='f'){
	//     result toUpperCase()
	//   }
	// }
	return string;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious
