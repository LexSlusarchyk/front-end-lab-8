'use strict';  

function getClosestToZero () {

	var ClosestToZero = arguments[0];
	var differnce = Math.abs(0-ClosestToZero);

	for (var argument = 0; argument <= arguments.length-1; argument++){   //arguments.length-1 to cut off undefined		
		var newDifference = Math.abs(ClosestToZero - arguments[argument]);
		if (newDifference < differnce){
			ClosestToZero = arguments[argument];
		}
	}
	return ClosestToZero;
}


