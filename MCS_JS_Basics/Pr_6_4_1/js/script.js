let form = document.forms[0];
let insert = document.querySelector('.total');

form.onsubmit = function(e) {
	e.preventDefault();
	let city = form.elements.city.value;
	let APIKey = 'e57a90d9738cdfe74372c799a11df97a';
	let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
	let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

if(xhr.status !=200) {
    console.log(xhr.status + ' '+ xhr.statusText);
} else {
    let DATA = JSON.parse(xhr.responseText);
    var DATAforSubmit = DATA.main.temp;
}
insert.innerHTML = DATAforSubmit - 273;
}


