console.log('You are at '+window.location);

let mytext = (element, text) => {
	element.innerHTML = text;
}

mytext(document.body, 'привет');