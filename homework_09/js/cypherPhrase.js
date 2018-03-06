'use strict';  

function cypherPhrase (someObject, someString) {
	
  let cypherStr = getTransformedArray(someString, (item) =>
    someObject[item] ? someObject[item] : item
  );
  return cypherStr.join("");     
}
