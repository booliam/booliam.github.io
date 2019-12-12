//Preliminaries
function getPrimaryPlayers() {
  var firstPlayer = prompt("Enter first player's name.", "Peter");
  var secondPlayer = prompt("Enter second player's name.", "Griffin");
  var thirdPlayer = prompt("Enter third player's name.", "Evan");
  var fourthPlayer = prompt("Enter fourth player's name", "Liam");
 gameInitiateConfirm();
}

function gameInitiateConfirm() {
  var returntoStartScreen = prompt("To start the game, type start. To return to character entering screen, type back.");
  returntoStartScreen = returntoStartScreen.toUpperCase();
  if (returntoStartScreen == "BACK") {
  getPrimaryPlayers();
} else if (returntoStartScreen == "START") {
  gameplayInstructions();
} else {
  alert("I'm sorry, please type start or back to continue the game.");
  gameInitiateConfirm();
  }
}

function gameplayInstructions() {
  alert("The game has now started. To understand the format of the questions, please read the following:");
  alert("Do not punctuate in sentences, if punctuated, it will be marked as incorrect.");
  alert("When answering a question about a person, you may enter their full name, or, if you forget, their last name.")
  alert("If the answer given is incorrect, you will be asked the question again, until completed.");
  var gameInstructionsConfirm = prompt("If you understand, type yes. If you would like the instructions to be read to you again, type no.");
  gameInstructionsConfirm = gameInstructionsConfirm.toUpperCase();
  if (gameInstructionsConfirm == "YES") {
    alert("Starting Game...");
    firstQ();
} else if (gameInstructionsConfirm == "NO") {
  gameplayInstructions();
} else {
  alert("I'm sorry, please type yes or no to continue.");
  gameplayInstructions();
  }
}

function passPlayer() {
  alert("Please pass this device to the next player.");
}

//Scoreboard
var firstPlayerPoints = 0;
var secondPlayerPoints = 0;
var thirdPlayerPoints = 0;
var fourthPlayerPoints = 0;

function scoreboard() {
  alert(firstPlayer + '' + firstPlayerPoints + " Points");
  alert(secondPlayer + '' + secondPlayerPoints + " Points");
  alert(thirdPlayer + '' + thirdPlayerPoints + " Points");
  alert(fourthPlayer + '' + fourthPlayerPoints + " Points");
}

//Questions
function firstQ() {
  var firstQanswer = prompt("Who is the oldest member of the Bourbon Triumvirate?");
  firstQanswer = firstQanswer.toUpperCase();
  if (firstQanswer == "BROWN") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    secondQ();
  } else if (firstQanswer == "JOSEPH BROWN") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    secondQ();
  } else if (firstQanswer == "JOSEPH E BROWN") {
    alert("Correct!");
    firstPlayerPoints +=1;
    passPlayer();
    secondQ();
  } else if (firstQanswer == "JOSEPH E. BROWN") {
    alert("Correct!");
    firstPlayerPoints +=1;
    passPlayer();
    secondQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    firstQ();
	}
}

function secondQ() {
  var secondQanswer = prompt("Which region has gentle hills, the Chattahoochee River, and the most populous city in Georgia?");
  secondQanswer = secondQanswer.toUpperCase();
  if (secondQanswer == "PIEDMONT") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    thirdQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    secondQ();
	}
}

function thirdQ() {
  var thirdQanswer = prompt("Which region has Amicalola Falls and Tallulah Gorge?");
  thirdQanswer = thirdQanswer.toUpperCase();
  if (thirdQanswer == "BLUE RIDGE") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    fourthQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    thirdQ();
	}

function fourthQ() {
  var fourthQanswer = prompt("Which region is known for Dalton, 'The Carpet Capital of the World?'");
  fourthQanswer = fourthQanswer.toUpperCase();
  if (fourthQanswer == "RIDGE AND VALLEY") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    fifthQ();
  } else if (fourthQanswer == "VALLEY AND RIDGE") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    fifthQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    fourthQ();
	}

function fifthQ() {
  var fifthQanswer = prompt("Which region is also known as the TAG Corner?");
  fifthQanswer = fifthQanswer.toUpperCase();
  if (fifthQanswer == "APPALACHIAN PLATEAU") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    sixthQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    fifthQ();
	}
}

function sixthQ() {
  var sixthQanswer = prompt("Which region is home to the Okefenokee Swamp, the Barrier Islands, and the Savannah River and is known for its fishing & seafood industry?");
  sixthQanswer = sixthQanswer.toUpperCase();
  if (sixthQanswer == "COASTAL PLAINS") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    seventhQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    sixthQ();
	}
}

function seventhQ() {
  var seventhQanswer = prompt("Which line separates the Piedmont and the Coastal Plains?");
  seventhQanswer = seventhQanswer.toUpperCase();
  if (seventhQanswer == "FALL LINE") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    eighthQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    seventhQ();
	}
}

function eighthQ() {
  var eighthQanswer = prompt("Where does the land north of the Fall Line get its water?");
  eighthQanswer = eighthQanswer.toUpperCase();
  if (eighthQanswer == "SURFACE WATER") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    ninthQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    eighthQ();
	}
}

function ninthQ() {
  var ninthQanswer = prompt("Where does the land south of the Fall line get its water from?");
  ninthQanswer = ninthQanswer.toUpperCase();
  if (ninthQanswer == "GROUND WATER") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    tenthQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    ninthQ();
	}
}

function tenthQ() {
  var tenthQanswer = prompt("Fill in the Blank: Florida sued Georgia in 2013 because they claimed that Georgia used too much _____?");
  tenthQanswer = tenthQanswer.toUpperCase();
  if (tenthQanswer == "WATER") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    eleventhQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    tenthQ();
	}
}

function eleventhQ() {
  var eleventhQanswer = prompt("Fill in the Blank: What were the 3 reasons the Spanish explored North America were God, Gold, and ____?");
  eleventhQanswer = eleventhQanswer.toUpperCase();
  if (eleventhQanswer == "GLORY") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    twelfthQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    eleventhQ();
	}
}

function twelfthQ() {
  var twelfthQanswer = prompt("What was England's main reason for colonizing the New World?");
  twelfthQanswer = twelfthQanswer.toUpperCase();
  if (twelfthQanswer == "MERCANTILISM") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    thirteenthQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    twelfthQ();
	}
}

function thirteenthQ() {
  var thirteenthQanswer = prompt("Which document granted territory to trustees with a set of rules and set up GA as a Trustee Colony?");
  thirteenthQanswer = thirteenthQanswer.toUpperCase();
  if (thirteenthQanswer == "CHARTER OF 1732") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    fourteenthQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    thirteenthQ();
	}
}

function fourteenthQ() {
  var fourteenthQanswer = prompt("Fill in the blank: King George II approved Georgia because of Philanthropy, Economics and _____?");
  fourteenthQanswer = fourteenthQanswer.toUpperCase();
  if (fourteenthQanswer == "DEFENSE") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    fifteenthQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    fourteenthQ();
	}
}

function fifteenthQ() {
  var fifteenthQanswer = prompt("What is the economic policy when a country exports more than it imports?");
  fifteenthQanswer = fifteenthQanswer.toUpperCase();
  if (fifteenthQanswer == "MERCANTILISM") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    sixteenthQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    fifteenthQ();
	}
}

function sixteenthQ() {
  var sixteenthQanswer = prompt("Fill in the Blank: GA’s first settlement was named _________?");
  sixteenthQanswer = sixteenthQanswer.toUpperCase();
  if (sixteenthQanswer == "SAVANNAH") {
    alert("Correct!");
    fourthlayerPoints += 1;
    passPlayer();
    seventeenthQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    sixteenthQ();
	}
}

function seventeenthQ() {
  var seventeenthQanswer = prompt("Fill in the Blank: In Savannah, everything was built around _____?");
  seventeenthQanswer = seventeenthQanswer.toUpperCase();
  if (seventeenthQanswer == "SQUARES") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    eighteenthQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    seventeenthQ();
	}
}

function eighteenthQ() {
  var eighteenthQanswer = prompt("Fill in the Blank: In order to come to Georgia, the Colonists had to agree to Defend the colony, not sell their land, only pass land onto male heirs, grow mulberry trees, and obey all rules from the ______?");
  eighteenthQanswer = eighteenthQanswer.toUpperCase();
  if (eighteenthQanswer == "TRUSTEES") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    nineteenthQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    eighteenthQ();
	}
}

function nineteenthQ() {
  var nineteenthQanswer = prompt("Along with slaves and lawyers, which other group was NOT allowed in Georgia?");
  nineteenthQanswer = nineteenthQanswer.toUpperCase();
  if (nineteenthQanswer == "CATHOLICS") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    twentiethQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    nineteenthQ();
	}
}

function twentiethQ() {
  var twentiethQanswer = prompt("Along with Wine, Rice, Indigo, and Silk, what is the other WRIST crop?");
  twentiethQanswer = twentiethQanswer.toUpperCase();
  if (twentiethQanswer == "TOBACCO") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    twentyfirstQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    twentiethQ();
	}
}

function twentyfirstQ() {
  var twentyfirstQanswer = prompt("What were the point of mounds in Mississippian Culture?");
  twentyfirstQanswer = twentyfirstQanswer.toUpperCase();
  if (twentyfirstQanswer == "RELIGION") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    twentysecondQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    twentyfirstQ();
	}
}

function twentysecondQ() {
  var twentysecondQanswer = prompt("Fill in the Blank:The F&I war was fought between France and _____?");
  twentysecondQanswer = twentysecondQanswer.toUpperCase();
  if (twentysecondQanswer == "BRITAIN") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    twentythirdQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    twentysecondQ();
	}
}

function twentythirdQ() {
  var twentythirdQanswer = prompt("Fill in the Blank: The F&I war lead to the Am Rev because Britain _____ _____ the colonies?");
  twentythirdQanswer = twentythirdQanswer.toUpperCase();
  if (twentythirdQanswer == "DIRECTLY TAXED") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    twentyfourthQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    twentythirdQ();
	}
}

function twentyfourthQ() {
  var twentyfourthQanswer = prompt("What act allowed the control over colonial trade?");
  twentyfourthQanswer = twentyfourthQanswer.toUpperCase();
  if (twentyfourthQanswer == "NAVIGATION ACT") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    twentyfifthQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    twentyfourthQ();
	}
}

function twentyfifthQ() {
  var twentyfifthQanswer = prompt("Fill in the Blank: The ____  __ ____ gave land west of the Appalachian Mtns. to Britain's Indian allies?");
  twentyfifthQanswer = twentyfifthQanswer.toUpperCase();
  if (twentyfifthQanswer == "PROCLAMATION OF 1763") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    twentysixthQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    twentyfifthQ();
	}
}

function twentysixthQ() {
  var twentysixthQanswer = prompt("The Boston Tea party was a protest against what British act?");
  twentysixthQanswer = twentysixthQanswer.toUpperCase();
  if (twentysixthQanswer == "TEA ACT") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    twentyseventhQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    twentysixthQ();
	}
}

function twentyseventhQ() {
  var twentyseventhQanswer = prompt("Who was the primary author of the Declaration of Independence?");
  twentyseventhQanswer = twentyseventhQanswer.toUpperCase();
  if (twentyseventhQanswer == "JEFFERSON") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    twentyeighthQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    twentyseventhQ();
	}
}

function twentyeighthQ() {
  var twentyeighthQanswer = prompt("Fill in the Blank: Abraham Baldwin and ______ were GA’s delegates to the Constitutional Convention?");
  twentyeighthQanswer = twentyeighthQanswer.toUpperCase();
  if (twentyeighthQanswer == "FEW") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    twentyninthQ();
  } else if (twentyeighthQanswer == "WILLIAM FEW") {
    fourthPlayerPoints += 1;
    passPlayer();
    twentyninthQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    twentyeighthQ();
	}
}

function twentyninthQ() {
  var twentyninthQanswer = prompt("Fill in the Blank: The purpose of the Siege of ____ was to regain control of the city from the British Control?");
  twentyninthQanswer = twentyninthQanswer.toUpperCase();
  if (twentyninthQanswer == "SAVANNAH") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    thirtiethQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    twentyninthQ();
	}
}

function thirtiethQ() {
  var thirtiethQanswer = prompt("Fill in the Blank: GA was the ______ state to ratify the constitution?");
  thirtiethQanswer = thirtiethQanswer.toUpperCase();
  if (thirtiethQanswer == "4") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    thirtyfirstQ();
  } else if (thirtiethQanswer == "FOUR") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    thirtyfirstQ();
  } else if (thirtiethQanswer == "FOURTH") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    thirtyfirstQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    thirtiethQ();
	}
}

function thirtyfirstQ() {
  var thirtyfirstQanswer = prompt("What was the system of land distribution that gave 200 acres of land to the head of a household, and 50 additional acres for every other member?");
  thirtyfirstQanswer = thirtyfirstQanswer.toUpperCase();
  if (thirtyfirstQanswer == "HEADRIGHT SYSTEM") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    thirtysecondQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    thirtyfirstQ();
	}
}

function thirtysecondQ() {
  var thirtysecondQanswer = prompt("What was the act passed in 1795 that gave four companies 35 million acres of land for $500,000?");
  thirtysecondQanswer = thirtysecondQanswer.toUpperCase();
  if (thirtysecondQanswer == "YAZOO ACT") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    thirtythirdQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    thirtysecondQ();
	}
}

function thirtythirdQ() {
  var thirtythirdQanswer = prompt("What was the system of land distribution implemented after the headright system?");
  thirtythirdQanswer = thirtythirdQanswer.toUpperCase();
  if (thirtythirdQanswer == "LAND LOTTERY") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    thirtyfourthQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    thirtythirdQ();
	}
}

function thirtyfourthQ() {
  var thirtyfourthQanswer = prompt(" What was the name given to the end-point of the Western & Atlantic Railroad?");
  thirtyfourthQanswer = thirtyfourthQanswer.toUpperCase();
  if (thirtyfourthQanswer == "TERMINUS") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    thirtyfifthQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    thirtyfourthQ();
	}
}

function thirtyfifthQ() {
  var thirtyfifthQanswer = prompt("What was the first capital of Georgia?");
  thirtyfifthQanswer = thirtyfifthQanswer.toUpperCase();
  if (thirtyfifthQanswer == "SAVANNAH") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    thirtysixthQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    thirtyfifthQ();
	}
}

function thirtysixthQ() {
  var thirtysixthQanswer = prompt("What was the final capital of Georgia?");
  thirtysixthQanswer = thirtysixthQanswer.toUpperCase();
  if (thirtysixthQanswer == "ATLANTA") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    thirtyseventhQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    thirtysixthQ();
	}
}

function thirtyseventhQ() {
  var thirtyseventhQanswer = prompt("What was America’s first state-supported university?");
  thirtyseventhQanswer = thirtyseventhQanswer.toUpperCase();
  if (thirtyseventhQanswer == "UGA") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    thirtyeighthQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    thirtyseventhQ();
	}
}

function thirtyeighthQ() {
  var thirtyeighthQanswer = prompt("What invention by Eli Whitney made cotton a staple Southern crop?");
  thirtyeighthQanswer = thirtyeighthQanswer.toUpperCase();
  if (thirtyeighthQanswer == "COTTON GIN") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    thirtyninthQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    thirtyeighthQ();
	}
}

function thirtyninthQ() {
  var thirtyninthQanswer = prompt("Who was the Creek chief that was murdered by his people for signing the Treaty of Indian Springs?");
  thirtyninthQanswer = thirtyninthQanswer.toUpperCase();
  if (thirtyninthQanswer == "MCINTOSH") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    fortiethQ();
  } else if (thirtyninthQanswer == "WILLIAM MCINTOSH") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    fortiethQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    thirtyninthQ();
	}
}

function fortiethQ() {
  var fortiethQanswer = prompt("Who was the President of the United States who ushered along the removal of Indians?");
  fortiethQanswer = fortiethQanswer.toUpperCase();
  if (fourtiethQanswer == "JACKSON") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    fourtyfirstQ();
  } else if (fortiethQanswer =="ANDREW JACKSON") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    fourtyfirstQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    fourtiethQ();
	}
}


function fourtyfirstQ() {
  var fourtyfirstQanswer = prompt("Define the following: When states decide not to follow a Federal Law");
  fourtyfirstQanswer = fourtyfirstQanswer.toUpperCase();
  if (fourtyfirstQanswer == "NULLIFICATION") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    fourtysecondQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    fourtyfirstQ();
	}
}

function fourtysecondQ() {
  var fourtysecondQanswer = prompt("Fill in the blank: The North liked ____ as it encouraged people to buy goods made locally as the North had many industries");
  fourtysecondQanswer = fourtysecondQanswer.toUpperCase();
  if (fourtysecondQanswer == "TARIFFS") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    fourtythirdQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    fourtysecondQ();
	}
}

function fourtythirdQ() {
  var fourtythirdQanswer = prompt("This compromise made Missouri a slave state and made Maine a free state. Missouri’s southern border would be the boundary between free and slave states");
  fourtythirdQanswer = fourtythirdQanswer.toUpperCase();
  if (fourtythirdQanswer == "MISSOURI COMPROMISE") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    fourtyfourthQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    fourtythirdQ();
	}

function fourtyfourthQ() {
  var fourtyfourthQanswer = prompt("Fill in the blank: In the Compromise Of ____ implemented Popular Sovereignty in New Mexico and Utah")
  if (fourtyfourthQanswer == "1850") {
    alert('Correct!');
    fourthPlayerPoints += 1;
    passPlayer();
    fourtyfifthQ();
  } else {
    alert('Incorrect.')
  }
}

function fourtyfifthQ() {
  var fourtyfifthQanswer = prompt("Name the person who was a slave that moved to a free state and his daughter was born there. He argued that since he lived in a free state and since his daughter was also born in a free state, that they were no longer slaves and were free to go");
  fourtyfifthQanswer = fourtyfifthQanswer.toUpperCase();
  if (fourtyfifthQanswer == "SCOTT") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    fourtysixthQ();
  } else if (fourtyfifthQanswer == "DRED SCOTT") {
    alert("Correct!");
    firstPlayerPoints += 1;
    passPlayer();
    fourtysixthQ();
  } else {
    alert("Incorrect.");
    firstPlayerPoints -= 1;
    fourtyfifthQ();
	}
}

function fourtysixthQ() {
  var fourtysixthQanswer = prompt("Fill in the blank: The _____ Plan was the nickname given to the Union Blockade that implemented so that the South couldn’t trade with Europe?");
  fourtysixthQanswer = fourtysixthQanswer.toUpperCase();
  if (fourtysixthQanswer == "ANACONDA") {
    alert("Correct!");
    secondPlayerPoints += 1;
    passPlayer();
    fourtyseventhQ();
  } else {
    alert("Incorrect.");
    secondPlayerPoints -= 1;
    fourtysixthQ();
	}
}

function fourtyseventhQ() {
  var fourtyseventhQanswer = prompt("Fill in the blank. The ______ Proclamation declared that all slaves in slave states were freed");
  fourtyseventhQanswer = fourtyseventhQanswer.toUpperCase();
  if (fourtyseventhQanswer == "EMANCIPATION") {
    alert("Correct!");
    thirdPlayerPoints += 1;
    passPlayer();
    fourtyeighthQ();
  } else {
    alert("Incorrect.");
    thirdPlayerPoints -= 1;
    fourtyseventhQ();
	}
}

function fourtyeighthQ() {
  var fourtyeighthQanswer = prompt(" What battle was the bloodiest battle of the war and was considered the turning point of the war?");
  fourtyeighthQanswer = fourtyeighthQanswer.toUpperCase();
  if (fourtyeighthQanswer == "GETTYSBURG") {
    alert("Correct!");
    fourthPlayerPoints += 1;
    passPlayer();
    fourtyninthQ();
  } else {
    alert("Incorrect.");
    fourthPlayerPoints -= 1;
    fourtyeighthQ();
	}
}
}
}
}
