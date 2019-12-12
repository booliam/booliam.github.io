function auth(form) {
  var user = form.username.value;
  var pass = form.pwd.value;

  var admin = 'booliam';
  var adminpwd = 'Lanpher9399';

  var admin2 = 'evan';
  var admin2pwd = '072305';

  if (user == admin && pass == adminpwd) {
    window.open('admin.html');
  } else if (user == admin2 && pass == admin2pwd) {
    window.open('admin.html');
  } else {
    window.open('gastudies.html');
  }
}
