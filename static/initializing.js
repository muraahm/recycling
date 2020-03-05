$(() => {
  $('.start').hide()
  $('.recognition-container').hide()
  setTimeout(function () {
    $('.blinking').hide()
    $('.start').show();
  }, 5000);
  $('.start').bind('click', () => {
    $('.initializing-container').hide()
    $('.classification-confirmation').hide()
    $('.recycling-classification').hide()
    $('.recognition-container').show()
  });
  $('.home').bind('click', () => {
    window.location.href = '/home';
  });
  $('.about').bind('click', () => {
    $('.about-modal').css("display", "block");
    $('.close').bind('click', () => {
      $('.about-modal').css("display", "none");
    });
  });
});