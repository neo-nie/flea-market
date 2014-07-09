$(document).ready(function () {
  $('#file_upload').uploadifive({
    'auto': false,
    'checkScript': 'check-exists.php',
    'formData': {
      'timestamp': '1404872336',
      'token': 'bca8aeae9d6e2dd0a049987dec252aee'
    },
    'queueID': 'queue',
    'uploadScript': 'uploadifive.php',
    'onUploadComplete': function (file, data) {
      console.log(data);
    }
  });
});