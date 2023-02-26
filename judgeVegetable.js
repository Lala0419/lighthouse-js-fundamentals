//my way and it returns the correct answer

const judgeVegetable = function (vegetables, metric) {
	let veggiearr = [];
	if (metric === "redness") {
		for (veggie of vegetables) {
			console.log(veggie.redness);
			let arr = veggie.redness;
			veggiearr.push(arr);
		}
		veggiearr.sort((a, b) => b - a);
	}
	for (veggie of vegetables) {
		if (veggiearr[0] === veggie.redness) {
			return veggie.submitter;
		}
	}
	if (metric === "plumpness") {
		for (veggie of vegetables) {
			console.log(veggie.plumpness);
			let arr = veggie.plumpness;
			veggiearr.push(arr);
		}
		veggiearr.sort((a, b) => b - a);
	}
	for (veggie of vegetables) {
		if (veggiearr[0] === veggie.plumpness) {
			return veggie.submitter;
		}
	}
};

//chatGPT

function judgeVegetable(vegetables, metric) {
	let highestRanking = 0;
	let winner = "";

	for (let veggie of vegetables) {
		if (veggie[metric] > highestRanking) {
			highestRanking = veggie[metric];
			winner = veggie.submitter;
		}
	}

	return winner;
}

const vegetables = [
	{
		submitter: "Old Man Franklin",
		redness: 10,
		plumpness: 5,
	},
	{
		submitter: "Sally Tomato-Grower",
		redness: 2,
		plumpness: 8,
	},
	{
		submitter: "Hamid Hamidson",
		redness: 4,
		plumpness: 3,
	},
];

const metric = "plumpness";

judgeVegetable(vegetables, metric); //'Sally Tomato-Grower'
