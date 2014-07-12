$(document).ready(function () {
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
      $('.pic-preview-img').attr('src','./'+data.url);
      var type = file.type.split('/')[1];
      type = type.replace('jpeg', 'jpg');
      $('#imgType').html(type);
    }
  });
});