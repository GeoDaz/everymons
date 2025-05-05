const fs = require('fs');
// const { JSDOM } = require('jsdom');

// to await
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function readJson(src) {
	const json = fs.readFileSync(src);
	if (!json) return null;
	const data = JSON.parse(json);
	return data;
}

function writeJson(filePath, body) {
	fs.writeFile(filePath, JSON.stringify(body, null, 4), 'utf8', function (err) {
		if (err) {
			console.error('An error occured while writing in ' + filePath);
			console.error(err);
		} else {
			console.log('Succesfully write in ' + filePath);
		}
	});
}

// function readHtml() {
// 	const html = fs.readFileSync(filePath, 'utf8', (err, data) => {
// 		if (err) {
// 			console.error(err);
// 			return;
// 		}
// 		return data;
// 	});
// 	if (!html) return null;
// 	const dom = new JSDOM(html);
// 	return dom.window.document;
// }

// // to await
// async function fetchHtml(url) {
// 	let response, html;
// 	response = await fetch(url);
// 	html = await response.text();

// 	const dom = new JSDOM(html);
// 	return dom.window.document;
// }

module.exports = { sleep, writeJson, readJson /* fetchHtml, readHtml */ };
