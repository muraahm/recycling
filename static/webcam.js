$(() => {

  $('.start').bind('click', function () {
    let video = document.querySelectorAll('video');
    navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    var errorCallback = function (e) {
      // User rejected camera request. Handle appropriately.
    };
    
    if (navigator.getUserMedia) {
      navigator.getUserMedia({
        audio: false,
        video: true
      }, function (stream) {
        let vid = document.getElementById('video');
        this.video.srcObject = stream;
        vid.src = video

      }, errorCallback);
    } else {
      video = 'errorVideo.webm'; // fallback.

    }
  });

})