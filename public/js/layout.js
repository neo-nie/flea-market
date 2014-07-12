$(document).ready(function () {
  bindEvent();
});

function bindEvent(){
  $('#publish').bind('click', function () {
    location.href = '/publish';j
  });
  $('.logout').bind('click',function(){

  });
}
