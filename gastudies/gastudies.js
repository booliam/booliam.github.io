function getPlayers() {
var firstPlayer = prompt("Enter first player's name.");
var secondPlayer = prompt("Enter second player's name.");
//Asks if another player wants to be added.
var thirdPlayerConfirm = prompt("Would you like a third player to be added? YES if Yes. NO if No.");
if (thirdPlayerConfirm == "YES") {
  var thirdPlayer = prompt("Enter third player's name.");
} else {
  alert("Ok.");
}
var returntoStartScreen = prompt("To start the game, type START. To return to character entering screen, type BACK.");
 if (returntoStartScreen == BACK) {
   getPlayers();
 } else {
   beginGame();
 }
}
 
function beginGame() {
 alert("Game started");
}


