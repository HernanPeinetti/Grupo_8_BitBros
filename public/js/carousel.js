(function ($) {

	"use strict";

	const fullHeight = () => {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(() => {
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	const carousel = () => {
		$('.featured-carousel').owlCarousel({
			loop: false,
			autoplay: false,
			margin: 25,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					items: 1
				},
				280: {
					items: 2
				},
				600: {
					items: 3
				},
				1000: {
					items: 4
				},
				1280: {
					items: 5
				},
				1920: {
					items: 6
				}
			},


		});

		$('.owl-2').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 20,
			smartSpeed: 1000,
			autoplay: true,
			nav: true,
			dots: false,
			pauseOnHover: false,
			responsive: {
				600: {
					margin: 20,
					nav: true,
					items: 2
				},
				1000: {
					margin: 20,
					stagePadding: 0,
					nav: true,
					items: 3
				}
			}
		});
	};
	carousel();


})(jQuery);