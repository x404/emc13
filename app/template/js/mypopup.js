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
			
		document.querySelector('#callback .close').addEventListener('click', function(){
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