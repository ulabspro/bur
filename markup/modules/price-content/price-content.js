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
