function auth(form) {
  var user = form.username.value;
  var pass = form.pwd.value;

  var admin = 'booliam';
  var adminpwd = 'Lanpher9399';

  var admin2 = 'evan';
  var admin2pwd = '072305';

  var admin3 = 'petergriffin';
  var admin3pwd = 'shalmik23';

  var admin4 = 'yeehawdaddy.edu';
  var admin4pwd = 'guitarpreston52';

  if (user == admin && pass == adminpwd) {
    window.open('admin.html', '_self');
  } else if (user == admin2 && pass == admin2pwd) {
    window.open('admin.html', '_self');
  } else if (user == admin3 && pass == admin3pwd) {
    window.open('admin.html', '_self');
  } else if (user == admin4 && pass == admin4pwd) {
    window.open('admin.html', '_self');
  } else {
    alert('Incorrect Username or Password.')
  }
}
