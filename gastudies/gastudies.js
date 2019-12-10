//Changelog for Liam. Game version 1.4
//Added working points system.
//Added first base question.
//Start getPrimaryPlayers first.
function getPrimaryPlayers() {
var firstPlayer = prompt("Enter first player's name.");
var secondPlayer = prompt("Enter second player's name.");
getSecondaryPlayers();
}
//Asks if another player wants to be added.
function getSecondaryPlayers() {
var thirdPlayerConfirm = prompt("Would you like a third player to be added? 'yes' if yes; 'no' if no.");
if (thirdPlayerConfirm == "yes") {
 var thirdPlayer = prompt("Enter third player's name.");
 getfourthPlayer();
} else if (thirdPlayerConfirm == "no") {
 alert("Okay! Proceeding...");
 gameInitiateConfirm();
} else {
alert("I'm sorry, please type 'yes' or 'no' to continue the game.");
  getSecondaryPlayers();
	}
}
//Asks if tertiary players are wanted to add.
function getfourthPlayer() {
var fourthPlayerConfirm = prompt("Would you like to add a fourth player? 'yes' if yes, 'no' if no.");
if (fourthPlayerConfirm == "yes") {
var fourthPlayer = prompt("What is the fourth player's name?");
gameInitiateConfirm();
} else if (fourthPlayerConfirm == "no") {
alert("Okay! Proceeding...");
} else {
alert("I'm sorry, please type 'yes' or 'no' to continue the game.");
}
}

function gameInitiateConfirm() {
var returntoStartScreen = prompt("To start the game, type 'start'. To return to character entering screen, type 'back'.");
if (returntoStartScreen == "back") {
  getPrimaryPlayers();
} else {
  gameplayInstructions();
}
}
function gameplayInstructions() {
alert("The game has now started. The questions will go as such:");
alert("The questions will all be answered as a single word or last name. Capitalize the first letter of the word. Always.");
alert("If the answer given is incorrect, you will be asked the question again, until completed.");
var gameInstructionsConfirm = prompt("If you understand, type 'yes'. If you would like the instructions to be read to you again, type 'no'.");
if (gameInstructionsConfirm == "yes") {
alert("Starting Game...");
firstQ();
} else if (gameInstructionsConfirm == "no") {
gameplayInstructions();
} else {
alert("I'm sorry, please type 'yes' or 'no' to continue.");
gameplayInstructions();
}
}
//From here down are the game's questions. Will be implemented at school.
var firstPlayerPoints = 0;
var secondPlayerPoints = 0;
var thirdPlayerPoints = 0;
var fourthPlayerPoints = 0;
function firstQ() {
var firstQanswer = prompt("Who is the oldest member of the Bourbon Triumvirate?");
if (firstQanswer == "Brown") {
alert("Correct!");
firstPlayerPoints += 1;
secondQ();
} else {
alert("Incorrect.");
firstPlayerPoints -= 1;
firstQ();
	}
}
//Points system working.
//Point total below.
function pointTotal() {
//keep these guys
alert("Player One Got: " + firstPlayerPoints + " Points.");
alert("Player Two Got: " + secondPlayerPoints + " Points.");
//keep these boys above
if (typeof thirdPlayer == "string") {
alert("Player Three Got: " + thirdPlayerPoints + " Points.");
}
if (typeof fourthPlayer == "string") {
alert("Player Four Got: " + fourthPlayerPoints + " Points.");
}
}
