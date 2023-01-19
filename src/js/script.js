$(document).ready(function () {
	$('.slider-block__body').slick({
		speed: 1200,
		slidesToShow: 1,
		// adaptiveHeight: true,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/prev.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/slider/next.svg"></button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					dots: true,
					arrow: false
				}
			},
		]
	});
});