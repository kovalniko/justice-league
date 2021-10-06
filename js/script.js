$(document).ready(function () {
	$('._icon-search').click(function (event) {
		$('.header__search-form').addClass('header__search-form_active');
		$('.header__search-input').addClass('header__search-input_active');
		$('.header__user-panel').addClass('header__user-panel_hide');
		$('.header__search-input').focus();
	});
	$('.header__search-input').focusout(function (event) {
		$('.header__search-form').removeClass('header__search-form_active');
		$('.header__user-panel').removeClass('header__user-panel_hide');
	});
});