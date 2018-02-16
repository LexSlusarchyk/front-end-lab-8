'use strict'; 

function isPrime (integer) {

	for(var i = 2; i < integer; i++) {
        if(integer % i === 0) {
            return false;
        }
    }
    return integer > 1;
}

