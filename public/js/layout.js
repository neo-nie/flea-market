$(document).ready(function () {
  bindEvent();
});

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

function bindEvent(){
  $('#publish').bind('click', function () {
    location.href = '/publish';j
  });
  $('.logout').bind('click',function(){

  });
}

function setUserInfo(){
  var user =getCookie('user');
  if(user && JSON.parse(user)){
    $('#login').html(JSON.parse(user).username);
    $('.logout').show();
  }else{
    getUser();
  }
}