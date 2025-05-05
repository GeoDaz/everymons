const { readJson, writeJson } = require('./lib');

function processJson(jsonData) {
	const result = {};

	// Iterate through each entry in the JSON
	Object.values(jsonData).forEach(value => {
		// Use the 'name' property as the new key
		const newKey = value.name;
		if (newKey) {
			result[newKey] = {
				...value,
			};
		}
	});

	return result;
}

// Get the filename from command line arguments
const fileName = process.argv[2];
if (!fileName) {
	console.error('Please provide a filename as an argument');
	process.exit(1);
}

// Read and process the file
const data = readJson(`./json/${fileName}.json`);
const processed = processJson(data);
writeJson(`./json/${fileName}.json`, processed);
