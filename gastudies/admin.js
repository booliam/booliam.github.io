function searchData() {
  var searchInput = prompt('What Would You Like to Open?')
  searchInput = searchInput.toUpperCase();

  if (searchInput == 'ANSWER KEY') {
    answerKey();
  }
  else if (searchInput == 'OPEN REPOSITORY') {
    openRepository();
  }
  else if (searchInput == 'REPOSITORY') {
    openRepository();
  } else if (searchInput == 'LOL') {
    openSnake();
  }
}


function answerKey() {
  alert('Opening Answer Key (Press Enter to Continue)');
  window.open('https://docs.google.com/document/d/1SeLjhDm7iMXEszsadJrbSG9SynIb7qBekEJrYlZeVx4/edit?usp=sharing');
}

function openRepository() {
  alert('Opening Repository (Press Enter to Continue)');
  window.open('https://github.com/booliam/booliam.github.io/tree/master/gastudies');
}

function openSnake() {
  alert('Opening Snake (Press Enter to Continue)');
  window.open('https://www.google.com/search?q=snake&rlz=1C5CHFA_enUS870US870&oq=snake&aqs=chrome..69i57j0l5.655j0j4&sourceid=chrome&ie=UTF-8');
}
