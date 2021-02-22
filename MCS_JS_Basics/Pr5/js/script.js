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
const names = document.querySelectorAll('.name');
const prices = document.querySelectorAll('.price');

for(let cr = 0; cr<crypto.length; cr++) {
	scales[cr].style.width = crypto[cr].price/100 +'%';
  names[cr].innerHTML = crypto[cr].name;
  prices[cr].innerHTML = crypto[cr].price;
}

let color = ['red', 'blue', 'green'];

for(let i = 0; i<color.length; i++) {
	scales[i].style.backgroundColor = color[i];
}

