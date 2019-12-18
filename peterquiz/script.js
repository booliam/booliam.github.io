function moveOn() {
  document.getElementById("subText").innerHTML = "Correct! Moving on to the next question...";
}

function invertColor() {
  document.getElementById("body").style.backgroundColor = "#000";
  document.getElementById("mainHeader").style.color = "#FFF";
  document.getElementById("questionBox").style.color = "#FFF";
}

function revertColor() {
  document.getElementById("body").style.backgroundColor = "#FFF"
  document.getElementById("mainHeader").style.color = "#000";
  document.getElementById("questionBox").style.color = "#000";
}

var mistakeCounter = 0

function mistakeAnnouncer() {
  if (mistakeCounter == 1) {
    invertColor();
    alert("This is your first mistake, but I will allow it, try again...");
    setTimeout(function () {
      revertColor();
    }, 5000)
  } else if (mistakeCounter == 2) {
    alert("This is the second mistake you've made, you're pushing it now, do it over...");
  } else if (mistakeCounter == 3) {
    alert("...");
  }
}


setTimeout(function() {
  document.getElementById("questionBox").innerHTML = 'Question 1: Who is the Main Character of the Popular Televison Show "Family Guy"';
  document.getElementById("peterImg").src = "peter stand.png";
  document.getElementById("subText").innerHTML = "";
}, 4000);

function firstQAnswer() {
  var Q1Answer = document.getElementById("questionInp").value;
  Q1Answer = Q1Answer.toUpperCase();
  if (Q1Answer == "PETER GRIFFIN") {
    moveOn();
    document.getElementById("btnInner").innerHTML = "<button class='btn btn-success' onclick='secondQAnswer();' id='questionBtn'>Enter</button>";
    setTimeout(function () {
      secondQ();
    }, 2000);
  } else if (Q1Answer == "PETER") {
    moveOn();
    document.getElementById("btnInner").innerHTML = "<button class='btn btn-success' onclick='secondQAnswer();' id='questionBtn'>Enter</button>";
    setTimeout(function () {
      secondQ();
    }, 2000);
  } else {
    mistakeCounter += 1;
    mistakeAnnouncer();
    firstQ();
  }
}

function secondQ() {
  document.getElementById("questionBox").innerHTML = 'Question 2: Who says this awesome catchphrase, "giggity giggity goo"';
  document.getElementById("peterImg").src = "quagmire toilet.png";
  document.getElementById("subText").innerHTML = "";
}

function secondQAnswer() {
  var Q2Answer = document.getElementById("questionInp").value;
  Q2Answer = Q2Answer.toUpperCase();
  if (Q2Answer == "QUAGMIRE") {
    moveOn();
    document.getElementById("btnInner").innerHTML = "<button class='btn btn-success' onclick='thirdQAnswer();' id='questionBtn'>Enter</button>";
    setTimeout(function () {
      thirdQ();
    }, 2000);
  } else if (Q2Answer == "GLENN QUAGMIRE") {
    moveOn();
    document.getElementById("btnInner").innerHTML = "<button class='btn btn-success' onclick='thirdQAnswer();' id='questionBtn'>Enter</button>";
    setTimeout(function () {
      thirdQ();
    }, 2000);
  } else if (Q2Answer == "GLENN") {
    moveOn();
    document.getElementById("btnInner").innerHTML = "<button class='btn btn-success' onclick='thirdQAnswer();' id='questionBtn'>Enter</button>";
    setTimeout(function () {
      thirdQ();
    }, 2000);
  } else {
    mistakeCounter += 1;
    mistakeAnnouncer();
    secondQ();
  }
}

function thirdQ() {
  document.getElementById("questionBox").innerHTML = 'Question 3: What was my acapella band called? "The Four Peters," or "Quahog Crushers"';
  document.getElementById("peterImg").src = "peter lois.png";
  document.getElementById("subText").innerHTML = "";
}

function thirdQAnswer() {
  var Q3Answer = document.getElementById("questionInp").value;
  Q3Answer = Q3Answer.toUpperCase();
  if (Q3Answer == "THE FOUR PETERS") {
    moveOn();
    document.getElementById("btnInner").innerHTML = "<button class='btn btn-success' onclick='fourthQAnswer();' id='questionBtn'>Enter</button>";
    setTimeout(function () {
      fourthQ();
    }, 2000);
  } else if (Q3Answer == "FOUR PETERS") {
    moveOn();
    document.getElementById("btnInner").innerHTML = "<button class='btn btn-success' onclick='fourthQAnswer();' id='questionBtn'>Enter</button>";
    setTimeout(function () {
      fourthQ();
    }, 2000);
  } else {
    mistakeCounter += 1;
    mistakeAnnouncer();
    thirdQ();
  }
}
