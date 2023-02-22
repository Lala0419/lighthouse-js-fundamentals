const chooseStations = function (stations) {
	let goodStation = [];
	for (const station of stations) {
		const capacity = station[1];
		const type = station[2];
		if (capacity >= 20) {
			if (type === "school" || "community centre") {
				goodStation.push(station[0]);
			}
		}
	}
	return goodStation;
};

const stations = [
	["Big Bear Donair", 10, "restaurant"],
	["Bright Lights Elementary", 50, "school"],
	["Moose Mountain Community Centre", 45, "community centre"],
];

chooseStations(stations);
