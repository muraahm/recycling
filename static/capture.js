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
        const result = data.match(/^(\S+)\s(.*)/).slice(1);
        $('.classification-content').hide()
        $('#result').append(
          `Is this ${isVowel(result[0])} <strong class="data">${result[0]}</strong> ?<br/>${(result[1] * 100).toFixed(2)}%`
        )
        $('.classification-confirmation').show()
      })
  });
})