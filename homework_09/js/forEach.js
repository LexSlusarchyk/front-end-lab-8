'use strict';  

function forEach (someArray, someFunction) {

	var newArray = [];
	for (let i = 0; i < someArray.length; i++){
		
		newArray.push(someFunction(someArray[i]));
		
	}
	
	return newArray;

}