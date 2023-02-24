function lastIndexOf(array, value) {
	// set the output for undefined
	let lastIndex = -1;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) {
			//if there are more than two outputs, it overwrites and only remain the last element/value/output.
			// you want a index number rather than the value so just 'i' instead of array[i]
			lastIndex = i;
		}
	}
	return lastIndex;
}
