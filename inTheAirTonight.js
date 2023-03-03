// For this challenge we will implement a function called checkAir(), which will check a collection of air samples. The function will take in two arguments. The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. The second argument is a number representing the highest acceptable amount of dirty samples. For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean. Our function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.

console.log(
	checkAir(
		[
			"clean",
			"clean",
			"dirty",
			"clean",
			"dirty",
			"clean",
			"clean",
			"dirty",
			"clean",
			"dirty",
		],
		0.3
	)
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
	checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
//Expected Output
// Polluted
// Polluted
// Clean

const checkAir = function (samples, threshold) {
	let dirtyCount = 0;
	for (const sample of samples) {
		if (sample === "dirty") {
			dirtyCount++;
		}
	}
	const proportion = dirtyCount / samples.length;
	if (proportion > threshold) {
		return "Polluted";
	} else {
		return "Clean";
	}
};

// The function starts by initializing a dirtyCount variable to 0, which we will use to keep track of the number of dirty air samples we find. We then loop through the array of samples using a for...of loop, checking if each sample is equal to 'dirty'. If it is, we increment dirtyCount using the ++ operator.

// After counting the number of dirty samples, we calculate the proportion of dirty samples by dividing dirtyCount by the total number of samples. We then compare this proportion to the threshold argument. If the proportion is greater than the threshold, we return 'Polluted', indicating that there are too many dirty samples. Otherwise, we return 'Clean', indicating that the air is clean.

// We can test the function using the provided inputs:

console.log(
	checkAir(
		[
			"clean",
			"clean",
			"dirty",
			"clean",
			"dirty",
			"clean",
			"clean",
			"dirty",
			"clean",
			"dirty",
		],
		0.3
	)
);
// Output: Polluted

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));
// Output: Polluted

console.log(
	checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
// Output: Clean
//As expected, the function returns 'Polluted' for the first two inputs, and 'Clean' for the last input.
