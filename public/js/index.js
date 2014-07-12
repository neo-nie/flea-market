$(document).ready(function () {
  bindEvent();
  setUserInfo();
});

function bindEvent() {
  $('#publish').bind('click', function () {
    location.href = '/publish';
  });
}