function searchData() {
  var searchInput = prompt('What Would You Like to Open?')
  searchInput = searchInput.toUpperCase;

  if (searchInput == 'ANSWER KEY') {
    answerKey();
  }
  else if (searchInput == 'OPEN REPOSITORY') {
    openRepository();
  }
  else if (searchInput == 'REPOSITORY') {
    openRepository();
  }
}


function answerKey() {
  alert('Opening Answer Key (Press Enter to Continue)')
  window.open('https://docs.google.com/document/d/1SeLjhDm7iMXEszsadJrbSG9SynIb7qBekEJrYlZeVx4/edit?usp=sharing', '_self')
}

function openRepository() {
  alert('Opening Repository (Press Enter to Continue)')
  window.open('https://github.com/booliam/booliam.github.io/tree/master/gastudies')
}
