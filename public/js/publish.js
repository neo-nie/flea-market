$(document).ready(function () {
  $('#file_upload').uploadifive({
    'auto': true,
    'buttonClass'  : 'upload-btn',
    'buttonText': '选择文件',
    'multi': false,
    'formData': {
      'timestamp': '1404872336',
      'token': 'bca8aeae9d6e2dd0a049987dec252aee'
    },
    'uploadScript': 'api/upload',
    'onUploadComplete': function (file, data) {
      var type = file.type.split('/')[1];
      type = type.replace('jpeg','jpg');
      $('#imgType').html(type);
    }
  });
});