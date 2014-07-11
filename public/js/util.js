function setCookie(name, value, expiresHours) {
  var cookieString = name + "=" + decodeURI(value);
//判断是否设置过期时间
  if (expiresHours > 0) {
    var date = new Date();
    date.setTime(date.getTime + expiresHours * 3600 * 1000);
    cookieString = cookieString + "; expires=" + date.toGMTString();
  }
  document.cookie = cookieString;
}

function getCookie(name) {
  var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  if (match) return match[1];
}