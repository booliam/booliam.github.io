function coinSide() {
  var randomSide = Math.floor(Math.random() * 2);
    if (randomSide == 1) {
        document.getElementById("coinImg").src = "https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png";
        document.getElementById("subCoin").innerHTML = "You Got Heads!";
    } else {
        document.getElementById("coinImg").src = "https://www.coinhunts.com/wp-content/uploads/2011/01/2005_CA_Proof.png";
        document.getElementById("subCoin").innerHTML = "You Got Tails!";
    }
}

function flipCoin() {
    document.getElementById("coinImg").src = "images/headstails.gif";
    document.getElementById("subCoin").innerHTML = "Flipping..."
    setTimeout(coinSide, 1000);
}
