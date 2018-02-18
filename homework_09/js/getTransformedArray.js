'use strict';  

function getTransformedArray (someArray, someFunction) {
	
	let newArray = [];

	forEach(someArray, function (item){
		newArray.push(someFunction(item))
		}
	);

	return newArray;
}