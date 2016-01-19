$(document).ready(function(){

//SLIDER

var labels = ["50м", "100м", "200м", "500м", "1км", "1.5км"]

  $("#slider").slider({
      min: 0,
      max: 5,
      step: 1,
      range: true,
      values: [2, 4],
      slide: function(event, ui) {
        $("#v1").text(labels[ui.values[0]]);
        $("#v2").text(labels[ui.values[1]]);
      }

    })
  // Space out values
  for (var i = 0; i < labels.length; i++) {

    var el = $('<label>' + (labels[i]) + '</label>').css('left', (i / labels.length * 115) + '%');

    $("#slider").append(el);

  }
  $("#v1").text(labels[2]);
  $("#v2").text(labels[4]);

  //POPUP

$('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });
  $('.image-popup-fit-width').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });
  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });
});