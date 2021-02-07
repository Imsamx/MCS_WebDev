class Tiger {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	feedCat() {
		this.happiness+1;
	}
}

const Animal = new Tiger('Тигруля')
console.log(Animal.feedCat())

