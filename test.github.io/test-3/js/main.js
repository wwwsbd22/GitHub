(function ($) {
	"use Strict";
$(".chosen-select").chosen({max_selected_options: 5});


  $('[data-toggle="tooltip"]').tooltip(); 


	/* Product item active */
	$('.product-carousel-active').owlCarousel({
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
				items: 3
			}
		}
	})


	/*---------------------
	 Category menu
	--------------------- */
	$('#cate-toggle li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});
	$('#cate-toggle>ul>li.has-sub>a').append('<span class="holder"></span>'); 

	$('.menu-title').on('click',function(){
		$('#cate-toggle').toggle(1000);

	})

// Nivo Slider
$('#slider').nivoSlider({
	effect: 'random',
	animSpeed:500,
	slices: 5,
	boxCols: 15,
	boxRows: 4,
	directionNav:true,
	manualAdvance: true,
	controlNavThumbs:true,
	pauseOnHover:true,
	prevText:'<i class="zmdi zmdi-chevron-left"></i>',
	nextText:'<i class="zmdi zmdi-chevron-right"></i>',

});


new WOW().init();




			jQuery('.camarea-active').camera({
				height: '400px',
				loader: 'bar',
				pagination: true,
				thumbnails: true,
				barPosition:"left",
				slideOn: 'random',
				alignment: 'center'
			});



jQuery("#video-active").YTPlayer();

$('.banner-paralax').parallax("50%", 0.5);



$(function(){var b="fadeInLeft";var c;var a;d($("#myTab1 a"),$("#tab-content1"));function d(e,f,g){e.click(function(i){i.preventDefault();$(this).tab("show");var h=$(this).data("easein");if(c){c.removeClass(a);}if(h){f.find("div.active").addClass("animated "+h);a=h;}else{if(g){f.find("div.active").addClass("animated "+g);a=g;}else{f.find("div.active").addClass("animated "+b);a=b;}}c=f.find("div.active");});}$("a[rel=popover]").popover().click(function(f){f.preventDefault();if($(this).data("easein")!=undefined){$(this).next().removeClass($(this).data("easein")).addClass("animated "+$(this).data("easein"));}else{$(this).next().addClass("animated "+b);}});});





	/* Product Details Thumb active */
	$('.thumb-menu').owlCarousel({
		nav: true,
		margin: 15,
		navText: ["<i class='zmdi zmdi-chevron-right'></i>","<i class='zmdi zmdi-chevron-right'></i>"],
		autoplay: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			}
		}
	})
/* Product Details Thumb active */
	$('.thumb-menu5').owlCarousel({
		nav: true,
		margin: 15,
		navText: ["<i class='zmdi zmdi-chevron-right'></i>","<i class='zmdi zmdi-chevron-right'></i>"],
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 1,
			}
		}
	})

	/* Product Details Thumb active */
	$('.thumb-menu2').owlCarousel({
		nav: true,
		margin: 15,
		navText: ["<i class='zmdi zmdi-chevron-right'></i>","<i class='zmdi zmdi-chevron-right'></i>"],
		autoplay: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})	
	/* Product Details Thumb active */
	$('#sale_product_slider').owlCarousel({
		nav: true,
		margin: 15,
		navText: ["<i class='zmdi zmdi-chevron-right'></i>","<i class='zmdi zmdi-chevron-right'></i>"],
		autoplay: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})
/* 	function specialslider(x)
	{

   		var specialslider = jQuery("#sale_product_slider").data('owlCarousel');
		specialslider.goTo(x)
	}
		require([
		  "jquery",
		  "owlcarousel/minjs"
		 ], 
	function($,owlCarousel){
			
		   $("#sale_product_slider").owlCarousel({ 
				autoPlay : false,
				slideSpeed : 1000,
				navigation : false,
				stopOnHover : true,
				pagination : false,
				items : 1,
				itemsDesktop : [1199,1],
				itemsDesktopSmall : [992,1],
				itemsTablet: [767,1],
				itemsMobile : [479,1],
				afterMove: function(){
							x = $("#sale_product_slider  .owl-pagination .owl-page" ).index( $( "#sale_product_slider .owl-pagination .active" ));
							var salethumb = ".sale"+x;
							$(".sale-left li").removeClass('active');
							$(salethumb).addClass('active');
					}
		   });
		   
		}); */


/*----- cart-plus-minus-button -----*/
	 $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	  $(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
		  }
		  }
		$button.parent().find("input").val(newVal);
	  });

})(jQuery);