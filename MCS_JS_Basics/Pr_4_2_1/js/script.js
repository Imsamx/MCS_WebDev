console.log('You are at '+window.location);
let answer = prompt("Введите число");
answer = parseInt(answer);

if(answer>=0) {
	console.log(answer);
}else {
	console.log(-answer);
}
