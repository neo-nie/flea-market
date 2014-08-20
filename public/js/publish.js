$(document).ready(function () {
  bindEvent();
  $('#file_upload').uploadifive({
    'auto': true,
    'buttonClass': 'upload-btn',
    'buttonText': '选择文件',
    'method': 'post',
    'multi': false,
    'formData': {
      'timestamp': '1404872336',
      'token': 'bca8aeae9d6e2dd0a049987dec252aee'
    },
    'uploadScript': 'api/upload',
    'onUploadComplete': function (file, data) {
      data = JSON.parse(data);
      $('.pic-preview-img').attr('src', './' + data.data.url);
      var type = file.type.split('/')[1];
      type = type.replace('jpeg', 'jpg');
      $('#imgType').html(type);
    }
  });
});

/**
 * 绑定事件
 */
function bindEvent() {
  $('#release').unbind('click').bind('click', doPublish);
  $('.dropdown-toggle').dropdown()
}

/**
 * 发布
 */
function doPublish() {
  $.ajax(
    { url: "api/publish",
      context: document.body,
      success:onSuccess
    });
}

function onSuccess(){
  alert('发布成功!');
}