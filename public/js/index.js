$(document).ready(function () {
  bindEvent();
  var user =getCookie('user');
  if(user && JSON.parse(user)){
    $('#login').html(JSON.parse(user).username);
  }else{
    getUser();
  }
});

function bindEvent() {
  $('#publish').bind('click', function () {
    location.href = '/publish';
  });
}