const instructorWithLongestName = function (instructors) {
	//create a variable to start the longest length
	//  loop the array of objects
	// compare two elements each iteration and return true if it's longer
	let longestName = 0;
	console.log(instructors);

	for (let i = 1; i < instructors.length; i++) {
		//4 loops, 3loops
		if (instructors[i].name.length > instructors[longestName].name.length) {
			// console.log(instructors[i].name)
			longestName = i;
		}
	}
	return instructors[longestName];
};

console.log(
	instructorWithLongestName([
		{ name: "Samuel", course: "iOS" },
		{ name: "Jeremddd", course: "Web" },
		{ name: "Ophilia", course: "Web" },
		{ name: "Donald", course: "Web" },
	])
);
//{ name: 'Jeremddd', course: 'Web' }

console.log(
	instructorWithLongestName([
		{ name: "Matthew", course: "Web" },
		{ name: "David", course: "iOS" },
		{ name: "Domascus", course: "Web" },
	])
);

//{ name: 'Domascus', course: 'Web' }
