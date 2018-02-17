'use strict';  

function increment(num) { 
return num + 1;
} 


function getTransformedArray (someArray, someFunction) {
	
	let newArray = forEach(someArray, someFunction);

	return newArray;
}