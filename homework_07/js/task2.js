'use strict';  

// Ask user to start game
var game = confirm("Do you want to play a game?");

if (game) {
  var replay = true;

  while (replay) {                     //set infiniity game
    var range = 6;
    var luckyNumber = Math.floor(Math.random() * range);
    var maxNumber = 5;
    var prize = 10;
    var jackpot = 0;

    //Initial game
    for (var a = 3; a > 0; a--) {
      var initialNumber = parseInt(prompt("Enter a number from 0 to " + maxNumber + "\nAttempts left: " + a +
      "\nTotal prize: " + jackpot + "\nPossible prize on current attempt: " + prize + "$"));
      if (initialNumber === luckyNumber) {
        jackpot = prize;
        console.log("Thank you for a game. Your prize is: " + jackpot);
        break
      }
      prize = Math.floor(prize / 2);
    }

    // Continue hard game 
    if (initialNumber === luckyNumber) {
      var continueHard = true;
      while (continueHard) {
        var hardGame = confirm("Do you want to continue a game?");
        if (hardGame === true) {
          //update initial value for hard game
          range = (range * 2) - 1;
          luckyNumber = Math.floor(Math.random() * range);
          maxNumber *= 2;
          prize *= 3;

          for (var b = 3; b > 0; b--) {
            var hardNumber = parseInt(prompt("Enter a number from 0 to " + maxNumber + "\nAttempts left: " + b +
            "\nTotal prize: " + jackpot + "\nPossible prize on current attempt: " + prize + "$"));
            if (hardNumber === luckyNumber) {
              jackpot += prize;
              console.log("Thank you for a game. Your prize is: " + jackpot);
              break
            }
            prize = Math.floor(prize / 2);
          }
          if (hardNumber !== luckyNumber) {
            jackpot = 0;
            continueHard = false;
            console.log("Thank you for a game. Your prize is: " + jackpot);

            var tryAgain = confirm("Do you want to play a game again?");
            if (tryAgain === false) {
              replay = false;
            }
          }
        } else {
          continueHard = false;
          replay = false;
          console.log("Thank you for a game. Your prize is: " + jackpot);
        }
      }

    // Main switch - start new game or exit
    } else {
      console.log("Thank you for a game. Your prize is: " + jackpot);
      var tryAgain = confirm("Do you want to play a game again?");
      if (tryAgain === false) {
        replay = false;
        console.log("Thank you for a game. Your prize is: " + jackpot); 
      }
    }
  }

} else {
  console.log("You did not become a millionaire");
}

