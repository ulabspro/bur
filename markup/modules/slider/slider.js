jQuery(document).ready(function($) {
	$('.slider').slick({
		accessibility: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		infinite: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: 0,
		pauseOnHover: false,
		prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"></span>',
		nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"></span>'
	});
});
