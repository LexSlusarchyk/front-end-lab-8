'use strict';  

function collectIds (movies) {

  let ratingArray = getFilteredArray(movies, function(element){
  	return element.rating > 3;
    }
  );

  let filteredId = getTransformedArray (ratingArray, function(element){
    return element.id;
    }
  );

  return filteredId;

}
