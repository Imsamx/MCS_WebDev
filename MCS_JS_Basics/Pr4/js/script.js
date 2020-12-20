const button = document.querySelector('.request');
const burger = document.querySelector('.openMenu');
const cross1 = document.querySelector('.closePopup');
const cross2 = document.querySelector('.closeMenu');
const par1 = document.querySelector('.popup');
const par2 = document.querySelector('.menu');

button.addEventListener('click', ()=>{
		par1.style.display = 'flex';
	});

cross1.addEventListener('click', ()=>{
		par1.style.display = 'none';
	});

burger.addEventListener('click', ()=>{
		par2.style.left = '0';
	});

cross2.addEventListener('click', ()=>{
		par2.style.left = '-50vw';
	});