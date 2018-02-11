'use strict';  

//get sides of triangle
let aSide = parseFloat(prompt("Enter first side:"));
let bSide = parseFloat(prompt("Enter second side:"));
let cSide = parseFloat(prompt("Enter third side :"));

//calc area
let semiP = (aSide + bSide + cSide) / 2;
let areaABC = Math.sqrt(semiP * (semiP - aSide) * (semiP - bSide) * (semiP - cSide));

// Output result
if (isNaN(areaABC) || areaABC == 0) {
    console.log("Incorrect data");
}else {
//Check for correct data
	if (aSide <= 0 || bSide <= 0 || cSide <= 0 || aSide + bSide < cSide || aSide + cSide < bSide || bSide + cSide < aSide) {
		console.log("Incorrect data");
//Check type right triangle
	} else if (Math.pow(parseInt(aSide), 2) == Math.pow(parseInt(bSide), 2) + Math.pow(parseInt(cSide), 2) ||
	Math.pow(parseInt(bSide), 2) == Math.pow(parseInt(aSide), 2) + Math.pow(parseInt(cSide), 2) ||
	Math.pow(parseInt(cSide), 2) == Math.pow(parseInt(aSide), 2) + Math.pow(parseInt(bSide), 2)) {
		console.log("Type of triangle is right triangle and square is " + parseFloat(areaABC.toFixed(2)));
//Check type equilateral triangle
	} else if (aSide == bSide && aSide == cSide && bSide == cSide) {
		console.log("Type of triangle is equilateral and square is " + parseFloat(areaABC.toFixed(2)));
//Check type isosceles triangle
	} else if (aSide == bSide || aSide == cSide || bSide == cSide) {
		console.log("Type of triangle is isosceles and square is " + parseFloat(areaABC.toFixed(2)));
//Check type scalene triangle
	} else if (aSide != bSide && aSide != cSide && bSide != cSide) {
		console.log("Type of triangle is scalene and square is " + parseFloat(areaABC.toFixed(2)));
	}
}

