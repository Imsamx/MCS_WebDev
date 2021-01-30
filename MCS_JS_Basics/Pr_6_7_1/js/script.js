class Tiger {
	constructor(name) {
		this.name = name;
	}
	feedCat() {
		return 'Purrrrrr';
	}
}

class angryTiger extends Tiger {
	throwDart() {
		return 'ZzZzzZzZz';
	}
}

const Animal = new Tiger('Тигруля')
console.log(Animal.feedCat())

const ShereKhan = new angryTiger('Шерхан')
console.log(ShereKhan.throwDart())
