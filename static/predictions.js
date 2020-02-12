let captureImage = function() {
  let canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d')
        .drawImage(video, 0, 0, canvas.width, canvas.height);
  let img = document.createElement("img");
  img.src = canvas.toDataURL();
  return img
};


$(() => {
  $('.predict').bind('click', function () {

    let picture = captureImage()

    const predictRequest = $.ajax({
      url: "/predict",
      type: "POST",
      data: picture,
      contentType: false,
      processData: false,
    });

    predictRequest.done(function (msg) {
      console.log('success', msg)
    });

    predictRequest.fail(function (e) {
      alert("Please try again");
    });
  });

})