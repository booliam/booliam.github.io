function getPrimaryPlayers() {
  var firstPlayer = prompt("Enter first player's name.");
  var secondPlayer = prompt("Enter second player's name.");
  var thirdPlayer = prompt("Enter third player's name.");
  var fourthPlayer = prompt("Enter fourth player's name");
 gameInitiateConfirm();
}

function gameInitiateConfirm() {
  var returntoStartScreen = prompt("To start the game, type 'start'. To return to character entering screen, type 'back'.");
  if (returntoStartScreen == "back") {
  getPrimaryPlayers();
} else if (returntoStartScreen == "start") {
  gameplayInstructions();
} else {
  alert("I'm sorry, please type 'yes' or 'no' to continue the game.");
  gameInitiateConfirm();
  }
}

function gameplayInstructions() {
  alert("The game has now started. The questions will go as such:");
  alert("The questions will all be answered as a single word or last name. Capitalize the first letter of each word. Always.");
  alert("Punctuation is not required, and the answer will look as such: 'Plateau'");
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

function passPlayer() {
  alert("Please pass this device to the next player.");
}
