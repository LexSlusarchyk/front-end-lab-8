'use strict';

function predicateFunction(num) { 
return num > 3;
} // returns boolean value


function getFilteredArray (someArray, someFunction) {
	
	let newArray = forEach(someArray, someFunction); //predicate array
	let filteredArray = [];

		for (let i = 0; i < newArray.length; i++){
			if (newArray[i]){
				filteredArray.push(someArray[i]);
			}	
		}

	return filteredArray;
}
