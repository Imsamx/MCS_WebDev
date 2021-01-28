let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

const scales = document.querySelectorAll('.scale');

for(let i = 0; i<scales.length; i++) {
	scales[i].style.width = crypto[i].price+'px';
}

const names = document.querySelectorAll('.name');

for(let j = 0; j<names.length; j++) {
	names[j].innerHTML = crypto[j].name;
}

const prices = document.querySelectorAll('.price');

for(let k = 0; k<prices.length; k++) {
	prices[k].innerHTML = crypto[k].price;
}

let color = ['red', 'blue', 'green'];

for(let l = 0; l<color.length; l++) {
	scales[l].style.backgroundColor = color[l];
}

