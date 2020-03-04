$(() => {

  $('.predict').bind('click', function () {

    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')
      .drawImage(video, 0, 0, canvas.width, canvas.height);
    let picture = canvas.toDataURL('image/png')

    const isVowel = (string) => {
      if (string.charAt(0) === 'a' || string.charAt(0) === 'e' || string.charAt(0) === 'i' || string.charAt(0) === 'o' || string.charAt(0) === 'u') {
        return "an"
      }
      else return "a"
    };

    $.post("/predict",
      {
        lable: "video capture",
        content: picture
      },
      function (data, status) {
        
        const result = `Is this ${isVowel(data)} ${data}?`

        $('.classification-content').hide()
        $('#result').text(result);

        $('.classification-confirmation').show()
      })
  });
})