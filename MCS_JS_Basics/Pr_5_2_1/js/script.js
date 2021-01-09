function modulePow(num) {
	var exponent = Math.floor(Math.random()*(10-1)+1);
	return Math.abs(Math.pow(num, exponent));
}
console.log(modulePow(5));
