var thankcallback = '<div class="thank text-center"><p>Форма отправлена!</p><p>В ближайщее время с вами свяжутся наши менеджеры для уточнения всех деталей</p></div>';
var thankfaq = '<div class="thank text-center"><p>Ваш вопрос отправлен</p></div>';
var thankreview = '<div class="thank text-center"><p>Ваш отзыв отправлен</p></div>';
var errorTxt = 'Форма не отправлена. Попробуйте позже.';


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
	$('#actions-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><-</button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button">-></button>',
		slidesToShow: 4,
		arrows: true,
		slidesToScroll: 1
	});


	$('#carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><-</button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button">-></button>',
		slidesToShow: 8,
		arrows: true,
		slidesToScroll: 1
	});

	$('#carousel2').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><-</button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button">-></button>',
		slidesToShow: 6,
		arrows: true,
		slidesToScroll: 1
	});


	// mask
	$('input.tel').inputmask({
		mask: '+7(999)999-99-99',
		showMaskOnHover : false
	});
	// #mask

	// validate
	$.validator.addMethod("validphone", function(value){
		if (Inputmask.isValid(value, { mask: '+7(999)999-99-99'})) return true
		else return false;
	},"");
		
	// clear forms
	$('.form').find('.form-control').val('');


	$('#callback-form').validate({
		rules: {
			name:{
				required : true
			},
			tel: {
				validphone:true
			}
		},
		submitHandler:function(form) {
			let strSubmit= $(form).serialize(),
				url = $(form).attr('action');
			sendform(url, strSubmit, form);
		}
	});	



	$('#feedback-form').validate({
		rules: {
			name:{
				required : true
			},
			tel: {
				validphone:true
			}
		},
		submitHandler:function(form) {
			let strSubmit= $(form).serialize(),
				url = $(form).attr('action');
			sendform(url, strSubmit, form);
		}
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


var timer,
	sec = 3;


function showTime(sendform){
	sec = sec-1;
	if (sec <=0) {
		stopClock();

		modal = $('#' + sendform).closest('.modal');
		modal.modal('hide');
		setTimeout(function(){
			modal.find('.thank').remove();
			modal.find('.form-control, textarea').val('');
			modal.find('fieldset').show();
		}, 1000)


		switch (sendform){
			// case 'qorder-form':
			// 	$('.qorder__box .thank').fadeOut('normal',function(){
			// 		$('.qorder__box .thank').remove();
			// 		$('.qorder__box .form-control, .qorder__box textarea').val('');
			// 	});
			// 	break;
			// case 'general-form':
			// 	$('#callback .thank').fadeOut('normal',function(){
			// 		$('#callback .thank').remove();
			// 		$('#callback .form-control, #callback textarea').val('');
			// 		$('#callback fieldset').show();
			// 	});
			// 	break;
			// case 'cart-form':
			// 	$('.cart .thank').fadeOut('normal',function(){
			// 		$('.cart .thank').remove();
			// 		// $('.cart .form-control, .cart textarea').val('');
			// 		// $('.cart__form fieldset').show();
			// 	});
			// 	break;	
			default:

				break;
		}
	}
}

function stopClock(){
	window.clearInterval(timer);
	timer = null;
	sec = 3;
}

function startClock(sendform){
	if (!timer)
		timer = window.setInterval("showTime('" + sendform.attr('id') + "')",1000);
}




function sendform(url, strSubmit, form){
	$(form).find('fieldset').hide();
	$(form).append('<div class="sending">Идет отправка ...</div>');
	
	fetch(url, {
		method: 'post',
		headers: {
	        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		body: strSubmit 
	})
	.then(function(response){ 
		if (response.status == '200'){
			document.querySelector('.sending').remove();
			$(form).append(thankcallback);
			// startClock($(form));
		} else{
			alert(errorTxt);
			$(form).find('fieldset').show();
			$('.sending').remove();	
		}
	})
	.catch (function (error) {
	    console.log('Request failed', error);
	});
}