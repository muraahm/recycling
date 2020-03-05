import { blueBinItems } from './blueBinItems.js';
import { blackBinItems } from './blackBinItems.js';
import { greenBinItems } from './greenBinItems.js';

$(() => {

  $('.no').bind('click', () => {
    $('.classification-confirmation').hide()
    $('#extra-details').text("Sorry! I'm unable to recognize the object in the picture, please try again.");
    $('.recycling-classification').show()
  })

  $('.yes').bind('click', () => {
    const item = $('.data').text();
    const blueItemFound = blueBinItems.find((element) => {
      return element === item;
    });
    const blackItemFound = blackBinItems.find((element) => {
      return element === item;
    });
    const greenItemFound = greenBinItems.find((element) => {
      return element === item;
    });

    if (blueItemFound) {
      $('#extra-details').text(`It is recyclable! Throw it in the blue bin! 🎉`)
    };
    if (blackItemFound) {
      $('#extra-details').text(`It is not recyclable 😢Throw it in the black bin.`)
    };
    if (greenItemFound) {
      $('#extra-details').text(`It is a composite 😃Throw it in the green bin.`)
    };
    if (!blackItemFound && !blueItemFound && !greenItemFound) {
      $('#extra-details').text(`Mmmm, I don't seem to know yet how to classify that.`)
    };

    $('.classification-confirmation').hide()
    $('.recycling-classification').show()
  })

  $('#next').bind('click', () => {
    $('#result').empty()
    $('.recycling-classification').hide()
    $('.classification-content').show()
  })
});