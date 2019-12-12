function auth(form) {
  var user = form.username.value;
  var pass = form.pwd.value;

  var admin = 'booliam';
  var adminpwd = 'Lanpher9399';

  var admin2 = 'evan';
  var admin2pwd = '072305';

  if (user == admin && pass == adminpwd) {
    window.open('admin.html', '_self');
  } else if (user == admin2 && pass == admin2pwd) {
    window.open('admin.html', '_self');
  } else {
    window.open('gastudies.html', '_self');
  }
}
