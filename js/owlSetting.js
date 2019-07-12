$(document).ready(function(){
	
	$(".order-slider").owlCarousel({
		loop: true,
		nav: true,
		navText: ['Prev', 'Next'],
		dots: false,
		mouseDrag: false,
		touchDrag: false,
		margin: 0,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			1024: {
				items: 4
			},
			1400: {
				items: 5
			},
			1500: {
				loop: false,
				items: 5
			}
		}
	});
	
	
	
  $(".partners-slider").owlCarousel({
		loop: true,
		nav: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: false,
		margin: 30,
		autoplayHoverPause: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 4
			},
			1500: {
				items: 4,
				margin: 70
			}
		}
	});
	
	$(".review-slider").owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: false,
		margin: 30,
		autoplayHoverPause: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
	});
	
});