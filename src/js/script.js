// SLIDER
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
	// ТАБИ
	$('ul.catalog-block__tabs').on('click', 'li:not(.catalog-block__tab--active)', function () {
		$(this)
			.addClass('catalog-block__tab--active').siblings().removeClass('catalog-block__tab--active')
			.closest('div.catalog-block__inner').find('div.catalog-block__content').removeClass('catalog-block__content--active').eq($(this).index()).addClass('catalog-block__content--active');
	});

	// ПЕРЕХІД Детально
	// $('.item-catalog-block__link').each(function (i) {
	// 	$(this).on('click', function (e) {
	// 		e.preventDefault();
	// 		$('.item-catalog-block__content').eq(i).toggleClass('item-catalog-block__content--active');
	// 		$('.item-catalog-block__list').eq(i).toggleClass('item-catalog-block__list--active');
	// 	})
	// })
	// $('.item-catalog-block__back').each(function (i) {
	// 	$(this).on('click', function (e) {
	// 		e.preventDefault();
	// 		$('.item-catalog-block__content').eq(i).toggleClass('item-catalog-block__content--active');
	// 		$('.item-catalog-block__list').eq(i).toggleClass('item-catalog-block__list--active');
	// 	})
	// })

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.item-catalog-block__content').eq(i).toggleClass('item-catalog-block__content--active');
				$('.item-catalog-block__list').eq(i).toggleClass('item-catalog-block__list--active');
			});
		});
	};
	toggleSlide('.item-catalog-block__link');
	toggleSlide('.item-catalog-block__back');

	//MODAL
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn("slow");
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});
	$('.item-catalog-block__btn').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__subtitle').text($('.item-catalog-block__title').eq(i).text());
			$('.overlay, #order').fadeIn("slow");
		})
	})
});