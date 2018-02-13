'use strict';  

//get height of piramid
let height = +prompt("Please enter natural number from 1 to 20 :");

let pyramid = '';
//Check if height is not natural or doesn`t match required range
if ( height > 0 && height <= 20 && Number.isInteger(height) ){
	
	let pyramid = '';
	let block = '[~]';
	let blank = '   ';
	for (var a = 0; a < height; a++) {

	    for (var b = 1; b < height - a; b++) {	//define where to start piramid flor
	        pyramid += blank;
	    }
	    for (var c = 1; c <= (2*a+1); c++) {	//bild piramid flor
	        pyramid += block;
	    }
	    pyramid += "\n";  				//break line for piramid flor
	}
	console.log(pyramid);			//Piramid view
} else {
	console.log('Incorect entry!');
}



