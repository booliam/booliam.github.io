function getPlayers() {
var firstPlayer = prompt("Enter first player's name.");
var secondPlayer = prompt("Enter second player's name.");
//Asks if another player wants to be added.
var thirdPlayerConfirm = prompt("Would you like a third player to be added? Type 'yes' if yes, 'no' if no.");
if (thirdPlayerConfirm == "yes") {
  var thirdPlayer = prompt("Enter third player's name.");
} else {
  alert("Continue.");
}
var returntoStartScreen = prompt("To start the game, type 'start'. To return to character entering screen, type 'back'.");
 if (returntoStartScreen == "back") {
   getPlayers();
 } else {
   beginGame();
 }
}

function beginGame() {
 alert("Game will begin");
}
