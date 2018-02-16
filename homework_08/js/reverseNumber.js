'use strict';  

function reverseNumber (integer) {

	let viceversa = null;
	integer = integer + "";

    if (integer > 0){				//("") is used as the separator, the string is split between each character
    	viceversa = +integer.split("").reverse().join("");
    	return viceversa;
    } else {
    	viceversa = +("-" + integer.split("").reverse().join("").slice(0,-1));
    	return viceversa;
    }
}
