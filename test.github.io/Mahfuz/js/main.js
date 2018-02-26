/*

  Template Name: Coreplex
    Template URI: http://hastech.company/
    Description: This is html5 template
    Author: HasTech
    Author URI: http://hastech.company/
    Version: 1.0

*/
/*================================================
[  Table of contents  ]
================================================
  01. jQuery MeanMenu

================================================*/

(function ($) {
	"use Strict";

new WOW().init();

// Nivo Slider
$('#slider').nivoSlider({
	effect: 'random',
	animSpeed:500,
	directionNav:true,
	manualAdvance: false,
	controlNavThumbs:false,
	pauseOnHover:true,
	controlNav:false,
	prevText:'<i class="zmdi zmdi-chevron-left"></i>',
	nextText:'<i class="zmdi zmdi-chevron-right"></i>',

});

/*----------------------------
			countdown
------------------------------ */  
		$("#offercount")
		  .countdown("2018/01/01", function(event) {
			$(this).html(
			  event.strftime('<div class="count">%D <span>Days</span></div> <div class="count">%H <span>HRS</span></div> <div class="count">%M <span>Min</span></div><div class="count"> %S <span>Sec</span></div>')
			);
		  });
		  
  //blog part slider  js
  $('.blog-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      speed:1000,
      autoplaySpeed:5000,
      arrows: true,
      prevArrow: '<span class="prev">Wow</span>',
      nextArrow: '<span  class="next">Wow</span>',
      infinite: true,
      responsive: [
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
    },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
    },
          {
              breakpoint: 479,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
    }
    ]
  });
    //Brand part slider  js
  $('.brand-active').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      speed:1000,
      autoplaySpeed:5000,
      arrows: true,
      prevArrow: '<span class="prev">Tech</span>',
      nextArrow: '<span  class="next">Tech</span>',
      infinite: true,
      responsive: [
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
    },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
    },
          {
              breakpoint: 479,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
    }
    ]
  });
  $('.find-us-area').parallax("50%", 0.1);

})(jQuery);