'use strict';  

function collectIds (movies) {
	
	let ratingArray = [];

	getFilteredArray(movies, function (element){
		if(element.rating > 3){
			ratingArray.push(element);
		}	
	});

	ratingArray = getTransformedArray (ratingArray, function(element){
		return element.id;
	});

	return ratingArray;

}
