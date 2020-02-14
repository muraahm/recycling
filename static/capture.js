$(() => {

  $('.predict').bind('click', function () {

    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')
      .drawImage(video, 0, 0, canvas.width, canvas.height);
    let picture = canvas.toDataURL('image/png')

    $.post("/predict",
      {
        lable: "video capture",
        content: picture
      },
      function (data, status) {
        result.value = status + ":" + data;
        console.log(data)
      })
  });
})