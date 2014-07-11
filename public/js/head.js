/**
 * 获取用户信息
 */
function getUser() {
  $.get("/getUser", function (data) {
    if (data.state === 'success') {
      setCookie('user',JSON.stringify(data.user));
      $('#login').html(data.user.username);
      $('.logout').show();
    }else{
      $('.logout').hide();
      $('#login').html('登录');
    }
  });
}