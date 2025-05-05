const { readJson, writeJson } = require('./lib');

// prettier-ignore
const formatKeys = str => (str 
	? str
		.normalize('NFD')
		.replace(/[\s-_.'’:?%\u0300-\u036f]/g, '')
		.toLowerCase() 
	: null
);

const removeNullValues = array => array.filter(Boolean);

function processPokemonsData(jsonData) {
	// Créer un objet pour stocker les pokemons uniques
	const uniquePokemons = {};

	// Parcourir chaque pokemon dans le JSON
	jsonData.forEach(pokemon => {
		// Si le pokemon n'existe pas encore OU si la gen est plus récente
		if (
			!uniquePokemons[pokemon.usageName] ||
			uniquePokemons[pokemon.usageName].gen < pokemon.gen
		) {
			pokemon.prevo = pokemon.prevo;
			pokemon.baseform = pokemon.baseForm;
			uniquePokemons[pokemon.usageName] = pokemon;
		}
	});

	Object.keys(uniquePokemons).forEach(key => {
		const moveData = uniquePokemons[key];
		const transformedData = {
			...uniquePokemons[key],
			// Créer un tableau d'abilities (remplir avec null si absent)
			abilities: removeNullValues([
				moveData.ability_1,
				moveData.ability_2,
				moveData.ability_hidden,
			]),
			// Créer un tableau de types (filtrer les nulls)
			types: removeNullValues([moveData.type_1, moveData.type_2]),
		};

		if (transformedData.baseform) {
			if (!uniquePokemons[transformedData.baseform]) {
				throw new Error(`Pokemon ${transformedData.baseform} not found`);
			}
			if (!uniquePokemons[transformedData.baseform].forms) {
				uniquePokemons[transformedData.baseform].forms = [];
			}
			uniquePokemons[transformedData.baseform].forms.push(
				transformedData.usageName
			);
		}
		if (transformedData.prevo) {
			if (!uniquePokemons[transformedData.prevo]) {
				throw new Error(`Pokemon ${transformedData.prevo} not found`);
			}
			if (!uniquePokemons[transformedData.prevo].evos) {
				uniquePokemons[transformedData.prevo].evos = [];
			}
			uniquePokemons[transformedData.prevo].evos.push(transformedData.usageName);
		}

		// Supprimer les anciennes propriétés
		delete transformedData.gen;
		delete transformedData.weight;
		delete transformedData.ability_1;
		delete transformedData.ability_2;
		delete transformedData.ability_hidden;
		delete transformedData.type_1;
		delete transformedData.type_2;

		uniquePokemons[key] = transformedData;
	});

	return uniquePokemons;
}

// Utilisation du script
const data = readJson('./json/pokemons.json');
const processedPokemons = processPokemonsData(data);
writeJson('./json/pokemons.json', processedPokemons);
