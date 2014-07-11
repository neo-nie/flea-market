function setUserInfo(){
  var user =getCookie('user');
  if(user && JSON.parse(user)){
    $('#login').html(JSON.parse(user).username);
    $('.logout').show();
  }else{
    getUser();
  }
}