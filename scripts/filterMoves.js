const { readJson, writeJson } = require('./lib');

function processMovesData(jsonData) {
	// Créer un objet pour stocker les moves uniques
	const uniqueMoves = {};

	// Parcourir chaque move dans le JSON
	jsonData.forEach(move => {
		const { usageName, description, ...moveData } = move; // Destructuring pour séparer usageName, gen et le reste

		// Si le move n'existe pas encore OU si la gen est plus récente
		if (!uniqueMoves[usageName] || uniqueMoves[usageName].gen < moveData.gen) {
			uniqueMoves[usageName] = moveData;
		}
	});

	// Nettoyer l'objet final en retirant currentGen
	Object.keys(uniqueMoves).forEach(key => {
		const { gen, ...cleanedMove } = uniqueMoves[key];
		uniqueMoves[key] = cleanedMove;
	});

	return uniqueMoves;
}

// Utilisation du script
const data = readJson('./json/moves.json');
const processedMoves = processMovesData(data);
writeJson('./json/moves.json', processedMoves);
