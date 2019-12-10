<html>
<body onload="getPrimaryPlayers()">
<script>
//Changelog for Liam. Game version 1.2
//Changelog added. More accurate response verification implemented.
//More precise function labeling and overall fluidity of user interactions.
function getPrimaryPlayers() {
var firstPlayer = prompt("Enter first player's name.");
var secondPlayer = prompt("Enter second player's name.");
getSecondaryPlayers();
}
//Asks if another player wants to be added.
function getSecondaryPlayers() {
var thirdPlayerConfirm = prompt("Would you like a third player to be added? YES if Yes. NO if No.");
if (thirdPlayerConfirm == "YES") {
 var thirdPlayer = prompt("Enter third player's name.");
} else if (thirdPlayerConfirm == "NO") {
 alert("Ok. Proceeding...");
 gameInitiateConfirm();
} else {
alert("I'm sorry, please type YES or NO to continue the game");
  getSecondaryPlayers();
	}
}
function gameInitiateConfirm() {
var returntoStartScreen = prompt("To start the game, type START. To return to character entering screen, type BACK.");
if (returntoStartScreen == "BACK") {
  getPrimaryPlayers();
} else {
  gameplayInstructions();
}
}
function gameplayInstructions() {
alert("The game has now started. The questions will go like this:");
alert("The question will be answered as a single word. Capitalize the first letter of the word. ALWAYS.");
