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




window.onload = function(){
	[].forEach.call(document.querySelectorAll('[data-toggle="mymodal"]'),function(el,i){
		el.addEventListener('click', function(e){
			e.preventDefault();
			let target = el.dataset.target;
				modal = new Popup(target);
				modal.open();
				this.classList.add('active')
			})
	})		
}

// popup on homepage
class Popup{
	constructor(name){
		this.name = name;
	}
	open(){
		// create overlay
		const newOverlay = document.createElement('div');
		newOverlay.className ='transparent-overlay';
		document.querySelector('body').appendChild(newOverlay);
		// show overlay
		document.querySelector('.transparent-overlay').addEventListener('click', function(){
			modal.close();
		});

		// GENERAL EVENT - ONKEYDOWN
		document.onkeydown = function(evt) {
		    evt = evt || window.event;
		    let isEscape = false;
		    if ("key" in evt) {
		        isEscape = (evt.key == "Escape" || evt.key == "Esc");
		    } else {
		        isEscape = (evt.keyCode == 27);
		    }
		    if (isEscape) {
		    	modal.close();
		    }
		};
		// console.log(this.name);
		
		// show popup
		document.querySelector(this.name).classList.add('show');
	}
	close(){
		document.querySelector('.transparent-overlay').remove();
		// hide popup
		document.querySelector(this.name).classList.remove('show');

		// remove active class
		// document.querySelector('.cats .active').classList.remove('active')
	}
}