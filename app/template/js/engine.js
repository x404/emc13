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

});


$(function (){
	// прячем кнопку #back-top
	// при клике на ссылку плавно поднимаемся вверх
	$("#back-top").click(function (){
		$("body,html").animate({
			scrollTop:0
		}, 800);
		return false;
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



// sticky header
var fh = document.querySelector('.fixed-header')
	// headerh = document.querySelector('.header').offsetHeight,
	// fnavbar = document.querySelector('.fixed-navbar');

window.onscroll = function(){
	if (window.pageYOffset  > 1100 ) {
		fh.classList.add('sticky');

	} else {
		if (window.pageYOffset  < 1300) {
			fh.classList.remove('sticky');

		}
	}

	if (window.pageYOffset > 850 ) {
		try{
			fnavbar.classList.add('sticky');
		} catch(e){};
	} else {
		try{
			fnavbar.classList.remove('sticky');
		} catch(e){};
	}

	// var y = window.scrollY;
	// if (y > 0){
	// 	try{
	// 		document.querySelector('.mobilepagedown').classList.add('hide')			
	// 	} catch(e){}
	// } else{
	// 	try{
	// 		document.querySelector('.mobilepagedown').classList.remove('hide')
	// 	} catch(e){}
	// }

};
