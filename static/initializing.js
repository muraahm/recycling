$(() => {
  $('.start').hide()
  $('.about-popup').hide()
  $('.recognition-container').hide()
  setTimeout(function() {
    $('.blinking').hide()
    $('.start').show();
}, 5000);
  $('.start').bind('click', function() {
    $('.initializing-container').hide()
    $('.recognition-container').show()
  });
  $('.home').bind('click', function() {
    window.location.href = '/home';
  }); 
  $('.about').bind('click', function() {
    // $('.about-popup').show()
    $("#popupwindow").dialog({
      title: "My Popup Title",
      width: 600, 
      modal: true, 
      resizable: false
  });   
  });
});