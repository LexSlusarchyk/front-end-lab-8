'use strict';  

// 2018.02.11 rates
const usd = 27.12;
const eur = 33.23;

// Get currency value
let eurValue = parseFloat(prompt("Enter the amount of currency (Euro): "));
let usdValue = parseFloat(prompt("Enter the amount of currency (Dollar): "));

if (eurValue && usdValue && eurValue > 0 && usdValue > 0) { //check if currency format is correct
//Convert EUR to UAH
  let eurToUah = eur * eurValue;
//Convert USD to EUR
  let usdToUah = usd * usdValue;
//Convert EUR to USD
  let eurToUsd = eur / usd;
// Return result to console
  console.log(eurValue + " euros are equal " + eurToUah.toFixed(2) + " UAH, " + usdValue + 
  	" dollars are equal " + usdToUah.toFixed(2) + " UAH, one euro is equal " + eurToUsd.toFixed(2) + " dollars.");
} else {
  console.log("Incorrect data"); //Throw error
}