function valueGet() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  if (username == '' || password == '') {
    alert('账号名和密码不能为空')
    return
  }
  document.getElementById('myFrom').submit()
  window.location.href = "index.html";
}