$(() => {

  $('.start').bind('click', () => {
    let video = document.querySelectorAll('video');
    navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia || navigator.mediaDevices.getUserMedia;

    let errorCallback = (e) => {
      // User rejected camera request. Handle appropriately.
    };

    if (navigator.getUserMedia) {
      navigator.getUserMedia({
        audio: false,
        video: true
      }, (stream) => {
        let vid = document.getElementById('video');
        this.video.srcObject = stream;
        vid.src = video

      }, errorCallback);
    } else {
      video = 'errorVideo.webm'; // fallback.
    }
  });
});