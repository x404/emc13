$(document).ready(function(){

	$('#services-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><-</button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button">-></button>',
		slidesToShow: 6,
		arrows: true,
		slidesToScroll: 1
	});

	$('#clients-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><-</button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button">-></button>',
		slidesToShow: 6,
		arrows: true,
		slidesToScroll: 1
	});

	$('#reviews-carousel').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		slidesToScroll: 1
	});

	$('#news-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><-</button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button">-></button>',
		slidesToShow: 4,
		arrows: true,
		slidesToScroll: 1
	});

	// mobile-menu
	$('#navbar').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				$('body').addClass('o-menu');

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});	
});


$(function(){
	$('.policy input').click(function(){
		var $this = $(this),
			$submit = $this.closest('.form-policy');

		if ($this.is(':checked')){
			$submit.find('.input, .form-control, .submit, .btn-submit, textarea, input[type=radio], button').removeAttr('disabled');
		} else {
			$submit.addClass('disabled');
			$submit.find('.input, .form-control, .submit, .btn-submit, textarea, input[type=radio], button').attr('disabled', true);
		}
	})
});
