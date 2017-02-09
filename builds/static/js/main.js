jQuery(document).ready(function($) {
	$('.ie8 .clients-list__item:nth-child(5)').css('margin-left', '205px');
});

$(window).scroll(function(event) {
	var scrollTop = $(document).scrollTop();
	if (scrollTop > 10) {
		$('#header').addClass('fixed');
	} else {
		$('#header').removeClass('fixed');
	}
});
jQuery(document).ready(function($) {
	$('.ie8 .header-menu__item:nth-child(3)').css('margin-right', '160px');
	$('.ie8 .header-menu__item:nth-child(4)').css('margin-left', '160px');

	$('#mobile-menu').click(function(event) {
		$(this).next().slideToggle(400).toggleClass('active');
	});
});

jQuery(document).ready(function($) {
	$('.form__radio-group').find('.radio').each(function() {
		$(this).click(function() {
			var valueRadio = $(this).html();
			$(this).parent().find('.radio').removeClass('active');
			$(this).addClass('active');
			$(this).parent().find('input').val(valueRadio);
		})
	})

	$('.select').click(function() {
	/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find('.select__drop');
		if (dropBlock.is(':hidden')) {
			dropBlock.slideDown();
			$(this).addClass('active');
			$('.select__drop').find('li').click(function() {
				var selectResult = $(this).html();
				$(this).parent().parent().find('input').val(selectResult);
				$(this).parent().parent().find('span').removeClass('active').html(selectResult);
				dropBlock.slideUp();
			});
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}
		return false;
	});
})

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
