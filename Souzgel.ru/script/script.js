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


  //POPUP SERTIFICATES
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

  //OWL GALLERY_COMMENTS

   $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      dragBeforeAnimFinish : true,
      mouseDrag : true,
      touchDrag : true,
 
  });

  //OWL GALLERY_POPUP
  $("#owl-demo_popup").owlCarousel({
   
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,
   
    });

//SCROLL NAVIGATION

$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
   $("a.active_a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body,section').animate( { scrollTop: destination }, 1100 );
      return false;
    });

   //TOP BUTTON
   var top_show = 150; // the position of the scroll bar to display a button
  var delay = 1000; // scroll delay
  $(document).ready(function() {
    $(window).scroll(function () { // If you fall into this scrolling function
      /* Depending on the position of the scroll bar, and the value top_show, close or open the "Top"*/
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { //Clicking on the "Back" get into this function
      /* Smooth scrolling up */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

//POPUP FORM

$('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
});
