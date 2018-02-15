'use strict';  

function getMin () {
	var arg = [];
	for (var argument = 0; argument <= arguments.length-1; argument++){   //arguments.length-1 to cut undefined
		arg.push(arguments[argument]);
	}
	
	return Math.min.apply(null, arg);
}