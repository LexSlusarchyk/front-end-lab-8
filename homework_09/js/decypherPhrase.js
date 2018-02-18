'use strict';  

function decypherPhrase (someObject, someString) {
	let decypherObject = {};
	for (let key in someObject) {
		decypherObject[someObject[key]] = key;
	}
	
	return cypherPhrase (decypherObject, someString)
}