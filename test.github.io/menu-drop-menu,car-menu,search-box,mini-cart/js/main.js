(function ($) {
	"use Strict";


	/* portfolio item active */
	$('.mega-carousel').owlCarousel({
		loop: true,
		nav: true,
		margin: 15,
		dots: true,
		center:true,
		stagePadding:0,
		slideBy:3,
		URLhashListener:false,
		navText: [" Prev <i class='zmdi zmdi-chevron-right'></i>"," Nex <i class='zmdi zmdi-chevron-right'></i>"],
		autoplay: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2
			},
			1000: {
				items: 5
			}
		}
	})



})(jQuery);