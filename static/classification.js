classifyItem = (item) => {
  const yellowItemFound = find(yellowBinItems, yellowBinItem => item === yellowBinItem);
  const redItemFound = find(redBinItems, redBinItem => item === redBinItem);

  if(yellowItemFound){
    this.displayButtons('yellow')
  } else if(redItemFound) {
    this.displayButtons('red')
  } else {
    this.displayButtons('none')
  }
}

$(() => {

  $('.no').bind('click', () => {
    $('.classification-confirmation').hide()
    $('#extra-details').text("Sorry! I'm not able to recognize the object in the picture, please try again.");
    $('.recycling-classification').show()
  })

  $('.yes').bind('click', () => {
    const item = $('.data').text();
    $('.classification-confirmation').hide()

  })

  $('#next').bind('click', () => {
    $('.recycling-classification').hide()
    $('.classification-content').show()
  })




})