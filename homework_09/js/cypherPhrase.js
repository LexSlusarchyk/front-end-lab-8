'use strict';  

function cypherPhrase (someObject, someString) {
	
	someString = someString.split('');
	return getTransformedArray (someString, function(item){

		for (let key in someObject){
			if (item === key){
				item = someObject[key];
			} 
		}
		return item;
	}).join('');     
}
