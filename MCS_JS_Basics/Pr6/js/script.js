class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		return this.happiness++;
	}
	hasRest() {
		return this.happiness++;
	}
	hasMoney() {
		return this.happiness++;
	}
	isSunny() {
		let city = 'Moscow';
	    let APIKey = 'e57a90d9738cdfe74372c799a11df97a';
	    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
	    let xhr = new XMLHttpRequest();

        xhr.open('GET', url, false);

        xhr.send();

        if(xhr.status !=200) {
          console.log(xhr.status + ' '+ xhr.statusText);
        } else {
        let DATA = JSON.parse(xhr.responseText);
        var DATAforSubmit = DATA.main.temp - 273;
	}
	if(DATAforSubmit <=15) {
		return this.happiness;
	} else {
	return this.happiness++;
    }
  }
}

let form = document.forms[0];

form.onsubmit = function(e) {
	e.preventDefault();
	var name = form.elements.name.value;
	var cat = form.elements.cat.value;
	var rest = form.elements.rest.value;
	var money = form.elements.money.value;
	const Example = new Person(name);
	if (cat == "yes") {
		Example.hasCat()
	}
	if (rest == "yes") {
		Example.hasRest()
	}
	if (money == "yes") {
		Example.hasMoney()
	}
	    Example.isSunny()
console.log(Example.happiness);

	const personName = document.querySelector('.personName');
    const icon = document.querySelector('.icon');
    personName.innerHTML = name+":";
    if (Example.happiness > 3) {
    	icon.innerHTML = "😄";
    }
    if (Example.happiness > 1) {
    	icon.innerHTML = "😐";
    }
    else {
    	icon.innerHTML = "☹️";
    }
}



