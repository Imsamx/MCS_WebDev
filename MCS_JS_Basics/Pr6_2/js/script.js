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
}

const Example = new Person(name);
Example.hasCat()
Example.hasRest()
Example.hasMoney()




