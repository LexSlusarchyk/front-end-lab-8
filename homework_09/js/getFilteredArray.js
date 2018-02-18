'use strict';

function getFilteredArray (someArray, someFunction) {
	
	let filteredArray = [];

	forEach(someArray, function (item){
		if (someFunction(item)){
			filteredArray.push(item)
		}
	});

	return filteredArray;
}
