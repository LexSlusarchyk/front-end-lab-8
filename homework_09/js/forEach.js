'use strict';  

function forEach (someArray, someFunction) {
	
	for (let i = 0; i < someArray.length; i++){	
		someFunction(someArray[i]);
	}	
}