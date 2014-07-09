$(document).ready(function () {
  bindEvent();
  $('#file_upload').uploadifive({
    'auto': false,
    'buttonClass'  : 'upload-btn',
    'buttonText': '选择',
    'multi': false,
    'formData': {
      'timestamp': '1404872336',
      'token': 'bca8aeae9d6e2dd0a049987dec252aee'
    },
    'queueID': 'queue',
    'uploadScript': 'api/upload',
    'onUploadComplete': function (file, data) {
      console.log(data);
    }
  });
});

function bindEvent() {
  $('#upload_start').on('click', function () {
    $('#file_upload').uploadifive('upload');
  });
}