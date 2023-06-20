function validateEmail(email) {
  var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  return emailRegex.test(email)
}
function valueGet() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  var confirmPassword = document.getElementById('confirmPassword').value
  var age = document.getElementById('age').value
  var email = document.getElementById('email').value
  // 验证用户名
  if (username === '') {
    alert('请输入用户名')
    return false
  }

  // 验证密码
  if (password === '') {
    alert('请输入密码')
    return false
  }

  // 验证重复密码
  if (confirmPassword === '') {
    alert('请确认密码')
    return false
  }

  if (password !== confirmPassword) {
    alert('密码不匹配')
    return false
  }

  // 验证年龄
  if (age === '' || isNaN(age)) {
    alert('请输入有效年龄')
    return false
  }

  // 验证邮箱
  if (email === '') {
    alert('请输入邮箱')
    return false
  }

  // 验证邮箱格式
  if (!validateEmail(email)) {
    alert('请输入有效的邮箱地址')
    return false
  }
  // 验证通过
  alert('注册成功')
  return true
}