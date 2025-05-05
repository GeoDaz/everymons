const { readJson, writeJson } = require('./lib');

function processAbilitiesData(jsonData) {
	// Créer un objet pour stocker les abilities uniques
	const uniqueAbilities = {};

	// Parcourir chaque ability dans le JSON
	jsonData.forEach(ability => {
		const { usageName, description, ...abilityData } = ability; // Destructuring pour séparer usageName, gen et le reste

		// Si le ability n'existe pas encore OU si la gen est plus récente
		if (
			!uniqueAbilities[usageName] ||
			uniqueAbilities[usageName].gen < abilityData.gen
		) {
			uniqueAbilities[usageName] = abilityData;
		}
	});

	// Nettoyer l'objet final en retirant currentGen
	Object.keys(uniqueAbilities).forEach(key => {
		const { gen, ...cleanedAbility } = uniqueAbilities[key];
		uniqueAbilities[key] = cleanedAbility;
	});

	return uniqueAbilities;
}

// Utilisation du script
const data = readJson('./json/abilities.json');
const processedAbilities = processAbilitiesData(data);
writeJson('./json/abilities.json', processedAbilities);
